import './Footer.scss'
import FooterElement from './Footer.html';

export class Footer {
  constructor(_parent) {
    this.parent = _parent;
  }
  async render() {
    this.parent.innerHTML = FooterElement;
    return "Footer rendered";
  }

  async after_render() {}
}
