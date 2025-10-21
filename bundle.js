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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `body {\n  background-color: rgb(0, 0, 0);\n  color:white;\n  margin: 0px;\n  padding: 0px;\n  background-color:#1E2022;\n}\n\n#main{\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    background-color: silver;\n}\n\n.p1{\n    width: 100px;\n    padding-left: 20px;\n}\n.rightside{\n    display: flex;\n    gap: 1em;\n}\n.panda{\n    margin: 30px;\n    color: black;\n}\n.nav{\n    display: flex;\n    gap: 1em;\n}\n.nav button{\n    font-weight: bolder;\n    width: 100px;\n    height: 50px;\n    margin-right: 20px;\n    border: 0px;\n    border-radius: 12px;\n    cursor: pointer;\n}\n.nav button:hover{\n    background-color: #1E2022;\n    color: white;\n}\n\nimg{\n    width: 250px;\n    border-radius: 12px;\n}\n\n.content{\n    display: flex;\n    flex-direction: column;\n    justify-self: center;\n    margin-top: 50px;\n    gap:2em;\n}\n\n.about{\n    display: flex;\n    flex-direction: column;\n    justify-self: center;\n    text-align: center;\n    background-color: silver;\n    padding:10px;\n    border-radius: 18px;\n    color: #1E2022;\n}\n\n#panda{\n    font-weight: bolder;\n    text-align: left;\n}\n\n.menu{\n    display: flex;\n    flex-direction: column;\n    justify-self: center;\n    text-align: center;\n    gap: 1em;\n}\n.menu-item{\n    background-color: silver;\n    padding:20px;\n    border-radius: 18px;\n}\n .menu-item h3,p{\n    margin: 5px;\n    color: black;\n} \n.food{\n    background-color: silver;\n    color: black;\n    border-radius: 12px;\n    padding: 10px;\n    margin-top: 0px;\n}\n.menu-item img{\n    width: 200px;\n}\n.menuMain{\n    display: flex;\n    flex-direction: column;\n    justify-self: center;\n    text-align: center;\n    gap: 1em;\n}\nul{\n    list-style: none;\n    margin: 0px;\n    padding: 0px;\n    display: flex;\n    flex-direction: column;\n    gap: 1em;\n}\nul li{\n    display: flex;\n    flex-direction: row-reverse;\n    justify-content: center;\n    gap: 10px;\n}\nul li img{\n    width: 50px;\n}\nul li p{\n    margin: 10px;\n}\na{\n    text-decoration: none;\n    color: black;\n}\na:hover{\n    color: white;\n}\nfooter{\n    margin: 10px;\n    text-align: center;\n}\nfooter p {\n    color: white;\n}\n\n.noneImg{\n    display: none;\n}\n\n@media (min-width: 768px) {\n  .noneImg { display: none; } /* إخفاء أيقونة المنيو */\n  nav button {\n    font-weight: bolder;\n    width: 100px;\n    height: 50px;\n    margin-top: 25px;\n    margin-right: 20px;\n    border: 0px;\n    border-radius: 12px;\n    cursor: pointer; /* الأزرار دايمًا ظاهرة */\n  }\n  .humMenu {\n    display: none !important; /* ما نحتاج منيو على الشاشات الكبيرة */\n  }\n}\n@media (max-width: 600px) {\n  .none{\n    display: none;\n  }\n  .noneImg{\n    display: flex;\n    width: 40px;\n    padding-right: 15px;\n    cursor: pointer;\n  }\n  \n  .humMenu{\n    position: absolute;\n    top: 21%;\n    left: 60%;\n    transform: translate(-50%, -50%);\n    background-color: black;\n    opacity: 0.9;\n    width: 300px;\n    height: 200px;\n    display: flex;\n    flex-direction: column-reverse;\n    justify-content: space-evenly;\n    align-items: center;\n    border-radius: 18px;\n  }\n  .btn{\n    width: 100px;\n    height: 50px;\n    border-radius: 10px;\n    font-weight: bolder;\n    border: 0px;\n    opacity: 1;\n  }\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://resturantpage/./src/style.css?./node_modules/css-loader/dist/cjs.js\n}");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("{\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://resturantpage/./node_modules/css-loader/dist/runtime/api.js?\n}");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("{\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://resturantpage/./node_modules/css-loader/dist/runtime/noSourceMaps.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("{\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://resturantpage/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("{\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://resturantpage/./node_modules/style-loader/dist/runtime/insertBySelector.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("{\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://resturantpage/./node_modules/style-loader/dist/runtime/insertStyleElement.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://resturantpage/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("{\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://resturantpage/./node_modules/style-loader/dist/runtime/styleDomAPI.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("{\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://resturantpage/./node_modules/style-loader/dist/runtime/styleTagTransform.js?\n}");

/***/ }),

/***/ "./src/img/call.png":
/*!**************************!*\
  !*** ./src/img/call.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{module.exports = __webpack_require__.p + \"img/call.png\";\n\n//# sourceURL=webpack://resturantpage/./src/img/call.png?\n}");

/***/ }),

/***/ "./src/img/crispy.jpeg":
/*!*****************************!*\
  !*** ./src/img/crispy.jpeg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{module.exports = __webpack_require__.p + \"img/crispy.jpeg\";\n\n//# sourceURL=webpack://resturantpage/./src/img/crispy.jpeg?\n}");

/***/ }),

/***/ "./src/img/facebook.png":
/*!******************************!*\
  !*** ./src/img/facebook.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{module.exports = __webpack_require__.p + \"img/facebook.png\";\n\n//# sourceURL=webpack://resturantpage/./src/img/facebook.png?\n}");

/***/ }),

/***/ "./src/img/insta.png":
/*!***************************!*\
  !*** ./src/img/insta.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{module.exports = __webpack_require__.p + \"img/insta.png\";\n\n//# sourceURL=webpack://resturantpage/./src/img/insta.png?\n}");

/***/ }),

/***/ "./src/img/m1.svg":
/*!************************!*\
  !*** ./src/img/m1.svg ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{module.exports = __webpack_require__.p + \"img/m1.svg\";\n\n//# sourceURL=webpack://resturantpage/./src/img/m1.svg?\n}");

/***/ }),

/***/ "./src/img/p1.png":
/*!************************!*\
  !*** ./src/img/p1.png ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{module.exports = __webpack_require__.p + \"img/p1.png\";\n\n//# sourceURL=webpack://resturantpage/./src/img/p1.png?\n}");

/***/ }),

/***/ "./src/img/shawrma.jpeg":
/*!******************************!*\
  !*** ./src/img/shawrma.jpeg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{module.exports = __webpack_require__.p + \"img/shawrma.jpeg\";\n\n//# sourceURL=webpack://resturantpage/./src/img/shawrma.jpeg?\n}");

/***/ }),

/***/ "./src/img/shawrma2.jpeg":
/*!*******************************!*\
  !*** ./src/img/shawrma2.jpeg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{module.exports = __webpack_require__.p + \"img/shawrma2.jpeg\";\n\n//# sourceURL=webpack://resturantpage/./src/img/shawrma2.jpeg?\n}");

/***/ }),

/***/ "./src/img/what.png":
/*!**************************!*\
  !*** ./src/img/what.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{module.exports = __webpack_require__.p + \"img/what.png\";\n\n//# sourceURL=webpack://resturantpage/./src/img/what.png?\n}");

/***/ }),

/***/ "./src/img/zengar.jpeg":
/*!*****************************!*\
  !*** ./src/img/zengar.jpeg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{module.exports = __webpack_require__.p + \"img/zengar.jpeg\";\n\n//# sourceURL=webpack://resturantpage/./src/img/zengar.jpeg?\n}");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\nconst mainImage = __webpack_require__(/*! ./img/p1.png */ \"./src/img/p1.png\");\nconst father = document.getElementById(\"main\")\nconst father2 = document.getElementById(\"content\")\nconst rightside = document.createElement(\"div\")\nrightside.classList.add(\"rightside\")\nfather.appendChild(rightside);\nconst mainImage1 = document.createElement(\"img\");\nmainImage1.src = mainImage,\nmainImage1.classList.add(\"p1\")\nrightside.appendChild(mainImage1)\nconst panda = document.createElement(\"h1\")\npanda.classList.add(\"panda\")\nrightside.appendChild(panda)\npanda.innerHTML=`Panda`\n\n\nconst nav = document.createElement(\"nav\")\nnav.classList.add(\"nav\")\nconst menuImgSrc = __webpack_require__(/*! ./img/m1.svg */ \"./src/img/m1.svg\")\nconst menuImg = document.createElement(\"img\")\nmenuImg.src = menuImgSrc\nmenuImg.classList.add(\"noneImg\")\nnav.appendChild(menuImg)\n\nconst button = document.createElement(\"button\")\nbutton.innerText = \"تواصل\";\nbutton.id=\"b1\"\nbutton.classList.add(\"none\");\nfather.appendChild(nav)\nnav.appendChild(button)\nconst button2 = document.createElement(\"button\")\nbutton2.innerHTML=\"قائمة الطعام\";\nnav.appendChild(button2);\nbutton2.id=\"b2\"\nbutton2.classList.add(\"none\");\nconst button3 = document.createElement(\"button\")\nbutton3.innerHTML=\"رئيسية\";\nnav.appendChild(button3);\nbutton3.id=\"b3\"\nbutton3.classList.add(\"none\");\nconst humMenu = document.createElement(\"div\");\nhumMenu.classList.add(\"none\")\nmenuImg.addEventListener(\"click\", function () {\n    if (window.innerWidth >= 768) return;\n  const isOpen = humMenu.classList.contains(\"humMenu\");\n\n  if (isOpen) {\n    humMenu.classList.remove(\"humMenu\");\n    humMenu.classList.add(\"none\");\n\n    nav.appendChild(button);\n    nav.appendChild(button2);\n    nav.appendChild(button3);\n\n    button.classList.add(\"none\");\n    button2.classList.add(\"none\");\n    button3.classList.add(\"none\");\n  } else {\n\n    humMenu.classList.add(\"humMenu\");\n    humMenu.classList.remove(\"none\");\n\n    humMenu.appendChild(button);\n    humMenu.appendChild(button2);\n    humMenu.appendChild(button3);\n\n    button.classList.remove(\"none\");\n    button2.classList.remove(\"none\");\n    button3.classList.remove(\"none\");\n\n    button.classList.add(\"btn\");\n    button2.classList.add(\"btn\");\n    button3.classList.add(\"btn\");\n  }\n\n  // تأكد من إضافة humMenu إلى الصفحة\n  nav.appendChild(humMenu);\n});\nconst Home = document.getElementById(\"b3\")\nconst Menu = document.getElementById(\"b2\")\nconst Contant = document.getElementById(\"b1\")\n\nwindow.addEventListener(\"DOMContentLoaded\",home)\nfunction home(){\nfather2.innerHTML=``\nhumMenu.classList.remove(\"humMenu\");\nhumMenu.classList.add(\"none\");\nconst section1 = document.createElement(\"section\");\nfather2.appendChild(section1);\nsection1.classList.add(\"about\")\nsection1.id=\"about\"\nconst sectionText1 = document.createElement(\"h2\")\nsection1.appendChild(sectionText1)\nsectionText1.innerHTML=\"مرحباً بك في مطعم باندا\";\nconst sectionText2 = document.createElement(\"p\")\nsection1.appendChild(sectionText2);\nsectionText2.innerHTML=\n`\n            تجربة فريدة من المذاق العربي والغربي في مكان واحد\n            نقدّم أشهى الأطباق الشرقية والغربية<br> باستخدام أفضل المكونات الطازجة، بطابع عصري  و عنواننا\n`;\nconst sectionText3 = document.createElement(\"h3\")\nsection1.appendChild(sectionText3);\nsectionText3.innerHTML=`\"كول ودلل كرشك\"`\nconst sectionText4 = document.createElement(\"h3\")\nsection1.appendChild(sectionText4);\nsectionText4.innerHTML=`المدير باندا`\nsectionText4.id=\"panda\"\n\nconst section2 = document.createElement(\"section\");\nfather2.appendChild(section2)\nsection2.classList.add(\"about\")\nconst openTime = document.createElement(\"h2\")\nsection2.appendChild(openTime)\nopenTime.innerHTML=`أوقات عمل المطعم`\nconst times = document.createElement(\"p\");\nsection2.appendChild(times)\ntimes.innerHTML=\n`\nالأحد: من الساعة 8 صباحا وحتى الساعة 12 مساء<br>\nالأثنين: من الساعة 8 صباحا وحتى الساعة 12 مساء<br>\nالثلاثاء: من الساعة 8 صباحا وحتى الساعة 12 مساء<br>\nالأربعاء: من الساعة 8 صباحا وحتى الساعة 12 مساء<br>\nالخميس: من الساعة 8 صباحا وحتى الساعة 2 مساء<br>\nالجمعة: من الساعة 8 صباحا وحتى الساعة 2 مساء<br>\nالسبت: من الساعة 8 صباحا وحتى الساعة 2 مساء<br>\n`;\n\nconst section3 = document.createElement(\"section\");\nfather2.appendChild(section3)\nsection3.classList.add(\"about\")\nconst location = document.createElement(\"h2\")\nsection3.appendChild(location)\nlocation.innerHTML=`الموقع`\nconst locationMain = document.createElement(\"p\");\nsection3.appendChild(locationMain)\nlocationMain.innerHTML=`اللاذقية-جبلة-العمارة-مقابل ابو اللبن`\n\nconst footer = document.createElement(\"footer\");\nfather2.appendChild(footer)\nconst footerText = document.createElement(\"p\");\nfooter.appendChild(footerText)\nfooterText.innerHTML=`© 2025 مطعم باندا. جميع الحقوق محفوظة.`\n}\nHome.addEventListener(\"click\",home)\n\nfunction menu (){\nfather2.innerHTML=``\nhumMenu.classList.remove(\"humMenu\");\nhumMenu.classList.add(\"none\");\nconst section2 = document.createElement(\"section\")\nfather2.appendChild(section2)\nsection2.classList.add(\"menu\")\nsection2.id = \"menu\"\nconst section2Text = document.createElement(\"h2\")\nsection2Text.classList.add(\"food\")\nsection2Text.innerHTML=`قائمة الطعام`\nsection2.appendChild(section2Text)\n\nconst menuMain = document.createElement(\"div\");\nmenuMain.classList.add(\"menuMain\");\nsection2.appendChild(menuMain);\n\nconst menuItem1 = document.createElement(\"div\")\nmenuItem1.classList.add(\"menu-item\")\nmenuMain.appendChild(menuItem1);\nconst item1Img = document.createElement(\"img\")\nmenuItem1.appendChild(item1Img);\nconst shawrmaImg = __webpack_require__(/*! ./img/shawrma.jpeg */ \"./src/img/shawrma.jpeg\");\nitem1Img.src = shawrmaImg;\nconst item1Text = document.createElement(\"h3\")\nmenuItem1.appendChild(item1Text)\nitem1Text.innerHTML=`شاورما دجاج`\nconst item1Text2 = document.createElement(\"p\")\nmenuItem1.appendChild(item1Text2)\nitem1Text2.innerHTML=`$1.15`\n\nconst menuItem2 = document.createElement(\"div\")\nmenuItem2.classList.add(\"menu-item\")\nmenuMain.appendChild(menuItem2);\nconst item2Img = document.createElement(\"img\")\nmenuItem2.appendChild(item2Img);\nconst shawrma2Img = __webpack_require__(/*! ./img/shawrma2.jpeg */ \"./src/img/shawrma2.jpeg\");\nitem2Img.src = shawrma2Img;\n\nconst item2Text = document.createElement(\"h3\")\nmenuItem2.appendChild(item2Text)\nitem2Text.innerHTML=`وجبة شاورما عربي`\nconst item2Text2 = document.createElement(\"p\")\nmenuItem2.appendChild(item2Text2)\nitem2Text2.innerHTML=`$3.50`\n\nconst menuItem3 = document.createElement(\"div\")\nmenuItem3.classList.add(\"menu-item\")\nmenuMain.appendChild(menuItem3);\nconst item3Img = document.createElement(\"img\")\nmenuItem3.appendChild(item3Img);\nconst crispyImg = __webpack_require__(/*! ./img/crispy.jpeg */ \"./src/img/crispy.jpeg\");\nitem3Img.src = crispyImg;\nconst item3Text = document.createElement(\"h3\")\nmenuItem3.appendChild(item3Text)\nitem3Text.innerHTML=`وجبة كريسبي`\nconst item3Text2 = document.createElement(\"p\")\nmenuItem3.appendChild(item3Text2)\nitem3Text2.innerHTML=`$5.00`\n\nconst menuItem4 = document.createElement(\"div\")\nmenuItem4.classList.add(\"menu-item\")\nmenuMain.appendChild(menuItem4);\nconst item4Img = document.createElement(\"img\")\nmenuItem4.appendChild(item4Img);\nconst zengarImg = __webpack_require__(/*! ./img/zengar.jpeg */ \"./src/img/zengar.jpeg\");\nitem4Img.src = zengarImg;\nconst item4Text = document.createElement(\"h3\")\nmenuItem4.appendChild(item4Text)\nitem4Text.innerHTML=`زنجر`\nconst item4Text2 = document.createElement(\"p\")\nmenuItem4.appendChild(item4Text2)\nitem4Text2.innerHTML=`$3.50`\nconst footer = document.createElement(\"footer\");\nfather2.appendChild(footer)\nconst footerText = document.createElement(\"p\");\nfooter.appendChild(footerText)\nfooterText.innerHTML=`© 2025 مطعم باندا. جميع الحقوق محفوظة.`\n}\nMenu.addEventListener(\"click\",menu)\n\n function contant(){\n    father2.innerHTML=``;\n    humMenu.classList.remove(\"humMenu\");\n    humMenu.classList.add(\"none\");\n    const section1 = document.createElement(\"section\");\n    father2.appendChild(section1);\n    section1.classList.add(\"about\");\n    const sectionText1 = document.createElement(\"h2\")\n    section1.appendChild(sectionText1)\n    sectionText1.innerHTML=\"تواصل معنا\";\n    const ul = document.createElement(\"ul\");\n    section1.appendChild(ul)\n    const way1 = document.createElement(\"li\")\n    const way2 = document.createElement(\"li\")\n    const way3 = document.createElement(\"li\")\n    const way4 = document.createElement(\"li\")\n    ul.appendChild(way1)\n    ul.appendChild(way2)\n    ul.appendChild(way3)\n    ul.appendChild(way4)\n    way1.innerHTML=`<p><a href=\"\">مطعم باندا</a></p>`\n    way2.innerHTML=`<p><a href=\"\">Panda_849</a></p>`\n    way3.innerHTML=`<p><a href=\"\">panda439</a></p>`\n    way4.innerHTML=`<p><a href=\"\">0977487439</a></p>`\n    const facebook = __webpack_require__(/*! ./img/facebook.png */ \"./src/img/facebook.png\");\n    const insta = __webpack_require__(/*! ./img/insta.png */ \"./src/img/insta.png\");\n    const whats = __webpack_require__(/*! ./img/what.png */ \"./src/img/what.png\");\n    const call = __webpack_require__(/*! ./img/call.png */ \"./src/img/call.png\");\n    const faceimg = document.createElement(\"img\");\n    const istaimg = document.createElement(\"img\");\n    const whatsimg = document.createElement(\"img\");\n    const callimg = document.createElement(\"img\");\n    faceimg.src= facebook\n    istaimg.src= insta\n    whatsimg.src= whats\n    callimg.src= call\n    way1.appendChild(faceimg)\n    way2.appendChild(istaimg)\n    way3.appendChild(whatsimg)\n    way4.appendChild(callimg)\n    const footer = document.createElement(\"footer\");\n    father2.appendChild(footer)\n    const footerText = document.createElement(\"p\");\n    footer.appendChild(footerText)\n    footerText.innerHTML=`© 2025 مطعم باندا. جميع الحقوق محفوظة.`\n    }\nContant.addEventListener(\"click\",contant)\n\n//# sourceURL=webpack://resturantpage/./src/index.js?\n}");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://resturantpage/./src/style.css?\n}");

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
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;