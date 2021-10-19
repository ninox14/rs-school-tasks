let images;
const scrollToTopBtn = document.querySelector(".scroll_top__btn");
const rootElement = document.documentElement;



function debounce(func, wait=20, immediate=true) {
  let timeout;
  return function () {
    let context = this,
      args = arguments;
    let later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    let callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }
  return array;
}

function gallery() {
  const pictureInnerContainer = document.querySelector(".gallery__inner");
  while (pictureInnerContainer.firstChild) {
    pictureInnerContainer.removeChild(pictureInnerContainer.firstChild);
  }
  let images = [
    "./assets/img/galery/galery1.jpg",
    "./assets/img/galery/galery2.jpg",
    "./assets/img/galery/galery3.jpg",
    "./assets/img/galery/galery4.jpg",
    "./assets/img/galery/galery5.jpg",
    "./assets/img/galery/galery6.jpg",
    "./assets/img/galery/galery7.jpg",
    "./assets/img/galery/galery8.jpg",
    "./assets/img/galery/galery9.jpg",
    "./assets/img/galery/galery10.jpg",
    "./assets/img/galery/galery11.jpg",
    "./assets/img/galery/galery12.jpg",
    "./assets/img/galery/galery13.jpg",
    "./assets/img/galery/galery14.jpg",
    "./assets/img/galery/galery15.jpg",
  ];
  shuffle(images);

  for (let elem of images) {
    const img = document.createElement("img");
    img.classList.add("gallery__img");
    img.src = elem;
    img.alt = elem.replace(/^.*[\\\/]/, "");
    pictureInnerContainer.append(img);
  }
}

function checkSlide (e) {

	images.forEach(item => {

		const slideInAt =
      window.scrollY + window.innerHeight - item.height / 5;

		const imageBottom = item.parentNode.parentNode.offsetTop + item.offsetTop + item.height;
		const isHalfShown =
      slideInAt > item.parentNode.parentNode.offsetTop + item.offsetTop;
		const isNotScrolledPast = window.scrollY < imageBottom;
		if (isHalfShown && isNotScrolledPast) {
			item.classList.add('active');
		} else {
			item.classList.remove('active');
		}
	});
}

function handleScroll() {
  // Do something on scroll
  let scrollTotal = rootElement.scrollHeight - rootElement.clientHeight;
  if (rootElement.scrollTop / scrollTotal > 0.3) {
    // Show button
    scrollToTopBtn.classList.add("active");
  } else {
    // Hide button
    scrollToTopBtn.classList.remove("active");
  }
}

function scrollToTop() {
  // Scroll to top logic
  rootElement.scrollTo({
    top: 0,
    behavior: "smooth",
  });
  scrollToTopBtn.classList.remove("active");
}





document.addEventListener("DOMContentLoaded", function () {
  gallery();
	setTimeout( () => {
		images = document.querySelectorAll(".gallery__img");
	}, 1000)
  checkSlide();
});
window.addEventListener("scroll", debounce(checkSlide));
window.onload = () => checkSlide;

scrollToTopBtn.addEventListener("click", scrollToTop);
document.addEventListener("scroll", debounce(handleScroll, 200));





console.log("[x] Слайдер в секции `Welcome` +24");
console.log("[±] Слайдер в секции `Video` +19  ");
console.log(
  " - [±] если видео с YouTube проигрывается, клик по кнопке Pause останавливает его проигрывание. Также проигрывание видео останавливается, если кликнуть по другому слайду или кнопке Play в центре другого слайда. В указанной ситуации другое видео должно запуститься, а текущее остановиться. Невозможно проигрывание нескольких YouTube видео одновременно +1"
);
console.log("Comment: не останавливается если включить второе видео");
console.log("[x] Кастомный видеоплеер +36");
console.log("[x] Слайдер сравнения изображений в секции `Explore` +10");
console.log("[x] Анимация при прокрутке изображений в секции `Galery` +8");
console.log(
  "  при обновлении страницы, если она к тому моменту была прокручена до секции `Galery`, анимация картин повторяется +2"
);
console.log('   сработает на скролле');
console.log("[±] Калькулятор продажи билетов в секции `Tiskets` +8");
console.log(
  "  [ ] при обновлении страницы сохраняется выбранное ранее количество билетов Basic и Senior, выбранный тип билета, общая цена за них +0"
);
console.log("[x] Калькулятор продажи билетов в форме продажи билетов +14");
console.log("[x] Валидация формы +16");
console.log("[x] Интерактивная карта в секции `Contacts` +12");
console.log('[x] Любой собственный дополнительный функционал, улучшающий качество проекта. Например, ночная тема, плавная смена изображений в блоке `Tickets`, всплывающее окно с информацией про картины и их авторов, кнопка прокрутки страницы вверх, возможность проголосовать за понравившиеся картины с сохранением данных в local storage, всё зависит от вашей фантазии и чувства вкуса. Для удобства проверки выполненный вами дополнительный функционал включите в самооценку, которую выведите в консоль браузера  +3');
console.log('  кнопка скролла вверх');