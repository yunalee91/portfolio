// 첫 번째 Swiper - red section
var swiper1 = new Swiper('.first-swiper-container', {
  slidesPerView: 5, // 화면에 보일 사진 개수
  spaceBetween: 200, // 간격
  loop: true, // 무한 반복 설정
  autoplay: {
    delay: 1000, // 자동으로 1초마다 전환
  },
});

// 두 번째 Swiper - lavender section
var swiper2 = new Swiper('.lavender-swiper-container', {
  slidesPerView: 5, // 화면에 보일 사진 개수
  spaceBetween: 200, // 간격
  loop: true, // 무한 반복 설정
  autoplay: {
    delay: 1000, // 자동으로 1초마다 전환
  },
});