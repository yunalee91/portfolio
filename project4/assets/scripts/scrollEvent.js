const scrollThreshold = 80;

document.addEventListener('scroll', function() {
  const mainTitle = document.querySelector('.intro-main-title');

  if (window.scrollY > scrollThreshold) { // 스크롤이 80px 이상 내려갔을 때
    mainTitle.style.transform = 'scale(0.09)';
    mainTitle.style.lineHeight = '0px';
    mainTitle.style.position = 'fixed';
    mainTitle.style.top = '-12px';
    mainTitle.style.width = '1440px';
    mainTitle.style.zIndex = '1000';
  } else {
    mainTitle.style.transform = 'scale(1)';
    mainTitle.style.lineHeight = '250px';
    mainTitle.style.position = 'static';
  }
});
