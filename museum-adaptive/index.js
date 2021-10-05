const progress = document.querySelector('.video__controls_progress');

const progressSound = document.querySelector('.video__volume_level');



progress.addEventListener('input', function () {
    const value = this.value;
    this.style.background = `linear-gradient(to right, #710707 0%, #710707 ${value}%, #fff ${value}%, white 100%)`
})
progressSound.addEventListener('input', function () {
    const value = this.value;
    this.style.background = `linear-gradient(to right, #710707 0%, #710707 ${value}%, #fff ${value}%, white 100%)`
})






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




console.log('[x] Вёрстка соответствует макету. Ширина экрана 1024px +40');
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
console.log('   [x] 50 to 89 (orange): Needs Improvement - частично выполнено +4');