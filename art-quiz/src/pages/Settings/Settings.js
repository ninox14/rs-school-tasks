import './Settings.scss'
import SettingsElement from './Settings.html';

export class Settings {
  constructor(_parent) {
    this.parent = _parent;
  }
  async render() {
    this.parent.innerHTML = SettingsElement;
    return 'Settings rendered';
  }
  async after_render() {}
}
