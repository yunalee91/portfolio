// sec4_Launch Calendar
document.addEventListener('DOMContentLoaded', () => {
  // Launch Calendar Swiper 초기화
  new Swiper('.launch-swiper', {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      el: '.launch-pagination',
      clickable: true,
    },
    breakpoints: {
      390: { slidesPerView: 1.3, spaceBetween: 10 },
      480: { slidesPerView: 2.1, spaceBetween: 10 },
      1024: { slidesPerView: 4, spaceBetween: 15 },
    },
  });

  // 텍스트박스 높이 동기화 함수
  const syncTextBoxHeight = () => {
    const textBoxes = document.querySelectorAll('.launch .launch-txt-box');
    const maxHeight = Math.max(...[...textBoxes].map(box => {
      box.style.height = 'auto'; // 초기화
      return box.offsetHeight; // 높이 계산
    }));
    textBoxes.forEach(box => (box.style.height = `${maxHeight}px`));
  };

  // 실행 및 반응형 이벤트 핸들링
  window.addEventListener('load', syncTextBoxHeight);
  window.addEventListener('resize', syncTextBoxHeight);
});
