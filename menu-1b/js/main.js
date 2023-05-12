const navbar = document.getElementById("nav-bar");
const topBtn = document.getElementById("top-btn");
const sticky = navbar.offsetTop;
const menuIcon = document.querySelector('#menu-icon i');
const navList = document.querySelector('.nav');

function stickyContent() {
 
  if (document.documentElement.offsetHeight >= sticky) {
    navbar.classList.add("sticky");
  } 
  else {
    navbar.classList.remove("sticky");
  }
}

function scrollAction() {
  scrollTo(0,0);
}

function scrollTop() {
  let yScrollAxis = document.documentElement.scrollTop;
  if (yScrollAxis >200) {
    topBtn.classList.remove('hidden');
  } else {
    topBtn.classList.add('hidden');
  }
}

function toggleNav() {
  menuIcon.classList.toggle('fa-xmark');
  navList.classList.toggle('nav-active');
}

window.addEventListener('scroll', () => {
  stickyContent();
  scrollTop();
});

topBtn.addEventListener('click', () => {
  scrollAction();
});

menuIcon.addEventListener('click', function() {
toggleNav();
});




