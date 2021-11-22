/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import './Home.scss';
import HomeElement from './Home.html';
import Utils from '@/utils/Utils';

export class Home {
  constructor(_parent) {
    this.parent = _parent;
    this.isFirst = true;
  }

  async render() {
    this.parent.innerHTML = HomeElement;

    return 'Home rendered';
  }

  async after_render() {
    if (!this.isFirst) {
      this.parent.classList.add('show');
      await Utils.sleep(1000);
    }
    this.isFirst = false;
  }
}
