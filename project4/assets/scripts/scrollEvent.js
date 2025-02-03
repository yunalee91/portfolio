const scrollThreshold = 80;

document.addEventListener('scroll', function() {
  const mainTitle = document.querySelector('.intro-main-title');
  
  // 화면 너비가 900px 이하인 경우 스크롤 이벤트를 처리하지 않음
  if (window.innerWidth > 900) { // 데스크탑 화면에서만 스크롤 이벤트 처리
    if (window.scrollY > scrollThreshold) { // 스크롤이 80px 이상 내려갔을 때
      mainTitle.style.transform = 'scale(0.09)';
      mainTitle.style.lineHeight = '0px';
      mainTitle.style.position = 'fixed';
      mainTitle.style.top = '-137px';  // 작은 화면에서 위로 밀리지 않도록 수정
      mainTitle.style.zIndex = '1000';
    } else {
      mainTitle.style.transform = 'scale(1)';
      mainTitle.style.lineHeight = '250px';
      mainTitle.style.position = 'static';
    }
  } else {
    // 모바일 화면에서는 스크롤에 관계없이 항상 정상 위치
    mainTitle.style.transform = 'scale(1)';
    mainTitle.style.lineHeight = '250px';
    mainTitle.style.position = 'static';
  }
});

