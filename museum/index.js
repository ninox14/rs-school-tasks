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



const nav = document.querySelector(".nav");

function toggleForm() {
    document.body.classList.toggle('active_form');
}

function toggleBurger() {
    document.querySelector(".welcome__header").classList.toggle('active');
    document.querySelector(".nav-toggle").classList.toggle('active');
    nav.classList.toggle('active');
    /* document.querySelector(".nav.active").style.left='0'; */
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




