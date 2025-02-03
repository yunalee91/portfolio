// sec5_Recommendation Swiper
const recommendSwiper = new Swiper('.recommend-swiper', {
  slidesPerView: 1,
  spaceBetween: 10,
  pagination: { el: '.recommend-pagination', clickable: true },
  breakpoints: {
    390: { slidesPerView: 1.3, spaceBetween: 10 },
    480: { slidesPerView: 3.1, spaceBetween: 10 },
    1024: { slidesPerView: 4, spaceBetween: 15 }
  }
});
