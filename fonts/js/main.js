(function (){
	"use strict";
	console.log("main.js connected");

var screenWidth = window.innerWidth;


var indexH1 = document.querySelector("#title"),
	indexText = document.querySelector("#titleDesc"),
	indexPortfolio = document.querySelector("#goTo"),
	indexContact = document.querySelector("#contact");

var rowingHeader = document.querySelector("#rowingHeader");

var title = document.querySelector("#title");

//console.log(indexH1);

function init() {
//starts span character wrap
    var title = this;
    var newContent = '';
    var length = 



    foreach(i = 0; i < title.text().length; i++) {
      var substring = title.text().substr(i, 1);

      // If we have a character, wrap it
      if (substring != " ") {
        newContent += '<span>' + substring + '</span>';
      } else {
        newContent += substring;
      } 
    }

    // Replace content
    title.innerHTML = newContent; 
  }

//ends span character wrap

	// rowingHeader.style.opacity = 1;
	// rowingHeader.style.left = 0;
//}
// function respond(){
// 	console.log(screenWidth);
// }


window.addEventListener("load", init, false);
// window.addEventListener("resize", respond, false);
	})();