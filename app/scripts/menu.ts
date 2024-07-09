document.addEventListener('DOMContentLoaded', () => {
    let isMenuOpen = false;
    const burger = document.querySelector('.header__burger');
    const nav = document.querySelector('.header__nav');
    const links = document.querySelectorAll<HTMLElement>('.nav__link');


    burger.addEventListener('click', () => {
        isMenuOpen = !isMenuOpen;
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
            nav.classList.toggle('header__nav--active');
        } else {
            document.body.style.overflow = 'auto';
            nav.classList.toggle('header__nav--active');
        }

    });

    if (links && nav) {
        links.forEach((link) => {
            link.addEventListener('click', () => {
                isMenuOpen = !isMenuOpen;
                document.body.style.overflow = 'auto';
                nav.classList.toggle('header__nav--active');
            });
        });
    }

});




