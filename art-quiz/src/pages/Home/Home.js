import './Home.scss'
import HomeElement from './Home.html';

export class Home {
  constructor(_parent) {
    this.parent = _parent;
    this.isFirst = true;
  }

  async render () {
    this.parent.innerHTML = HomeElement;

    return "Home rendered";
  }

  async after_render () {

    if (!this.isFirst) {
      this.parent.classList.add('show');

    }
    this.isFirst = false;
  };
}
