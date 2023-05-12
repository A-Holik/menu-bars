let menuIcon = document.querySelector('.menu-bar');
let mIcon = document.querySelector('#menu-icon i');
let navBar = document.querySelector('#nav-bar');
let sideBar = document.querySelector('.sidebar-container');
let width = document.body.clientWidth;

// i created this only for fun and show, how u can use localstorage.

let menu = localStorage.getItem('openMenu'); 

const enableMenu = () => {
  localStorage.setItem('openMenu', 'enabled');
  sideBar.classList.add('nav-active');
  sideBar.style.transition = "2s";
  mIcon.classList.remove('fa-chevron-right');
  mIcon.classList.add('fa-chevron-left');

  
}

const disableMenu = () => {
  localStorage.setItem('openMenu', 'disabled');
  sideBar.classList.remove('nav-active');
  mIcon.classList.remove('fa-chevron-left');
  mIcon.classList.add('fa-chevron-right');
}

if (menu === 'enabled' && width > 800) { enableMenu(); }

menuIcon.addEventListener('click', () => {
  menu = localStorage.getItem('openMenu'); 
  if (menu !== 'enabled') {
    enableMenu();
  } else {  
    disableMenu(); 
  }
});

window.addEventListener('click', () => {
  if(!navBar.contains(event.target)){
    console.log("outside menu");
    disableMenu(); 
  } else {
    console.log("inside menu");
  }
});

// window.addEventListener('click', function(e){

//   if(!navBar.contains(e.target)){
//     console.log("outside menu");
//     disableMenu(); 

//   } else {
//     console.log("inside menu");
//   }

// });

