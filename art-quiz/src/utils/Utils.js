export const Utils = {
  parseRequestURL: () => {
    const url = location.hash.slice(1).toLowerCase() || '/';

    const r = url.split('/');

    const request = {
      resource: null,
      category: null,
      categoryIndex: null,
      questinIndex: null,
    };

    request.resource = r[1];
    request.category = r[2];
    request.categoryIndex = r[3];
    request.questinIndex = r[4];

    return request;
  },

  sleep: (ms) => new Promise((resolve) => setTimeout(resolve, ms)),
  createElem: ({ elem, content = null, classes }) => {
    const e = document.createElement(elem);
    e.textContent = content ? content.toString() : '';
    e.classList.add(...classes);
    return e;
  },
  shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  },
};

export default Utils;
