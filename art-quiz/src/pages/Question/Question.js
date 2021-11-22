/* eslint-disable func-names */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-await-in-loop */
/* eslint-disable no-restricted-syntax */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import './Question.scss';
// import QuestionElement from './Question.html';
import { questions, answers } from '../Categories';
import Utils from '@/utils/Utils';
import AudioPlayer from '@/utils/audio';

export class Question {
  constructor(_parent) {
    this.parent = _parent;
    this.questions = questions;
    this.answers = answers;

    this.questionsIndex = null;

    this.curCategoryQuestions = null;
    this.currAnswersElem = null;
    this.currQuestion = null;
    this.currQuestionElem = null;
    this.currPopupContainer = null;

    this.currRequest = null;
    this.currOptions = null;
    this.interval = null;
  }

  async render() {
    this.parent.innerHTML = '';
    this.currOptions = await Utils.getCurrOptions();
    this.currRequest = Utils.parseRequestURL();

    await this.checkCategoryProgress(this.currRequest);
    if (this.currOptions.isTime) {
      this.startCountdown(+this.currOptions.time);
    }
    return 'Question rendered';
  }

  async after_render() {
    this.parent.classList.add('show');
    await Utils.sleep(1000);
  }

  async checkCategoryProgress(request) {
    const questionsBy = request.category === 'artists' ? 'questionsByAuthor' : 'questionsByName';
    this.curCategoryQuestions = this.questions[questionsBy][+request.categoryIndex];

    this.questionsIndex = request.questionIndex;
    this.currQuestion = this.curCategoryQuestions[+this.currRequest.questionIndex];

    if (request.category === 'artists' && +this.questionsIndex < 10) {
      await this.renderArtistsQuestion(this.parent, this.questionsIndex);
    } else if (request.category === 'images' && +this.questionsIndex < 10) {
      await this.renderImagesQuestion();
    } else if (+this.questionsIndex === 10) {
      this.currPopupContainer = Utils.createElem({ elem: 'div', classes: ['modal'] });
      this.parent.append(this.currPopupContainer);

      await this.constructScorePopup();
      await Utils.sleep(500);
      await this.showPopup(this.currPopupContainer);
      if (this.currOptions.isSound) {
        AudioPlayer.playRound(+this.currOptions.volume);
      }
      return;
    }
    this.currPopupContainer = Utils.createElem({ elem: 'div', classes: ['modal'] });
    this.parent.append(this.currPopupContainer);
  }

  async renderArtistsQuestion() {
    const imgElem = Utils.createElem({ elem: 'div', classes: ['question-image'] });
    const drawnAnswers = await this.generateRandomAnswers(
      this.currQuestion.author,
      'uniqAnswersByAuthor',
    );
    this.currQuestionElem = Utils.createElem({ elem: 'div', classes: ['question'] });
    this.currQuestionElem.innerHTML = `
      <div class="question-bar">
        <a href="/#/category/${
  this.currRequest.category
}" class="button question-bar-button">category</a>
        <div class="question-bar-timer q-timer">${
  this.currOptions.isTime ? `${this.currOptions.time} s` : ''
}</div>
      </div>
      <h3 class="question-wording">Whos the author off this image?</h3>
    `;
    this.currQuestionElem.append(await this.preloadImage(this.currQuestion.imageNum, imgElem));
    this.currAnswersElem = Utils.createElem({ elem: 'div', classes: ['question-answers-artists'] });
    for (const answer of drawnAnswers) {
      const answerElem = Utils.createElem({
        elem: 'div',
        content: answer,
        classes: ['question-answer-artists'],
      });
      this.currAnswersElem.append(answerElem);
    }
    this.currQuestionElem.append(this.currAnswersElem);
    this.addListeners(this.currAnswersElem);
    this.parent.append(this.currQuestionElem);
  }

  async renderImagesQuestion() {
    const drawnAnswers = await this.generateRandomAnswers(
      this.currQuestion.imageNum,
      'uniqAnswersByName',
    );
    this.currQuestionElem = Utils.createElem({ elem: 'div', classes: ['question'] });
    this.currQuestionElem.innerHTML = `
       <div class="question-bar">
        <a href="/#/category/${
  this.currRequest.category
}" class="button question-bar-button">category</a>
        <div class="question-bar-timer q-timer">${
  this.currOptions.isTime ? `${this.currOptions.time} s` : ''
}</div>
      </div>
      <h3 class="question-wording">What picture did ${this.currQuestion.author} paint?</h3>
    `;
    this.currAnswersElem = Utils.createElem({ elem: 'div', classes: ['question-answers-images'] });

    for (const answer of drawnAnswers) {
      const answerElem = Utils.createElem({
        elem: 'div',
        content: answer,
        classes: ['question-answer-images'],
      });

      this.currAnswersElem.append(await this.preloadImage(answer, answerElem));
    }
    this.currQuestionElem.append(this.currAnswersElem);
    this.addListeners(this.currAnswersElem);
    await Utils.sleep(500);
    this.parent.append(this.currQuestionElem);
  }

  async preloadImage(imageIndex, imgElem) {
    const img = new Image();
    img.src = `https://raw.githubusercontent.com/ninox14/image-data/master/full/${imageIndex}full.jpg`;
    const addStyle = async function (imgS) {
      // eslint-disable-next-line no-param-reassign
      imgElem.style.backgroundImage = `url(${imgS.src})`;
    };

    img.onload = await addStyle(img);
    return imgElem;
  }

  async listener(e) {
    const answer = this.checkAnswer(e.target.textContent);
    await this.constructAnswerPopup(answer);

    if (this.currOptions.isSound) {
      AudioPlayer.playAnswer(answer, +this.currOptions.volume);
    }
    await this.showPopup(this.currPopupContainer);
    await this.saveProgress(answer);
  }

  async generateRandomAnswers(correctAnswer, answerType) {
    const res = [correctAnswer];
    const shuffledAnswers = Utils.shuffle(this.answers[answerType]);
    for (let i = 0; i < 3; i += 1) {
      if (shuffledAnswers[i].toLowerCase() === correctAnswer.toLowerCase()) {
        res.push(shuffledAnswers[i + 10]);
      } else {
        res.push(shuffledAnswers[i]);
      }
    }
    return Utils.shuffle(res);
  }

  async constructAnswerPopup(answer) {
    clearInterval(this.interval);

    const popUpElem = Utils.createElem({ elem: 'div', classes: ['modal-content'] });
    const request = this.currRequest;

    const nextPageLink = `#/${request.resource}/${request.category}/${request.categoryIndex}/${
      +this.questionsIndex + 1
    }`;

    popUpElem.innerHTML = `
    <span class="material-icons modal-${answer ? 'correct' : 'wrong'}">
      ${answer ? 'check' : 'clear'}
    </span>
    `;
    const imgDiv = Utils.createElem({ elem: 'div', classes: ['modal-image'] });
    popUpElem.append(await this.preloadImage(this.currQuestion.imageNum, imgDiv));
    popUpElem.innerHTML += `
      <p class="modal-caption">${this.currQuestion.name}</p>
      <p class="modal-caption">${this.currQuestion.author}</p>
      <p class="modal-caption">${this.currQuestion.year}</p>
      <a href="${nextPageLink}" class="modal-btn button" onclick="this.parentElement.parentElement.classList.toggle('visible')">continue</a>
    `;

    this.currPopupContainer.append(popUpElem);
  }

  async constructScorePopup() {
    const popContentElem = Utils.createElem({ elem: 'div', classes: ['modal-content'] });
    const nextLink = +this.currRequest.categoryIndex + 1 < 12
      ? `/#/${this.currRequest.resource}/${this.currRequest.category}`
      : '/#/category';
    const countedAnswers = await this.countAnswers();
    popContentElem.innerHTML = `
    <p class="modal-caption nice">Nice!</p>
    <div class="modal-star-wrap">
      <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/></svg>
      <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/></svg>
      <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/></svg>
    </div>
    <p class="modal-caption question-score">${countedAnswers} / 10</p>

    <div class="modal-btn-wrap">
      <a href="/#/" class="modal-btn button"  onclick="this.parentElement.parentElement.classList.toggle('visible')">home</a>
      <a href="${nextLink}" class="modal-btn button" onclick="this.parentElement.parentElement.classList.toggle('visible')">next quiz</a>
    </div>
    `;
    this.currPopupContainer.append(popContentElem);
  }

  addListeners(answersElem) {
    const { children } = answersElem;
    for (let i = 0; i < children.length; i += 1) {
      children[i].addEventListener('click', this.listener.bind(this));
    }
  }

  checkAnswer(answer) {
    const type = this.currRequest.category === 'images' ? 'imageNum' : 'author';
    return answer.toLowerCase().trim() === this.currQuestion[type].toLowerCase().trim();
  }

  async showPopup(popup) {
    popup.classList.add('visible');
  }

  async saveProgress(answer) {
    const lsObject = await this.retrieveLocalStorage();
    lsObject.currCatAnswers[+this.currRequest.questionIndex] = answer;
    lsObject.answArr[+this.currRequest.categoryIndex] = lsObject.currCatAnswers;
    window.localStorage.setItem(
      `${this.currRequest.category}Answ`,
      JSON.stringify(lsObject.answArr),
    );
  }

  async countAnswers() {
    const obj = await this.retrieveLocalStorage();

    return obj.currCatAnswers.reduce((a, b) => a + b);
  }

  startCountdown(seconds) {
    this.interval = clearInterval(this.interval);
    let counter = seconds;
    const timerElem = this.currQuestionElem.querySelector('.q-timer');
    const callback = async function () {
      timerElem.innerHTML = `${counter} s`;
      counter -= 1;
      if (counter < 0) {
        this.interval = clearInterval(this.interval);
        this.isTimerInProgress = false;
        const request = Utils.parseRequestURL();
        const isInQuestion = request.questionIndex && !this.currPopupContainer.classList.contains('visible');

        if (isInQuestion) {
          await this.constructAnswerPopup(false);
          await this.showPopup(this.currPopupContainer);
          await this.saveProgress(false);
          AudioPlayer.playAnswer(false, +this.currOptions.volume);
        }
      }
    };

    this.interval = setInterval(callback.bind(this), 1000);
  }

  async retrieveLocalStorage() {
    const answArr = window.localStorage[`${this.currRequest.category}Answ`]
      ? JSON.parse(window.localStorage[`${this.currRequest.category}Answ`])
      : Array(12).fill(null);
    const currCatAnswers = answArr[+this.currRequest.categoryIndex]
      ? answArr[+this.currRequest.categoryIndex]
      : Array(10).fill(null);
    return {
      answArr,
      currCatAnswers,
    };
  }
}
