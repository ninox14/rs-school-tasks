/* eslint-disable class-methods-use-this */
import './Footer.scss';
import FooterElement from './Footer.html';

export class Footer {
  constructor(_parent) {
    this.parent = _parent;
  }

  async render() {
    this.parent.innerHTML = FooterElement;
    return 'Footer rendered';
  }

  // eslint-disable-next-line no-empty-function
  async after_render() {}
}
