const symbol = document.querySelector('.fa-arrow-circle-up');
const icon = document.querySelector('.scroll-top');
const icon1 = document.querySelector('.scroll-bottom')
const navbar = document.querySelector('.navbar');
const input = document.querySelector('.input');
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


window.onscroll = function () {
  scrollFunction()
};


function scrollFunction() {
  if (window.innerWidth > 991) {
    if (document.body.scrollTop < 100 || document.documentElement.scrollTop < 100) {
      navbar.style.display = "flex";
    }

    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      navbar.style.display = "none";
    }
  }

  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    icon.style.display = "flex";
    icon1.style.display = "flex";

  } else {
    icon.style.display = "none";
    icon1.style.display = "none";
  }
}


function goToTop() {
  window.scrollTo(0, 0);
}


function goToBottom() {
  window.scrollTo(0, document.body.scrollHeight);
}

$(window).on('beforeunload', function() {
  $(window).scrollTop(0);
});

icon.addEventListener('click', goToTop());

icon1.addEventListener('click', goToBottom());