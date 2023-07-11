/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/main.css":
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/main.css ***!
  \*********************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/arrow.svg */ "./src/assets/arrow.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".controls {\n  display: flex;\n  flex-direction: column;\n  gap: 10px 10px;\n}\n\nbody {\n  background-color: black;\n  color: #fff;\n}\n\nbutton {\n  cursor: pointer;\n}\n\n.hidden {\n  opacity: 0;\n  visibility: hidden;\n}\n\n.car__list {\n  display: flex;\n  flex-direction: column;\n}\n\n.controls__item {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n\n.car__box {\n  margin-bottom: 5px;\n  border-bottom: 1px dotted #fff;\n}\n\nh1 {\n  margin: 0;\n}\n\n.garage__item {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  position: relative;\n}\n\n.r {\n  width: 100%;\n}\n\n.flag {\n  position: absolute;\n  right: 111px;\n  top: -8px;\n}\n\n.car__image {\n  width: 100px;\n}\n\n.road {\n  width: 100%;\n  border-bottom: 1px solid black;\n  height: 50px;\n}\n\n.disabled {\n  opacity: 0.3;\n  pointer-events: none;\n}\n\n.winners {\n  text-align: center;\n}\n\n.time,\n.wins {\n  cursor: pointer;\n  position: relative;\n}\n\n.ASC::before {\n  transform: rotate(180deg);\n}\n\n.DESC::before {\n  transform: rotate(0deg);\n}\n\n.wins::before,\n.time::before {\n  content: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  position: absolute;\n  left: 47%;\n  top: -18px;\n}\n\n.winners-wrapper {\n  text-align: center;\n}\n\n.winners-page {\n  margin: 0;\n}\n\n.popup {\n  position: fixed;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  color: #fff;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: red;\n  font-size: 40px;\n}\n\n.popup-message {\n  text-shadow: 0px 0px 19px red;\n  color: #fff;\n}\n\nth,\ntd {\n  padding: 5px;\n}\n\n.button-img {\n  cursor: pointer;\n}\n\n.green {\n  background-color: green;\n  color: #fff;\n  font-size: 20px;\n  border-radius: 5px;\n  border: 0;\n  box-shadow: 0px 0px 15px green;\n}\n\n.red {\n  background-color: red;\n  color: #fff;\n  font-size: 20px;\n  border-radius: 5px;\n  border: 0;\n  box-shadow: 0px 0px 15px red;\n}\n\n.garage,\n.page__buttons {\n  text-align: center;\n}\n\n.car__box-buttons {\n  display: flex;\n  gap: 18px;\n  align-items: center;\n}\n\n.yellow {\n  background-color: yellow;\n  color: black;\n  font-size: 20px;\n  border-radius: 5px;\n  border: 0;\n  box-shadow: 0px 0px 15px yellow;\n}\n\n.green:disabled,\n.red:disabled,\n.yellow:disabled {\n  opacity: 0.3;\n}\n\n.navigation {\n  display: flex;\n  justify-content: left;\n  gap: 30px;\n  margin-bottom: 20px;\n}\n\n.nav-link {\n  color: #fff;\n  border-radius: 10px;\n  background-color: seagreen;\n  text-decoration: none;\n  text-transform: uppercase;\n  padding: 5px 20px;\n}\n\n.nav-link:active {\n  background-color: red;\n}\n\n.page-button:active {\n  background-color: red;\n}\n\n.winners-table {\n  table-layout: fixed;\n  width: 100%;\n}", "",{"version":3,"sources":["webpack://./src/main.css"],"names":[],"mappings":"AAAA;EACE,aAAA;EACA,sBAAA;EACA,cAAA;AACF;;AAEA;EACE,uBAAA;EACA,WAAA;AACF;;AAEA;EACE,eAAA;AACF;;AAEA;EAEE,UAAA;EACA,kBAAA;AAAF;;AAGA;EACE,aAAA;EACA,sBAAA;AAAF;;AAGA;EACE,aAAA;EACA,mBAAA;EACA,SAAA;AAAF;;AAGA;EACE,kBAAA;EACA,8BAAA;AAAF;;AAGA;EACE,SAAA;AAAF;;AAGA;EACE,aAAA;EACA,mBAAA;EACA,SAAA;EACA,kBAAA;AAAF;;AAGA;EACE,WAAA;AAAF;;AAGA;EACE,kBAAA;EACA,YAAA;EACA,SAAA;AAAF;;AAGA;EACE,YAAA;AAAF;;AAIA;EACE,WAAA;EACA,8BAAA;EACA,YAAA;AADF;;AAKA;EACE,YAAA;EACA,oBAAA;AAFF;;AAKA;EACE,kBAAA;AAFF;;AAKA;;EAEE,eAAA;EACA,kBAAA;AAFF;;AAKA;EACE,yBAAA;AAFF;;AAKA;EACE,uBAAA;AAFF;;AAKA;;EAEE,gDAAA;EAEA,kBAAA;EACA,SAAA;EACA,UAAA;AAHF;;AAMA;EACE,kBAAA;AAHF;;AAMA;EACE,SAAA;AAHF;;AAMA;EACE,eAAA;EACA,OAAA;EACA,MAAA;EACA,WAAA;EACA,YAAA;EACA,WAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,UAAA;EACA,eAAA;AAHF;;AAMA;EACE,6BAAA;EACA,WAAA;AAHF;;AAMA;;EAEE,YAAA;AAHF;;AAMA;EACE,eAAA;AAHF;;AAMA;EACE,uBAAA;EACA,WAAA;EACA,eAAA;EACA,kBAAA;EACA,SAAA;EACA,8BAAA;AAHF;;AAMA;EACE,qBAAA;EACA,WAAA;EACA,eAAA;EACA,kBAAA;EACA,SAAA;EACA,4BAAA;AAHF;;AAMA;;EAEE,kBAAA;AAHF;;AAQA;EACE,aAAA;EACA,SAAA;EACA,mBAAA;AALF;;AAUA;EACE,wBAAA;EACA,YAAA;EACA,eAAA;EACA,kBAAA;EACA,SAAA;EACA,+BAAA;AAPF;;AAUA;;;EAGE,YAAA;AAPF;;AAWA;EACE,aAAA;EACA,qBAAA;EACA,SAAA;EACA,mBAAA;AARF;;AAWA;EACE,WAAA;EACA,mBAAA;EACA,0BAAA;EACA,qBAAA;EACA,yBAAA;EACA,iBAAA;AARF;;AAWA;EACE,qBAAA;AARF;;AAaA;EACE,qBAAA;AAVF;;AAaA;EACE,mBAAA;EACA,WAAA;AAVF","sourcesContent":[".controls {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 10px 10px;\r\n}\r\n\r\nbody {\r\n  background-color: black;\r\n  color: #fff;\r\n}\r\n\r\nbutton {\r\n  cursor: pointer;\r\n}\r\n\r\n.hidden {\r\n\r\n  opacity: 0;\r\n  visibility: hidden;\r\n}\r\n\r\n.car__list {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.controls__item {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 10px;\r\n}\r\n\r\n.car__box {\r\n  margin-bottom: 5px;\r\n  border-bottom: 1px dotted #fff;\r\n}\r\n\r\nh1 {\r\n  margin: 0;\r\n}\r\n\r\n.garage__item {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 10px;\r\n  position: relative;\r\n}\r\n\r\n.r {\r\n  width: 100%;\r\n}\r\n\r\n.flag {\r\n  position: absolute;\r\n  right: 111px;\r\n  top: -8px;\r\n}\r\n\r\n.car__image {\r\n  width: 100px;\r\n}\r\n\r\n\r\n.road {\r\n  width: 100%;\r\n  border-bottom: 1px solid black;\r\n  height: 50px;\r\n}\r\n\r\n\r\n.disabled {\r\n  opacity: 0.3;\r\n  pointer-events: none;\r\n}\r\n\r\n.winners {\r\n  text-align: center;\r\n}\r\n\r\n.time,\r\n.wins {\r\n  cursor: pointer;\r\n  position: relative;\r\n}\r\n\r\n.ASC::before {\r\n  transform: rotate(180deg);\r\n}\r\n\r\n.DESC::before {\r\n  transform: rotate(0deg);\r\n}\r\n\r\n.wins::before,\r\n.time::before {\r\n  content: url('./assets/arrow.svg');\r\n\r\n  position: absolute;\r\n  left: 47%;\r\n  top: -18px;\r\n}\r\n\r\n.winners-wrapper {\r\n  text-align: center;\r\n}\r\n\r\n.winners-page {\r\n  margin: 0;\r\n}\r\n\r\n.popup {\r\n  position: fixed;\r\n  left: 0;\r\n  top: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  color: #fff;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  color: red;\r\n  font-size: 40px;\r\n}\r\n\r\n.popup-message {\r\n  text-shadow: 0px 0px 19px red;\r\n  color: #fff;\r\n}\r\n\r\nth,\r\ntd {\r\n  padding: 5px;\r\n}\r\n\r\n.button-img {\r\n  cursor: pointer;\r\n}\r\n\r\n.green {\r\n  background-color: green;\r\n  color: #fff;\r\n  font-size: 20px;\r\n  border-radius: 5px;\r\n  border: 0;\r\n  box-shadow: 0px 0px 15px green;\r\n}\r\n\r\n.red {\r\n  background-color: red;\r\n  color: #fff;\r\n  font-size: 20px;\r\n  border-radius: 5px;\r\n  border: 0;\r\n  box-shadow: 0px 0px 15px red;\r\n}\r\n\r\n.garage,\r\n.page__buttons {\r\n  text-align: center;\r\n\r\n}\r\n\r\n\r\n.car__box-buttons {\r\n  display: flex;\r\n  gap: 18px;\r\n  align-items: center;\r\n}\r\n\r\n\r\n\r\n.yellow {\r\n  background-color: yellow;\r\n  color: black;\r\n  font-size: 20px;\r\n  border-radius: 5px;\r\n  border: 0;\r\n  box-shadow: 0px 0px 15px yellow;\r\n}\r\n\r\n.green:disabled,\r\n.red:disabled,\r\n.yellow:disabled {\r\n  opacity: 0.3;\r\n}\r\n\r\n\r\n.navigation {\r\n  display: flex;\r\n  justify-content: left;\r\n  gap: 30px;\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.nav-link {\r\n  color: #fff;\r\n  border-radius: 10px;\r\n  background-color: seagreen;\r\n  text-decoration: none;\r\n  text-transform: uppercase;\r\n  padding: 5px 20px;\r\n}\r\n\r\n.nav-link:active {\r\n  background-color: red;\r\n}\r\n\r\n\r\n\r\n.page-button:active {\r\n  background-color: red;\r\n}\r\n\r\n.winners-table {\r\n  table-layout: fixed;\r\n  width: 100%;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/templates/carTemplate.html":
/*!****************************************!*\
  !*** ./src/templates/carTemplate.html ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/html-loader/dist/runtime/getUrl.js */ "./node_modules/html-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/trash.svg */ "./src/assets/trash.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/update.svg */ "./src/assets/update.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/racing-flag.svg */ "./src/assets/racing-flag.svg"), __webpack_require__.b);
// Module
var ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);
var ___HTML_LOADER_REPLACEMENT_1___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_1___);
var ___HTML_LOADER_REPLACEMENT_2___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_2___);
var code = "<div class=\"car__box-buttons\">\r\n  <img class=\"remove-button button-img\" data-id={{id}} src='" + ___HTML_LOADER_REPLACEMENT_0___ + "'>\r\n  <img class=\"select button-img\" data-id={{id}} src=\"" + ___HTML_LOADER_REPLACEMENT_1___ + "\">\r\n  <span>{{name}}</span>\r\n</div>\r\n<div class=\"garage__item\">\r\n  <button data-id={{id}} class=\"start-button green\">A</button>\r\n  <button data-id={{id}} class=\"stop-button red\">B</button>\r\n  <div class=\"car car_{{id}}\">\r\n    <svg class=\"car__image\" version=\"1.0\" xmlns=\"http://www.w3.org/2000/svg\" width=\"100.000000pt\" height=\"50\"\r\n      viewBox=\"0 0 1280.000000 640.000000\" preserveAspectRatio=\"xMidYMid meet\">\r\n      <g transform=\"translate(0.000000,640.000000) scale(0.100000,-0.100000)\" fill={{color}} stroke=\"none\">\r\n        <path fill={{color}} d=\"M3565 5336 c-106 -30 -101 -26 -108 -111 -4 -42 -9\r\n   -80 -12 -85 -6 -10 -246 -105 -590 -234 -448 -167 -1052 -415 -1173 -483 -78\r\n   -43 -193 -91 -250 -104 -23 -5 -98 -14 -165 -19 -67 -6 -167 -19 -222 -30 -154\r\n   -31 -340 -49 -563 -57 l-203 -6 -43 -66 c-59 -91 -60 -95 -26 -130 37 -37 38 -65 3\r\n   -150 -25 -62 -27 -78 -31 -256 l-4 -190 -38 -32 c-91 -78 -133 -209 -134 -418\r\n   0 -194 11 -396 26 -482 13 -71 14 -74 72 -122 69 -58 130 -129 158 -184 64\r\n   -126 534 -211 1384 -250 l92 -4 -6 119 c-6 142 8 256 49 383 112 352 394 622\r\n   756 722 90 26 112 28 278 28 165 0 188 -2 278 -27 201 -56 361 -152 504 -302\r\n   140 -145 222 -293 274 -492 21 -79 24 -109 23 -279 -1 -127 -6 -214 -16 -263\r\n   l-15 -73 3006 7 c1653 4 3007 8 3009 9 1 1 -8 37 -20 81 -19 67 -22 105 -22\r\n   259 -1 166 1 187 27 279 117 421 467 736 885 797 119 17 325 7 432 -21 239\r\n   -63 453 -205 601 -399 70 -92 154 -267 185 -386 24 -88 27 -119 27 -260 1\r\n   -116 -4 -181 -16 -234 -10 -41 -16 -75 -15 -76 2 -1 62 2 133 6 266 16 458 45\r\n   525 79 48 24 97 81 127 146 l24 52 -16 157 c-15 152 -15 163 4 284 63 388 50\r\n   680 -35 802 -134 193 -526 336 -1429 519 -737 149 -1322 209 -2033 210 -228 0\r\n   -226 0 -347 85 -187 131 -1045 607 -1471 815 -383 187 -788 281 -1439 332\r\n   -208 17 -1106 16 -1400 0 -121 -7 -314 -19 -430 -27 -302 -22 -286 -22 -341\r\n   10 -140 81 -187 94 -269 71z m1885 -333 c6 -37 38 -238 71 -446 32 -209 66\r\n   -422 75 -474 9 -52 15 -96 13 -97 -11 -9 -1699 29 -1951 44 -206 13 -417 36\r\n   -485 54 -98 26 -198 119 -249 231 -35 75 -36 172 -5 255 17 45 30 61 68 86 83\r\n   54 135 80 253 127 341 136 858 230 1460 267 269 16 270 16 511 18 l227 2 12\r\n   -67z m630 47 c264 -18 777 -110 1029 -186 186 -56 445 -188 756 -387 211 -134\r\n   274 -181 250 -185 -75 -12 -133 -50 -162 -106 -19 -35 -21 -136 -4 -179 l11\r\n   -27 -907 2 -906 3 -59 160 c-110 302 -298 878 -298 916 0 6 95 2 290 -11z\" />\r\n        <path d=\"M2633 3125 c-223 -40 -410 -141 -568 -306 -132 -138 -213 -283 -262\r\n   -467 -22 -83 -26 -119 -26 -247 -1 -169 10 -236 65 -382 87 -230 271 -436 493\r\n   -551 85 -44 178 -78 271 -98 107 -23 312 -23 419 1 392 84 699 375 802 761 23\r\n   86 26 120 27 254 1 158 -5 199 -46 330 -98 310 -355 567 -668 669 -150 50\r\n   -354 64 -507 36z m350 -301 c249 -56 457 -247 543 -499 25 -72 28 -95 28 -220\r\n   1 -153 -15 -228 -74 -345 -94 -186 -283 -337 -485 -386 -96 -24 -268 -24 -360\r\n   0 -320 84 -544 355 -562 681 -20 359 209 673 558 765 94 24 253 26 352 4z\" />\r\n        <path d=\"M2600 2697 c-36 -13 -85 -36 -109 -51 l-44 -28 116 -115 c81 -82 120\r\n   -114 131 -110 14 6 16 29 16 167 0 186 6 178 -110 137z\" />\r\n        <path d=\"M2920 2561 c0 -139 2 -162 16 -168 11 -4 50 28 130 108 l115 114 -28\r\n   22 c-34 28 -138 70 -193 79 l-40 7 0 -162z\" />\r\n        <path d=\"M2282 2448 c-28 -36 -92 -191 -92 -225 0 -10 34 -13 165 -13 151 0\r\n   165 1 165 18 0 15 -206 232 -221 232 -4 0 -11 -6 -17 -12z\" />\r\n        <path d=\"M3222 2351 c-62 -59 -112 -115 -112 -124 0 -15 17 -17 165 -17 131 0\r\n   165 3 165 13 0 40 -69 205 -95 227 -7 6 -48 -27 -123 -99z\" />\r\n        <path d=\"M2781 2332 c-12 -22 11 -62 34 -62 8 0 21 10 29 22 20 28 4 58 -29 58\r\n   -13 0 -29 -8 -34 -18z\" />\r\n        <path d=\"M2749 2161 c-32 -33 -37 -67 -14 -110 29 -57 104 -64 151 -14 53 57 9\r\n   153 -71 153 -27 0 -44 -8 -66 -29z\" />\r\n        <path d=\"M2570 2125 c-26 -32 13 -81 48 -59 24 16 27 45 6 61 -23 17 -39 16 -54 -2z\" />\r\n        <path d=\"M3006 2124 c-20 -19 -20 -38 -2 -54 23 -19 61 -8 64 18 7 44 -32 67 -62 36z\" />\r\n        <path d=\"M2190 1975 c0 -29 41 -140 72 -194 l31 -53 117 117 c71 71 116 123 113\r\n   131 -4 11 -40 14 -169 14 -141 0 -164 -2 -164 -15z\" />\r\n        <path d=\"M3110 1972 c0 -9 51 -68 114 -131 l114 -114 31 54 c30 51 71 165 71 195\r\n   0 11 -31 14 -165 14 -151 0 -165 -1 -165 -18z\" />\r\n        <path d=\"M2780 1901 c-7 -15 -5 -24 8 -41 32 -40 85 -4 62 41 -14 25 -56 25 -70 0z\" />\r\n        <path d=\"M2562 1697 c-61 -62 -112 -115 -112 -119 0 -18 208 -108 249 -108 7\r\n   0 11 54 11 164 0 140 -2 165 -16 170 -9 3 -16 6 -17 6 -1 0 -53 -51 -115 -113z\" />\r\n        <path d=\"M2933 1803 c-15 -6 -19 -333 -4 -333 46 0 251 88 251 108 0 9 -223 232\r\n   -230 231 -3 0 -11 -3 -17 -6z\" />\r\n        <path d=\"M10700 3119 c-390 -84 -696 -376 -797 -759 -31 -117 -41 -292 -24 -411\r\n   33 -227 150 -453 318 -609 267 -250 643 -344 993 -249 117 32 283 118 380 196\r\n   487 396 518 1128 67 1560 -97 93 -166 140 -290 198 -137 64 -235 86 -407 91 -120\r\n   3 -162 0 -240 -17z m445 -313 c238 -81 409 -258 486 -506 30 -96 33 -289 5 -388\r\n   -110 -400 -513 -637 -911 -536 -149 38 -313 147 -402 267 -176 238 -203 533 -71\r\n   797 34 69 60 103 138 180 77 78 111 104 181 139 129 65 207 81 364 77 109 -3 143 -7 210 -30z\" />\r\n        <path d=\"M10703 2700 c-54 -19 -153 -71 -153 -80 0 -3 51 -57 114 -119 80 -80\r\n   119 -112 130 -108 14 5 16 29 16 167 l0 160 -27 -1 c-16 0 -52 -9 -80 -19z\" />\r\n        <path d=\"M11020 2561 c0 -139 2 -162 16 -168 22 -8 247 216 234 232 -17 20 -163\r\n   84 -207 91 l-43 7 0 -162z\" />\r\n        <path d=\"M10366 2424 c-29 -44 -76 -165 -76 -194 0 -19 7 -20 165 -20 126 0 165\r\n   3 165 13 0 7 -51 63 -114 126 l-114 114 -26 -39z\" />\r\n        <path d=\"M11313 2348 c-61 -62 -109 -119 -106 -125 6 -15 333 -19 333 -4 0 45 -88\r\n   241 -108 241 -4 0 -57 -51 -119 -112z\" />\r\n        <path d=\"M10882 2338 c-17 -17 -15 -32 7 -52 16 -14 23 -15 41 -6 31 17 24 64 -10\r\n   68 -14 2 -31 -3 -38 -10z\" />\r\n        <path d=\"M10846 2159 c-68 -81 17 -194 110 -144 89 48 56 175 -46 175 -30 0 -44\r\n   -6 -64 -31z\" />\r\n        <path d=\"M10670 2126 c-19 -23 -8 -61 18 -64 44 -7 67 32 36 62 -19 20 -38 20 -54 2z\" />\r\n        <path d=\"M11106 2127 c-21 -16 -18 -45 7 -61 37 -23 77 35 41 61 -10 7 -21 13 -24\r\n   13 -3 0 -14 -6 -24 -13z\" />\r\n        <path d=\"M10290 1970 c0 -29 43 -141 74 -195 l28 -48 116 116 c81 81 113 120 109\r\n   131 -6 14 -29 16 -167 16 -152 0 -160 -1 -160 -20z\" />\r\n        <path d=\"M11207 1978 c-3 -7 47 -66 111 -130 l116 -118 27 43 c27 44 79 177 79 203\r\n   0 12 -28 14 -164 14 -122 0 -166 -3 -169 -12z\" />\r\n        <path d=\"M10881 1901 c-14 -25 -5 -48 20 -56 27 -9 51 13 47 44 -4 34 -51 43 -67 12z\" />\r\n        <path d=\"M10662 1697 c-61 -62 -112 -115 -112 -119 0 -20 201 -108 247 -108 10 0 13\r\n   34 13 164 0 140 -2 165 -16 170 -9 3 -16 6 -17 6 -1 0 -53 -51 -115 -113z\" />\r\n        <path d=\"M11033 1803 c-10 -3 -13 -47 -13 -169 0 -90 4 -164 8 -164 36 0 186 61 239\r\n   98 16 10 -216 242 -234 235z\" />\r\n      </g>\r\n    </svg>\r\n  </div>\r\n  <div class=\"road road_{{id}}\"></div>\r\n  <img class=\"flag finish_{{id}}\" src=\"" + ___HTML_LOADER_REPLACEMENT_2___ + "\" width=\"50\">\r\n</div>\r\n";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./node_modules/html-loader/dist/runtime/getUrl.js":
/*!*********************************************************!*\
  !*** ./node_modules/html-loader/dist/runtime/getUrl.js ***!
  \*********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  }

  if (!url) {
    return url;
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = String(url.__esModule ? url.default : url);

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  }

  if (options.maybeNeedQuotes && /[\t\n\f\r "'=<>`]/.test(url)) {
    return "\"".concat(url, "\"");
  }

  return url;
};

/***/ }),

/***/ "./src/main.css":
/*!**********************!*\
  !*** ./src/main.css ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/postcss-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./main.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/main.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/App.ts":
/*!********************!*\
  !*** ./src/App.ts ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_Navigation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/Navigation */ "./src/components/Navigation.ts");
/* harmony import */ var _router_Router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./router/Router */ "./src/router/Router.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};


var App = (function () {
    function App() {
        this.body = document.body;
        this.rootElement = document.createElement('div');
        this.rootElement.classList.add('root');
        this.navigation = new _components_Navigation__WEBPACK_IMPORTED_MODULE_0__["default"]();
        this.router = new _router_Router__WEBPACK_IMPORTED_MODULE_1__["default"](this.rootElement);
    }
    App.prototype.start = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.body.append(this.navigation.render());
                this.body.append(this.rootElement);
                this.router.initRouter();
                return [2];
            });
        });
    };
    return App;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);


/***/ }),

/***/ "./src/components/Car.ts":
/*!*******************************!*\
  !*** ./src/components/Car.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _loader_Loader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../loader/Loader */ "./src/loader/Loader.ts");
/* harmony import */ var _utils_animation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/animation */ "./src/utils/animation.ts");
/* harmony import */ var _store_Store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store/Store */ "./src/store/Store.ts");
/* harmony import */ var _types_consts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../types/consts */ "./src/types/consts.ts");
/* harmony import */ var _utils_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/component */ "./src/utils/component.ts");
/* harmony import */ var _templates_carTemplate_html__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../templates/carTemplate.html */ "./src/templates/carTemplate.html");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};






var Car = (function () {
    function Car(_a) {
        var id = _a.id, name = _a.name, color = _a.color;
        var _this = this;
        this.startEngine = function () { return __awaiter(_this, void 0, void 0, function () {
            var engine, velocity, distance;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, _loader_Loader__WEBPACK_IMPORTED_MODULE_0__.loader.switchEngine(this.id, _types_consts__WEBPACK_IMPORTED_MODULE_3__.ENGINESTATE.STARTED)];
                    case 1:
                        engine = _a.sent();
                        velocity = engine.velocity, distance = engine.distance;
                        (0,_utils_animation__WEBPACK_IMPORTED_MODULE_1__["default"])(this.driver, velocity, distance, this.id);
                        this.switchButtonsState(true);
                        return [2, new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
                                var winnerInfo, _a;
                                return __generator(this, function (_b) {
                                    switch (_b.label) {
                                        case 0:
                                            _b.trys.push([0, 2, , 3]);
                                            return [4, this.drive()];
                                        case 1:
                                            _b.sent();
                                            winnerInfo = {
                                                name: this.name,
                                                id: this.id,
                                                time: _store_Store__WEBPACK_IMPORTED_MODULE_2__.Store.animations[this.id].time / 1000,
                                            };
                                            resolve(winnerInfo);
                                            return [3, 3];
                                        case 2:
                                            _a = _b.sent();
                                            cancelAnimationFrame(_store_Store__WEBPACK_IMPORTED_MODULE_2__.Store.animations[this.id].frame);
                                            return [3, 3];
                                        case 3: return [2];
                                    }
                                });
                            }); })];
                }
            });
        }); };
        this.drive = function () { return __awaiter(_this, void 0, void 0, function () {
            var engine;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, _loader_Loader__WEBPACK_IMPORTED_MODULE_0__.loader.switchEngine(this.id, _types_consts__WEBPACK_IMPORTED_MODULE_3__.ENGINESTATE.DRIVE)];
                    case 1:
                        engine = _a.sent();
                        return [2, engine];
                }
            });
        }); };
        this.stopEngine = function () { return __awaiter(_this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, _loader_Loader__WEBPACK_IMPORTED_MODULE_0__.loader.switchEngine(this.id, _types_consts__WEBPACK_IMPORTED_MODULE_3__.ENGINESTATE.STOPPED)
                            .then(function () {
                            _this.switchButtonsState(false);
                            if (_store_Store__WEBPACK_IMPORTED_MODULE_2__.Store.animations[_this.id]) {
                                cancelAnimationFrame(_store_Store__WEBPACK_IMPORTED_MODULE_2__.Store.animations[_this.id].frame);
                            }
                            _this.driver.style.transform = "translateX(".concat(0, "px)");
                        })];
                    case 1:
                        _a.sent();
                        return [2];
                }
            });
        }); };
        this.switchButtonsState = function (state) {
            _this.engineStatus = state;
            _this.controls[0].disabled = _this.engineStatus;
            _this.controls[1].disabled = !_this.engineStatus;
        };
        this.id = id;
        this.name = name;
        this.color = color;
        this.container = this.getCarHTML();
        this.driver = this.container.querySelector('.car');
        this.controls = [
            this.container.querySelector('.start-button'),
            this.container.querySelector('.stop-button'),
        ];
        this.engineStatus = false;
    }
    Car.prototype.render = function () {
        return this.container;
    };
    Car.prototype.getCarHTML = function () {
        var carHTML = new _utils_component__WEBPACK_IMPORTED_MODULE_4__["default"](null, 'div', ['car-box'], _templates_carTemplate_html__WEBPACK_IMPORTED_MODULE_5__["default"], {
            name: this.name,
            id: "".concat(this.id),
            color: this.color,
        })
            .render();
        return carHTML;
    };
    return Car;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Car);


/***/ }),

/***/ "./src/components/ControlPanel.ts":
/*!****************************************!*\
  !*** ./src/components/ControlPanel.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _store_Store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../store/Store */ "./src/store/Store.ts");

var ControlPanel = (function () {
    function ControlPanel() {
        this.render = function () {
            var controlsHTML = document.createElement('div');
            controlsHTML.classList.add('controls');
            controlsHTML.innerHTML = "\n      <form class=\"create\">\n        <input value=\"".concat(_store_Store__WEBPACK_IMPORTED_MODULE_0__.Store.createInput, "\" type=\"text\" class=\"create-text\" name=\"carName\">\n        <input type=\"color\" class=\"create-color\" value=\"#E3B67E\" name=\"carColor\">\n        <button class=\"green create-button\">create</button>\n\n      </form>\n      <form class=\"update disabled\">\n        <input value=\"").concat(_store_Store__WEBPACK_IMPORTED_MODULE_0__.Store.updateInput, "\" name=\"carName\" type=\"text\" class=\"update-text\">\n        <input name=\"carColor\" type=\"color\" class=\"update-color\" value=\"#E3B67E\">\n        <input name=\"carId\" type=\"hidden\" class=\"update-id \">\n        <button class=\"green form-button update-button \">update</button>\n      </form>\n      <div class=\"controls__item\">\n        <button class=\"green race-button\">race</button>\n        <button class=\"red reset-button\">reset</button>\n        <button class=\"yellow generate-button\">generate cars</button>\n      </div>");
            return controlsHTML;
        };
    }
    return ControlPanel;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ControlPanel);


/***/ }),

/***/ "./src/components/Garage.ts":
/*!**********************************!*\
  !*** ./src/components/Garage.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _loader_Loader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../loader/Loader */ "./src/loader/Loader.ts");
/* harmony import */ var _Car__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Car */ "./src/components/Car.ts");
/* harmony import */ var _store_Store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store/Store */ "./src/store/Store.ts");
/* harmony import */ var _Popup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Popup */ "./src/components/Popup.ts");
/* harmony import */ var _types_consts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../types/consts */ "./src/types/consts.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





var Garage = (function () {
    function Garage() {
        var _this = this;
        this.container = document.createElement('div');
        this.title = document.createElement('h1');
        this.pageTitle = document.createElement('div');
        this.race = function () { return __awaiter(_this, void 0, void 0, function () {
            var racers, winnerInfo, resetButton;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        racers = _store_Store__WEBPACK_IMPORTED_MODULE_2__.Store.carsInGarage.map(function (car) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_b) {
                            return [2, car.startEngine()];
                        }); }); });
                        return [4, Promise.any(racers)];
                    case 1:
                        winnerInfo = _b.sent();
                        resetButton = document.querySelector('.reset-button');
                        resetButton.disabled = false;
                        this.container.append(this.popup.render(winnerInfo));
                        _loader_Loader__WEBPACK_IMPORTED_MODULE_0__.loader.createWinner(winnerInfo);
                        return [2];
                }
            });
        }); };
        this.carList = document.createElement('div');
        this.popup = new _Popup__WEBPACK_IMPORTED_MODULE_3__["default"]();
    }
    Garage.prototype.prevPage = function () {
        if (_store_Store__WEBPACK_IMPORTED_MODULE_2__.Store.currentPage - 1 === 0)
            return;
        _store_Store__WEBPACK_IMPORTED_MODULE_2__.Store.currentPage -= 1;
        this.updateGarage();
    };
    Garage.prototype.nextPage = function () {
        if (_store_Store__WEBPACK_IMPORTED_MODULE_2__.Store.allCarsCount) {
            if (_store_Store__WEBPACK_IMPORTED_MODULE_2__.Store.currentPage + 1
                > Math.ceil(parseInt(_store_Store__WEBPACK_IMPORTED_MODULE_2__.Store.allCarsCount, 10) / _store_Store__WEBPACK_IMPORTED_MODULE_2__.Store.pageSize))
                return;
        }
        _store_Store__WEBPACK_IMPORTED_MODULE_2__.Store.currentPage += 1;
        this.updateGarage();
    };
    Garage.prototype.initGarage = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4, _loader_Loader__WEBPACK_IMPORTED_MODULE_0__.loader.getData("garage?_page=".concat(_store_Store__WEBPACK_IMPORTED_MODULE_2__.Store.currentPage, "&_limit=").concat(_store_Store__WEBPACK_IMPORTED_MODULE_2__.Store.pageSize))
                            .then(function (res) {
                            _store_Store__WEBPACK_IMPORTED_MODULE_2__.Store.allCarsCount = res.headers.get('X-Total-Count');
                            _this.title.innerHTML = "Garage size : ".concat(_store_Store__WEBPACK_IMPORTED_MODULE_2__.Store.allCarsCount);
                            _this.pageTitle.innerHTML = "page : ".concat(_store_Store__WEBPACK_IMPORTED_MODULE_2__.Store.currentPage);
                            return res.json();
                        })
                            .then(function (cars) {
                            _store_Store__WEBPACK_IMPORTED_MODULE_2__.Store.carsInGarage = [];
                            cars.map(function (car) {
                                var newCar = new _Car__WEBPACK_IMPORTED_MODULE_1__["default"](car);
                                _store_Store__WEBPACK_IMPORTED_MODULE_2__.Store.carsInGarage.push(newCar);
                                _this.carList.append(newCar.render());
                                return car;
                            });
                        })];
                    case 1:
                        _b.sent();
                        return [2];
                }
            });
        });
    };
    Garage.prototype.createCar = function (e, randomCar) {
        return __awaiter(this, void 0, void 0, function () {
            var newCar, target;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (randomCar) {
                            newCar = randomCar;
                        }
                        else {
                            e.preventDefault();
                            target = e.target;
                            newCar = {
                                name: target.carName.value,
                                color: target.carColor.value,
                            };
                        }
                        return [4, _loader_Loader__WEBPACK_IMPORTED_MODULE_0__.loader.getData('garage', _types_consts__WEBPACK_IMPORTED_MODULE_4__.METHODS.POST, newCar)];
                    case 1:
                        _b.sent();
                        return [2];
                }
            });
        });
    };
    Garage.prototype.deleteCar = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4, _loader_Loader__WEBPACK_IMPORTED_MODULE_0__.loader.deleteCar(id)
                            .then(function () {
                            _this.updateGarage();
                        })];
                    case 1:
                        _b.sent();
                        return [2];
                }
            });
        });
    };
    Garage.prototype.selectCarToUpdate = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var res, oldCarInfo, updateForm;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4, _loader_Loader__WEBPACK_IMPORTED_MODULE_0__.loader.getData("garage/".concat(id))];
                    case 1:
                        res = _b.sent();
                        return [4, res.json()];
                    case 2:
                        oldCarInfo = _b.sent();
                        updateForm = document.querySelector('.update');
                        if (updateForm) {
                            updateForm.classList.remove('disabled');
                            updateForm.carColor.value = oldCarInfo.color;
                            updateForm.carName.value = oldCarInfo.name;
                            updateForm.carId.value = oldCarInfo.id;
                        }
                        return [2];
                }
            });
        });
    };
    Garage.prototype.updateCar = function (e) {
        return __awaiter(this, void 0, void 0, function () {
            var target, id, updatedCarProps, updateForm;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        e.preventDefault();
                        target = e.target;
                        id = target.carId.value;
                        updatedCarProps = {
                            name: target.carName.value,
                            color: target.carColor.value,
                        };
                        return [4, _loader_Loader__WEBPACK_IMPORTED_MODULE_0__.loader.getData("garage/".concat(id), _types_consts__WEBPACK_IMPORTED_MODULE_4__.METHODS.PUT, updatedCarProps)];
                    case 1:
                        _b.sent();
                        this.updateGarage();
                        updateForm = document.querySelector('.update');
                        if (updateForm)
                            updateForm.classList.add('disabled');
                        return [2];
                }
            });
        });
    };
    Garage.prototype.updateGarage = function () {
        this.carList.innerHTML = '';
        this.initGarage();
    };
    Garage.prototype.render = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4, this.initGarage()];
                    case 1:
                        _b.sent();
                        this.container.append(this.title);
                        this.container.append(this.pageTitle);
                        this.container.append(this.carList);
                        this.container.classList.add('garage');
                        this.carList.classList.add('car__list');
                        return [2, this.container];
                }
            });
        });
    };
    var _a;
    _a = Garage;
    Garage.resetAllCars = function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(_a, function (_b) {
            _store_Store__WEBPACK_IMPORTED_MODULE_2__.Store.carsInGarage.map(function (car) { return car.stopEngine(); });
            return [2];
        });
    }); };
    return Garage;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Garage);


/***/ }),

/***/ "./src/components/Navigation.ts":
/*!**************************************!*\
  !*** ./src/components/Navigation.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var Navigation = (function () {
    function Navigation() {
        this.render = function () {
            var headerNavigationHTML = document.createElement('div');
            headerNavigationHTML.classList.add('navigation');
            headerNavigationHTML.innerHTML = "\n      <a href=\"#/\" class=\"nav-link\">to garage</a>\n      <a href=\"#/winners\" class=\"nav-link\">to winners</a>\n    ";
            return headerNavigationHTML;
        };
    }
    return Navigation;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Navigation);


/***/ }),

/***/ "./src/components/PageButtons.ts":
/*!***************************************!*\
  !*** ./src/components/PageButtons.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var PageButtons = (function () {
    function PageButtons() {
        this.render = function () {
            var pageButtonsHTML = document.createElement('div');
            pageButtonsHTML.classList.add('page__buttons');
            pageButtonsHTML.innerHTML = "\n      <button class=\"page-button green prev\">prev</button>\n      <button class=\"page-button green next\">next</button>\n    ";
            return pageButtonsHTML;
        };
    }
    return PageButtons;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PageButtons);


/***/ }),

/***/ "./src/components/Popup.ts":
/*!*********************************!*\
  !*** ./src/components/Popup.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/component */ "./src/utils/component.ts");

var Popup = (function () {
    function Popup() {
        this.container = document.createElement('div');
    }
    Popup.prototype.render = function (winner) {
        var _a;
        var popup = new _utils_component__WEBPACK_IMPORTED_MODULE_0__["default"](this.container, 'div', ['popup']);
        var message = new _utils_component__WEBPACK_IMPORTED_MODULE_0__["default"](popup.element, 'span', ['popup-message'], "Winner ".concat(winner.name, " with time: ").concat((_a = winner.time) === null || _a === void 0 ? void 0 : _a.toFixed(1)));
        this.container.addEventListener('click', function (e) {
            var target = e.target;
            if (target.classList.contains('popup')) {
                popup.destroy();
            }
        });
        return this.container;
    };
    return Popup;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Popup);


/***/ }),

/***/ "./src/loader/Loader.ts":
/*!******************************!*\
  !*** ./src/loader/Loader.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loader": () => (/* binding */ loader)
/* harmony export */ });
/* harmony import */ var _store_Store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../store/Store */ "./src/store/Store.ts");
/* harmony import */ var _types_consts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../types/consts */ "./src/types/consts.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};


var Loader = (function () {
    function Loader() {
        var _this = this;
        this.baseLink = 'https://async-race-backend-t7bq.onrender.com';
        this.switchEngine = function (id, status) { return __awaiter(_this, void 0, void 0, function () {
            var engine;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.getData("engine?id=".concat(id, "&status=").concat(status), _types_consts__WEBPACK_IMPORTED_MODULE_1__.METHODS.PATCH)
                            .then(function (res) { return res.json(); })];
                    case 1:
                        engine = _a.sent();
                        return [2, engine];
                }
            });
        }); };
        this.getWinners = function () { return __awaiter(_this, void 0, void 0, function () {
            var request, winners, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.getData("winners?_page=".concat(_store_Store__WEBPACK_IMPORTED_MODULE_0__.Store.winnersCurrentPage, "&_limit=").concat(_store_Store__WEBPACK_IMPORTED_MODULE_0__.Store.winnersPageSize, "&_sort=").concat(_store_Store__WEBPACK_IMPORTED_MODULE_0__.Store.sortType, "&_order=").concat(_store_Store__WEBPACK_IMPORTED_MODULE_0__.Store.order))];
                    case 1:
                        request = _a.sent();
                        return [4, request.json()];
                    case 2:
                        winners = _a.sent();
                        response = {
                            status: request.status,
                            totalCount: request.headers.get('X-Total-Count'),
                            winnersCars: winners,
                        };
                        return [2, response];
                }
            });
        }); };
        this.getCar = function (id) { return __awaiter(_this, void 0, void 0, function () {
            var car;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.getData("garage/".concat(id))
                            .then(function (res) { return res.json(); })];
                    case 1:
                        car = _a.sent();
                        return [2, car];
                }
            });
        }); };
        this.getWinner = function (id) { return __awaiter(_this, void 0, void 0, function () {
            var request, winner;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.getData("winners/".concat(id))];
                    case 1:
                        request = _a.sent();
                        return [4, request.json()];
                    case 2:
                        winner = _a.sent();
                        return [2, {
                                status: request.status,
                                winner: winner,
                            }];
                }
            });
        }); };
        this.deleteCar = function (id) { return __awaiter(_this, void 0, void 0, function () {
            var request, status;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.getWinner(id)];
                    case 1:
                        request = _a.sent();
                        status = request.status;
                        if (!(status === 200)) return [3, 3];
                        return [4, this.getData("winners/".concat(id), _types_consts__WEBPACK_IMPORTED_MODULE_1__.METHODS.DELETE)];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3: return [4, this.getData("garage/".concat(id), _types_consts__WEBPACK_IMPORTED_MODULE_1__.METHODS.DELETE)];
                    case 4:
                        _a.sent();
                        return [2];
                }
            });
        }); };
        this.createWinner = function (winnerInfo) { return __awaiter(_this, void 0, void 0, function () {
            var time, id, checkWinner, status, winner, updatedWinner, newWinner;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        time = winnerInfo.time, id = winnerInfo.id;
                        return [4, this.getWinner(id)];
                    case 1:
                        checkWinner = _a.sent();
                        status = checkWinner.status, winner = checkWinner.winner;
                        if (status === 200) {
                            updatedWinner = {
                                wins: winner.wins += 1,
                                time: time < winner.time ? +time.toFixed(1) : winner.time,
                                id: winner.id,
                            };
                            this.getData("winners/".concat(id), _types_consts__WEBPACK_IMPORTED_MODULE_1__.METHODS.PUT, updatedWinner);
                        }
                        else {
                            newWinner = {
                                wins: 1,
                                time: +time.toFixed(1),
                                id: id,
                            };
                            this.getData('winners', _types_consts__WEBPACK_IMPORTED_MODULE_1__.METHODS.POST, newWinner);
                        }
                        return [2];
                }
            });
        }); };
    }
    Loader.prototype.getData = function (endpoint, _method, body) {
        return __awaiter(this, void 0, void 0, function () {
            var url, request;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = "".concat(this.baseLink, "/").concat(endpoint);
                        return [4, fetch(url, {
                                headers: {
                                    'Content-Type': 'application/json',
                                },
                                method: _method,
                                body: JSON.stringify(body),
                            })
                                .then(Loader.errorHandler)];
                    case 1:
                        request = _a.sent();
                        return [2, request];
                }
            });
        });
    };
    Loader.errorHandler = function (res) {
        if (!res.ok) {
            if (res.status === 429) {
                console.log('car already started');
            }
            if (res.status === 401 || res.status === 404) {
                console.log("Sorry, but there is ".concat(res.status, " error: ").concat(res.statusText));
            }
        }
        return res;
    };
    return Loader;
}());
var loader = new Loader();


/***/ }),

/***/ "./src/pages/MainPage.ts":
/*!*******************************!*\
  !*** ./src/pages/MainPage.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_ControlPanel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/ControlPanel */ "./src/components/ControlPanel.ts");
/* harmony import */ var _components_Garage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Garage */ "./src/components/Garage.ts");
/* harmony import */ var _components_PageButtons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/PageButtons */ "./src/components/PageButtons.ts");
/* harmony import */ var _store_Store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store/Store */ "./src/store/Store.ts");
/* harmony import */ var _utils_carGenerator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/carGenerator */ "./src/utils/carGenerator.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





var MainPage = (function () {
    function MainPage() {
        this.container = document.createElement('div');
        this.garage = new _components_Garage__WEBPACK_IMPORTED_MODULE_1__["default"]();
        this.controlPanel = new _components_ControlPanel__WEBPACK_IMPORTED_MODULE_0__["default"]();
        this.pageButtons = new _components_PageButtons__WEBPACK_IMPORTED_MODULE_2__["default"]();
    }
    MainPage.prototype.render = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b, formCreate, formUpdate, formCreateInput, formUpdateInput, raceButton, resetButton, randomCarsButton, garageWrapper, prevButtonPage, nextButtonPage;
            var _this = this;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        this.container.append(this.controlPanel.render());
                        this.container.append(this.pageButtons.render());
                        _b = (_a = this.container).append;
                        return [4, this.garage.render()];
                    case 1:
                        _b.apply(_a, [_c.sent()]);
                        this.container.classList.add('main-page');
                        formCreate = this.container.querySelector('.create');
                        formUpdate = this.container.querySelector('.update');
                        formCreateInput = formCreate === null || formCreate === void 0 ? void 0 : formCreate.querySelector('.create-text');
                        formUpdateInput = formUpdate === null || formUpdate === void 0 ? void 0 : formUpdate.querySelector('.update-text');
                        raceButton = this.container.querySelector('.race-button');
                        resetButton = this.container.querySelector('.reset-button');
                        randomCarsButton = this.container.querySelector('.generate-button');
                        garageWrapper = this.container.querySelector('.garage');
                        prevButtonPage = this.container.querySelector('.prev');
                        nextButtonPage = this.container.querySelector('.next');
                        randomCarsButton === null || randomCarsButton === void 0 ? void 0 : randomCarsButton.addEventListener('click', function (e) { return __awaiter(_this, void 0, void 0, function () {
                            var randomCars, promises;
                            var _this = this;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        randomCars = (0,_utils_carGenerator__WEBPACK_IMPORTED_MODULE_4__["default"])();
                                        promises = randomCars.map(function (randomCar) { return _this.garage.createCar(e, randomCar); });
                                        return [4, Promise.all(promises)
                                                .then(function () { return _this.garage.updateGarage(); })];
                                    case 1:
                                        _a.sent();
                                        return [2];
                                }
                            });
                        }); });
                        formCreateInput === null || formCreateInput === void 0 ? void 0 : formCreateInput.addEventListener('input', function (e) {
                            var target = e.target;
                            _store_Store__WEBPACK_IMPORTED_MODULE_3__.Store.createInput = target.value;
                        });
                        formUpdateInput.addEventListener('input', function (e) {
                            var target = e.target;
                            _store_Store__WEBPACK_IMPORTED_MODULE_3__.Store.updateInput = target.value;
                        });
                        formUpdate === null || formUpdate === void 0 ? void 0 : formUpdate.addEventListener('submit', function (e) {
                            _this.garage.updateCar(e);
                        });
                        formCreate === null || formCreate === void 0 ? void 0 : formCreate.addEventListener('submit', function (e) {
                            raceButton.disabled = false;
                            _this.garage.createCar(e);
                            _this.garage.updateGarage();
                        });
                        raceButton === null || raceButton === void 0 ? void 0 : raceButton.addEventListener('click', function () { return __awaiter(_this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                this.garage.race();
                                raceButton.disabled = true;
                                resetButton.disabled = true;
                                prevButtonPage.disabled = true;
                                nextButtonPage.disabled = true;
                                randomCarsButton.disabled = true;
                                return [2];
                            });
                        }); });
                        resetButton === null || resetButton === void 0 ? void 0 : resetButton.addEventListener('click', function () {
                            _components_Garage__WEBPACK_IMPORTED_MODULE_1__["default"].resetAllCars();
                            raceButton.disabled = false;
                            prevButtonPage.disabled = false;
                            nextButtonPage.disabled = false;
                            randomCarsButton.disabled = false;
                        });
                        prevButtonPage === null || prevButtonPage === void 0 ? void 0 : prevButtonPage.addEventListener('click', function () {
                            _this.garage.prevPage();
                        });
                        nextButtonPage === null || nextButtonPage === void 0 ? void 0 : nextButtonPage.addEventListener('click', function () {
                            _this.garage.nextPage();
                        });
                        garageWrapper === null || garageWrapper === void 0 ? void 0 : garageWrapper.addEventListener('click', function (e) {
                            var target = e.target;
                            var id = target.dataset.id;
                            if (target.classList.contains('select') && id) {
                                _this.garage.selectCarToUpdate(id);
                            }
                            if (target.classList.contains('remove-button') && id) {
                                _this.garage.deleteCar(id);
                            }
                        });
                        return [2, this.container];
                }
            });
        });
    };
    return MainPage;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MainPage);


/***/ }),

/***/ "./src/pages/Winners.ts":
/*!******************************!*\
  !*** ./src/pages/Winners.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _loader_Loader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../loader/Loader */ "./src/loader/Loader.ts");
/* harmony import */ var _store_Store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../store/Store */ "./src/store/Store.ts");
/* harmony import */ var _utils_renderCarImage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/renderCarImage */ "./src/utils/renderCarImage.ts");
/* harmony import */ var _utils_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/component */ "./src/utils/component.ts");
/* harmony import */ var _components_PageButtons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/PageButtons */ "./src/components/PageButtons.ts");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





var Winners = (function () {
    function Winners() {
        var _this = this;
        this.initWinners = function () { return __awaiter(_this, void 0, void 0, function () {
            var getWinners, status, totalCount, winnersCars, winnersTitle, pageCount, winsButton, timeButton;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.table = Winners.renderWinnersContainer();
                        return [4, _loader_Loader__WEBPACK_IMPORTED_MODULE_0__.loader.getWinners()];
                    case 1:
                        getWinners = _a.sent();
                        status = getWinners.status, totalCount = getWinners.totalCount, winnersCars = getWinners.winnersCars;
                        _store_Store__WEBPACK_IMPORTED_MODULE_1__.Store.winnerCarsCount = totalCount;
                        winnersTitle = new _utils_component__WEBPACK_IMPORTED_MODULE_3__["default"](this.tableWrapper.element, 'h1', ['winners-title'], "Total Winners : ".concat(_store_Store__WEBPACK_IMPORTED_MODULE_1__.Store.winnerCarsCount));
                        pageCount = new _utils_component__WEBPACK_IMPORTED_MODULE_3__["default"](this.tableWrapper.element, 'p', ['winners-page'], "page : ".concat(_store_Store__WEBPACK_IMPORTED_MODULE_1__.Store.winnersCurrentPage));
                        if (status === 200) {
                            winnersCars.map(function (c) { return __awaiter(_this, void 0, void 0, function () {
                                var winnerCar, winnerCarData;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4, _loader_Loader__WEBPACK_IMPORTED_MODULE_0__.loader.getCar(c.id)];
                                        case 1:
                                            winnerCar = _a.sent();
                                            winnerCarData = __assign({ id: c.id, wins: c.wins, time: c.time }, winnerCar);
                                            this.table.append(Winners.renderWinnerItem(winnerCarData));
                                            return [2];
                                    }
                                });
                            }); });
                        }
                        this.tableWrapper.element.append(this.table);
                        winsButton = this.container.querySelector('.wins');
                        timeButton = this.container.querySelector('.time');
                        winsButton === null || winsButton === void 0 ? void 0 : winsButton.addEventListener('click', this.sortByWins);
                        timeButton === null || timeButton === void 0 ? void 0 : timeButton.addEventListener('click', this.sortByTime);
                        return [2];
                }
            });
        }); };
        this.sortByWins = function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                _store_Store__WEBPACK_IMPORTED_MODULE_1__.Store.sortType = 'wins';
                _store_Store__WEBPACK_IMPORTED_MODULE_1__.Store.order = _store_Store__WEBPACK_IMPORTED_MODULE_1__.Store.order === 'DESC' ? 'ASC' : 'DESC';
                this.updateWinners();
                return [2];
            });
        }); };
        this.sortByTime = function () {
            _store_Store__WEBPACK_IMPORTED_MODULE_1__.Store.sortType = 'time';
            _store_Store__WEBPACK_IMPORTED_MODULE_1__.Store.order = _store_Store__WEBPACK_IMPORTED_MODULE_1__.Store.order === 'DESC' ? 'ASC' : 'DESC';
            _this.updateWinners();
        };
        this.updateWinners = function () {
            _this.tableWrapper.element.innerHTML = '';
            _this.initWinners();
        };
        this.container = document.createElement('div');
        this.tableWrapper = new _utils_component__WEBPACK_IMPORTED_MODULE_3__["default"](this.container, 'div', ['winners-wrapper']);
        this.table = Winners.renderWinnersContainer();
        this.pageButtons = new _components_PageButtons__WEBPACK_IMPORTED_MODULE_4__["default"]();
    }
    Winners.prototype.prevPage = function () {
        if (_store_Store__WEBPACK_IMPORTED_MODULE_1__.Store.winnersCurrentPage - 1 === 0)
            return;
        _store_Store__WEBPACK_IMPORTED_MODULE_1__.Store.winnersCurrentPage -= 1;
        this.updateWinners();
    };
    Winners.prototype.nextPage = function () {
        if (_store_Store__WEBPACK_IMPORTED_MODULE_1__.Store.winnerCarsCount) {
            if (_store_Store__WEBPACK_IMPORTED_MODULE_1__.Store.winnersCurrentPage + 1
                > Math.ceil(parseInt(_store_Store__WEBPACK_IMPORTED_MODULE_1__.Store.winnerCarsCount, 10) / _store_Store__WEBPACK_IMPORTED_MODULE_1__.Store.winnersPageSize))
                return;
        }
        _store_Store__WEBPACK_IMPORTED_MODULE_1__.Store.winnersCurrentPage += 1;
        this.updateWinners();
    };
    Winners.prototype.render = function () {
        return __awaiter(this, void 0, void 0, function () {
            var prevButton, nextButton;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.initWinners()];
                    case 1:
                        _a.sent();
                        this.container.prepend(this.pageButtons.render());
                        prevButton = this.container.querySelector('.prev');
                        nextButton = this.container.querySelector('.next');
                        prevButton === null || prevButton === void 0 ? void 0 : prevButton.addEventListener('click', function () {
                            _this.prevPage();
                        });
                        nextButton === null || nextButton === void 0 ? void 0 : nextButton.addEventListener('click', function () {
                            _this.nextPage();
                        });
                        return [2, this.container];
                }
            });
        });
    };
    Winners.renderWinnersContainer = function () {
        var winnersHTML = document.createElement('table');
        winnersHTML.classList.add('winners-table');
        winnersHTML.innerHTML = "\n        <tr>\n          <th>id</th>\n          <th>Car</th>\n          <th>Name</th>\n          <th class=\"wins ".concat(_store_Store__WEBPACK_IMPORTED_MODULE_1__.Store.sortType === 'wins' ? _store_Store__WEBPACK_IMPORTED_MODULE_1__.Store.order : '', "\">Wins </th>\n          <th class=\"time ").concat(_store_Store__WEBPACK_IMPORTED_MODULE_1__.Store.sortType === 'time' ? _store_Store__WEBPACK_IMPORTED_MODULE_1__.Store.order : '', "\">Time, s</th>\n        </tr>\n    ");
        return winnersHTML;
    };
    Winners.renderWinnerItem = function (winner) {
        var color = winner.color, name = winner.name, wins = winner.wins, time = winner.time, id = winner.id;
        var winnerHTML = document.createElement('tr');
        winnerHTML.innerHTML = "\n        <tr>\n          <td>".concat(id, "</td>\n            <td>\n            ").concat((0,_utils_renderCarImage__WEBPACK_IMPORTED_MODULE_2__["default"])(color), "\n            </td>\n            <td>").concat(name, "</td>\n            <td>").concat(wins, "</td>\n          <td>").concat(time, "</td>\n        </tr>\n    ");
        return winnerHTML;
    };
    return Winners;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Winners);


/***/ }),

/***/ "./src/router/Router.ts":
/*!******************************!*\
  !*** ./src/router/Router.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _pages_MainPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pages/MainPage */ "./src/pages/MainPage.ts");
/* harmony import */ var _pages_Winners__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pages/Winners */ "./src/pages/Winners.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};


var Router = (function () {
    function Router(rootElement) {
        var _this = this;
        this.rootElement = rootElement;
        this.routes = [
            {
                name: '/',
                component: function () { return __awaiter(_this, void 0, void 0, function () {
                    var _a, _b;
                    return __generator(this, function (_c) {
                        switch (_c.label) {
                            case 0:
                                _b = (_a = this.rootElement).append;
                                return [4, new _pages_MainPage__WEBPACK_IMPORTED_MODULE_0__["default"]().render()];
                            case 1:
                                _b.apply(_a, [_c.sent()]);
                                return [2];
                        }
                    });
                }); },
            },
            {
                name: '/winners',
                component: function () { return __awaiter(_this, void 0, void 0, function () {
                    var _a, _b;
                    return __generator(this, function (_c) {
                        switch (_c.label) {
                            case 0:
                                _b = (_a = this.rootElement).append;
                                return [4, new _pages_Winners__WEBPACK_IMPORTED_MODULE_1__["default"]().render()];
                            case 1:
                                _b.apply(_a, [_c.sent()]);
                                return [2];
                        }
                    });
                }); },
            },
        ];
        this.defaultRoute = {
            name: 'Default router',
            component: function () {
                _this.rootElement.innerHTML = '404 PAGE';
            },
        };
    }
    Router.prototype.updateRouter = function () {
        this.rootElement.innerHTML = '';
        var currentRouteName = window.location.hash.slice(1);
        var currentRoute = this.routes.find(function (page) { return page.name === currentRouteName; });
        (currentRoute || this.defaultRoute).component();
    };
    Router.prototype.initRouter = function () {
        var _this = this;
        if (window.location.hash === '') {
            window.location.hash = '#/';
        }
        window.onpopstate = function () { return _this.updateRouter(); };
        this.updateRouter();
    };
    return Router;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Router);


/***/ }),

/***/ "./src/store/Store.ts":
/*!****************************!*\
  !*** ./src/store/Store.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Store": () => (/* binding */ Store)
/* harmony export */ });
var Store = {
    createInput: '',
    updateInput: '',
    animations: {},
    pageSize: 7,
    currentPage: 1,
    allCarsCount: '',
    winnerCarsCount: '',
    carsInGarage: [],
    winnersCars: [],
    winnersPageSize: 10,
    winnersCurrentPage: 1,
    sortType: 'wins',
    order: 'DESC',
};


/***/ }),

/***/ "./src/types/consts.ts":
/*!*****************************!*\
  !*** ./src/types/consts.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ENGINESTATE": () => (/* binding */ ENGINESTATE),
/* harmony export */   "METHODS": () => (/* binding */ METHODS)
/* harmony export */ });
var METHODS;
(function (METHODS) {
    METHODS["POST"] = "POST";
    METHODS["PUT"] = "PUT";
    METHODS["DELETE"] = "DELETE";
    METHODS["PATCH"] = "PATCH";
})(METHODS || (METHODS = {}));
var ENGINESTATE;
(function (ENGINESTATE) {
    ENGINESTATE["STARTED"] = "started";
    ENGINESTATE["STOPPED"] = "stopped";
    ENGINESTATE["DRIVE"] = "drive";
})(ENGINESTATE || (ENGINESTATE = {}));


/***/ }),

/***/ "./src/utils/animation.ts":
/*!********************************!*\
  !*** ./src/utils/animation.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ animation)
/* harmony export */ });
/* harmony import */ var _store_Store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../store/Store */ "./src/store/Store.ts");

function getRoadDistance(id) {
    var _a;
    var roadDistance = (_a = document.querySelector(".road_".concat(id))) === null || _a === void 0 ? void 0 : _a.clientWidth;
    if (roadDistance) {
        return roadDistance;
    }
    return 0;
}
function animation(carImage, velocity, distance, id) {
    var racer = carImage;
    var anumationDuration = distance / velocity;
    _store_Store__WEBPACK_IMPORTED_MODULE_0__.Store.animations[id] = {
        time: 0,
        frame: 0,
    };
    var startTime;
    var prevStartTime;
    function step() {
        var currentTime = new Date().getTime();
        var roadDistance = getRoadDistance(id);
        if (!startTime) {
            startTime = currentTime;
        }
        var currentAnimationTime = currentTime - startTime;
        if (prevStartTime !== currentTime) {
            var passedDistance = (roadDistance / anumationDuration) * currentAnimationTime;
            racer.style.transform = "translateX(".concat(passedDistance, "px)");
        }
        if (currentAnimationTime < anumationDuration) {
            prevStartTime = currentTime;
            _store_Store__WEBPACK_IMPORTED_MODULE_0__.Store.animations[id] = {
                time: currentAnimationTime,
                frame: window.requestAnimationFrame(step),
            };
        }
    }
    requestAnimationFrame(step);
}


/***/ }),

/***/ "./src/utils/carGenerator.ts":
/*!***********************************!*\
  !*** ./src/utils/carGenerator.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ generateRandomCars)
/* harmony export */ });
var cars = {
    marks: [
        'Bmw',
        'Audi',
        'Mazda',
        'Volvo',
        'Honda',
        'Huanday',
        'Mercedes-benz',
        'Ferrari',
        'Kia',
        'Missan',
        'Honda',
        'Renault',
        'Porsche',
        'Tesla',
        'Skoda',
        'Toyota',
    ],
    models: [
        'Rx',
        'X7',
        'Avela',
        'M22',
        'S63',
        'Capital',
        'GT',
        '488',
        'CR-V',
        'Type-R',
        'City',
        'R34',
        'Civic',
        'Fabia',
        'Scout',
        '570',
        'Model x',
        '499',
    ],
};
var randomColor = function (min, max) {
    if (min === void 0) { min = 0; }
    if (max === void 0) { max = 255; }
    var random = function () { return min + Math.floor(Math.random() * (max - min + 1)); };
    var r = random();
    var g = random();
    var b = random();
    return "rgb(".concat(r, ",").concat(g, ",").concat(b, ")");
};
function generateRandomCars() {
    var marks = cars.marks, models = cars.models;
    var randomCars = [];
    for (var i = 0; i < 100; i += 1) {
        var newRandomCar = {
            name: "".concat(marks[Math.floor(Math.random() * marks.length)], " ").concat(models[Math.floor(Math.random() * models.length)]),
            color: randomColor(),
        };
        randomCars.push(newRandomCar);
    }
    return randomCars;
}


/***/ }),

/***/ "./src/utils/component.ts":
/*!********************************!*\
  !*** ./src/utils/component.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var Component = (function () {
    function Component(parentElement, tagName, styles, template, model) {
        var _a;
        if (tagName === void 0) { tagName = 'div'; }
        if (styles === void 0) { styles = []; }
        if (template === void 0) { template = ''; }
        if (model === void 0) { model = {}; }
        this.parentElement = parentElement || null;
        this.element = document.createElement(tagName);
        this.template = template;
        this.model = model;
        this.buildTemplate();
        this.element.innerHTML = this.template;
        (_a = this.element.classList).add.apply(_a, styles);
        if (parentElement)
            parentElement.append(this.element);
        else
            this.render();
    }
    Component.prototype.buildTemplate = function () {
        var _this = this;
        Object.entries(this.model).forEach(function (_a) {
            var key = _a[0], value = _a[1];
            _this.template = _this.template.replaceAll("{{".concat(key, "}}"), value);
        });
    };
    Component.prototype.render = function () {
        return this.element;
    };
    Component.prototype.destroy = function () {
        this.element.remove();
    };
    return Component;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Component);


/***/ }),

/***/ "./src/utils/renderCarImage.ts":
/*!*************************************!*\
  !*** ./src/utils/renderCarImage.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ renderCarImage)
/* harmony export */ });
function renderCarImage(color) {
    return "\n  <svg class=\"car__image\" version=\"1.0\" xmlns=\"http://www.w3.org/2000/svg\"\n    width=\"100.000000pt\" height=\"50\" viewBox=\"0 0 1280.000000 640.000000\"\n    preserveAspectRatio=\"xMidYMid meet\">\n   <g transform=\"translate(0.000000,640.000000) scale(0.100000,-0.100000)\"\n   fill=".concat(color, " stroke=\"none\">\n   <path fill=").concat(color, " d=\"M3565 5336 c-106 -30 -101 -26 -108 -111 -4 -42 -9\n   -80 -12 -85 -6 -10 -246 -105 -590 -234 -448 -167 -1052 -415 -1173 -483 -78\n   -43 -193 -91 -250 -104 -23 -5 -98 -14 -165 -19 -67 -6 -167 -19 -222 -30 -154\n   -31 -340 -49 -563 -57 l-203 -6 -43 -66 c-59 -91 -60 -95 -26 -130 37 -37 38 -65 3\n   -150 -25 -62 -27 -78 -31 -256 l-4 -190 -38 -32 c-91 -78 -133 -209 -134 -418\n   0 -194 11 -396 26 -482 13 -71 14 -74 72 -122 69 -58 130 -129 158 -184 64\n   -126 534 -211 1384 -250 l92 -4 -6 119 c-6 142 8 256 49 383 112 352 394 622\n   756 722 90 26 112 28 278 28 165 0 188 -2 278 -27 201 -56 361 -152 504 -302\n   140 -145 222 -293 274 -492 21 -79 24 -109 23 -279 -1 -127 -6 -214 -16 -263\n   l-15 -73 3006 7 c1653 4 3007 8 3009 9 1 1 -8 37 -20 81 -19 67 -22 105 -22\n   259 -1 166 1 187 27 279 117 421 467 736 885 797 119 17 325 7 432 -21 239\n   -63 453 -205 601 -399 70 -92 154 -267 185 -386 24 -88 27 -119 27 -260 1\n   -116 -4 -181 -16 -234 -10 -41 -16 -75 -15 -76 2 -1 62 2 133 6 266 16 458 45\n   525 79 48 24 97 81 127 146 l24 52 -16 157 c-15 152 -15 163 4 284 63 388 50\n   680 -35 802 -134 193 -526 336 -1429 519 -737 149 -1322 209 -2033 210 -228 0\n   -226 0 -347 85 -187 131 -1045 607 -1471 815 -383 187 -788 281 -1439 332\n   -208 17 -1106 16 -1400 0 -121 -7 -314 -19 -430 -27 -302 -22 -286 -22 -341\n   10 -140 81 -187 94 -269 71z m1885 -333 c6 -37 38 -238 71 -446 32 -209 66\n   -422 75 -474 9 -52 15 -96 13 -97 -11 -9 -1699 29 -1951 44 -206 13 -417 36\n   -485 54 -98 26 -198 119 -249 231 -35 75 -36 172 -5 255 17 45 30 61 68 86 83\n   54 135 80 253 127 341 136 858 230 1460 267 269 16 270 16 511 18 l227 2 12\n   -67z m630 47 c264 -18 777 -110 1029 -186 186 -56 445 -188 756 -387 211 -134\n   274 -181 250 -185 -75 -12 -133 -50 -162 -106 -19 -35 -21 -136 -4 -179 l11\n   -27 -907 2 -906 3 -59 160 c-110 302 -298 878 -298 916 0 6 95 2 290 -11z\"/>\n   <path d=\"M2633 3125 c-223 -40 -410 -141 -568 -306 -132 -138 -213 -283 -262\n   -467 -22 -83 -26 -119 -26 -247 -1 -169 10 -236 65 -382 87 -230 271 -436 493\n   -551 85 -44 178 -78 271 -98 107 -23 312 -23 419 1 392 84 699 375 802 761 23\n   86 26 120 27 254 1 158 -5 199 -46 330 -98 310 -355 567 -668 669 -150 50\n   -354 64 -507 36z m350 -301 c249 -56 457 -247 543 -499 25 -72 28 -95 28 -220\n   1 -153 -15 -228 -74 -345 -94 -186 -283 -337 -485 -386 -96 -24 -268 -24 -360\n   0 -320 84 -544 355 -562 681 -20 359 209 673 558 765 94 24 253 26 352 4z\"/>\n   <path d=\"M2600 2697 c-36 -13 -85 -36 -109 -51 l-44 -28 116 -115 c81 -82 120\n   -114 131 -110 14 6 16 29 16 167 0 186 6 178 -110 137z\"/>\n   <path d=\"M2920 2561 c0 -139 2 -162 16 -168 11 -4 50 28 130 108 l115 114 -28\n   22 c-34 28 -138 70 -193 79 l-40 7 0 -162z\"/>\n   <path d=\"M2282 2448 c-28 -36 -92 -191 -92 -225 0 -10 34 -13 165 -13 151 0\n   165 1 165 18 0 15 -206 232 -221 232 -4 0 -11 -6 -17 -12z\"/>\n   <path d=\"M3222 2351 c-62 -59 -112 -115 -112 -124 0 -15 17 -17 165 -17 131 0\n   165 3 165 13 0 40 -69 205 -95 227 -7 6 -48 -27 -123 -99z\"/>\n   <path d=\"M2781 2332 c-12 -22 11 -62 34 -62 8 0 21 10 29 22 20 28 4 58 -29 58\n   -13 0 -29 -8 -34 -18z\"/>\n   <path d=\"M2749 2161 c-32 -33 -37 -67 -14 -110 29 -57 104 -64 151 -14 53 57 9\n   153 -71 153 -27 0 -44 -8 -66 -29z\"/>\n   <path d=\"M2570 2125 c-26 -32 13 -81 48 -59 24 16 27 45 6 61 -23 17 -39 16 -54 -2z\"/>\n   <path d=\"M3006 2124 c-20 -19 -20 -38 -2 -54 23 -19 61 -8 64 18 7 44 -32 67 -62 36z\"/>\n   <path d=\"M2190 1975 c0 -29 41 -140 72 -194 l31 -53 117 117 c71 71 116 123 113\n   131 -4 11 -40 14 -169 14 -141 0 -164 -2 -164 -15z\"/>\n   <path d=\"M3110 1972 c0 -9 51 -68 114 -131 l114 -114 31 54 c30 51 71 165 71 195\n   0 11 -31 14 -165 14 -151 0 -165 -1 -165 -18z\"/>\n   <path d=\"M2780 1901 c-7 -15 -5 -24 8 -41 32 -40 85 -4 62 41 -14 25 -56 25 -70 0z\"/>\n   <path d=\"M2562 1697 c-61 -62 -112 -115 -112 -119 0 -18 208 -108 249 -108 7\n   0 11 54 11 164 0 140 -2 165 -16 170 -9 3 -16 6 -17 6 -1 0 -53 -51 -115 -113z\"/>\n   <path d=\"M2933 1803 c-15 -6 -19 -333 -4 -333 46 0 251 88 251 108 0 9 -223 232\n   -230 231 -3 0 -11 -3 -17 -6z\"/>\n   <path d=\"M10700 3119 c-390 -84 -696 -376 -797 -759 -31 -117 -41 -292 -24 -411\n   33 -227 150 -453 318 -609 267 -250 643 -344 993 -249 117 32 283 118 380 196\n   487 396 518 1128 67 1560 -97 93 -166 140 -290 198 -137 64 -235 86 -407 91 -120\n   3 -162 0 -240 -17z m445 -313 c238 -81 409 -258 486 -506 30 -96 33 -289 5 -388\n   -110 -400 -513 -637 -911 -536 -149 38 -313 147 -402 267 -176 238 -203 533 -71\n   797 34 69 60 103 138 180 77 78 111 104 181 139 129 65 207 81 364 77 109 -3 143 -7 210 -30z\"/>\n   <path d=\"M10703 2700 c-54 -19 -153 -71 -153 -80 0 -3 51 -57 114 -119 80 -80\n   119 -112 130 -108 14 5 16 29 16 167 l0 160 -27 -1 c-16 0 -52 -9 -80 -19z\"/>\n   <path d=\"M11020 2561 c0 -139 2 -162 16 -168 22 -8 247 216 234 232 -17 20 -163\n   84 -207 91 l-43 7 0 -162z\"/>\n   <path d=\"M10366 2424 c-29 -44 -76 -165 -76 -194 0 -19 7 -20 165 -20 126 0 165\n   3 165 13 0 7 -51 63 -114 126 l-114 114 -26 -39z\"/>\n   <path d=\"M11313 2348 c-61 -62 -109 -119 -106 -125 6 -15 333 -19 333 -4 0 45 -88\n   241 -108 241 -4 0 -57 -51 -119 -112z\"/>\n   <path d=\"M10882 2338 c-17 -17 -15 -32 7 -52 16 -14 23 -15 41 -6 31 17 24 64 -10\n   68 -14 2 -31 -3 -38 -10z\"/>\n   <path d=\"M10846 2159 c-68 -81 17 -194 110 -144 89 48 56 175 -46 175 -30 0 -44\n   -6 -64 -31z\"/>\n   <path d=\"M10670 2126 c-19 -23 -8 -61 18 -64 44 -7 67 32 36 62 -19 20 -38 20 -54 2z\"/>\n   <path d=\"M11106 2127 c-21 -16 -18 -45 7 -61 37 -23 77 35 41 61 -10 7 -21 13 -24\n   13 -3 0 -14 -6 -24 -13z\"/>\n   <path d=\"M10290 1970 c0 -29 43 -141 74 -195 l28 -48 116 116 c81 81 113 120 109\n   131 -6 14 -29 16 -167 16 -152 0 -160 -1 -160 -20z\"/>\n   <path d=\"M11207 1978 c-3 -7 47 -66 111 -130 l116 -118 27 43 c27 44 79 177 79 203\n   0 12 -28 14 -164 14 -122 0 -166 -3 -169 -12z\"/>\n   <path d=\"M10881 1901 c-14 -25 -5 -48 20 -56 27 -9 51 13 47 44 -4 34 -51 43 -67 12z\"/>\n   <path d=\"M10662 1697 c-61 -62 -112 -115 -112 -119 0 -20 201 -108 247 -108 10 0 13\n   34 13 164 0 140 -2 165 -16 170 -9 3 -16 6 -17 6 -1 0 -53 -51 -115 -113z\"/>\n   <path d=\"M11033 1803 c-10 -3 -13 -47 -13 -169 0 -90 4 -164 8 -164 36 0 186 61 239\n   98 16 10 -216 242 -234 235z\"/> </g>\n   </svg>\n  ");
}


/***/ }),

/***/ "./src/assets/arrow.svg":
/*!******************************!*\
  !*** ./src/assets/arrow.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets\\images\\arrow.2be8266f214ce4b5401e..svg";

/***/ }),

/***/ "./src/assets/racing-flag.svg":
/*!************************************!*\
  !*** ./src/assets/racing-flag.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets\\images\\racing-flag.19a5185f43d62b7a4038..svg";

/***/ }),

/***/ "./src/assets/trash.svg":
/*!******************************!*\
  !*** ./src/assets/trash.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets\\images\\trash.e833235a28893277c1a0..svg";

/***/ }),

/***/ "./src/assets/update.svg":
/*!*******************************!*\
  !*** ./src/assets/update.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets\\images\\update.809e43e822af2310886a..svg";

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
/******/ 		__webpack_require__.p = scriptUrl + "../../";
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.css */ "./src/main.css");
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App */ "./src/App.ts");


var app = new _App__WEBPACK_IMPORTED_MODULE_1__["default"]();
app.start();

})();

/******/ })()
;
//# sourceMappingURL=main.4975254f41399ac6d00f.js.map