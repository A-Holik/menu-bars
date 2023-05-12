
const menuIcon = document.querySelector('#menu-icon i');
const navList = document.querySelector('.nav');
const sidebar = document.querySelector('#nav-bar');

function toggleNav() {
  menuIcon.classList.toggle('fa-xmark');
  navList.classList.toggle('nav-active');
  navList.style.transition = "right ease-in-out 1.2s";
}

menuIcon.addEventListener('click', function() {
toggleNav();
});

window.addEventListener('click', () => {
    if(!sidebar.contains(event.target)){
      // console.log("outside menu");
      navList.classList.remove('nav-active');
      menuIcon.classList.remove('fa-xmark');
    } else {
      // console.log("inside menu");
    }
  });



  

 