console.log("main.js is attached");

var seven = document.querySelector("#seven"),
	six = document.querySelector("#six"),
	five = document.querySelector("#five"),
	four = document.querySelector("#four"),
	three = document.querySelector("#three"),
	two = document.querySelector("#two"),
	one = document.querySelector("#one");

// function parallaxHeader() {
// 	var scroll = window.pageYOffset;
// 	seven.style.top = -scroll * 1 + "px";
// 	six.style.top = -scroll * 1.5 + "px";
// 	five.style.top = -scroll * 2 + "px";
// 	four.style.top = -scroll * 2.5 + "px";
// 	three.style.top = -scroll * 3 + "px";
// 	two.style.top = -scroll * 4 + "px";
// 	one.style.top = -scroll * 5 + "px";
	
// }

function parallaxHeader() {
	var scroll = window.pageYOffset;
	seven.style.top = -scroll * 0.05 + "px";
	six.style.top = -scroll * 0.15 + "px";
	five.style.top = -scroll * 0.35 + "px";
	four.style.top = -scroll * 0.6 + "px";
	three.style.top = -scroll * 0.85 + "px";
	two.style.top = -scroll * 1 + "px";
	one.style.top = -scroll * 1.8 + "px";
	
}

window.addEventListener("scroll", function(){
	requestAnimationFrame(parallaxHeader);
	}, false);