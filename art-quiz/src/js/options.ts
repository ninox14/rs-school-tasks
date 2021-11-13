import * as mdc from 'material-components-web';


const Options = document.querySelector('.options')


let sliderElem = new mdc.slider.MDCSlider(Options.querySelector('.volume_slider'));
new mdc.switchControl.MDCSwitch(Options.querySelector('.options__time-game_switch'))



// class Options {
//   lol: string;
//   constructor (){
//     this.lol = 'lol';
//   }
// }

export default Options;