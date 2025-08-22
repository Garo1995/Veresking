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