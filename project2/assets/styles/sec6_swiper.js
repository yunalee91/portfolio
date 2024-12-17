// Brand story-Swiper Swiper
// Swiper 초기화
let brandstorySwiper;

// 화면 크기 감지
function initSwiper() {
  if (window.innerWidth >= 1024) {
    if (!brandstorySwiper) {
      brandstorySwiper = new Swiper('.brandstory-swiper', {
        slidesPerView: 2.5, // 화면에 2.5개 슬라이드 보임
        spaceBetween: 15, // 슬라이드 간격
        loop: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });
    }
  } else {
    // 1024px 미만에서 Swiper 비활성화
    if (brandstorySwiper) {
      brandstorySwiper.destroy(true, true); // Swiper 인스턴스 제거
      brandstorySwiper = undefined;
    }
  }
}

// 초기 실행 및 리사이즈 이벤트 등록
initSwiper();
window.addEventListener('resize', initSwiper);