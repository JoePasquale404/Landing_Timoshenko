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
    slidesPerView: 2,
    spaceBetween: 20,
    navigation: {
        nextEl: '.posters__next',
        prevEl: '.posters__prev',
    },
    breakpoints: {
        700: {
            slidesPerView: 4,
        },
    },
});

(function() {
    const marqueeEl = document.querySelector('.hero__marquee-slider');
    if (!marqueeEl) return;

    let swiperInstance = null;

    function initMarquee() {
        if (window.innerWidth <= 1070 && !swiperInstance) {
            swiperInstance = new Swiper(marqueeEl, {
                slidesPerView: 'auto',
                spaceBetween: 8,
                loop: true,
                rtl: true,
                speed: 5000,
                autoplay: {
                    delay: 0,
                    disableOnInteraction: false,
                },
                grabCursor: true,
            });
        } else if (window.innerWidth > 1070 && swiperInstance) {
            swiperInstance.destroy(true, true);
            swiperInstance = null;
        }
    }

    initMarquee();
    window.addEventListener('resize', initMarquee);
})();
