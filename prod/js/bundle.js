/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

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


/***/ })
/******/ ]);