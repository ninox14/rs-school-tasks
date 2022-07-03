import сorrect from '../assets/sounds/correct.wav'
import inсorrect from '../assets/sounds/incorrect.mp3'
import round from '../assets/sounds/round.mp3';
import Utils from './Utils';

export default new (class AudioPlayer {
  constructor() {
    this.correctAnswer = new Audio(сorrect);
    this.inсorrectAnswer = new Audio(inсorrect);
    this.round = new Audio(round);
  }
  playAnswer( answer, volume) {
    if (answer) {
      this.correctAnswer.volume = volume / 100;
      this.correctAnswer.play();
    } else {
      this.inсorrectAnswer.volume = volume / 100;
      this.inсorrectAnswer.play();
    }
  }
  playRound(volume) {
    this.round.volume = volume / 100;
    this.round.play();
  }
})();