const welcomeSliderIndexCounter = document.getElementById('welcome-slider__controls--current');

// console.log(video.poster);
let slider = tns({
  container: '.my_slider',
  items: 1,
  slideBy: 'page',
  mode: 'carousel',
  mouseDrag: true,
  controlsContainer: '.welcome-slider__controls--arrows',
  navContainer: '.welcome-slider__controls--squares'
});


slider.events.on('indexChanged', function (info) {
  let index = info.index;
  if (index > 5) index = 1;
  welcomeSliderIndexCounter.innerHTML = `0${index}`
});
