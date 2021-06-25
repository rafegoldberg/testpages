(window["__LOADABLE_LOADED_CHUNKS__"] = window["__LOADABLE_LOADED_CHUNKS__"] || []).push([["routes-Discuss"],{

/***/ "./src/core/hooks/useAngular.js":
/*!**************************************!*\
  !*** ./src/core/hooks/useAngular.js ***!
  \**************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var core_js_modules_es6_regexp_flags_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.regexp.flags.js */ \"../../node_modules/core-js/modules/es6.regexp.flags.js\");\n/* harmony import */ var core_js_modules_es6_regexp_flags_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_flags_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"../../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _App_Context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../App/Context */ \"./src/App/Context.jsx\");\n/* harmony import */ var _useEnvInfo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./useEnvInfo */ \"./src/core/hooks/useEnvInfo/index.js\");\n\n\n\n\n\nvar useAngular = function useAngular() {\n  var fn = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function () {};\n\n  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useContext\"])(_App_Context__WEBPACK_IMPORTED_MODULE_2__[/* ProjectContext */ \"e\"]),\n      _useContext$flags = _useContext.flags,\n      flags = _useContext$flags === void 0 ? {} : _useContext$flags;\n\n  var _useEnvInfo = Object(_useEnvInfo__WEBPACK_IMPORTED_MODULE_3__[/* default */ \"a\"])(),\n      isLocal = _useEnvInfo.isLocal,\n      isServer = _useEnvInfo.isServer;\n  /**\n   * Hide initial server-rendered Jade\n   * HTML on client-side navigation away\n   * from a non-React routed template.\n   */\n\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    if (isLocal || isServer) return function () {};\n    return function () {\n      if ('$' in window) $('#ssr-main').nextUntil('#ssr-end').hide();\n    };\n  }, []); // eslint-disable-line react-hooks/exhaustive-deps\n\n  if (flags !== null && flags !== void 0 && flags.useReactApp) {\n    if (typeof fn === 'function') fn();\n    return true;\n  }\n\n  return false;\n};\n\n/* harmony default export */ __webpack_exports__[\"a\"] = (useAngular);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9ob29rcy91c2VBbmd1bGFyLmpzPzM1MDYiXSwibmFtZXMiOlsidXNlQW5ndWxhciIsImZuIiwidXNlQ29udGV4dCIsIlByb2plY3RDb250ZXh0IiwiZmxhZ3MiLCJ1c2VFbnZJbmZvIiwiaXNMb2NhbCIsImlzU2VydmVyIiwidXNlRWZmZWN0Iiwid2luZG93IiwiJCIsIm5leHRVbnRpbCIsImhpZGUiLCJ1c2VSZWFjdEFwcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxHQUFtQjtBQUFBLE1BQWxCQyxFQUFrQix1RUFBYixZQUFNLENBQUUsQ0FBSzs7QUFBQSxvQkFDYkMsd0RBQVUsQ0FBQ0MsbUVBQUQsQ0FERztBQUFBLHNDQUM1QkMsS0FENEI7QUFBQSxNQUM1QkEsS0FENEIsa0NBQ3BCLEVBRG9COztBQUFBLG9CQUVOQyxtRUFBVSxFQUZKO0FBQUEsTUFFNUJDLE9BRjRCLGVBRTVCQSxPQUY0QjtBQUFBLE1BRW5CQyxRQUZtQixlQUVuQkEsUUFGbUI7QUFJcEM7QUFDRjtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0VDLHlEQUFTLENBQUMsWUFBTTtBQUNkLFFBQUlGLE9BQU8sSUFBSUMsUUFBZixFQUF5QixPQUFPLFlBQU0sQ0FBRSxDQUFmO0FBQ3pCLFdBQU8sWUFBTTtBQUNYLFVBQUksT0FBT0UsTUFBWCxFQUFtQkMsQ0FBQyxDQUFDLFdBQUQsQ0FBRCxDQUFlQyxTQUFmLENBQXlCLFVBQXpCLEVBQXFDQyxJQUFyQztBQUNwQixLQUZEO0FBR0QsR0FMUSxFQUtOLEVBTE0sQ0FBVCxDQVRvQyxDQWM1Qjs7QUFFUixNQUFJUixLQUFKLGFBQUlBLEtBQUosZUFBSUEsS0FBSyxDQUFFUyxXQUFYLEVBQXdCO0FBQ3RCLFFBQUksT0FBT1osRUFBUCxLQUFjLFVBQWxCLEVBQThCQSxFQUFFO0FBQ2hDLFdBQU8sSUFBUDtBQUNEOztBQUNELFNBQU8sS0FBUDtBQUNELENBckJEOztBQXVCZUQsbUVBQWYiLCJmaWxlIjoiLi9zcmMvY29yZS9ob29rcy91c2VBbmd1bGFyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlQ29udGV4dCwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgUHJvamVjdENvbnRleHQgfSBmcm9tICdAQXBwL0NvbnRleHQnO1xuaW1wb3J0IHVzZUVudkluZm8gZnJvbSAnQGNvcmUvaG9va3MvdXNlRW52SW5mbyc7XG5cbmNvbnN0IHVzZUFuZ3VsYXIgPSAoZm4gPSAoKSA9PiB7fSkgPT4ge1xuICBjb25zdCB7IGZsYWdzID0ge30gfSA9IHVzZUNvbnRleHQoUHJvamVjdENvbnRleHQpO1xuICBjb25zdCB7IGlzTG9jYWwsIGlzU2VydmVyIH0gPSB1c2VFbnZJbmZvKCk7XG5cbiAgLyoqXG4gICAqIEhpZGUgaW5pdGlhbCBzZXJ2ZXItcmVuZGVyZWQgSmFkZVxuICAgKiBIVE1MIG9uIGNsaWVudC1zaWRlIG5hdmlnYXRpb24gYXdheVxuICAgKiBmcm9tIGEgbm9uLVJlYWN0IHJvdXRlZCB0ZW1wbGF0ZS5cbiAgICovXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGlzTG9jYWwgfHwgaXNTZXJ2ZXIpIHJldHVybiAoKSA9PiB7fTtcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgaWYgKCckJyBpbiB3aW5kb3cpICQoJyNzc3ItbWFpbicpLm5leHRVbnRpbCgnI3Nzci1lbmQnKS5oaWRlKCk7XG4gICAgfTtcbiAgfSwgW10pOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIHJlYWN0LWhvb2tzL2V4aGF1c3RpdmUtZGVwc1xuXG4gIGlmIChmbGFncz8udXNlUmVhY3RBcHApIHtcbiAgICBpZiAodHlwZW9mIGZuID09PSAnZnVuY3Rpb24nKSBmbigpO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHVzZUFuZ3VsYXI7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/core/hooks/useAngular.js\n");

/***/ }),

/***/ "./src/routes/Discuss/index.jsx":
/*!**************************************!*\
  !*** ./src/routes/Discuss/index.jsx ***!
  \**************************************/
/*! exports provided: default */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"../../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _App_Context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../App/Context */ \"./src/App/Context.jsx\");\n/* harmony import */ var _core_hooks_useAngular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/hooks/useAngular */ \"./src/core/hooks/useAngular.js\");\n\n\n\n\nvar Forum = function Forum() {\n  /**\n   *=Discussion Forums\n   * @todo: redesign + rewrite this feature in the React app.\n   */\n  Object(_core_hooks_useAngular__WEBPACK_IMPORTED_MODULE_2__[/* default */ \"a\"])(function () {\n    return __webpack_require__(/*! ./style.ngz.scss */ \"./src/routes/Discuss/style.ngz.scss\");\n  });\n\n  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useContext\"])(_App_Context__WEBPACK_IMPORTED_MODULE_1__[/* AppMetaContext */ \"b\"]),\n      updateAppMeta = _useContext.updateAppMeta;\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    updateAppMeta({\n      type: 'discuss'\n    });\n  }, [updateAppMeta]);\n  return null;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Forum);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcm91dGVzL0Rpc2N1c3MvaW5kZXguanN4PzFmMzIiXSwibmFtZXMiOlsiRm9ydW0iLCJ1c2VBbmd1bGFyIiwicmVxdWlyZSIsInVzZUNvbnRleHQiLCJBcHBNZXRhQ29udGV4dCIsInVwZGF0ZUFwcE1ldGEiLCJ1c2VFZmZlY3QiLCJ0eXBlIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBOztBQUVBLElBQU1BLEtBQUssR0FBRyxTQUFSQSxLQUFRLEdBQU07QUFDbEI7QUFDRjtBQUNBO0FBQ0E7QUFDRUMsZ0ZBQVUsQ0FBQztBQUFBLFdBQU1DLG1CQUFPLENBQUMsOERBQWQ7QUFBQSxHQUFELENBQVY7O0FBTGtCLG9CQU9RQyx3REFBVSxDQUFDQyxtRUFBRCxDQVBsQjtBQUFBLE1BT1ZDLGFBUFUsZUFPVkEsYUFQVTs7QUFRbEJDLHlEQUFTLENBQUMsWUFBTTtBQUNkRCxpQkFBYSxDQUFDO0FBQUVFLFVBQUksRUFBRTtBQUFSLEtBQUQsQ0FBYjtBQUNELEdBRlEsRUFFTixDQUFDRixhQUFELENBRk0sQ0FBVDtBQUlBLFNBQU8sSUFBUDtBQUNELENBYkQ7O0FBZWVMLG9FQUFmIiwiZmlsZSI6Ii4vc3JjL3JvdXRlcy9EaXNjdXNzL2luZGV4LmpzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUNvbnRleHQsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgQXBwTWV0YUNvbnRleHQgfSBmcm9tICdAQXBwL0NvbnRleHQnO1xuaW1wb3J0IHVzZUFuZ3VsYXIgZnJvbSAnQGNvcmUvaG9va3MvdXNlQW5ndWxhcic7XG5cbmNvbnN0IEZvcnVtID0gKCkgPT4ge1xuICAvKipcbiAgICo9RGlzY3Vzc2lvbiBGb3J1bXNcbiAgICogQHRvZG86IHJlZGVzaWduICsgcmV3cml0ZSB0aGlzIGZlYXR1cmUgaW4gdGhlIFJlYWN0IGFwcC5cbiAgICovXG4gIHVzZUFuZ3VsYXIoKCkgPT4gcmVxdWlyZSgnLi9zdHlsZS5uZ3ouc2NzcycpKTtcblxuICBjb25zdCB7IHVwZGF0ZUFwcE1ldGEgfSA9IHVzZUNvbnRleHQoQXBwTWV0YUNvbnRleHQpO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHVwZGF0ZUFwcE1ldGEoeyB0eXBlOiAnZGlzY3VzcycgfSk7XG4gIH0sIFt1cGRhdGVBcHBNZXRhXSk7XG5cbiAgcmV0dXJuIG51bGw7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBGb3J1bTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/routes/Discuss/index.jsx\n");

/***/ }),

/***/ "./src/routes/Discuss/style.ngz.scss":
/*!*******************************************!*\
  !*** ./src/routes/Discuss/style.ngz.scss ***!
  \*******************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcm91dGVzL0Rpc2N1c3Mvc3R5bGUubmd6LnNjc3M/ZDEwMSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiIuL3NyYy9yb3V0ZXMvRGlzY3Vzcy9zdHlsZS5uZ3ouc2Nzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/routes/Discuss/style.ngz.scss\n");

/***/ })

}]);