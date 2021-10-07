
function toggleForm() {
  document.body.classList.toggle('active_form');
}
const dateContainer = document.querySelector('.book__input--date');
const timeContainer = document.querySelector('.book__input--time');

function hideMask(e) {
  e.currentTarget.children[1].style.display = "none";
  e.currentTarget.children[2].style.color = "inherit";
  e.removeEventListener('click', hideMask);
}

dateContainer.addEventListener('click', hideMask);
timeContainer.addEventListener('click', hideMask);