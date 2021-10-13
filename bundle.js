/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "../node_modules/css-loader/dist/runtime/api.js":
/*!******************************************************!*\
  !*** ../node_modules/css-loader/dist/runtime/api.js ***!
  \******************************************************/
/***/ ((module) => {

"use strict";
eval("\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\n\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === \"string\") {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \"\"]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack:///../node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "../node_modules/css-loader/dist/runtime/getUrl.js":
/*!*********************************************************!*\
  !*** ../node_modules/css-loader/dist/runtime/getUrl.js ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    // eslint-disable-next-line no-param-reassign\n    options = {};\n  }\n\n  if (!url) {\n    return url;\n  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign\n\n\n  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    // eslint-disable-next-line no-param-reassign\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    // eslint-disable-next-line no-param-reassign\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack:///../node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "../node_modules/html-loader/dist/runtime/getUrl.js":
/*!**********************************************************!*\
  !*** ../node_modules/html-loader/dist/runtime/getUrl.js ***!
  \**********************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    // eslint-disable-next-line no-param-reassign\n    options = {};\n  }\n\n  if (!url) {\n    return url;\n  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign\n\n\n  url = String(url.__esModule ? url.default : url);\n\n  if (options.hash) {\n    // eslint-disable-next-line no-param-reassign\n    url += options.hash;\n  }\n\n  if (options.maybeNeedQuotes && /[\\t\\n\\f\\r \"'=<>`]/.test(url)) {\n    return \"\\\"\".concat(url, \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack:///../node_modules/html-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.html */ \"./index.html\");\n/* harmony import */ var _css_main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css/main.scss */ \"./css/main.scss?bd63\");\n/* harmony import */ var _js_main_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/main.js */ \"./js/main.js?9e1e\");\n/* harmony import */ var _js_main_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_js_main_js__WEBPACK_IMPORTED_MODULE_2__);\n/*\n * This is the main entry point for Webpack, the compiler & dependency loader.\n * All files that are necessary for your web page and need to be 'watched' for changes should be included here!\n */\n// HTML Files\n // Stylesheets\n\n // Scripts\n\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./js/main.js?9e1e":
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
/***/ (() => {

eval("/* Your JS here. */\nvar nav = document.getElementById('nav');\nvar sections = document.querySelectorAll('section');\nvar navLi = document.querySelectorAll('#nav ul li');\nvar modal = document.getElementById(\"myModal\");\n\nfunction user_scroll() {\n  var navbar = document.getElementById(\"nav\");\n\n  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {\n    navbar.style.padding = \"5px 10px\";\n  } else {\n    navbar.style.padding = \"20px 10px\";\n  }\n} // reference: https://www.youtube.com/watch?v=RsPWEmfOQdU (highlighted menu bar)\n\n\nfunction menu_scroll() {\n  // default active is home\n  var current = 'home';\n  sections.forEach(function (section) {\n    var sectionTop = section.offsetTop;\n    var sectionHeight = section.offsetHeight; // if we are at the top of a section\n\n    if (scrollY >= sectionTop - sectionHeight / 2) {\n      current = section.getAttribute('id');\n    }\n  }); // update highlighted part of menu\n\n  navLi.forEach(function (li) {\n    li.classList.remove('active');\n\n    if (li.classList.contains(current)) {\n      li.classList.add('active');\n    }\n  });\n} // reference: https://www.w3schools.com/howto/howto_js_slideshow.asp\n// initialize with first index image\n\n\nvar slideIndex = 1;\nshowSlides(slideIndex); // Thumbnail image controls\n\nfunction currentSlide(n) {\n  showSlides(slideIndex = n);\n} // next arrow - increment to next slide\n\n\nfunction plusSlides() {\n  showSlides(slideIndex += 1);\n} // prev arrow - decrement to next slide\n\n\nfunction minusSlides() {\n  showSlides(slideIndex -= 1);\n} // displays image slide at position n\n\n\nfunction showSlides(n) {\n  var i;\n  var slides = document.getElementsByClassName(\"slide\");\n  var dots = document.getElementsByClassName(\"dot\"); // replace with image at index n\n  // edge cases - wrap around to make slideshow circular\n\n  if (n > slides.length) {\n    slideIndex = 1;\n  }\n\n  if (n < 1) {\n    slideIndex = slides.length;\n  } // set all slides to invisible\n\n\n  for (i = 0; i < slides.length; i++) {\n    slides[i].style.display = \"none\";\n  } // set all dots to inactive\n\n\n  for (i = 0; i < dots.length; i++) {\n    dots[i].className = dots[i].className.replace(\" active\", \"\");\n  } // set current slide to display\n\n\n  slides[slideIndex - 1].style.display = \"block\";\n  dots[slideIndex - 1].className += \" active\";\n} // reference: https://www.w3schools.com/howto/howto_css_modal_images.asp\n// https://stackoverflow.com/questions/47798971/several-modal-images-on-page\n\n\nvar images = document.getElementsByClassName(\"modal_images\");\nvar modalImg = document.getElementById(\"mod_display\"); // caption text is alt of img\n\nvar captionText = document.getElementById(\"caption\"); // add modal class to each image\n\nfor (var idx = 0; idx < images.length; idx++) {\n  var img = images[idx]; // for each image, add modal onclick\n\n  img.onclick = function () {\n    modal.style.display = \"block\";\n    modalImg.src = this.src;\n    captionText.innerHTML = this.alt;\n  };\n} // close modal\n\n\nvar span = document.getElementsByClassName(\"close\")[0];\n\nspan.onclick = function () {\n  modal.style.display = \"none\";\n}; // add event listeners for scrolling and buttons\n\n\nwindow.addEventListener('scroll', function () {\n  user_scroll();\n});\nwindow.addEventListener('scroll', function () {\n  menu_scroll();\n}); // when window is resized, recalculate section sizes\n\nwindow.addEventListener('resize', function () {\n  menu_scroll();\n});\ndocument.getElementById(\"prev\").addEventListener(\"click\", function () {\n  minusSlides();\n});\ndocument.getElementById(\"next\").addEventListener(\"click\", function () {\n  plusSlides();\n});\n\n//# sourceURL=webpack:///./js/main.js?");

/***/ }),

/***/ "../node_modules/css-loader/dist/cjs.js!../node_modules/postcss-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./css/main.scss":
/*!*************************************************************************************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!../node_modules/postcss-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./css/main.scss ***!
  \*************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"../node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ \"../node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/rainier.jpg */ \"./assets/rainier.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/arrow.png */ \"./assets/arrow.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(___CSS_LOADER_URL_IMPORT_1___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"/* Your SCSS here. */\\n:root {\\n  --dark: #252850;\\n  --light: #9085c4;\\n  --white: #DEE4E7;\\n  --black: #444444;\\n  --secondary: #FFC17A;\\n}\\n\\nbody {\\n  margin: 0;\\n}\\n\\nhtml {\\n  scroll-behavior: smooth;\\n}\\n\\n#nav {\\n  background-color: var(--dark);\\n  top: 0;\\n  width: 100%;\\n  overflow: hidden;\\n  padding: 20px;\\n  z-index: 3;\\n  position: fixed;\\n}\\n\\n#nav ul {\\n  display: flex;\\n  list-style: none;\\n  margin: 0;\\n  padding-right: 10rem;\\n  float: right;\\n}\\n\\n#nav li {\\n  width: auto;\\n  padding: 0;\\n}\\n\\n#nav ul li.active {\\n  background-color: var(--secondary);\\n}\\n\\n#nav a {\\n  color: var(--light);\\n  text-decoration: none;\\n  font-family: \\\"Quicksand\\\";\\n  font-size: 20px;\\n  font-weight: bold;\\n  padding: 10px 20px;\\n}\\n\\n#nav a:hover {\\n  color: var(--white);\\n}\\n\\n#home {\\n  min-width: -webkit-fit-content;\\n  min-width: -moz-fit-content;\\n  min-width: fit-content;\\n  width: 100%;\\n  height: 100vh;\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\n  background-position: center;\\n  background-size: cover;\\n}\\n\\n#nameheader {\\n  z-index: 2;\\n  text-align: center;\\n  font-family: \\\"Quicksand\\\";\\n  color: var(--white);\\n  position: absolute;\\n  line-height: 80px;\\n  top: 50%;\\n  left: 50%;\\n  transform: translateX(-50%) translateY(-50%);\\n}\\n\\n#nameheader h1 {\\n  font-size: 80px;\\n  font-weight: bolder;\\n  margin: 0;\\n}\\n\\nspan.name {\\n  color: var(--secondary);\\n}\\n\\nspan.hello {\\n  color: var(--light);\\n}\\n\\n#nameheader h3 {\\n  font-size: 40px;\\n  font-weight: bold;\\n  line-height: 40px;\\n}\\n\\n#nameheader img {\\n  max-width: 50%;\\n  min-width: 300px;\\n  height: auto;\\n  border-radius: 50%;\\n}\\n\\n.arrow {\\n  position: relative;\\n  bottom: -50px;\\n  left: 50%;\\n  margin-left: -40px;\\n  width: 80px;\\n  height: 80px;\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \");\\n  background-size: contain;\\n}\\n\\n#travel {\\n  text-align: center;\\n  font-family: \\\"Quicksand\\\";\\n  width: 100%;\\n}\\n\\n#travel h1 {\\n  text-align: left;\\n  font-size: 60px;\\n  margin-left: 5rem;\\n  color: var(--light);\\n}\\n\\n#travel h3 {\\n  color: var(--dark);\\n}\\n\\n.photo_row {\\n  display: flex;\\n  flex-wrap: wrap;\\n  position: relative;\\n  justify-content: center;\\n  max-width: 1500px;\\n  margin: auto;\\n}\\n\\n.column {\\n  flex: 33.33%;\\n}\\n\\n.column img {\\n  width: 100%;\\n  height: 100%;\\n}\\n\\n#mod_img {\\n  cursor: pointer;\\n}\\n\\n#mod_img:hover {\\n  opacity: 0.6;\\n}\\n\\n.modal {\\n  display: none;\\n  position: fixed;\\n  z-index: 4;\\n  padding-top: 50px;\\n  left: 0;\\n  top: 0;\\n  width: 100%;\\n  height: 100%;\\n  overflow: auto;\\n  background-color: black;\\n}\\n\\n.modal-content {\\n  margin: auto;\\n  display: block;\\n  width: 80%;\\n  max-width: 600px;\\n}\\n\\n#caption {\\n  margin: auto;\\n  display: block;\\n  width: 80%;\\n  max-width: 600px;\\n  text-align: center;\\n  color: var(--white);\\n  padding: 10px 0;\\n  height: 150px;\\n}\\n\\n.close {\\n  cursor: pointer;\\n  position: absolute;\\n  top: 15px;\\n  right: 40px;\\n  color: var(--white);\\n  font-size: 40px;\\n}\\n\\n.carousel {\\n  text-align: center;\\n  max-width: 1000px;\\n  margin: auto;\\n  position: relative;\\n}\\n\\n* {\\n  box-sizing: border-box;\\n}\\n\\n.slide {\\n  display: none;\\n}\\n\\n.slide img {\\n  max-width: 500px;\\n}\\n\\n.dot {\\n  cursor: pointer;\\n  height: 15px;\\n  width: 15px;\\n  margin: 0 2px;\\n  background-color: var(--light);\\n  border-radius: 50%;\\n  display: inline-block;\\n  transition: background-color 0.6s ease;\\n}\\n\\n.cursor {\\n  cursor: pointer;\\n}\\n\\n#prev {\\n  cursor: pointer;\\n  position: absolute;\\n  top: 50%;\\n  padding: 16px;\\n  margin-top: -50px;\\n  color: var(--light);\\n  font-size: 30px;\\n}\\n\\n#next {\\n  cursor: pointer;\\n  position: absolute;\\n  top: 50%;\\n  padding: 16px;\\n  margin-top: -50px;\\n  color: var(--light);\\n  font-weight: bold;\\n  font-size: 30px;\\n  right: 0;\\n}\\n\\n.active, .dot:hover {\\n  background-color: var(--dark);\\n}\\n\\n#dotbuttons {\\n  text-align: center;\\n}\\n\\n.fade {\\n  -webkit-animation-name: fade;\\n  -webkit-animation-duration: 1.5s;\\n  animation-name: fade;\\n  animation-duration: 1.5s;\\n}\\n\\n@-webkit-keyframes fade {\\n  from {\\n    opacity: 0.4;\\n  }\\n  to {\\n    opacity: 1;\\n  }\\n}\\n@keyframes fade {\\n  from {\\n    opacity: 0.4;\\n  }\\n  to {\\n    opacity: 1;\\n  }\\n}\\n#connect {\\n  width: 100%;\\n  text-align: center;\\n  font-family: \\\"Quicksand\\\";\\n}\\n\\n#connect h1 {\\n  text-align: left;\\n  font-size: 60px;\\n  margin-left: 5rem;\\n  color: var(--light);\\n}\\n\\n#connect h3 {\\n  color: var(--dark);\\n}\\n\\n#professional i {\\n  color: var(--dark);\\n  padding: 10px 20px;\\n  text-decoration: none;\\n}\\n\\n#connect a {\\n  text-decoration: none;\\n}\\n\\n#resume_header h2 {\\n  text-align: left;\\n  font-size: 40px;\\n  padding-left: 8rem;\\n  color: var(--light);\\n}\\n\\n#social a {\\n  text-decoration: none;\\n}\\n\\n#social i {\\n  color: var(--light);\\n  padding: 10px 20px;\\n}\\n\\n@media (min-width: 1200px) {\\n  .resume {\\n    display: grid;\\n    grid-template-columns: 1fr 2fr;\\n    grid-template-rows: 1fr 1fr 1fr 1fr;\\n    grid-template-areas: \\\"uiuc_photo uiuc_desc\\\" \\\"c1_photo c1_desc\\\" \\\"cargill_photo cargill_desc\\\" \\\"bp_photo bp_desc\\\";\\n    text-align: center;\\n  }\\n}\\n.c1_photo img, .cargill_photo img, .uiuc_photo img, .bp_photo img {\\n  max-height: 150px;\\n}\\n\\n.c1_desc, .cargill_desc, .uiuc_desc, .bp_desc {\\n  line-height: 15px;\\n  text-align: left;\\n}\\n\\n#footer {\\n  font-family: \\\"Quicksand\\\";\\n  text-align: right;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./css/main.scss?../node_modules/css-loader/dist/cjs.js!../node_modules/postcss-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./index.html":
/*!********************!*\
  !*** ./index.html ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/html-loader/dist/runtime/getUrl.js */ \"../node_modules/html-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./css/main.scss */ \"./css/main.scss?122f\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./js/main.js */ \"./js/main.js?db67\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/avatar.jpg */ \"./assets/avatar.jpg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/uiuc.png */ \"./assets/uiuc.png\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/c1.png */ \"./assets/c1.png\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/cargill.png */ \"./assets/cargill.png\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/bp.png */ \"./assets/bp.png\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_7___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/sunrise.jpg */ \"./assets/sunrise.jpg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_8___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/sunset.jpg */ \"./assets/sunset.jpg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_9___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/canyon.jpg */ \"./assets/canyon.jpg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_10___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/seattle.jpg */ \"./assets/seattle.jpg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_11___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/oregon.jpg */ \"./assets/oregon.jpg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_12___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/block.jpg */ \"./assets/block.jpg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_13___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/nj.mp4 */ \"./assets/nj.mp4\"), __webpack_require__.b);\n// Module\nvar ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);\nvar ___HTML_LOADER_REPLACEMENT_1___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_1___);\nvar ___HTML_LOADER_REPLACEMENT_2___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_2___);\nvar ___HTML_LOADER_REPLACEMENT_3___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_3___);\nvar ___HTML_LOADER_REPLACEMENT_4___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_4___);\nvar ___HTML_LOADER_REPLACEMENT_5___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_5___);\nvar ___HTML_LOADER_REPLACEMENT_6___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_6___);\nvar ___HTML_LOADER_REPLACEMENT_7___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_7___);\nvar ___HTML_LOADER_REPLACEMENT_8___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_8___);\nvar ___HTML_LOADER_REPLACEMENT_9___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_9___);\nvar ___HTML_LOADER_REPLACEMENT_10___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_10___);\nvar ___HTML_LOADER_REPLACEMENT_11___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_11___);\nvar ___HTML_LOADER_REPLACEMENT_12___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_12___);\nvar ___HTML_LOADER_REPLACEMENT_13___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_13___);\nvar code = \"<!DOCTYPE html>\\n<html lang=\\\"en\\\">\\n\\n<head>\\n    <meta charset=\\\"utf-8\\\" />\\n    <meta http-equiv=\\\"x-ua-compatible\\\" content=\\\"ie=edge\\\">\\n    <meta name=\\\"viewport\\\" content=\\\"width=device-width, initial-scale=1.0\\\">\\n    <link rel=\\\"stylesheet\\\" href=\\\"\" + ___HTML_LOADER_REPLACEMENT_0___ + \"\\\">\\n    <link rel=\\\"stylesheet\\\" href=\\\"https://fonts.googleapis.com/css?family=Quicksand:400,500,700\\\">\\n    <link rel=\\\"stylesheet\\\" href=\\\"https://use.fontawesome.com/releases/v5.7.2/css/all.css\\\"\\n        integrity=\\\"sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr\\\" crossorigin=\\\"anonymous\\\">\\n    <script src=\\\"\" + ___HTML_LOADER_REPLACEMENT_1___ + \"\\\"></script>\\n    <title>Caleb Chow</title>\\n</head>\\n\\n<body>\\n    <section id=\\\"home\\\">\\n        <nav id=\\\"nav\\\">\\n            <ul>\\n                <li class=\\\"home active\\\"><a href=\\\"#home\\\">home</a></li>\\n                <li class=\\\"connect\\\"><a href=\\\"#connect\\\">connect</a></li>\\n                <li class=\\\"travel\\\"><a href=\\\"#travel\\\">travel</a></li>\\n            </ul>\\n        </nav>\\n        <div id=\\\"nameheader\\\">\\n            <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_2___ + \"\\\" alt=\\\"Avatar\\\">\\n            <h1><span class=\\\"hello\\\">hello!</span> i'm <span class=\\\"name\\\">caleb</span>.</h1>\\n            <h3>welcome to my website.</h3>\\n        </div>\\n    </section>\\n    <section id=\\\"connect\\\">\\n        <h1>> connect</h1>\\n        <div id=\\\"professional\\\">\\n            <a target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\" href=\\\"https://www.linkedin.com/in/calebchow9/\\\">\\n                <i class=\\\"fab fa-linkedin-in fa-4x\\\"></i>\\n            </a>\\n            <a target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\" href=\\\"https://github.com/calebchow9\\\">\\n                <i class=\\\"fab fa-github fa-4x\\\"></i>\\n            </a>\\n            <a target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\" href=\\\"mailto:calebchow9@gmail.com\\\">\\n                <i class=\\\"fas fa-envelope fa-4x\\\"></i>\\n            </a>\\n        </div>\\n        <h3>connect with me!</h3>\\n        <div id=\\\"resume_header\\\">\\n            <h2>> resume</h2>\\n        </div>\\n        <article class=\\\"resume\\\">\\n            <div class=\\\"grid-area uiuc_photo\\\">\\n                <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_3___ + \"\\\" alt=\\\"UIUC\\\">\\n            </div>\\n            <div class=\\\"grid-area uiuc_desc\\\">\\n                <h3>University of Illinois at Urbana-Champaign, Grainger College of Engineering</h3>\\n                <h4>Bachelor of Science in Computer Engineering, Minor in Business</h4>\\n                <p>August 2018 - May 2022</p>\\n                <br>\\n            </div>\\n            <div class=\\\"grid-area c1_photo\\\">\\n                <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_4___ + \"\\\" alt=\\\"Capital One\\\">\\n            </div>\\n            <div class=\\\"grid-area c1_desc\\\">\\n                <h3>Software Engineering Intern (McLean, VA)</h3>\\n                <p>June 2021 - August 2021</p>\\n                <ul>\\n                    <li>\\n                        <p>Developed analytics tracker built into Android banking app to measure user authentication\\n                            method success</p>\\n                    </li>\\n                    <li>\\n                        <p>Designed processor using Kotlin to bundle generated analytics and send to backend database\\n                        </p>\\n                    </li>\\n                    <li>\\n                        <p>Integrated behavioral analytics library into the mobile authentication SDK to create models\\n                            of credibility per customer</p>\\n                    </li>\\n                </ul>\\n            </div>\\n            <div class=\\\"grid-area cargill_photo\\\">\\n                <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_5___ + \"\\\" alt=\\\"Cargill\\\">\\n            </div>\\n            <div class=\\\"grid-area cargill_desc\\\">\\n                <h3>Software Engineering Intern (Champaign, IL)</h3>\\n                <p>January 2021 - April 2021</p>\\n                <ul>\\n                    <li>\\n                        <p>Developed a mobile app for an internal options trading platform using Angular with Ionic\\n                            framework</p>\\n                    </li>\\n                    <li>\\n                        <p>Designed screens for portfolios, positions, and market values through fetching data from API\\n                            requests\\n                        </p>\\n                    </li>\\n                    <li>\\n                        <p>Implemented two-step Okta authorization in-app to ensure customer portfolio security</p>\\n                    </li>\\n                </ul>\\n            </div>\\n            <div class=\\\"grid-area bp_photo\\\">\\n                <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_6___ + \"\\\" alt=\\\"BP\\\">\\n            </div>\\n            <div class=\\\"grid-area cargill_desc\\\">\\n                <h3>Data Science/AI Intern (Champaign, IL)</h3>\\n                <p>September 2020 - December 2020</p>\\n                <ul>\\n                    <li>\\n                        <p>Designed image processing technique using edge detection models to read analog gauges on wind\\n                            turbines</p>\\n                    </li>\\n                    <li>\\n                        <p>Implemented computer vision for real time maintenance detection, optimizing costs\\n                        </p>\\n                    </li>\\n                    <li>\\n                        <p>Visualized temperature and vibration data using Python to determine remaining useful life of\\n                            bearings</p>\\n                    </li>\\n                </ul>\\n            </div>\\n        </article>\\n    </section>\\n    <section id=\\\"travel\\\">\\n        <h1>> travel</h1>\\n        <h3>summer 2021</h3>\\n        <div class=\\\"photo_row\\\">\\n            <div class=\\\"column\\\">\\n                <img class=\\\"modal_images\\\" id=\\\"mod_img\\\" src=\\\"\" + ___HTML_LOADER_REPLACEMENT_7___ + \"\\\" alt=\\\"Sunrise in Sedona\\\">\\n            </div>\\n            <div class=\\\"column\\\">\\n                <img class=\\\"modal_images\\\" id=\\\"mod_img\\\" src=\\\"\" + ___HTML_LOADER_REPLACEMENT_8___ + \"\\\" alt=\\\"Sunset in Sedona\\\">\\n            </div>\\n            <div class=\\\"column\\\">\\n                <img class=\\\"modal_images\\\" id=\\\"mod_img\\\" src=\\\"\" + ___HTML_LOADER_REPLACEMENT_9___ + \"\\\" alt=\\\"Grand Canyon\\\">\\n            </div>\\n            <div id=\\\"myModal\\\" class=\\\"modal\\\">\\n                <span class=\\\"close\\\">&times;</span>\\n                <img class=\\\"modal-content\\\" id=\\\"mod_display\\\">\\n                <div id=\\\"caption\\\"></div>\\n            </div>\\n        </div>\\n        <p> click on an image to view in modal</p>\\n        <br>\\n        <br>\\n        <div class=\\\"carousel\\\">\\n            <div class=\\\"slide fade\\\">\\n                <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_10___ + \"\\\" alt=\\\"Kerry Park. Seattle WA\\\">\\n            </div>\\n            <div class=\\\"slide fade\\\">\\n                <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_11___ + \"\\\" alt=\\\"Ecola State Park, Oregon\\\">\\n            </div>\\n            <div class=\\\"slide fade\\\">\\n                <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_12___ + \"\\\" alt=\\\"Block Island, Rhode Island\\\">\\n            </div>\\n            <div id=\\\"prev\\\">&#10094;</div>\\n            <div id=\\\"next\\\">&#10095;</div>\\n        </div>\\n        <br>\\n        <div id=\\\"dotbuttons\\\">\\n            <span class=\\\"dot\\\" onclick=\\\"currentSlide(1)\\\"></span>\\n            <span class=\\\"dot\\\" onclick=\\\"currentSlide(2)\\\"></span>\\n            <span class=\\\"dot\\\" onclick=\\\"currentSlide(3)\\\"></span>\\n        </div>\\n        <video width=\\\"720\\\" height=\\\"480\\\" controls>\\n            <source src=\\\"\" + ___HTML_LOADER_REPLACEMENT_13___ + \"\\\" type=\\\"video/mp4\\\">\\n            Your browser does not support the video tag.\\n        </video>\\n        <p>hiking in new jersey</p>\\n\\n        <h3>find more pictures on my social media:</h3>\\n        <div id=\\\"social\\\">\\n            <a target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\" href=\\\"\\\">\\n                <i class=\\\"fab fa-facebook-square fa-4x\\\"></i>\\n            </a>\\n            <a target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\" href=\\\"\\\">\\n                <i class=\\\"fab fa-instagram fa-4x\\\"></i>\\n            </a>\\n            <a target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\" href=\\\"\\\">\\n                <i class=\\\"fab fa-twitter fa-4x\\\"></i>\\n            </a>\\n        </div>\\n    </section>\\n    <div id=\\\"footer\\\">\\n        <p>Coded for MP1 of CS498RK by Caleb Chow, 2021</p>\\n    </div>\\n</body>\\n\\n</html>\";\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);\n\n//# sourceURL=webpack:///./index.html?");

/***/ }),

/***/ "./css/main.scss?bd63":
/*!***********************!*\
  !*** ./css/main.scss ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"../node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"../node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"../node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"../node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/postcss-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ \"../node_modules/css-loader/dist/cjs.js!../node_modules/postcss-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./css/main.scss\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__.default, options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__.default && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__.default.locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__.default.locals : undefined);\n\n\n//# sourceURL=webpack:///./css/main.scss?");

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!*****************************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!*********************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack:///../node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!***********************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \***********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var style = document.createElement(\"style\");\n  options.setAttributes(style, options.attributes);\n  options.insert(style);\n  return style;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack:///../node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!***********************************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \***********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(style) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    style.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack:///../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!****************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \****************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction apply(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute(\"media\", media);\n  } else {\n    style.removeAttribute(\"media\");\n  }\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, style);\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var style = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(style, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(style);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack:///../node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!**********************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, style) {\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack:///../node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./js/main.js?db67":
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"fe75281e17d0b89ec3ce.js\";\n\n//# sourceURL=webpack:///./js/main.js?");

/***/ }),

/***/ "./css/main.scss?122f":
/*!***********************!*\
  !*** ./css/main.scss ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"1b1676ce0380ca5fc369.scss\";\n\n//# sourceURL=webpack:///./css/main.scss?");

/***/ }),

/***/ "./assets/nj.mp4":
/*!***********************!*\
  !*** ./assets/nj.mp4 ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"c9335b7abb5d8a317960.mp4\";\n\n//# sourceURL=webpack:///./assets/nj.mp4?");

/***/ }),

/***/ "./assets/arrow.png":
/*!**************************!*\
  !*** ./assets/arrow.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"e9d81ae4f4a75f184523.png\";\n\n//# sourceURL=webpack:///./assets/arrow.png?");

/***/ }),

/***/ "./assets/avatar.jpg":
/*!***************************!*\
  !*** ./assets/avatar.jpg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"9ffa7971aa710a80f03e.jpg\";\n\n//# sourceURL=webpack:///./assets/avatar.jpg?");

/***/ }),

/***/ "./assets/block.jpg":
/*!**************************!*\
  !*** ./assets/block.jpg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"0bd16e58b05d324c80ec.jpg\";\n\n//# sourceURL=webpack:///./assets/block.jpg?");

/***/ }),

/***/ "./assets/bp.png":
/*!***********************!*\
  !*** ./assets/bp.png ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"41748c8a8864653570f0.png\";\n\n//# sourceURL=webpack:///./assets/bp.png?");

/***/ }),

/***/ "./assets/c1.png":
/*!***********************!*\
  !*** ./assets/c1.png ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"4976f24cdd0ae0fb8820.png\";\n\n//# sourceURL=webpack:///./assets/c1.png?");

/***/ }),

/***/ "./assets/canyon.jpg":
/*!***************************!*\
  !*** ./assets/canyon.jpg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"3bc8f6864f4cf27e0f22.jpg\";\n\n//# sourceURL=webpack:///./assets/canyon.jpg?");

/***/ }),

/***/ "./assets/cargill.png":
/*!****************************!*\
  !*** ./assets/cargill.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"37010bfa5356caeb63cc.png\";\n\n//# sourceURL=webpack:///./assets/cargill.png?");

/***/ }),

/***/ "./assets/oregon.jpg":
/*!***************************!*\
  !*** ./assets/oregon.jpg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"1792a5f9a05844eefc01.jpg\";\n\n//# sourceURL=webpack:///./assets/oregon.jpg?");

/***/ }),

/***/ "./assets/rainier.jpg":
/*!****************************!*\
  !*** ./assets/rainier.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"3cdf17587962a3bb1848.jpg\";\n\n//# sourceURL=webpack:///./assets/rainier.jpg?");

/***/ }),

/***/ "./assets/seattle.jpg":
/*!****************************!*\
  !*** ./assets/seattle.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"f766d1aac8d56432a3f0.jpg\";\n\n//# sourceURL=webpack:///./assets/seattle.jpg?");

/***/ }),

/***/ "./assets/sunrise.jpg":
/*!****************************!*\
  !*** ./assets/sunrise.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"c8f1614f946930ea70bf.jpg\";\n\n//# sourceURL=webpack:///./assets/sunrise.jpg?");

/***/ }),

/***/ "./assets/sunset.jpg":
/*!***************************!*\
  !*** ./assets/sunset.jpg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"ae968c3b6d0252c15e8d.jpg\";\n\n//# sourceURL=webpack:///./assets/sunset.jpg?");

/***/ }),

/***/ "./assets/uiuc.png":
/*!*************************!*\
  !*** ./assets/uiuc.png ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"6e993ac0424c63b98f32.png\";\n\n//# sourceURL=webpack:///./assets/uiuc.png?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;