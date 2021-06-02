const symbol = document.querySelector('.fa-arrow-circle-up');
const icon = document.querySelector('.scroll-top');
const navbar = document.querySelector('.navbar');
const input = document.querySelector('.input');
const group = document.querySelector('.btn-groups');
const toggler = document.querySelector('.navbar-toggler-icon');
const nav_toggler = document.querySelector('.navbar-toggler');


var cnt = 0;
toggler.addEventListener('click',()=>{
  if((cnt&1)==0){
    nav_toggler.classList.add('box');
  }else{
    nav_toggler.classList.remove('box');
  }
  cnt++;
  
})

window.onscroll = function() {
    scrollFunction()
};

function scrollFunction() {
  if(window.innerWidth>991){
    if(document.body.scrollTop<100 || document.documentElement.scrollTop < 100){
      navbar.style.display = "flex";
      group.style.position = "absolute";
      group.style.top = "53px";
    }

    if(document.body.scrollTop>100 || document.documentElement.scrollTop > 100){
      navbar.style.display = "none";
      group.style.position = "fixed";
      group.style.top = "0";
    }
  }

}
