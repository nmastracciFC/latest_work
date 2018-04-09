console.log("headerColour.js is attached");

const headerBox = document.querySelector("#headerColour"),
	splatter = document.querySelectorAll(".stay-put");;
const nLarge = document.querySelector("#en"),
	name = document.querySelector("#heading"),
	skill = document.querySelector("#sub-head");
	// console.log(name, skill);
//TULIPS
const tulip1 = document.querySelector("#tulip1"),	
	tulip2 = document.querySelector("#tulip2"),
	tulip3 = document.querySelector("#tulip3"),
	tulip4 = document.querySelector("#tulip4"),
	tulip5 = document.querySelector("#tulip5"),
	tulip6 = document.querySelector("#tulip6"),
	nLogo = document.querySelector("#nLogo");


function parallaxHeader() {
	var scroll = window.pageYOffset;
	// console.log(scroll);
	// console.log(headerBox.getBoundingClientRect().bottom);

	tulip1.style.top = -scroll * 0.2 + "px";	
	tulip2.style.top = -scroll * 0.4 + "px";
	tulip3.style.top = -scroll * 0.6 + "px";
	tulip4.style.top = -scroll * 0.8 + "px";
	tulip5.style.top = -scroll * 1 + "px";
	tulip6.style.top = -scroll * 1.2 + "px";
	nLogo.style.top = scroll * 0.8 + "px";


	if (headerBox.getBoundingClientRect().bottom <= 350 ) {
		TweenLite.to(splatter, 0.5, {opacity:0, ease:Power1.easeOut, onComplete: hide});
		// TweenLite.to(name, 0.8, {x:-500, ease:Power2.easeOut});
		// TweenLite.to(skill, 0.8, {x:500, ease:Power2.easeOut});

		function hide(){
			nLogo.classList.add("hidden");
		}
		
	} else if (headerBox.getBoundingClientRect().bottom >= 350) {
		function show(){
			nLogo.classList.remove("hidden");
		}
		show();
		TweenLite.to(splatter, 1, {opacity:1, ease:Power1.easeOut});
		// TweenLite.to(name, 0.8, {x:0, ease:Power2.easeOut});
		// TweenLite.to(skill, 0.8, {x:0, ease:Power2.easeOut});
	}
	
	
}

window.addEventListener("scroll", function(){requestAnimationFrame(parallaxHeader);}, false);
(function (){
	"use strict";
	console.log("main.js connected");

// var screenWidth = window.innerWidth;
// var carImg = document.querySelectorAll(".data-ref");

// function getDevCardImg() {
// 	const url = './admin/scripts/getPics.php?allPics='+this.id;

// 	fetch(url)
// 	.then((resp)=> resp.json())
// 	.then(({ }))

// }


	})();
(function (){
	"use strict";
	console.log("portfolio.js connected");

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



	})();
(function (){
	"use strict";
	console.log("scrollNav.js connected");

var scroll = window.pageYOffset;

const toPortfolio = document.querySelector("#to-portfolio"),
	toContact = document.querySelector("#to-contact");
	console.log(toPortfolio, toContact);
	

function scrollPortfolio(){
		TweenLite.to(window, 2, {scrollTo:{y:"#portfolio"}, ease:Power2.easeInOut});
}
function scrollContact(){
		TweenLite.to(window, 2, {scrollTo:{y:"#form"}, ease:Power2.easeInOut});
}
 
toPortfolio.addEventListener("click", scrollPortfolio,false);
toContact.addEventListener("click", scrollContact,false);

	})();