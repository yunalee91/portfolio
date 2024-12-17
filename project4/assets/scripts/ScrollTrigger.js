gsap.registerPlugin(ScrollTrigger);

['pic1', 'pic2', 'pic3'].forEach((picNum, index) => {
  ScrollTrigger.create({
    trigger: `.protucts-${picNum}`,
    start: 'top center', 
    end: 'bottom center', 
    onEnter: () => {
      gsap.to('.protucts-desc li', { opacity: 0, duration: 0.5 });
      
      gsap.to(`.protucts${picNum.replace('pic', '-desc')}`, { opacity: 1, duration: 0.5 });
    },
    onLeave: () => {
      gsap.to('.protucts-desc li', { opacity: 0, duration: 0.5 });
      
      if (index < 2) {
        gsap.to(`.protucts-desc${index + 2}`, { opacity: 1, duration: 0.5 });
      }
    },
    onEnterBack: () => {
      gsap.to('.protucts-desc li', { opacity: 0, duration: 0.5 });
      
      gsap.to(`.protucts${picNum.replace('pic', '-desc')}`, { opacity: 1, duration: 0.5 });
    }
  });
});

gsap.timeline({
  scrollTrigger: {
    trigger: '.protucts-desc',
    pin: true,
    scrub: 3,
    end: '+=200%'
  }
});


