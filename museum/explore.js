// I hope this over-commenting helps. Let's do this!
// Let's use the 'active' variable to let us know when we're using it
let active = false;
const scroller = document.querySelector('.explore__scroller');
const wrapper = document.querySelector('.explore__slider');


// First we'll have to set up our event listeners
// We want to watch for clicks on our scroller

scroller.addEventListener('mousedown', function () {
  active = true;
  console.log('active');
  // Add our scrolling class so the scroller has full opacity while active
  scroller.classList.add('scrolling');
});
// We also want to watch the body for changes to the state,
// like moving around and releasing the click
// so let's set up our event listeners
document.body.addEventListener('mouseup', function () {
  active = false;
  scroller.classList.remove('scrolling');
});
document.body.addEventListener('mouseleave', function () {
  active = false;
  scroller.classList.remove('scrolling');
});

// Let's figure out where their mouse is at
document.body.addEventListener('mousemove', function (e) {
  if (!active) return;
  // Their mouse is here...
  console.log('figue out')
  let x = (e.pageX) ? e.pageX : e.originalEvent.touches[0].pageX;;
  // but we want it relative to our wrapper
  x -= wrapper.getBoundingClientRect().left;
  // Okay let's change our state
  scrollIt(x);
});

// Let's use this function
function scrollIt(x) {
  let transform = Math.max(0, (Math.min(x, wrapper.offsetWidth)));
  document.querySelector('.explore__after').style.width = transform + "px";
  scroller.style.left = transform - scroller.offsetWidth/2 + "px";
}

// Let's set our opening state based off the width,
// we want to show a bit of both images so the user can see what's going on
if (document.documentElement.clientWidth < 768) {
  scrollIt(230);
} else scrollIt(440);

// And finally let's repeat the process for touch events
// first our middle scroller...
scroller.addEventListener('touchstart', function () {
  active = true;
  scroller.classList.add('scrolling');
});
document.body.addEventListener('touchend', function () {
  active = false;
  scroller.classList.remove('scrolling');
});
document.body.addEventListener('touchcancel', function () {
  active = false;
  scroller.classList.remove('scrolling');
});