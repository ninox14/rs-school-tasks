let slider = tns({
  container: '.my_slider',
  items: 1,
  slideBy: 'page',
  mode: 'carousel',
  mouseDrag: true,
  controlsContainer: '.welcome-slider__controls--arrows',
  navContainer: '.welcome-slider__controls--squares'
});


const counter = document.getElementById('welcome-slider__controls--current');
slider.events.on('indexChanged', function (info) {
  let index = info.index;
  if (index > 5) index = 1;
  counter.innerHTML = `0${index}`
});

let videoSlider = tns({
  container: '.video_tns',
  slideBy: 1,
  items: 3,
  navAsThumbnails: true,
  loop: true,
  gutter: 42,
  slideBy: '1',
  mouseDrag: true,
  prevButton: '.video-slider__arr--left',
  nextButton: '.video-slider__arr--right',
  navContainer: '.video-slider__dots'
})