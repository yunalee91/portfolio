// intro
let lastScrollY = 0;
const navbar = document.getElementById('navbar');
const menus = [
  { trigger: 'shop-menu', submenu: 'submenu' },
  { trigger: 'activity-menu', submenu: 'submenuActivities' },
  { trigger: 'collection-menu', submenu: 'submenuCollection' }
];

window.addEventListener('scroll', () => {
  navbar.style.transform = window.scrollY > lastScrollY ? 'translateY(-150%)' : 'translateY(0)';
  lastScrollY = window.scrollY;
  closeAllSubmenus(); // 스크롤 시 서브메뉴 닫기
});

menus.forEach(({ trigger, submenu }) => {
  document.getElementById(trigger).addEventListener('click', (e) => {
    e.preventDefault();
    closeAllSubmenus();
    document.getElementById(submenu).classList.toggle('active');
  });
});

document.addEventListener('click', (e) => {
  if (![...menus.map(m => m.trigger), ...menus.map(m => m.submenu)].some(id => document.getElementById(id).contains(e.target))) {
    closeAllSubmenus();
  }
});

const closeAllSubmenus = () => {
  menus.forEach(({ trigger, submenu }) => {
    document.getElementById(trigger).classList.remove('active');
    document.getElementById(submenu).classList.remove('active');
  });
};

// 모바일 햄버거 메뉴
document.getElementById('hamburger-menu').addEventListener('click', (e) => {
  e.preventDefault();
  document.querySelector('.mobile-menu-category').classList.toggle('active');
  document.querySelector('.mobile-menu').classList.toggle('active');
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    document.querySelector('.mobile-menu-category').classList.remove('active');
    document.querySelector('.mobile-menu').classList.remove('active');
  }
});


