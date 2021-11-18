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
const uniqAnswersByName = [...new Set(questionsByName.map((item) => item.name))];

const newQuestionsByAuthor = splitArr(questionsByAuthor, 12);
const newQuestionsByName = splitArr(questionsByName, 12);

const answers = {
  uniqAnswersByAuthor,
  uniqAnswersByName,
};

const questions = {
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

  }
  async render() {
    this.parent.innerHTML = '';
    const request = Utils.parseRequestURL();


    await this.renderCatElem(this.parent, request.category);

    return 'Categories rendered';
  }

  async after_render() {}

  async renderCatElem(parent, type) {
    const catElem = Utils.createElem({ elem: 'div', classes: ['category'] });
    const questionsBy = (type == 'artists') ? 'questionsByAuthor' : 'questionsByName';

    questions[questionsBy].forEach((_, i) => {
      const catItemElem = Utils.createElem({
        elem: 'a',
        classes: ['category-item'],
      });
      catItemElem.href = `#/category/${type}/${i}`;
      catItemElem.innerHTML = `
      <span class="category-item-type material-icons">
      ${type == 'artists' ? 'person' : 'image'}
      </span>
      <h5 class="category-item-number">${i + 1}</h5>
      `;
      catElem.append(catItemElem);
    });

    parent.append(catElem);
  }
}
