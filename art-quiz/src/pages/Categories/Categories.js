import './Categories.scss';
import CategoriesElement from './Categories.html';

import Utils from '@/utils/Utils';

import { images } from '@/data/images';

const splitArr = (arr, chunks) =>
  [...Array(chunks)].map((_, c) => arr.filter((n, index) => index % chunks === c));

const questionsByAuthor = [];
const questionsByName = [];

images.forEach((item, index) => {
  if (index % 2 === 0) {
    questionsByAuthor.push({
      ...item,
      type: 'author',
    });
  }

  if (index % 2 !== 0) {
    questionsByName.push({
      ...item,
      type: 'name',
    });
  }
});

const uniqAnswersByAuthor = [...new Set(questionsByAuthor.map((item) => item.author))];
const uniqAnswersByName = [...new Set(questionsByName.map((item) => item.imageNum))];

const newQuestionsByAuthor = splitArr(questionsByAuthor, 12);
const newQuestionsByName = splitArr(questionsByName, 12);

export const answers = {
  uniqAnswersByAuthor,
  uniqAnswersByName,
};

export const questions = {
  questionsByAuthor: newQuestionsByAuthor,
  questionsByName: newQuestionsByName,
};

const pageCategories = questions['questionsByAuthor'];

const categoriesToRender = pageCategories.map((pageCategory) => {
  return;
});

export class Categories {
  constructor(_parent) {
    this.parent = _parent;
    this.request = null;
  }
  async render() {
    this.parent.innerHTML = '';
    this.request = Utils.parseRequestURL();

    await this.renderCatElem(this.parent, this.request.category);

    return 'Categories rendered';
  }

  async after_render() {}

  async renderCatElem(parent, type) {
    const catElem = Utils.createElem({ elem: 'div', classes: ['category'] });
    const questionsBy = type == 'artists' ? 'questionsByAuthor' : 'questionsByName';
    const answArr = await this.retrieveAnswerArray();


    questions[questionsBy].forEach(async (_, i) => {
      const catItemElem = Utils.createElem({
        elem: 'a',
        classes: ['category-item'],
      });
      const answCount = await this.countAnswersInCategory(answArr[i]);
      const isPlayed = answArr[i] ? true : false;
      if (isPlayed) {
        catItemElem.classList.add('played');
      }
      if (answCount == 10) {
        catItemElem.classList.add('complete');
      }
      catItemElem.href = `#/category/${type}/${i}/0`;
      catItemElem.innerHTML = `
        <span class="category-item-type material-icons">
        ${type == 'artists' ? 'person' : 'image'}
        </span>
        <a href="#/" class="category-item-score">
          <span class="material-icons">
          ${isPlayed ? 'stars' : ''}
          </span>
        </a>
        <span class="category-item-complete">${answCount}</span>
        <h5 class="category-item-number">${i + 1}</h5>
      `;
      catElem.append(catItemElem);
    });

    parent.append(catElem);
  }

  async retrieveAnswerArray() {
    const answArr = window.localStorage[this.request.category + 'Answ']
      ? JSON.parse(window.localStorage[this.request.category + 'Answ'])
      : Array(12).fill(null);

    return answArr;
  }
  async countAnswersInCategory(categoryArray) {
    if (categoryArray) {
      const res = categoryArray.reduce((a, b) => a + b);
      return res ? res.toString() : '';
    }
    return '';
  }
}
