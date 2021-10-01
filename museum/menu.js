const nav = document.querySelector(".nav");
const navButton = document.querySelector(".nav-toggle");

navButton.onclick = () => {
    nav.classList.toggle('active');
    navButton.classList.toggle('active');
    document.querySelector(".welcome__header").classList.toggle('active');
    if (nav.classList.contains('active')) {
        window.removeEventListener('click', closeBurger);
    } else {
        window.removeEventListener('click', closeBurger);
    }

    window.addEventListener('click', closeBurger);

    function closeBurger(e) {
        const target = e.target;

        if (!target.closest('.nav-toggle') && target != document.querySelector('.nav ul')) {
            nav.classList.remove('active');
            navButton.classList.remove('active');
            document.querySelector(".welcome__header").classList.remove('active');
            window.removeEventListener('click', closeBurger);
        }
    }
}




/*
function toggleBurger() {


    document.querySelector(".welcome__header").classList.toggle('active');
    document.querySelector(".nav-toggle").classList.toggle('active');
    nav.classList.toggle('active');
} */

