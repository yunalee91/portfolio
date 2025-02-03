// sec3_New Arrival - products - Swiper
const productsSwiper = new Swiper('.products-swiper', {
  slidesPerView: 1,
  spaceBetween: 10,
  pagination: {
    el: '.products-pagination',
    clickable: true,
  },
  breakpoints: {
    390: {
      slidesPerView: 2.1,
      spaceBetween: 10,
    },
    1024: {
      slidesPerView: 3.1,
      spaceBetween: 10,
    },
  },
});



