/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("// import Example from './scripts/example';\n// ctx.fillStyle = '#800080'\n// ctx.fillRect(0,0,900,500);\ndocument.addEventListener('DOMContentLoaded', function () {\n  console.log(\"hello world\");\n  var myCanvas = document.getElementById('mycanvas');\n  myCanvas.width = 100;\n  myCanvas.height = 571006;\n  var ctx = myCanvas.getContext('2d');\n  var background = new Image(); // 1149x860\n\n  background.src = \"../assets/images/top-fridge-door.png\";\n\n  background.onload = function () {\n    // Make sure the image is loaded first otherwise nothing will draw.\n    myCanvas.width = 1024;\n    myCanvas.height = 700;\n    ctx.drawImage(background, 0, 0, background.width, background.height, 0, 0, 1024, 700);\n  };\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJuYW1lcyI6WyJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjb25zb2xlIiwibG9nIiwibXlDYW52YXMiLCJnZXRFbGVtZW50QnlJZCIsIndpZHRoIiwiaGVpZ2h0IiwiY3R4IiwiZ2V0Q29udGV4dCIsImJhY2tncm91bmQiLCJJbWFnZSIsInNyYyIsIm9ubG9hZCIsImRyYXdJbWFnZSJdLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGhlY29vbGVyZGljdGlvbmFyeV9qcy8uL3NyYy9pbmRleC5qcz9iNjM1Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCBFeGFtcGxlIGZyb20gJy4vc2NyaXB0cy9leGFtcGxlJztcblxuXG5cbi8vIGN0eC5maWxsU3R5bGUgPSAnIzgwMDA4MCdcbi8vIGN0eC5maWxsUmVjdCgwLDAsOTAwLDUwMCk7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJoZWxsbyB3b3JsZFwiKVxuXG4gICAgY29uc3QgbXlDYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbXljYW52YXMnKTtcbiAgICBteUNhbnZhcy53aWR0aCA9IDEwMDtcbiAgICBteUNhbnZhcy5oZWlnaHQgPSA1NzEwMDY7XG4gICAgXG4gICAgY29uc3QgY3R4ID0gbXlDYW52YXMuZ2V0Q29udGV4dCgnMmQnKVxuXG4gICAgY29uc3QgYmFja2dyb3VuZCA9IG5ldyBJbWFnZSgpOyAvLyAxMTQ5eDg2MFxuICAgIGJhY2tncm91bmQuc3JjID0gXCIuLi9hc3NldHMvaW1hZ2VzL3RvcC1mcmlkZ2UtZG9vci5wbmdcIjtcbiAgICBiYWNrZ3JvdW5kLm9ubG9hZCA9IGZ1bmN0aW9uKCl7ICAgICAvLyBNYWtlIHN1cmUgdGhlIGltYWdlIGlzIGxvYWRlZCBmaXJzdCBvdGhlcndpc2Ugbm90aGluZyB3aWxsIGRyYXcuXG4gICAgICAgIG15Q2FudmFzLndpZHRoID0gMTAyNDtcbiAgICAgICAgbXlDYW52YXMuaGVpZ2h0ID0gNzAwO1xuICAgICAgICBjdHguZHJhd0ltYWdlKGJhY2tncm91bmQsMCwwLGJhY2tncm91bmQud2lkdGgsYmFja2dyb3VuZC5oZWlnaHQsMCwwLDEwMjQsNzAwKTtcbiAgICB9XG5cblxufSkiXSwibWFwcGluZ3MiOiJBQUFBO0FBSUE7QUFDQTtBQUVBQSxRQUFRLENBQUNDLGdCQUFULENBQTBCLGtCQUExQixFQUE4QyxZQUFNO0VBQ2hEQyxPQUFPLENBQUNDLEdBQVIsQ0FBWSxhQUFaO0VBRUEsSUFBTUMsUUFBUSxHQUFHSixRQUFRLENBQUNLLGNBQVQsQ0FBd0IsVUFBeEIsQ0FBakI7RUFDQUQsUUFBUSxDQUFDRSxLQUFULEdBQWlCLEdBQWpCO0VBQ0FGLFFBQVEsQ0FBQ0csTUFBVCxHQUFrQixNQUFsQjtFQUVBLElBQU1DLEdBQUcsR0FBR0osUUFBUSxDQUFDSyxVQUFULENBQW9CLElBQXBCLENBQVo7RUFFQSxJQUFNQyxVQUFVLEdBQUcsSUFBSUMsS0FBSixFQUFuQixDQVRnRCxDQVNoQjs7RUFDaENELFVBQVUsQ0FBQ0UsR0FBWCxHQUFpQixzQ0FBakI7O0VBQ0FGLFVBQVUsQ0FBQ0csTUFBWCxHQUFvQixZQUFVO0lBQU07SUFDaENULFFBQVEsQ0FBQ0UsS0FBVCxHQUFpQixJQUFqQjtJQUNBRixRQUFRLENBQUNHLE1BQVQsR0FBa0IsR0FBbEI7SUFDQUMsR0FBRyxDQUFDTSxTQUFKLENBQWNKLFVBQWQsRUFBeUIsQ0FBekIsRUFBMkIsQ0FBM0IsRUFBNkJBLFVBQVUsQ0FBQ0osS0FBeEMsRUFBOENJLFVBQVUsQ0FBQ0gsTUFBekQsRUFBZ0UsQ0FBaEUsRUFBa0UsQ0FBbEUsRUFBb0UsSUFBcEUsRUFBeUUsR0FBekU7RUFDSCxDQUpEO0FBT0gsQ0FsQkQifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2Nzcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90aGVjb29sZXJkaWN0aW9uYXJ5X2pzLy4vc3JjL2luZGV4LnNjc3M/OTc0NSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.scss\n");

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
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	__webpack_modules__["./src/index.js"](0, {}, __webpack_require__);
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.scss"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;