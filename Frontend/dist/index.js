/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module '../style/style.css'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n\nwindow.onload = () => {\n    insertGoogleMapsScript();\n    insertMap();\n}\n\nwindow.initMap = initMap;\n\nconst insertGoogleMapsScript = () => {\n    const API_KEY = \"AIzaSyAocTr9utQPhyBCHSoGYg1Ap_5EIzXcP8g\";\n    const script = document.createElement('script');\n    script.src = `https://maps.googleapis.com/maps/api/js?key=${API_KEY}&libraries=places&callback=initMap`;\n    script.setAttribute(\"defer\", \"defer\");\n    document.head.append(script);\n};\n\nconst insertMap = () => {\n    const mapDiv = document.createElement('div');\n    mapDiv.id = 'map';\n    document.body.append(mapDiv);\n};\n\nfunction initMap() {\n    // Create the map.\n    const map = new google.maps.Map(document.getElementById('map'), {\n        zoom: 7,\n        center: { lat: 52.632469, lng: -1.689423 },\n    });\n}\n\n//# sourceURL=webpack://Frontend/./src/js/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
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
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/index.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;