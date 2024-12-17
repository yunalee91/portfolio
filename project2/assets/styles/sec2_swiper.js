// sec2_Shop by category Swiper
document.addEventListener('DOMContentLoaded', () => {
  const initializeSwiper = (selector, paginationSelector, breakpoints) => {
    new Swiper(selector, {
      slidesPerView: 1,
      spaceBetween: 10,
      pagination: {
        el: paginationSelector,
        clickable: true,
      },
      breakpoints: breakpoints,
    });
  };

  // Shop by category Swiper 설정
  initializeSwiper('.category-swiper', '.category-pagination', {
    390: { slidesPerView: 1.3, spaceBetween: 10 },
    480: { slidesPerView: 2, spaceBetween: 10 },
    700: { slidesPerView: 3, spaceBetween: 10 },
    940: { slidesPerView: 3, spaceBetween: 15 },
  });

  // Lookbook Swiper 설정
  initializeSwiper('.lookbook-swiper', '.lookbook-pagination', {
    390: { slidesPerView: 2.1, spaceBetween: 10 },
    480: { slidesPerView: 3, spaceBetween: 10 },
    620: { slidesPerView: 4, spaceBetween: 10 },
    770: { slidesPerView: 4, spaceBetween: 10 },
    800: { slidesPerView: 4.2, spaceBetween: 10 },
    860: { slidesPerView: 4, spaceBetween: 10 },
    900: { slidesPerView: 5, spaceBetween: 10 },
    940: { slidesPerView: 5, spaceBetween: 10 },
    1040: { slidesPerView: 5, spaceBetween: 10 },
    1300: { slidesPerView: 6, spaceBetween: 10 },
    1600: { slidesPerView: 7, spaceBetween: 10 },
  });
});