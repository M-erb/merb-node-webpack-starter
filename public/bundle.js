!function(e){var n={};function r(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=n,r.d=function(e,n,t){r.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,n){if(1&n&&(e=r(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(r.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)r.d(t,o,function(n){return e[n]}.bind(null,o));return t},r.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(n,"a",n),n},r.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},r.p="",r(r.s="./index.js")}({"./hello.js":
/*!******************!*\
  !*** ./hello.js ***!
  \******************/
/*! no static exports found */function(module,exports,__webpack_require__){"use strict";eval("\n\nfunction greeting(name) {\n  return `Hello ${name}, how are you?`;\n}\n\nmodule.exports = greeting;\n\n//# sourceURL=webpack:///./hello.js?")},"./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no static exports found */function(module,exports,__webpack_require__){"use strict";eval("\n\n__webpack_require__(/*! ./scss/styles.scss */ \"./scss/styles.scss\");\n\nconst greeting = __webpack_require__(/*! ./hello */ \"./hello.js\");\n\n\nconsole.log(greeting('Billy'));\nconsole.log('hello world');\n\n//# sourceURL=webpack:///./index.js?")},"./scss/styles.scss":
/*!**************************!*\
  !*** ./scss/styles.scss ***!
  \**************************/
/*! no static exports found */function(module,exports,__webpack_require__){eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./scss/styles.scss?")}});