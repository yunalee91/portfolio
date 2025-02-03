function initScrollAnimations() {
  if (window.matchMedia("(min-width: 901px)").matches) {
    // 900px 이상: ScrollTrigger와 애니메이션 활성화
    gsap.registerPlugin(ScrollTrigger);

    ['pic1', 'pic2', 'pic3'].forEach((picNum, index) => {
      ScrollTrigger.create({
        trigger: `.products-${picNum}`,
        start: 'top center',
        end: 'bottom center',
        onEnter: () => {
          gsap.to('.products-desc li', { opacity: 0, duration: 0.5 });
          gsap.to(`.products${picNum.replace('pic', '-desc')}`, { opacity: 1, duration: 0.5 });
        },
        onLeave: () => {
          gsap.to('.products-desc li', { opacity: 0, duration: 0.5 });
          if (index < 2) {
            gsap.to(`.products-desc${index + 2}`, { opacity: 1, duration: 0.5 });
          }
        },
        onEnterBack: () => {
          gsap.to('.products-desc li', { opacity: 0, duration: 0.5 });
          gsap.to(`.products${picNum.replace('pic', '-desc')}`, { opacity: 1, duration: 0.5 });
        }
      });
    });

    gsap.timeline({
      scrollTrigger: {
        trigger: '.products-desc',
        pin: true,
        scrub: 3,
        end: '+=200%'
      }
    });
  } else {
    // 900px 이하: ScrollTrigger 및 스타일 초기화
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());

    // 모든 요소의 스타일 초기화
    document.querySelectorAll('.products-desc li').forEach(li => {
      li.style.opacity = "1"; // 모든 li 요소 보이게 설정
      li.classList.remove('active'); // active 클래스 제거
    });

    // 초기 상태로 복구 (포지션 등 초기화 필요 시 추가)
    gsap.set('.products-desc li', { clearProps: 'all' }); // gsap 설정 초기화
  }
}

// 초기 실행
initScrollAnimations();

// 화면 크기 변경 감지
window.addEventListener("resize", initScrollAnimations);
