// Burger menu
(function() {
    const burgerBtn = document.querySelector('.burger-btn');
    const mobileMenu = document.querySelector('.mobile-menu');
    const burgerIcon = document.querySelector('.burger-btn__icon');
    const closeIcon = document.querySelector('.burger-btn__close');
    const overlay = document.querySelector('.mobile-menu__overlay');
    const body = document.body;

    function openMenu() {
        mobileMenu.classList.add('open');
        burgerIcon.hidden = true;
        closeIcon.hidden = false;
        burgerBtn.setAttribute('aria-label', 'Закрыть меню');
        body.style.overflow = 'hidden';
    }

    function closeMenu() {
        mobileMenu.classList.remove('open');
        burgerIcon.hidden = false;
        closeIcon.hidden = true;
        burgerBtn.setAttribute('aria-label', 'Открыть меню');
        body.style.overflow = '';
    }

    burgerBtn.addEventListener('click', function() {
        if (mobileMenu.classList.contains('open')) {
            closeMenu();
        } else {
            openMenu();
        }
    });

    overlay.addEventListener('click', closeMenu);

    document.querySelectorAll('.mobile-menu__nav a').forEach(function(link) {
        link.addEventListener('click', closeMenu);
    });

    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && mobileMenu.classList.contains('open')) {
            closeMenu();
        }
    });
})();

new Swiper('.posters__slider', {
    slidesPerView: 4,
    spaceBetween: 20,
    navigation: {
        nextEl: '.posters__next',
        prevEl: '.posters__prev',
    },
});
