const progress = document.querySelector('.video__controls_progress');

progress.addEventListener('input', function () {
    const value = this.value;
    this.style.background = `linear-gradient(to right, #710707 0%, #710707 ${value}%, #fff ${value}%, white 100%)`
})

const progressSound = document.querySelector('.video__volume_level');

progressSound.addEventListener('input', function () {
    const value = this.value;
    this.style.background = `linear-gradient(to right, #710707 0%, #710707 ${value}%, #fff ${value}%, white 100%)`
})


function toggleForm() {
    document.body.classList.toggle('active_form');
}

function shuffle(array) {
    let currentIndex = array.length, randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex != 0) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }
    return array;
}

function gallery() {
    const pictureInnerContainer = document.querySelector('.gallery__inner');
    console.log(pictureInnerContainer)
    while (pictureInnerContainer.firstChild) {
        pictureInnerContainer.removeChild(pictureInnerContainer.firstChild);
    }
    let images = [
        './assets/img/galery/galery1.jpg',
        './assets/img/galery/galery2.jpg',
        './assets/img/galery/galery3.jpg',
        './assets/img/galery/galery4.jpg',
        './assets/img/galery/galery5.jpg',
        './assets/img/galery/galery6.jpg',
        './assets/img/galery/galery7.jpg',
        './assets/img/galery/galery8.jpg',
        './assets/img/galery/galery9.jpg',
        './assets/img/galery/galery10.jpg',
        './assets/img/galery/galery11.jpg',
        './assets/img/galery/galery12.jpg',
        './assets/img/galery/galery13.jpg',
        './assets/img/galery/galery14.jpg',
        './assets/img/galery/galery15.jpg',
    ]
    shuffle(images);

    for (let elem of images) {
        const img = document.createElement('img');
        img.classList.add('gallery__img')
        img.src = elem;
        img.alt = elem.replace(/^.*[\\\/]/, '');
        pictureInnerContainer.append(img)
    }
}

document.addEventListener("DOMContentLoaded", function () {
    gallery();
});




console.log('https://github.com/rolling-scopes-school/ninox14-JSFE2021Q3/pull/1');
console.log('[+] Вёрстка семантическая. В коде страницы присутствуют следующие элементы (указано минимальное количество, может быть больше) +24');
console.log('[±] Вёрстка соответствует макету +42');
console.log('блок <footer> +2');
console.log('[±] Форма покупки билетов +21');
console.log('форма открывается при клике по кнопке Buy Now в секции Tickets и закрывается кликом по иконке с крестиком в верхнем правом углу или кликом по overlay +1');
console.log('[+] Требования к css + 18');
console.log('[+] Интерактивность, реализуемая через css +24');
console.log('[±] Интерактивность, реализуемая через js +14');
console.log('кнопке "Book" в форме покупки билетов добавлен ripple-эффект Демо 0');
