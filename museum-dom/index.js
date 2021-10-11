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
});
window.addEventListener("scroll", debounce(checkSlide));


scrollToTopBtn.addEventListener("click", scrollToTop);
document.addEventListener("scroll", debounce(handleScroll, 200));





/* console.log('[x] Вёрстка соответствует макету. Ширина экрана 1024px +40');
console.log('[x] Вёрстка соответствует макету. Ширина экрана 768px +40');
console.log('[x] Вёрстка соответствует макету. Ширина экрана 420px +40');
console.log('[x] Ни на одном из разрешений до 320px включительно не появляется горизонтальная полоса прокрутки +6');
console.log('[±] Совмещается адаптивная и респонсивная (резиновая) вёрстка +10 ');
console.log('   При изменении ширины экрана плавно изменяются размеры:');
console.log('       [±] слайдера в секции `Video` +1');
console.log('       [ ] YouTube-видео в плейлисте в секции `Video`, маленькие видео выровнены по краям большого 0');
console.log('       [±] галереи изображений и изображений в ней +1');
console.log('[x] На ширине экрана 1024рх и меньше реализовано адаптивное меню +12 ');
console.log('[±]  Оптимизация скорости загрузки страницы +4');
console.log('   [x] 50 to 89 (orange): Needs Improvement - частично выполнено +4'); */
