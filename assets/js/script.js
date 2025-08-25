$(document).ready(function () {
    $('.open-menu').on('click', function () {
        $(this).toggleClass('close-menu');
        if ($(this).hasClass('close-menu')) {
            $('.menu-content').addClass('transition-menu');
            $('body').addClass('body_fix');
        } else {
            $('.menu-content').addClass('menu-width');
            $('body').removeClass('body_fix');
            $('.menu-content').removeClass('transition-menu');
        }
    });
    $('.nav-menu a').on('click', function () {
        $('.menu-content').addClass('menu-width');
        $('body').removeClass('body_fix');
        $('.menu-content').removeClass('transition-menu');
        $('.open-menu').removeClass('close-menu');
    })
});









let systemSwiper = new Swiper(".system-sm-slider", {
    loop: true,
    spaceBetween: 12,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
});
let swiper2 = new Swiper(".system-slider", {
    loop: true,
    spaceBetween: 12,
    thumbs: {
        swiper: systemSwiper,
    },
});


window.addEventListener("scroll", function() {
    const header = document.getElementById("header");
    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});











let certificateSwiper = new Swiper(".certificate-slider", {
    loop: true,
    spaceBetween: 20,
    slidesPerView: 4,
    breakpoints: {
        '1199': {
            slidesPerView: 4,
            spaceBetween: 20,
        },
        '1020': {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        '570': {
            slidesPerView: 2,
            slidesPerGroup: 1,
            spaceBetween: 20,
        },
        '320': {
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: 20,
        },
    },
    pagination: {
        el: ".certificate-pagination",
        clickable: true,
    },
});




let techniqueSwiper = new Swiper(".technique-slider", {
    loop: true,
    spaceBetween: 20,
    slidesPerView: 2,
    breakpoints: {
        '1199': {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        '1020': {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        '320': {
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: 20,
        },
    },
    pagination: {
        el: ".technique-pagination",
        clickable: true,
    },
});








let portfolioSwiper = new Swiper(".portfolio-slider", {
    slidesPerView: 3,
    spaceBetween: 20,
    loop: true,
    breakpoints: {
        '1099': {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        '1020': {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        '680': {
            slidesPerView: 2,
            spaceBetween: 20,
        },

        '320': {
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: 20,
        },
    },
    navigation: {
        nextEl: ".portfolio-button-next",
        prevEl: ".portfolio-button-prev",
    },

});

















$(function () {
    let Accordion = function (el, multiple) {
        this.el = el || {};
        this.multiple = multiple || false;
        let links = this.el.find('.link');
        links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
    };

    Accordion.prototype.dropdown = function (e) {
        let $el = e.data.el;
        $this = $(this),
            $next = $this.next();
        $next.slideToggle();
        if (!e.data.multiple) {

            $el.find('.submenu').not($next).slideUp();
        }
        if (!$this.hasClass('open')) {
            $('.link').each(function () {
                $(this).removeClass('open')
            })
            $this.addClass('open')
        } else {
            $this.removeClass('open')
        }
    }
    let accordion = new Accordion($('#accordion'), false);
});


$('.menu a').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
        && location.hostname == this.hostname) {
        let $target = $(this.hash);
        $target = $target.length && $target
            || $('[name=' + this.hash.slice(1) +']');
        if ($target.length) {
            let targetOffset = $target.offset().top-130;
            $('html,body')
                .animate({scrollTop: targetOffset}, 1000);
            return false;
        }
    }
});
