gsap.registerPlugin(ScrollTrigger);

const text1 = document.querySelector(".line1 .text");
const textWidth = text1.offsetWidth; // 텍스트 전체 길이

gsap.to(text1, {
  x: `-${textWidth / 2}px`, // 텍스트 길이의 절반만큼 이동
  duration: 90,
  repeat: -1,
  ease: "none", // 자연스럽게 흐르도록 easing 제거
  modifiers: {
    x: gsap.utils.unitize((x) => parseFloat(x) % textWidth), // 위치 초기화
  },
});

