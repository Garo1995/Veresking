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