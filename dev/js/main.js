(function (){
  "use strict";
console.log("Welcome! Thanks for taking the time to poke around. That contact box feels awful bare... would probably look better if you filled it out.");
const xhr = new XMLHttpRequest();
const toBox = document.querySelector(".to-box");
  
function getImage(){
  if (!xhr) { 
      alert('instance not happening');
      return false; 
    }

xhr.onreadystatechange = processRequest

xhr.open('GET', './admin/scripts/getPics.php?allPics='+this.id);
xhr.send();
}
function processRequest() {
  if(xhr.readyState === XMLHttpRequest.DONE){
    if (xhr.status === 200) {
      var data = JSON.parse(xhr.responseText);
      processResult(data);
    

  }else {
    alert('there was a request problem');
  }
}


  function processResult(data) {
  
  let lightbox = document.querySelector(".i-love-lightboxes");
  let pDesc = document.querySelector(".lightbox-desc").textContent = data[0].pieces_desc;
  let imgPath = lightbox.querySelector("img").src = "images/"+data[0].likeness_path;
  

}
}

function lightboxMe() {
  let coverUp = window.innerHeight;
  let coverAcross = window.innerWidth;
  
  window.scrollTo(0,0);
  document.body.style.overflow = "hidden";

  let lightbox = document.querySelector(".i-love-lightboxes");
  let lightboxImg = lightbox.querySelector("img");
  let lightboxDesc = document.querySelector(".lightbox-desc");
  let lightBoxClose = document.querySelector(".close-box");
  
  
  lightbox.style.display = "block";
  lightbox.style.height = coverUp;
  if (coverAcross < 900) {
  if (lightboxImg > 999+"px"){
    lightboxImg.style.width = 320+"px";
  }
  } else  {
    if (lightboxImg > 999+"px"){
    lightboxImg.style.width = 700+"px";
  }
  }

  lightBoxClose.addEventListener("click", closeLightbox, false);
}

function closeLightbox(){
  window.scrollTo(0,1000);
  document.body.style.overflow = "auto";
  let lightbox = document.querySelector(".i-love-lightboxes");
  lightbox.querySelector('img').src="";
  lightbox.querySelector("p").innerHTML = "";
  lightbox.style.display = "none";

}

toBox.addEventListener("click", lightboxMe, false);
toBox.addEventListener("click", getImage, false);

// window.addEventListener("load", toZero, false);
// function toZero() {
//  let nav = document.querySelector("nav");
//  let headingH1 = document.querySelector("#heading h1");
//  let headingH3 = document.querySelector("#heading h3");
//  let headingH4 = document.querySelectorAll("#heading h4");
//  let eight = document.querySelector("#eight");
//  let subHeadH2 = document.querySelector("#sub-head h2");
//  let subHeadH3 = document.querySelector("#sub-head h3");
//  let subHeadH4 = document.querySelector("#sub-head h4");
//  let initial = document.querySelector(".initial");

//  nav.style.opacity = 0;
//  let headingH1.style.opacity = 0;
//  let headingH3.style.opacity = 0;
//  let headingH4.style.opacity = 0;
//  let eight.style.opacity = 0;
//  let subHeadH2.style.opacity = 0;
//  let subHeadH3.style.opacity = 0;
//  let subHeadH4.style.opacity = 0;
//  let initial.style.opacity = 0;


// }

function organize() {
  let nav = document.querySelector("nav");
  let headingH1 = document.querySelector("#heading h1");
  let headingH3 = document.querySelector("#heading h3");
  let headingH4 = document.querySelectorAll("#heading h4");
  let eight = document.querySelector("#eight");
  let subHeadH2 = document.querySelector("#sub-head h2");
  let subHeadH3 = document.querySelector("#sub-head h3");
  let subHeadH4 = document.querySelector("#sub-head h4");

  TweenLite.set(nav, {opacity:0});
  TweenLite.set(headingH1, {opacity:0});
  TweenLite.set(headingH3, {opacity:0});
  TweenLite.set(headingH4, {opacity:0});
  TweenLite.set(subHeadH2, {opacity:0});
  TweenLite.set(subHeadH3, {opacity:0});
  TweenLite.set(subHeadH4, {opacity:0});
  TweenLite.set(eight, {opacity:0});

  const tl = new TimelineLite();

  tl.to(nav, 0.7, {opacity:1,  ease:Power2.easeOut},'-=0.3')
    .to(headingH1, 0.7, {opacity:1, x:50,  ease:Power2.easeOut},'-=0.3')
    .to(headingH3, 0.7, {opacity:1, x:50,  ease:Power2.easeOut},'-=0.3')
    .to(headingH4, 0.7, {opacity:1, x:50,ease:Power2.easeOut },'-=0.3')
    
    .to(subHeadH2, 0.7, {opacity:1, y:-50,  ease:Power2.easeOut},'-=0.3')
    .to(subHeadH3, 0.7, {opacity:1, y:-50, ease:Power2.easeOut},'-=0.3')
    .to(subHeadH4, 0.7, {opacity:1, y:-50, ease:Power2.easeOut},'-=0.3')
    .to(eight, 1, {opacity:1, ease:Power2.easeIn},'-=0.3');



  // tl.from(nav, 0.7, {y:-100, ease:Power2.easeOut},'-=0.3')
  // .from(headingH1, 1, {opacity:0, y:50, ease:Power2.easeOut},'-=0.3')
  // .from(headingH3, 1, {opacity:0, x:-100, ease:Power2.easeOut},'-=0.3')
  // .from(headingH4, 0.8, {opacity:0, x:-100},'-=0.3')
  
  // .from(subHeadH2, 1, {opacity:0, y:-50, ease:Power2.easeOut},'-=0.3')
  // .from(subHeadH3, 1, {opacity:0, y:-50, ease:Power2.easeOut},'-=0.3')
  // .from(subHeadH4, 1, {opacity:0, y:-50, ease:Power2.easeOut},'-=0.3')
  // .from(eight, 4, {opacity:0, ease:Power2.easeIn},'-=0.3');

  // TweenLite.from(nav, 0.7, {y:-100, ease:Power2.easeOut});
  // TweenLite.from(headingH1, 1, {opacity:0, y:50, ease:Power2.easeOut, delay:0.6});
  // TweenLite.from(headingH3, 1, {opacity:0, x:-100, ease:Power2.easeOut, delay:1.2 });
  // TweenLite.from(headingH4, 0.8, {opacity:0, x:-50, ease:Power2.easeOut, delay:1.5});
  // TweenLite.from(eight, 4, {opacity:0, ease:Power2.easeIn, delay: 0.5});
  // TweenLite.from(subHeadH2, 1, {opacity:0, y:-50, ease:Power2.easeOut, delay:1.7});
  // TweenLite.from(subHeadH3, 1, {opacity:0, y:-50, ease:Power2.easeOut, delay:1.9});
  // TweenLite.from(subHeadH4, 1, {opacity:0, y:-50, ease:Power2.easeOut, delay:2.1});

}


window.addEventListener("load", organize, false);
  

var dev = document.querySelector("#development"),
  des = document.querySelector("#design"),
  art = document.querySelector("#artwork");

var devPage = document.querySelector("#development-page"),
  desPage = document.querySelector("#design-page"),
  artPage = document.querySelector("#artwork-page");

var rect1 = document.querySelector("#rect1"),
  rect2 = document.querySelector("#rect2"),
  rect3 = document.querySelector("#rect3"),
  name1 = document.querySelector("#name1"),
  name2 = document.querySelector("#name2"),
  name3 = document.querySelector("#name3"),
  name4 = document.querySelector("#name4"); 

function showDev() {
  dev.style.color = "#555555";
  des.style.color = "";
  art.style.color = "";

  devPage.style.display = "block";
  desPage.style.display = "none";
  artPage.style.display = "none";

  function checkWidth(){
    var screenWidth = window.innerWidth;
    if (screenWidth <= 900) {
  
  document.querySelector("#artwork").style.display="none";

  document.querySelector("#artwork-page").style.display="none";

}
}
checkWidth();

}

function showDes(){
  dev.style.color = "";
  des.style.color = "#555555";
  art.style.color = "";

  devPage.style.display = "none";
  desPage.style.display = "block";
  artPage.style.display = "none";
}

function showArt() {
  dev.style.color = "";
  des.style.color = "";
  art.style.color = "#555555";

  devPage.style.display = "none";
  desPage.style.display = "none";
  artPage.style.display = "block";
 }

 

window.addEventListener("load", showDev, false);
dev.addEventListener("click", showDev, false);
des.addEventListener("click", showDes, false);
art.addEventListener("click", showArt, false);





  

var scroll = window.pageYOffset;

const toPortfolio = document.querySelector("#to-portfolio"),
  toContact = document.querySelector("#to-contact"),
  navPort = document.querySelector("#navToPort"),
  navForm = document.querySelector("#navToForm"),
  navPort2 = document.querySelector("#navToPort2"),
  navForm2 = document.querySelector("#navToForm2");
  
  

function scrollPortfolio(e){
  e.preventDefault();
  TweenLite.to(window, 2, {scrollTo:{y:"#portfolio"}, ease:Power2.easeInOut});
}
function scrollContact(e){
  e.preventDefault();
  TweenLite.to(window, 2, {scrollTo:{y:"#form"}, ease:Power2.easeInOut});
}
 
toPortfolio.addEventListener("click", scrollPortfolio,false);
toContact.addEventListener("click", scrollContact,false);
navPort.addEventListener("click", scrollPortfolio,false);
navForm.addEventListener("click", scrollContact,false);
navPort2.addEventListener("click", scrollPortfolio,false);
navForm2.addEventListener("click", scrollContact,false);

  })();