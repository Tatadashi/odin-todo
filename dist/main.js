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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `* {\n    margin: 0;\n}\n\nbody {\n    background-color: aliceblue;\n    min-height: 100vh;\n    display: grid;\n    grid-template:\n        \"header header\" 1fr\n        \"sidebar content\" 9fr\n        / 1fr 4fr;\n    height: 100vh;\n}\n\n.modal {\n    margin: auto;\n    pointer-events: none;\n    opacity: 0;\n}\n\n.visible {\n    pointer-events: all;\n    opacity: 1;\n}\n\nform {\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 10px;\n}\n\nform div {\n    display: flex;\n    justify-content: space-between;\n    gap: 50px;\n    width: 100%;\n}\n\n#header {\n    background-color: cadetblue;\n    grid-area: header;\n    font-weight: bolder;\n    text-align: center;\n    font-size: xx-large;\n}\n\n#pages {\n    display: flex;\n    justify-content: space-around;\n    font-size: large;\n}\n\n#sidebar {\n    background-color: aquamarine;\n    grid-area: sidebar;\n    box-sizing: border-box;\n    padding: 10px;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n}\n\n.project {\n    font-weight: bold;\n    font-size: medium;\n}\n\n#content {\n    background-color: bisque;\n    grid-area: content;\n}\n\n.main {\n    height: 100%;\n}\n\n#about {\n    background-color: blanchedalmond;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 50px;\n    box-sizing: border-box;\n    padding: 50px;\n}\n\n#attribution {\n    background-color: lightgray;\n    box-sizing: border-box;\n    padding: 20px;\n}\n\n#todos {\n    background-color: lavenderblush;\n    box-sizing: border-box;\n    padding: 10px;\n}\n\n#project-title {\n    font-weight: bold;\n    font-size: x-large;\n    text-align: center;\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://odin-todo/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://odin-todo/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://odin-todo/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://odin-todo/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://odin-todo/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://odin-todo/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://odin-todo/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://odin-todo/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://odin-todo/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://odin-todo/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _images_checkmark_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/checkmark.png */ \"./src/images/checkmark.png\");\n/* harmony import */ var _otherJS_DOM__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./otherJS/DOM */ \"./src/otherJS/DOM.js\");\n\n\n\n\n(0,_otherJS_DOM__WEBPACK_IMPORTED_MODULE_2__.setDOMEvents)();\n\n//# sourceURL=webpack://odin-todo/./src/index.js?");

/***/ }),

/***/ "./src/otherJS/DOM.js":
/*!****************************!*\
  !*** ./src/otherJS/DOM.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   setDOMEvents: () => (/* binding */ setDOMEvents),\n/* harmony export */   updateContent: () => (/* binding */ updateContent),\n/* harmony export */   updateSidebar: () => (/* binding */ updateSidebar)\n/* harmony export */ });\n/* harmony import */ var _tabEvents__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabEvents */ \"./src/otherJS/tabEvents.js\");\n/* harmony import */ var _modalEvents__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modalEvents */ \"./src/otherJS/modalEvents.js\");\n/* harmony import */ var _default__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./default */ \"./src/otherJS/default.js\");\n/* harmony import */ var _nonDOM__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nonDOM */ \"./src/otherJS/nonDOM.js\");\n/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./form */ \"./src/otherJS/form.js\");\n\n\n\n\n\n\n//modal and tab events\nfunction setDOMEvents () {\n    (0,_tabEvents__WEBPACK_IMPORTED_MODULE_0__.setAllTabOnClickEvents)();\n    (0,_modalEvents__WEBPACK_IMPORTED_MODULE_1__.setAllModalEvents)();\n    (0,_form__WEBPACK_IMPORTED_MODULE_4__.setAllFormEvents)();\n}\n\n//Update sidebar DOM to include all projects in given list with on click event to show content\nfunction updateSidebar (projectList) {\n    //first child of #sidebar is where projects located\n    const sidebarProjects = document.getElementById('sidebar').children[0];\n    sidebarProjects.innerHTML = '';\n    \n    projectList.forEach(project => {\n        const projectDiv = document.createElement('div');\n        projectDiv.classList.add('project')\n        projectDiv.textContent = project.title;\n\n        projectDiv.addEventListener('click', (e) => {\n            (0,_tabEvents__WEBPACK_IMPORTED_MODULE_0__.loadTabHtml)('todos', project.title)\n        });\n       \n        sidebarProjects.appendChild(projectDiv);\n    });\n}\n\n//Update content of todos tab to contain info of given project and its' todos \nfunction updateContent (projectName) {\n    const project = (0,_nonDOM__WEBPACK_IMPORTED_MODULE_3__.findItemFromListByName)(projectName, _default__WEBPACK_IMPORTED_MODULE_2__.projectList);\n\n    const projectTitle = document.getElementById('project-title');\n    projectTitle.textContent = project.title;\n\n\n    const projectTodosDiv = document.getElementById('todos').children[1];\n    projectTodosDiv.innerHTML = '';\n\n    const projectTodos = document.createElement('ul');\n    project.todoList.forEach(todo => {\n        const todoItem = document.createElement('li');\n        todoItem.textContent = todo.title;\n        todoItem.dataset.modal = 'todo-info';\n        todoItem.dataset.project = project.title;\n        todoItem.dataset.name = todo.title;\n        todoItem.classList.add('todo-info-button');\n        projectTodos.appendChild(todoItem);\n    });\n\n    projectTodosDiv.appendChild(projectTodos);\n}\n\n\n\n//# sourceURL=webpack://odin-todo/./src/otherJS/DOM.js?");

/***/ }),

/***/ "./src/otherJS/default.js":
/*!********************************!*\
  !*** ./src/otherJS/default.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Project: () => (/* binding */ Project),\n/* harmony export */   Todo: () => (/* binding */ Todo),\n/* harmony export */   defaultProject: () => (/* binding */ defaultProject),\n/* harmony export */   projectList: () => (/* binding */ projectList)\n/* harmony export */ });\n/* harmony import */ var _DOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOM */ \"./src/otherJS/DOM.js\");\n\n\nclass Todo {\n    constructor (title, description, dueDate, priority, notes) {\n        this.title = title;\n        this.description = description;\n        this.dueDate = dueDate;\n        this.priority = priority;\n        this.notes = notes;\n    }\n\n    changeProperty (property, newInfo) {\n        this[property] = newInfo;\n    }\n}\n\nclass Project {\n    constructor (title, todoList = []) {\n        this.title = title;\n        this.todoList = todoList;\n    }\n\n    changeProperty (property, newInfo) {\n        this[property] = newInfo;\n    }\n}\n\n//default\nconst item1 = new Todo('clean', 'cleaning', '2004-10-01', 'high', 'room');\nconst item2 = new Todo('hw', 'solving', '2013-12-21', 'low', 'math');\nconst item3 = new Todo('game', 'gaming', '2029-03-03', 'max', 'fun');\nconst todoList = [item1, item2];\nconst todoList2 = [item1, item3];\nconst defaultProject = new Project('school', todoList);\nconst project2 = new Project('home', todoList2);\nconst project3 = new Project('stuff', todoList2);\n\n//test change todoList\nconst todoList3 = [item3, item2];\nproject2.changeProperty('todoList', todoList3);\n\nconst projectList = [defaultProject, project2, project3];\n\n(0,_DOM__WEBPACK_IMPORTED_MODULE_0__.updateSidebar)(projectList);\n\n\n\n// project.changeProperty('title', 'college');\n// item1.changeProperty('description', 'jon');\n\n//# sourceURL=webpack://odin-todo/./src/otherJS/default.js?");

/***/ }),

/***/ "./src/otherJS/form.js":
/*!*****************************!*\
  !*** ./src/otherJS/form.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   setAllFormEvents: () => (/* binding */ setAllFormEvents),\n/* harmony export */   setProjectDropdownSelect: () => (/* binding */ setProjectDropdownSelect),\n/* harmony export */   showTodos: () => (/* binding */ showTodos),\n/* harmony export */   updateAllProjectDropdowns: () => (/* binding */ updateAllProjectDropdowns),\n/* harmony export */   updateTodoDropdown: () => (/* binding */ updateTodoDropdown),\n/* harmony export */   updateTodoInfo: () => (/* binding */ updateTodoInfo)\n/* harmony export */ });\n/* harmony import */ var _default__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./default */ \"./src/otherJS/default.js\");\n/* harmony import */ var _nonDOM__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nonDOM */ \"./src/otherJS/nonDOM.js\");\n\n\n\n\nfunction setAllFormEvents () {\n    setDeleteFormEvents();\n}\n\nfunction updateAllProjectDropdowns () {\n    const dropdowns = document.querySelectorAll('.project-list');\n    dropdowns.forEach(dropdown => {\n        fillDropdownWithList(dropdown, _default__WEBPACK_IMPORTED_MODULE_0__.projectList);\n    });\n}\n\nfunction setProjectDropdownSelect (valueSelected) {\n    const dropdown = document.getElementById('project-list-edit');\n    dropdown.value = valueSelected;\n}\n\n//shows todo question based on dropdown\nfunction checkDeleteType (value) {\n    let deleteType = {\n        'todo' : showTodos,\n        'project': hideTodos\n    };\n\n    //call function stored in key value\n    deleteType[value]();\n}\n\nfunction showTodos () {\n    $('#modify-todo-question').show();\n    updateTodoDropdown(_default__WEBPACK_IMPORTED_MODULE_0__.defaultProject.title);\n}\n\nfunction hideTodos () {\n    $('#modify-todo-question').hide();\n}\n\nfunction setDeleteFormEvents () {\n    setDeleteTypeDropdownEvent();\n    setActionTypeDropdownEvent();\n    setProjectDropdownEvent()\n}\n\nfunction setProjectDropdownEvent () {\n    const dropdown = document.getElementById('modify-project');\n    \n    dropdown.addEventListener('change', (e) => {\n        updateTodoDropdown(dropdown.value)\n    });\n}\n\nfunction setDeleteTypeDropdownEvent () {\n    const dropdown = document.getElementById('delete-type');\n    dropdown.addEventListener('change', (e) => {\n        checkDeleteType(dropdown.value);\n    });\n}\n\nfunction setActionTypeDropdownEvent () {\n    const dropdown = document.getElementById('action-type');\n    const button = document.getElementById('delete-button');\n    dropdown.addEventListener('change', (e) => {\n        button.textContent = dropdown.value;\n    });\n}\n\nfunction updateTodoDropdown (projectName) {\n    const project = (0,_nonDOM__WEBPACK_IMPORTED_MODULE_1__.findItemFromListByName)(projectName, _default__WEBPACK_IMPORTED_MODULE_0__.projectList);\n    const projectTodos = project.todoList;\n    const dropdown = document.getElementById('modify-todo');\n    \n    fillDropdownWithList(dropdown, projectTodos);\n}\n\nfunction fillDropdownWithList (dropdown, list) {\n    dropdown.innerHTML = '';\n\n    list.forEach(todo => {\n        const option = document.createElement('option');\n        option.value = todo.title;\n        option.innerHTML = todo.title;\n\n        dropdown.appendChild(option);\n    });\n}\n\nfunction updateTodoInfo (todoName, projectName) {\n    const project = (0,_nonDOM__WEBPACK_IMPORTED_MODULE_1__.findItemFromListByName)(projectName, _default__WEBPACK_IMPORTED_MODULE_0__.projectList);\n    const todo = (0,_nonDOM__WEBPACK_IMPORTED_MODULE_1__.findItemFromListByName)(todoName, project.todoList);\n\n    const todoNameElements = document.querySelectorAll('.todo-name');\n    const todoDescriptionElements = document.querySelectorAll('.todo-description');\n    const todoDueDateElements = document.querySelectorAll('.todo-due-date');\n    const todoPriorityElement = document.querySelector('.todo-priority');\n    const todoNoteElements = document.querySelectorAll('.todo-note');\n\n    //textContent is for todoInfo modal, value is for todoEdit modal\n    todoNameElements.forEach(element => {\n        element.textContent = todo.title;\n        element.value = todo.title;\n\n        element.dataset.originalProject = project.title;\n        element.dataset.originalName = todo.title;\n    });\n    \n    todoDescriptionElements.forEach(element => {\n        element.textContent = todo.description;\n        element.value = todo.description;\n    });\n    \n    todoDueDateElements.forEach(element => {\n        element.textContent = todo.dueDate;\n        element.value = todo.dueDate;\n    });\n    \n    //textContent deletes children of dropdown\n    todoPriorityElement.textContent = todo.priority;\n    setPriorityDropdownSelect(todo.priority);\n\n    todoNoteElements.forEach(element => {\n        element.textContent = todo.notes;\n        element.value = todo.notes;\n    });\n}\n\nfunction setPriorityDropdownSelect (valueSelected) {\n    const dropdown = document.getElementById('todo-priority-edit-input');\n    dropdown.value = valueSelected;\n}\n\n\n\n//# sourceURL=webpack://odin-todo/./src/otherJS/form.js?");

/***/ }),

/***/ "./src/otherJS/modalEvents.js":
/*!************************************!*\
  !*** ./src/otherJS/modalEvents.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   setAllModalEvents: () => (/* binding */ setAllModalEvents),\n/* harmony export */   setAllTodoModalOpen: () => (/* binding */ setAllTodoModalOpen)\n/* harmony export */ });\n/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form */ \"./src/otherJS/form.js\");\n/* harmony import */ var _DOM__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DOM */ \"./src/otherJS/DOM.js\");\n/* harmony import */ var _nonDOM__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nonDOM */ \"./src/otherJS/nonDOM.js\");\n/* harmony import */ var _default__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./default */ \"./src/otherJS/default.js\");\n/* harmony import */ var _tabEvents__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tabEvents */ \"./src/otherJS/tabEvents.js\");\n\n\n\n\n\n\nconst modals = document.querySelectorAll('.modal');\nconst dialogButtons = document.querySelectorAll('.dialog-button');\n\nfunction hideModals() {\n    modals.forEach(modal => {\n        modal.classList.remove('visible');\n        modal.close();\n    });\n}\n\nfunction showModal(id) {\n    const modal = document.getElementById(id);\n    modal.classList.add('visible');\n    modal.showModal();\n}\n\nfunction setModalOpen() {\n    dialogButtons.forEach(button => {\n        button.addEventListener('click', (e) => {\n            const modalID = button.dataset.modal;\n            const formID = modalID + '-form';\n            const form = document.getElementById(formID);\n\n            form.reset();\n\n            hideModals();\n            showModal(modalID);\n            \n            (0,_form__WEBPACK_IMPORTED_MODULE_0__.showTodos)();\n            (0,_form__WEBPACK_IMPORTED_MODULE_0__.updateTodoDropdown)(_default__WEBPACK_IMPORTED_MODULE_3__.defaultProject.title);\n            (0,_form__WEBPACK_IMPORTED_MODULE_0__.updateAllProjectDropdowns)();\n        });\n    });\n}\n\nfunction setModalClose() {\n    modals.forEach (modal => {\n        const xButton = modal.querySelector('.close');\n        xButton.addEventListener('click', (e) => {\n            hideModals();\n        });\n    });\n}\n\nfunction setTodoModalOpen (button) {\n    button.addEventListener('click', (e) => {\n        const modalID = button.dataset.modal;\n        const todoName = button.dataset.name;\n        const projectName = button.dataset.project;\n\n        (0,_form__WEBPACK_IMPORTED_MODULE_0__.updateTodoInfo)(todoName, projectName);\n\n        hideModals();\n        showModal(modalID);\n    });\n}\n\nfunction setAllTodoModalOpen () {\n    const dialogButtons = document.querySelectorAll('.todo-info-button');\n    dialogButtons.forEach(button => {\n        setTodoModalOpen(button);\n    });\n}\n\nfunction setAddTodoModalSubmit (form) {\n    form.addEventListener('submit', (e) => {\n        const formData = new FormData(form);\n        const project = formData.get('projects');\n        const name = formData.get('name');\n        const description = formData.get('description');\n        const date = formData.get('due-date');\n        const priority = formData.get('priority-level');\n        const notes = formData.get('note');\n\n        (0,_nonDOM__WEBPACK_IMPORTED_MODULE_2__.addTodo)(project, name, description, date, priority, notes);\n        (0,_tabEvents__WEBPACK_IMPORTED_MODULE_4__.loadTabHtml)('todos', project);\n    });\n}\n\nfunction setEditTodoModalSubmit (form) {\n    form.addEventListener('submit', (e) => {\n        const formData = new FormData(form);\n        const project = formData.get('projects');\n        const name = formData.get('name');\n        const description = formData.get('description');\n        const date = formData.get('due-date');\n        const priority = formData.get('priority-level');\n        const notes = formData.get('note');\n\n        (0,_nonDOM__WEBPACK_IMPORTED_MODULE_2__.editTodo)(project, name, description, date, priority, notes);\n        (0,_tabEvents__WEBPACK_IMPORTED_MODULE_4__.loadTabHtml)('todos', project);\n    });\n}\n\nfunction setAddProjectModalSubmit (form) {\n    form.addEventListener('submit', (e) => {\n        const formData = new FormData(form);\n        const name = formData.get('name');\n\n        (0,_nonDOM__WEBPACK_IMPORTED_MODULE_2__.addProject)(name);\n        (0,_tabEvents__WEBPACK_IMPORTED_MODULE_4__.loadTabHtml)('todos', name);\n        (0,_DOM__WEBPACK_IMPORTED_MODULE_1__.updateSidebar)(_default__WEBPACK_IMPORTED_MODULE_3__.projectList);\n    });\n}\n\nfunction setDeleteModalSubmit (form) {\n    form.addEventListener('submit', (e) => {\n        const formData = new FormData(form);\n        const type = formData.get('types');\n        const project = formData.get('projects');\n        const todo = formData.get('todos');\n        const action = formData.get('actions');\n\n        if (action == 'Delete') {\n            deleteBasedOnType(type, project, todo);\n        } else if (action == 'Modify') {\n            openEditModal(type, project, todo);\n        }\n    });\n}\n\nfunction deleteBasedOnType (type, project, todo) {\n    if (type == 'todo') {\n        (0,_nonDOM__WEBPACK_IMPORTED_MODULE_2__.deleteTodo)(project, todo);\n        (0,_tabEvents__WEBPACK_IMPORTED_MODULE_4__.loadTabHtml)('todos', project);\n        (0,_form__WEBPACK_IMPORTED_MODULE_0__.updateTodoDropdown)(project);\n    } else if (type == 'project') {\n        (0,_nonDOM__WEBPACK_IMPORTED_MODULE_2__.deleteProject)(project);\n        (0,_tabEvents__WEBPACK_IMPORTED_MODULE_4__.loadTabHtml)('todos');\n        (0,_DOM__WEBPACK_IMPORTED_MODULE_1__.updateSidebar)(_default__WEBPACK_IMPORTED_MODULE_3__.projectList);\n    }\n}\n\nfunction openEditModal (type, projectName, todoName) {\n    if (type == 'todo') {\n        hideModals();\n        showModal('edit-todo');\n\n        (0,_form__WEBPACK_IMPORTED_MODULE_0__.updateAllProjectDropdowns)();\n        (0,_form__WEBPACK_IMPORTED_MODULE_0__.setProjectDropdownSelect)(projectName);\n        (0,_form__WEBPACK_IMPORTED_MODULE_0__.updateTodoInfo)(todoName, projectName);\n    }\n}\n\nfunction setAllModalSubmit () {\n    const addTodoForm = document.getElementById('add-todo-form');\n    setAddTodoModalSubmit(addTodoForm);\n\n    const addProjectForm = document.getElementById('add-project-form');\n    setAddProjectModalSubmit(addProjectForm);\n\n    const deleteForm = document.getElementById('delete-form');\n    setDeleteModalSubmit(deleteForm);\n\n    const editTodoForm = document.getElementById('edit-todo-form');\n    setEditTodoModalSubmit(editTodoForm);\n}\n\nfunction setAllModalEvents () {\n    setModalOpen();\n    setAllModalSubmit();\n    setModalClose()\n}\n\n\n\n//# sourceURL=webpack://odin-todo/./src/otherJS/modalEvents.js?");

/***/ }),

/***/ "./src/otherJS/nonDOM.js":
/*!*******************************!*\
  !*** ./src/otherJS/nonDOM.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addProject: () => (/* binding */ addProject),\n/* harmony export */   addTodo: () => (/* binding */ addTodo),\n/* harmony export */   deleteProject: () => (/* binding */ deleteProject),\n/* harmony export */   deleteTodo: () => (/* binding */ deleteTodo),\n/* harmony export */   editTodo: () => (/* binding */ editTodo),\n/* harmony export */   findItemFromListByName: () => (/* binding */ findItemFromListByName)\n/* harmony export */ });\n/* harmony import */ var _default__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./default */ \"./src/otherJS/default.js\");\n\n\nfunction findItemFromListByName (itemName, list) {\n    let chosenItem;\n    list.forEach(item => {\n        if (item.title == itemName) {\n            chosenItem = item;\n        }\n    });\n\n    return chosenItem;\n}\n\nfunction checkIfUniqueName (name, list) {\n    if (findItemFromListByName(name, list) == null) {\n        return true;\n    } else {\n        return false;\n    }\n}\n\nfunction addTodo (projectName, todoName, description, dueDate, priority, note) {\n    const newTodo = new _default__WEBPACK_IMPORTED_MODULE_0__.Todo(todoName, description, dueDate, priority, note);\n    const chosenProject = findItemFromListByName(projectName, _default__WEBPACK_IMPORTED_MODULE_0__.projectList);\n    let newTodoList = chosenProject.todoList;\n\n    if (checkIfUniqueName(todoName, newTodoList)) {\n        newTodoList.push(newTodo);\n        chosenProject.changeProperty('todoList', newTodoList); \n    } else {\n        alert('Todo Creation Failed: name already exists');\n    }\n}\n\nfunction addProject (projectName) {\n    const newProject = new _default__WEBPACK_IMPORTED_MODULE_0__.Project(projectName);\n\n    if (checkIfUniqueName(projectName, _default__WEBPACK_IMPORTED_MODULE_0__.projectList)) {\n        _default__WEBPACK_IMPORTED_MODULE_0__.projectList.push(newProject);\n    } else {\n        alert('Creation Failed: name already exists');\n    }\n}\n\nfunction editTodo (projectName, todoName, description, dueDate, priority, note) {\n    const editTodoNameElement = document.getElementById('todo-name-edit-input');\n    const todoOriginalName = editTodoNameElement.dataset.originalName;\n    const todoOriginalProjectName = editTodoNameElement.dataset.originalProject;\n\n    const todoOriginalProject = findItemFromListByName(todoOriginalProjectName, _default__WEBPACK_IMPORTED_MODULE_0__.projectList);\n    const todo = findItemFromListByName(todoOriginalName, todoOriginalProject.todoList);\n    const project = findItemFromListByName(projectName, _default__WEBPACK_IMPORTED_MODULE_0__.projectList);\n\n    if (checkIfUniqueName(todoName, project.todoList)) {\n        //new name, same project\n        editTodoInfo(todo, todoName, description, dueDate, priority, note);\n\n        //new name, new project or same name, new project\n        if (todoOriginalProjectName !== project.title) {\n            addTodo(projectName, todoName, description, dueDate, priority, note);\n            deleteTodo(todoOriginalProjectName, todoOriginalName);\n        }\n    //same name, same project\n    } else if (todoOriginalName == todoName && todoOriginalProjectName == project.title) {\n        editTodoInfo(todo, todoName, description, dueDate, priority, note);\n    } else {\n        alert('Edit Fail: todo name exists already in selected project')\n    }\n}\n\nfunction editTodoInfo (todo, newTodoName, newDescription, newDueDate, newPriority, newNote) {\n    todo.changeProperty('title', newTodoName);\n    todo.changeProperty('description', newDescription);\n    todo.changeProperty('dueDate', newDueDate);\n    todo.changeProperty('priority', newPriority);\n    todo.changeProperty('notes', newNote);\n}\n\nfunction deleteProject (projectName) {\n    const project = findItemFromListByName(projectName, _default__WEBPACK_IMPORTED_MODULE_0__.projectList);\n    let index = _default__WEBPACK_IMPORTED_MODULE_0__.projectList.indexOf(project)\n    \n    index = checkIfDefaultProject(project, index);\n    \n    _default__WEBPACK_IMPORTED_MODULE_0__.projectList.splice(index, 1);\n}\n\nfunction deleteTodo (projectName, todoName) {\n    const project = findItemFromListByName(projectName, _default__WEBPACK_IMPORTED_MODULE_0__.projectList);\n    const todo = findItemFromListByName(todoName, project.todoList);\n    const index = project.todoList.indexOf(todo);\n\n    project.todoList.splice(index, 1);\n}\n\n//change index if default since don't want defaultProject to be deleted (but its content will change to resemble deleted project)\nfunction checkIfDefaultProject (project, index) {\n    if (project == _default__WEBPACK_IMPORTED_MODULE_0__.defaultProject) {\n        index = reassignDefaultProject();\n    }\n    return index;\n}\n\n//do not want to delete default but copy nearest nondefault (or create one if not exist), then delete that one\nfunction reassignDefaultProject () {\n    if (_default__WEBPACK_IMPORTED_MODULE_0__.projectList.length == 1) {\n        addProject('EMPTY-PROJECT');\n    }\n\n    const projectBeingCopied = getFirstNonDefaultProject();\n    const indexOfCopiedProject = _default__WEBPACK_IMPORTED_MODULE_0__.projectList.indexOf(projectBeingCopied);\n\n    copyProject(_default__WEBPACK_IMPORTED_MODULE_0__.defaultProject, projectBeingCopied);\n\n    return indexOfCopiedProject;\n}\n\n//have new project copy everything from old project\nfunction copyProject (newProject, oldProject) {\n    newProject.changeProperty('title', oldProject.title);\n    newProject.changeProperty('todoList', oldProject.todoList);\n}\n\nfunction getFirstNonDefaultProject () {\n    let i = 0;\n    let project = _default__WEBPACK_IMPORTED_MODULE_0__.projectList[i]\n    while (project == _default__WEBPACK_IMPORTED_MODULE_0__.defaultProject) {\n        project = _default__WEBPACK_IMPORTED_MODULE_0__.projectList[i++];\n    }\n\n    return project;\n}\n\n\n\n//# sourceURL=webpack://odin-todo/./src/otherJS/nonDOM.js?");

/***/ }),

/***/ "./src/otherJS/tabEvents.js":
/*!**********************************!*\
  !*** ./src/otherJS/tabEvents.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadTabHtml: () => (/* binding */ loadTabHtml),\n/* harmony export */   setAllTabOnClickEvents: () => (/* binding */ setAllTabOnClickEvents)\n/* harmony export */ });\n/* harmony import */ var _DOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOM */ \"./src/otherJS/DOM.js\");\n/* harmony import */ var _default__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./default */ \"./src/otherJS/default.js\");\n/* harmony import */ var _modalEvents__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modalEvents */ \"./src/otherJS/modalEvents.js\");\n\n\n\n\nfunction loadTabHtml (tabName, projectName=_default__WEBPACK_IMPORTED_MODULE_1__.defaultProject.title) {\n    $(document).ready(function() {\n        $(\"#content\").load(`./htmlCopies/${tabName}.html .main`, function() {\n            if (tabName == 'todos') {\n                (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.updateContent)(projectName);\n                (0,_modalEvents__WEBPACK_IMPORTED_MODULE_2__.setAllTodoModalOpen)();\n            }\n        });\n     });\n}\n\nfunction setAllTabOnClickEvents () {\n    const tabs = document.querySelectorAll('.tab');\n    tabs.forEach((tab) => {\n        const tabNameOnWebsite = tab.textContent.toLowerCase();\n        tab.addEventListener('click', (e) => {\n            loadTabHtml(tabNameOnWebsite);\n        });\n    });\n}\n\n\n\n//# sourceURL=webpack://odin-todo/./src/otherJS/tabEvents.js?");

/***/ }),

/***/ "./src/images/checkmark.png":
/*!**********************************!*\
  !*** ./src/images/checkmark.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/887592f28b057668fdc3.png\";\n\n//# sourceURL=webpack://odin-todo/./src/images/checkmark.png?");

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
/******/ 			if (document.currentScript)
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
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
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