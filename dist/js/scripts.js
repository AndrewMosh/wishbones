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

/***/ "./app/scripts/href.ts":
/*!*****************************!*\
  !*** ./app/scripts/href.ts ***!
  \*****************************/
/***/ (() => {

eval("(function () {\n    var links = document.querySelectorAll('a[href*=\"#\"]');\n    if (links.length <= 0)\n        return;\n    var marginTop = 100;\n    if (window.innerWidth <= 768)\n        marginTop = 80;\n    window.addEventListener(\"resize\", function () {\n        if (window.innerWidth <= 768) {\n            marginTop = 80;\n        }\n    });\n    links.forEach(function (link) {\n        link.addEventListener(\"click\", function (e) {\n            var blockID = link.getAttribute(\"href\").substr(1);\n            if (blockID && blockID !== \"\") {\n                var elem = document.querySelector(\"#\".concat(blockID));\n                if (elem) {\n                    e.preventDefault();\n                    window.scrollBy({\n                        top: elem.getBoundingClientRect().top - marginTop,\n                        left: 0,\n                        behavior: \"smooth\",\n                    });\n                }\n            }\n        });\n    });\n})();\n\n\n//# sourceURL=webpack://gulp-v5-starter/./app/scripts/href.ts?");

/***/ }),

/***/ "./app/scripts/main.ts":
/*!*****************************!*\
  !*** ./app/scripts/main.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swiper_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./swiper.ts */ \"./app/scripts/swiper.ts\");\n/* harmony import */ var _menu_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.ts */ \"./app/scripts/menu.ts\");\n/* harmony import */ var _menu_ts__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_menu_ts__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _href_ts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./href.ts */ \"./app/scripts/href.ts\");\n/* harmony import */ var _href_ts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_href_ts__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\n\n//# sourceURL=webpack://gulp-v5-starter/./app/scripts/main.ts?");

/***/ }),

/***/ "./app/scripts/menu.ts":
/*!*****************************!*\
  !*** ./app/scripts/menu.ts ***!
  \*****************************/
/***/ (() => {

eval("document.addEventListener('DOMContentLoaded', function () {\n    var burger = document.querySelector('.header__burger');\n    var nav = document.querySelector('.header__nav');\n    burger.addEventListener('click', function () {\n        nav.classList.toggle('header__nav--active');\n    });\n});\n\n\n//# sourceURL=webpack://gulp-v5-starter/./app/scripts/menu.ts?");

/***/ }),

/***/ "./app/scripts/swiper.ts":
/*!*******************************!*\
  !*** ./app/scripts/swiper.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\n\n\n//# sourceURL=webpack://gulp-v5-starter/./app/scripts/swiper.ts?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./app/scripts/main.ts");
/******/ 	
/******/ })()
;