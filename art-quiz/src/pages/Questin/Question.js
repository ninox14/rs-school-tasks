import './Question.scss';
import QuestionElement from './Question.html';
import { questions, answers } from '../Categories';
import Utils from '@/utils/Utils';

export class Question {
  constructor(_parent) {
    this.parent = _parent;
    this.questions = questions;
    this.answers = answers;

    this.categoryIndex = null;
    // this.categoryType = null;
    this.questionsIndex = null;

    this.curCategoryQuestions = null;
    this.currAnswersElem = null;
    this.currQuestion = null;
    this.currQuestionElem = null;
    this.currPopupContainer = null;


    this.currRequest = null;


  }
  async render() {
    this.parent.innerHTML = '';
    // this.parent.innerHTML = QuestionElement;
    this.currRequest = Utils.parseRequestURL();
    await this.checkCategoryProgress(this.currRequest);

    return 'Question rendered';
  }

  async after_render() {}

  async checkCategoryProgress(request) {
    const questionsBy = request.category == 'artists' ? 'questionsByAuthor' : 'questionsByName';
    // const lsItem = window.localStorage[request.category + request.categoryIndex];

    this.categoryIndex = request.categoryIndex;
    this.curCategoryQuestions = this.questions[questionsBy][parseInt(request.categoryIndex)];
    // this.questionsIndex = lsItem ? lsItem.index : 0;
    this.questionsIndex = request.questinIndex;

    // let link = `${location.hash.toLowerCase()}`;
    // let newLink = `#/${request.resource}/${request.category}/${request.categoryIndex}/${this.questionsIndex}`;

    // if (!lsItem && link != newLink) {
    //   history.pushState({}, '', newLink);
    // }
    if (request.category == 'artists' && +this.questionsIndex < 10) {
      await this.renderArtistsQuestion(this.parent, this.questionsIndex);
    } else if (+this.questionsIndex == 10) {
      this.currPopupContainer = Utils.createElem({ elem: 'div', classes: ['modal'] });
      this.parent.append(this.currPopupContainer);

      await this.constructScorePopup();
      await Utils.sleep(500);
      await this.showPopup(this.currPopupContainer);
      return;
    }
    this.currPopupContainer = Utils.createElem({ elem: 'div', classes: ['modal'] });
    this.parent.append(this.currPopupContainer);
  }

  async renderArtistsQuestion(parent, questionIndex = 0) {
    this.currQuestion = this.curCategoryQuestions[questionIndex];
    const imgElem = Utils.createElem({ elem: 'div', classes: ['question-image'] });
    const drawnAnswers = await this.generateRandomAnswers(
      this.currQuestion.author,
      'uniqAnswersByAuthor'
    );
    this.currQuestionElem = Utils.createElem({ elem: 'div', classes: ['question'] });
    this.currQuestionElem.innerHTML = `
      <h3 class="question-wording">Whos the author off this image?</h3>
    `;
    this.currQuestionElem.append(await this.preloadImage(this.currQuestion.imageNum, imgElem));
    this.currAnswersElem = Utils.createElem({ elem: 'div', classes: ['question-answers-artists'] });
    for (let answer of drawnAnswers) {
      const answerElem = Utils.createElem({
        elem: 'div',
        content: answer,
        classes: ['question-answer-artists'],
      });
      this.currAnswersElem.append(answerElem);
    }
    this.currQuestionElem.append(this.currAnswersElem);
    this.addListeners(this.currAnswersElem);
    parent.append(this.currQuestionElem);
  }

  async preloadImage(imageIndex, imgElem) {
    const img = new Image();
    img.src = `https://raw.githubusercontent.com/ninox14/image-data/master/full/${imageIndex}full.jpg`;
    const addStyle = async function (img) {
      imgElem.style.backgroundImage = `url(${img.src})`;
    }

    img.onload = await addStyle(img);
    return imgElem;
  }
  async listener(e) {
    // TO DO
    // this.checkAnswer(e.target.textContent);
    const answer = this.checkAnswer(e.target.textContent);
    await this.constructAnswerPopup(answer);
    // if (parseInt(this.currRequest.questinIndex) == 9){
    //   await this.constructScorePopup();
    // } else {
    //   await this.constructAnswerPopup(answer);
    // }
    await this.showPopup(this.currPopupContainer);
    await this.saveProgress(answer);
    // console.log(this.currQuestion);
  }

  async generateRandomAnswers(correctAnswer, answerType) {
    let res = [correctAnswer];
    const shuffledAnswers = Utils.shuffle(this.answers[answerType]);
    for (let i = 0; i < 3; i++) {
      if (shuffledAnswers[i].toLowerCase() == correctAnswer.toLowerCase()) {
        res.push(shuffledAnswers[i + 10]);
      } else {
        res.push(shuffledAnswers[i]);
      }
    }
    return Utils.shuffle(res);
  }

  async constructAnswerPopup(answer) {
    const popUpElem = Utils.createElem({ elem: 'div', classes: ['modal-content'] });
    const request = this.currRequest;
    // TO DO
    const nextPageLink =  `#/${request.resource}/${request.category}/${request.categoryIndex}/${
          parseInt(this.questionsIndex) + 1
        }`

      // this.questionsIndex < this.curCategoryQuestions.length - 1
      // ? `#/${request.resource}/${request.category}/${request.categoryIndex}/${
      //     parseInt(this.questionsIndex) + 1
      //   }`
      // : `#/${request.resource}/${request.category}`;
      popUpElem.innerHTML = `
      <span class="material-icons modal-${answer ? 'correct' : 'wrong'}">
        ${answer ? 'check' : 'clear'}
      </span>
    `;
    const imgDiv = Utils.createElem({ elem: 'div', classes: ['modal-image'] })
    popUpElem.append(await this.preloadImage(this.currQuestion.imageNum, imgDiv))
    popUpElem.innerHTML += `
      <p class="modal-caption">${this.currQuestion.name}</p>
      <p class="modal-caption">${this.currQuestion.author}</p>
      <p class="modal-caption">${this.currQuestion.year}</p>
      <a href="${nextPageLink}" class="modal-btn button">continue</a>
    `;
    // await this.preloadImage(this.currQuestion.imageNum, popUpElem.querySelector('.modal-image'));

    this.currPopupContainer.append(popUpElem);
    // return popUpElem
  }

  async constructScorePopup () {
    const popContentElem = Utils.createElem({ elem: 'div', classes: ['modal-content'] });
    const nextLink = parseInt(this.currRequest.categoryIndex) + 1 < 12
    ? `#/${this.currRequest.category}/${parseInt(this.currRequest.categoryIndex) + 1}/0`
    : `#/category` ;
    const countedAnswers = await this.countAnswers();
    popContentElem.innerHTML = `
    <p class="modal-caption nice">Nice!</p>
    <div class="modal-star-wrap">
      <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/></svg>
      <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/></svg>
      <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/></svg>
    </div>
    <p class="modal-caption score">${countedAnswers} / 10</p>

    <div class="modal-btn-wrap">
      <a href="#/" class="modal-btn button">home</a>
      <a href="${nextLink}" class="modal-btn button">next quiz</a>
    </div>
    `;
    this.currPopupContainer.append(popContentElem);
  }

  addListeners(answersElem) {
    console.log(answersElem);
    const children = answersElem.children;
    for (let i = 0; i < children.length; i++) {
      children[i].addEventListener('click', this.listener.bind(this));
    }
  }
  checkAnswer(answer) {
    console.log(this.currQuestion.author.toLowerCase().trim());
    console.log(answer.toLowerCase().trim());
    return answer.toLowerCase().trim() == this.currQuestion.author.toLowerCase().trim();
  }

  async showPopup (popup) {
    popup.classList.add('visible')
  }

  async saveProgress (answer) {

    const lsObject = await this.retrieveLocalStorage();

    lsObject.currCatAnswers[parseInt(this.currRequest.questinIndex)] = answer;
    console.log(lsObject.currCatAnswers);
    // console.log(currCatAnsers[parseInt(this.currRequest.questinIndex)]);
    lsObject.answArr[parseInt(this.currRequest.categoryIndex)] = lsObject.currCatAnswers;
    window.localStorage.setItem(
      this.currRequest.category + 'Answ',
      JSON.stringify(lsObject.answArr)
    );
  }

  async countAnswers (localStorageName) {

    const obj = await this.retrieveLocalStorage();

    return obj.currCatAnswers.reduce((a, b) => a + b);

  }

  async retrieveLocalStorage () {
    const answArr = window.localStorage[this.currRequest.category + 'Answ']
      ? JSON.parse(window.localStorage[this.currRequest.category + 'Answ'])
      : Array(12).fill(null);
    const currCatAnswers = answArr[parseInt(this.currRequest.categoryIndex)]
      ? answArr[parseInt(this.currRequest.categoryIndex)]
      : Array(10).fill(null);
    return {
      answArr: answArr,
      currCatAnswers: currCatAnswers,
    }
  }

}
