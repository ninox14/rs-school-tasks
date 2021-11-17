import './Header.scss'
import HeaderElement from './Header.html';
export class Header {
  constructor(_parent) {
    this.parent = _parent;
  }

  async render () {
    this.parent.innerHTML = HeaderElement;
    return 'Header Rendered';
  }

  async after_render () {};
}
