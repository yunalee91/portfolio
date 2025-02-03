const text1 = document.querySelector('.line1 .text');
const text1Wt = text1.offsetWidth; // w+p+b+scrollbar

// 첫번째 줄 애니메이션. 왼쪽 -> 오른쪽
gsap.fromTo(
  text1,
  { x: 0 },
  {
    x: -text1Wt / 2, // 텍스트 길이의 절반만큼 이동
    duration: 30,
    repeat: -1,
    ease: 'linear',
  }
);


