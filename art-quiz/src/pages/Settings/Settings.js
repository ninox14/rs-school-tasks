import './Settings.scss'
import SettingsElement from './Settings.html';
import Utils from '@/utils/Utils'
import AudioPlayer from '@/utils/audio';
export class Settings {
  constructor(_parent) {
    this.parent = _parent;
    this.settingsElem = null;


    this.elements = null
    this.currentOptions = null;
  }
  async render() {


    this.currentOptions = await Utils.getCurrOptions();
    const vVal = this.currentOptions.volume
    const tVal = this.currentOptions.time
    this.parent.innerHTML = `
    <div class="settings">
      <div class="settings-item settings-volume">
        <h4 class="settings-caption"> Volume</h4>
        <label class="switch" for="volume">
          <input class="settings-checkbox settings-volume-switch" type="checkbox" id="volume" ${
            this.currentOptions.isSound ? 'checked' : ''
          }>
          <span class="slider round volume"></span>
        </label>
        <div class="range-slider settings-range-slider settings-volume-range ${
          this.currentOptions.isSound ? 'active' : ''
        }" style='--min:0; --max:100; --value:${vVal}; --text-value:"${vVal}"; --suffix:"%"'>
          <input class="volume-input" type="range" min="0" max="100" value="${vVal}" step="5" oninput="this.parentNode.style.setProperty('--value',this.value); this.parentNode.style.setProperty('--text-value', JSON.stringify(this.value))" ${
      !this.currentOptions.isSound ? 'disabled' : ''
    }>
          <output></output>
          <div class='range-slider__progress'></div>
        </div>
      </div>

      <div class="settings-item setting-time">
        <h4 class="settings-caption"> Time</h4>
        <label class="switch" for="time">
          <input class="settings-checkbox settings-time-switch" type="checkbox" id="time" ${
            this.currentOptions.isTime ? 'checked' : ''
          }>
          <span class="slider round"></span>
        </label>
        <div class="range-slider settings-range-slider ${
          this.currentOptions.isTime ? 'active' : ''
        }" style='--min:5; --max:30; --value:${tVal}; --text-value:"${tVal}"; --suffix:"s"'>
          <input class="time-input" type="range" min="5" max="30" value="${tVal}" step="5" oninput="this.parentNode.style.setProperty('--value',this.value); this.parentNode.style.setProperty('--text-value', JSON.stringify(this.value))" ${
      !this.currentOptions.isTime ? 'disabled' : ''
    }>
          <output></output>
          <div class='range-slider__progress'></div>
        </div>
      </div>
      <a class="button settings-button ">Save</a>
    </div>
    `;

    return 'Settings rendered';
  }
  async after_render() {
    this.elements = await this.getSettingElements();
    await this.setListeners();
    this.parent.classList.add('show');
  }

  async getSettingElements () {
    return {
      switchVolume: this.parent.querySelector('.settings-volume-switch'),
      switchTime: this.parent.querySelector('.settings-time-switch'),
      sliderVolume: this.parent.querySelector('.volume-input'),
      sliderTime: this.parent.querySelector('.time-input'),
      saveButton: this.parent.querySelector('.settings-button'),
    };
  }
  async setListeners() {
    const volumeListener = (e) => {
      this.elements.sliderVolume.disabled = !e.target.checked;
      this.elements.sliderVolume.parentNode.classList.toggle('active');
    };
    const timeListener = (e) =>{
      this.elements.sliderTime.disabled = !e.target.checked
      this.elements.sliderTime.parentNode.classList.toggle('active');
    };
    const volumeInputListener = (e) => {
      AudioPlayer.playAnswer( true ,+e.target.value);
    }
    const buttonListener = async (e) => {
      await this.saveOptions();

      history.back();
    }
    this.elements.switchVolume.addEventListener('input', volumeListener.bind(this));
    this.elements.switchTime.addEventListener('input', timeListener.bind(this));
    this.elements.saveButton.addEventListener('click', buttonListener.bind(this))
    this.elements.sliderVolume.addEventListener('change', volumeInputListener);
  }
  async saveOptions() {
    const options = {
      isSound: this.elements.switchVolume.checked,
      isTime: this.elements.switchTime.checked,
      volume: this.elements.sliderVolume.value,
      time: this.elements.sliderTime.value,
    };
    window.localStorage.setItem('options', JSON.stringify(options))
  }
}
