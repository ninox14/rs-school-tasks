/* eslint-disable func-names */
/* eslint-disable class-methods-use-this */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import './Score.scss';
// import ScoreElement from './Score.html';
import Utils from '@/utils/Utils';
import { questions } from '../Categories';

export class Score {
  constructor(_parent) {
    this.parent = _parent;
    this.questions = questions;
    this.request = null;
    this.currQuestionsArr = null;
    this.popupContainer = null;
  }

  async render() {
    this.request = Utils.parseRequestURL();
    this.popupContainer = Utils.createElem({ elem: 'div', classes: ['modal'] });
    const scoreElem = Utils.createElem({ elem: 'div', classes: ['score'] });
    const questionsBy = this.request.category === 'artists' ? 'questionsByAuthor' : 'questionsByName';
    this.currQuestionsArr = this.questions[questionsBy][+this.request.categoryIndex];

    this.parent.innerHTML = '';

    this.parent.append(await this.fillScoreElements(scoreElem));
    this.popupContainer.addEventListener('click', (e) => {
      if (e.target.classList.contains('visible')) {
        e.target.classList.remove('visible');
      }
    });
    this.parent.append(this.popupContainer);
  }

  async after_render() {
    this.parent.classList.add('show');
    await Utils.sleep(1000);
  }

  async fillScoreElements(scoreElem) {
    const answData = await this.getAnswerData();
    this.currQuestionsArr.forEach(async (obj, ind) => {
      const scoreItemElem = Utils.createElem({
        elem: 'div',
        content: ind.toString(),
        classes: ['score-item'],
      });
      if (answData[ind]) {
        scoreItemElem.addEventListener('click', this.listener.bind(this));
        scoreItemElem.classList.add('played');
      }
      scoreElem.append(await this.preloadImage(scoreItemElem, obj.imageNum));
    });
    return scoreElem;
  }

  async preloadImage(imgElem, index) {
    const img = new Image();
    img.src = `https://raw.githubusercontent.com/ninox14/image-data/master/full/${index}full.jpg`;
    const addStyle = async function (imgE) {
      // eslint-disable-next-line no-param-reassign
      imgElem.style.backgroundImage = `url(${imgE.src})`;
    };

    img.onload = await addStyle(img);
    return imgElem;
  }

  async listener(e) {
    this.fillPopupContainer(this.currQuestionsArr[+e.target.textContent])
      .then(() => this.showPopup());
  }

  async getAnswerData() {
    const data = window.localStorage[`${this.request.category}Answ`]
      ? JSON.parse(window.localStorage[`${this.request.category}Answ`])
      : Array(10).fill(null);
    return data[+this.request.categoryIndex];
  }

  showPopup() {
    this.popupContainer.classList.add('visible');
  }

  async fillPopupContainer(obj) {
    this.popupContainer.innerHTML = '';
    const popUpContentElem = Utils.createElem({ elem: 'div', classes: ['modal-content'] });
    const popUpImageElem = Utils.createElem({ elem: 'div', classes: ['modal-image'] });
    popUpContentElem.append(await this.preloadImage(popUpImageElem, obj.imageNum));
    popUpContentElem.innerHTML += `
      <p class="modal-caption">${obj.name}</p>
      <p class="modal-caption">${obj.author}</p>
      <p class="modal-caption">${obj.year}</p>
      <a class="modal-btn button" onclick="this.parentElement.parentElement.classList.toggle('visible')">close</a>
    `;

    this.popupContainer.append(popUpContentElem);
    return true;
  }
}
