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
    this.type = {
      artists: this.renderArtists,
      images: this.renderImages,
    };
  }
  async render() {
    this.parent.innerHTML = '';
    const request = Utils.parseRequestURL();

    await this.type[request.category](this.parent);

    // this.parent.innerHTML = CategoriesElement;
    return 'Categories rendered';
  }

  async after_render() {}

  async renderArtists(parent) {
    const catElem = Utils.createElem({ elem: 'div', classes: ['category'] });

    questions.questionsByAuthor.forEach((_, i) => {
      const catItemElem = Utils.createElem({
        elem: 'div',
        classes: ['category-item'],
      });

      catItemElem.innerHTML = `
      <span class="category-item-type material-icons">
      person
      </span>
      <h5 class="category-item-number">${i+1}</h5>
      `;
      catElem.append(catItemElem);
    });

    parent.append(catElem);
  }

  async renderImages(parent) {
    const catElem = Utils.createElem({ elem: 'div', classes: ['category'] });

    questions.questionsByName.forEach((_, i) => {
      const catItemElem = Utils.createElem({
        elem: 'div',
        classes: ['category-item'],
      });
      catItemElem.innerHTML = `
      <span class="category-item-type material-icons">
      image
      </span>
      <h5 class="category-item-number">${i + 1}</h5>
      `;
      catElem.append(catItemElem);
    });

    parent.append(catElem);
  }
}
