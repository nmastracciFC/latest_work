(function (){
	"use strict";
	console.log("portfolio.js connected");

var dev = document.querySelector("#development"),
	des = document.querySelector("#design"),
	art = document.querySelector("#artwork");

var devPage = document.querySelector("#development-page"),
	desPage = document.querySelector("#design-page"),
	artPage = document.querySelector("#artwork-page");

var scroll = window.pageYOffset;
	

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

	// var walking = document.querySelector("#walking");

	// walking.style.top = -scroll * 0.5 + "px";
	

 }

dev.addEventListener("click", showDev, false);
des.addEventListener("click", showDes, false);
art.addEventListener("click", showArt, false);

	})();