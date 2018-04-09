(()=> {
// Development JS
console.log("main.js is attached");
// console.log("something");

let nav = document.querySelector('#navigation');
let navTrigger = document.querySelector('.nav-trigger');

function toggleNav(event) {
  event.preventDefault();
  nav.classList.toggle('open');
}

let currentNavPosition = nav.querySelector('.active');

navTrigger.addEventListener('click', toggleNav, false);

let scrollers = document.querySelectorAll('.scrollTo');

scrollers.forEach((el)=>{
  // console.log(el);
  el.addEventListener('click',function(e){
    e.preventDefault();
    e.currentTarget.classList.add('active');
    currentNavPosition.classList.remove('active');
    currentNavPosition = e.currentTarget;
    TweenMax.to(window,0.4,{scrollTo:el.getAttribute('href')});
  },false);
});

window.addEventListener('scroll',function(){
  checkScroll();
},false);


function checkScroll(){
  var doc = document.documentElement;
  let top = (window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0);
  let mythical = document.querySelector('#myths-section');
  let processes = document.querySelector('#register-section');
  let contact = document.querySelector('#contact-section');
  let community = document.querySelector('#community-section');
  let boundingTop = mythical.getBoundingClientRect().top;
  let boundingBottom = processes.getBoundingClientRect().bottom;
  let communityTop = contact.getBoundingClientRect().top;
  let contactBottom = community.getBoundingClientRect().bottom;
  // console.log(boundingTop);
  // console.log(top);
  // console.log(boundingBottom);
  // console.log(communityTop);

  if(top > boundingBottom){
    // if(nav.classList.contains('invert')){
    //   //console.log("reverted");
    //   nav.classList.remove('invert');
    // }
  }else if(top > boundingTop){
    if(!nav.classList.contains('invert')){
      //console.log("inverted");
      nav.classList.add('invert');
    }
  }else{
    if(nav.classList.contains('invert')){
      //console.log("reverted");
      nav.classList.remove('invert');
    }
  }
}

})();
