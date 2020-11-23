// Swiper 
let mySwiper = new Swiper('.reviews__container', {
    // Optional parameters
    loop: true,
    autoHeight: true,

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    autoplay: {
        delay: 6000,

    },

    speed: 1000,
  })