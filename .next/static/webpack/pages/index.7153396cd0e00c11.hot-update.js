"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_Qrcode__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Qrcode */ \"./components/Qrcode.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Home() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\"), text = ref[0], setText = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\"), alt = ref1[0], setAlt = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"about:blank\"), image = ref2[0], setImage = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\"), loading = ref3[0], setLoading = ref3[1];\n    var onInputChange = function(e) {\n        e.preventDefault();\n        console.log(e.target.value);\n        setText(e.target.value);\n    };\n    var imageChange = function() {\n        setImage(\"https://api.qrserver.com/v1/create-qr-code/?size=300x300&ecc=H&qzone=2&data=\".concat(text));\n        console.log(image);\n        setAlt(text);\n        setText('');\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"preconnect\",\n                        href: \"https://fonts.googleapis.com\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\junio\\\\Desktop\\\\Project\\\\qr-code\\\\pages\\\\index.js\",\n                        lineNumber: 29,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"preconnect\",\n                        href: \"https://fonts.gstatic.com\",\n                        crossorigin: true\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\junio\\\\Desktop\\\\Project\\\\qr-code\\\\pages\\\\index.js\",\n                        lineNumber: 30,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        href: \"https://fonts.googleapis.com/css2?family=Mitr&family=Pacifico&family=Prompt&display=swap\",\n                        rel: \"stylesheet\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\junio\\\\Desktop\\\\Project\\\\qr-code\\\\pages\\\\index.js\",\n                        lineNumber: 31,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\junio\\\\Desktop\\\\Project\\\\qr-code\\\\pages\\\\index.js\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \" font-Pacifico center mt-10 text-4xl text-[#FFADF0] drop-shadow-lg\",\n                    children: \"Code-Message\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\junio\\\\Desktop\\\\Project\\\\qr-code\\\\pages\\\\index.js\",\n                    lineNumber: 35,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\junio\\\\Desktop\\\\Project\\\\qr-code\\\\pages\\\\index.js\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \" center font-Mitr mt-9 text-base\",\n                children: \"Enter Text\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\junio\\\\Desktop\\\\Project\\\\qr-code\\\\pages\\\\index.js\",\n                lineNumber: 37,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \" mt-2\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                    className: \"border-blue-500 border-2 rounded-md w-[320px] h-[100px] text-left align-text-top\",\n                    onChange: onInputChange,\n                    value: text,\n                    cols: \"30\",\n                    rows: \"10\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\junio\\\\Desktop\\\\Project\\\\qr-code\\\\pages\\\\index.js\",\n                    lineNumber: 39,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\junio\\\\Desktop\\\\Project\\\\qr-code\\\\pages\\\\index.js\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \" center \",\n                onClick: imageChange,\n                children: \"Click\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\junio\\\\Desktop\\\\Project\\\\qr-code\\\\pages\\\\index.js\",\n                lineNumber: 43,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Qrcode__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                src: image,\n                alt: alt\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\junio\\\\Desktop\\\\Project\\\\qr-code\\\\pages\\\\index.js\",\n                lineNumber: 44,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                id: \"download\",\n                download: true,\n                href: image,\n                children: \"Download\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\junio\\\\Desktop\\\\Project\\\\qr-code\\\\pages\\\\index.js\",\n                lineNumber: 45,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\junio\\\\Desktop\\\\Project\\\\qr-code\\\\pages\\\\index.js\",\n        lineNumber: 27,\n        columnNumber: 5\n    }, this));\n};\n_s(Home, \"Gj1LotPPZoA4HBsOXySHQfLNzyk=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBNEI7QUFDRTtBQUNFO0FBQ1M7O0FBRTFCLFFBQVEsQ0FBQ0ksSUFBSSxHQUFHLENBQUM7O0lBQzlCLEdBQUssQ0FBbUJGLEdBQVksR0FBWkEsK0NBQVEsQ0FBQyxDQUFFLElBQTVCRyxJQUFJLEdBQWFILEdBQVksS0FBdkJJLE9BQU8sR0FBSUosR0FBWTtJQUNwQyxHQUFLLENBQWlCQSxJQUFZLEdBQVpBLCtDQUFRLENBQUMsQ0FBRSxJQUExQkssR0FBRyxHQUFZTCxJQUFZLEtBQXRCTSxNQUFNLEdBQUlOLElBQVk7SUFDbEMsR0FBSyxDQUFxQkEsSUFBdUIsR0FBdkJBLCtDQUFRLENBQUMsQ0FBYSxlQUF6Q08sS0FBSyxHQUFjUCxJQUF1QixLQUFuQ1EsUUFBUSxHQUFJUixJQUF1QjtJQUNqRCxHQUFLLENBQXlCQSxJQUFZLEdBQVpBLCtDQUFRLENBQUMsQ0FBRSxJQUFsQ1MsT0FBTyxHQUFnQlQsSUFBWSxLQUExQlUsVUFBVSxHQUFJVixJQUFZO0lBRTFDLEdBQUssQ0FBQ1csYUFBYSxHQUFHLFFBQVEsQ0FBUEMsQ0FBQyxFQUFLLENBQUM7UUFDNUJBLENBQUMsQ0FBQ0MsY0FBYztRQUNoQkMsT0FBTyxDQUFDQyxHQUFHLENBQUNILENBQUMsQ0FBQ0ksTUFBTSxDQUFDQyxLQUFLO1FBRTFCYixPQUFPLENBQUNRLENBQUMsQ0FBQ0ksTUFBTSxDQUFDQyxLQUFLO0lBQ3hCLENBQUM7SUFFRCxHQUFLLENBQUNDLFdBQVcsR0FBRyxRQUN0QixHQUQ0QixDQUFDO1FBQ3pCVixRQUFRLENBQUUsQ0FBNEUsOEVBQU8sT0FBTEwsSUFBSTtRQUM1RlcsT0FBTyxDQUFDQyxHQUFHLENBQUNSLEtBQUs7UUFDakJELE1BQU0sQ0FBQ0gsSUFBSTtRQUNYQyxPQUFPLENBQUMsQ0FBRTtJQUNaLENBQUM7SUFFRCxNQUFNLDZFQUNIZSxDQUFHOzt3RkFDRHJCLGtEQUFJOztnR0FDRnNCLENBQUk7d0JBQUNDLEdBQUcsRUFBQyxDQUFZO3dCQUFDQyxJQUFJLEVBQUMsQ0FBOEI7Ozs7OztnR0FDekRGLENBQUk7d0JBQUNDLEdBQUcsRUFBQyxDQUFZO3dCQUFDQyxJQUFJLEVBQUMsQ0FBMkI7d0JBQUNDLFdBQVc7Ozs7OztnR0FDbEVILENBQUk7d0JBQUNFLElBQUksRUFBQyxDQUEwRjt3QkFBQ0QsR0FBRyxFQUFDLENBQVk7Ozs7Ozs7Ozs7Ozt3RkFHdkhGLENBQUc7c0dBQ0RLLENBQUU7b0JBQUNDLFNBQVMsRUFBQyxDQUFxRTs4QkFBQyxDQUFZOzs7Ozs7Ozs7Ozt3RkFFakdDLENBQUM7Z0JBQUNELFNBQVMsRUFBQyxDQUFrQzswQkFBQyxDQUFVOzs7Ozs7d0ZBQ3pETixDQUFHO2dCQUFDTSxTQUFTLEVBQUMsQ0FBUTtzR0FDcEJFLENBQVE7b0JBQUNGLFNBQVMsRUFBQyxDQUFrRjtvQkFDcEdHLFFBQVEsRUFBRWpCLGFBQWE7b0JBQ3ZCTSxLQUFLLEVBQUVkLElBQUk7b0JBQUUwQixJQUFJLEVBQUMsQ0FBSTtvQkFBQ0MsSUFBSSxFQUFDLENBQUk7Ozs7Ozs7Ozs7O3dGQUVuQ0MsQ0FBTTtnQkFBQ04sU0FBUyxFQUFDLENBQVU7Z0JBQUNPLE9BQU8sRUFBRWQsV0FBVzswQkFBRSxDQUFLOzs7Ozs7d0ZBQ3ZEakIsMERBQU07Z0JBQUNnQyxHQUFHLEVBQUUxQixLQUFLO2dCQUFFRixHQUFHLEVBQUVBLEdBQUc7Ozs7Ozt3RkFDM0I2QixDQUFDO2dCQUFDQyxFQUFFLEVBQUMsQ0FBVTtnQkFBQ0MsUUFBUTtnQkFBQ2QsSUFBSSxFQUFFZixLQUFLOzBCQUFFLENBQVE7Ozs7Ozs7Ozs7OztBQUlyRCxDQUFDO0dBM0N1QkwsSUFBSTtLQUFKQSxJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBRcmNvZGUgZnJvbSAnLi4vY29tcG9uZW50cy9RcmNvZGUnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBbdGV4dCwgc2V0VGV4dF0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW2FsdCwgc2V0QWx0XSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbaW1hZ2UsIHNldEltYWdlXSA9IHVzZVN0YXRlKFwiYWJvdXQ6YmxhbmtcIik7XG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKFwiXCIpO1xuXG4gIGNvbnN0IG9uSW5wdXRDaGFuZ2UgPSAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zb2xlLmxvZyhlLnRhcmdldC52YWx1ZSk7XG5cbiAgICBzZXRUZXh0KGUudGFyZ2V0LnZhbHVlKTtcbiAgfVxuXG4gIGNvbnN0IGltYWdlQ2hhbmdlID0gKCkgPT4ge1xuICAgIHNldEltYWdlKGBodHRwczovL2FwaS5xcnNlcnZlci5jb20vdjEvY3JlYXRlLXFyLWNvZGUvP3NpemU9MzAweDMwMCZlY2M9SCZxem9uZT0yJmRhdGE9JHt0ZXh0fWApXG4gICAgY29uc29sZS5sb2coaW1hZ2UpXG4gICAgc2V0QWx0KHRleHQpXG4gICAgc2V0VGV4dCgnJylcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8bGluayByZWw9XCJwcmVjb25uZWN0XCIgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb21cIiAvPlxuICAgICAgICA8bGluayByZWw9XCJwcmVjb25uZWN0XCIgaHJlZj1cImh0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb21cIiBjcm9zc29yaWdpbiAvPlxuICAgICAgICA8bGluayBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1NaXRyJmZhbWlseT1QYWNpZmljbyZmYW1pbHk9UHJvbXB0JmRpc3BsYXk9c3dhcFwiIHJlbD1cInN0eWxlc2hlZXRcIiAvPlxuICAgICAgPC9IZWFkPlxuXG4gICAgICA8ZGl2PlxuICAgICAgICA8aDEgY2xhc3NOYW1lPScgZm9udC1QYWNpZmljbyAgY2VudGVyIG10LTEwIHRleHQtNHhsIHRleHQtWyNGRkFERjBdIGRyb3Atc2hhZG93LWxnJz5Db2RlLU1lc3NhZ2U8L2gxPlxuICAgICAgPC9kaXY+XG4gICAgICA8cCBjbGFzc05hbWU9XCIgY2VudGVyIGZvbnQtTWl0ciBtdC05IHRleHQtYmFzZVwiPkVudGVyIFRleHQ8L3A+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIiAgbXQtMlwiPlxuICAgICAgICA8dGV4dGFyZWEgY2xhc3NOYW1lPSdib3JkZXItYmx1ZS01MDAgYm9yZGVyLTIgcm91bmRlZC1tZCB3LVszMjBweF0gaC1bMTAwcHhdIHRleHQtbGVmdCBhbGlnbi10ZXh0LXRvcCdcbiAgICAgICAgICBvbkNoYW5nZT17b25JbnB1dENoYW5nZX1cbiAgICAgICAgICB2YWx1ZT17dGV4dH0gY29scz1cIjMwXCIgcm93cz1cIjEwXCI+PC90ZXh0YXJlYT5cbiAgICAgIDwvZGl2PlxuICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9JyBjZW50ZXIgJyBvbkNsaWNrPXtpbWFnZUNoYW5nZX0+Q2xpY2s8L2J1dHRvbj5cbiAgICAgIDxRcmNvZGUgc3JjPXtpbWFnZX0gYWx0PXthbHR9IC8+XG4gICAgICA8YSBpZD0nZG93bmxvYWQnIGRvd25sb2FkIGhyZWY9e2ltYWdlfT5Eb3dubG9hZDwvYT5cblxuICAgIDwvZGl2PlxuICApXG59XG4iXSwibmFtZXMiOlsiSGVhZCIsIkltYWdlIiwidXNlU3RhdGUiLCJRcmNvZGUiLCJIb21lIiwidGV4dCIsInNldFRleHQiLCJhbHQiLCJzZXRBbHQiLCJpbWFnZSIsInNldEltYWdlIiwibG9hZGluZyIsInNldExvYWRpbmciLCJvbklucHV0Q2hhbmdlIiwiZSIsInByZXZlbnREZWZhdWx0IiwiY29uc29sZSIsImxvZyIsInRhcmdldCIsInZhbHVlIiwiaW1hZ2VDaGFuZ2UiLCJkaXYiLCJsaW5rIiwicmVsIiwiaHJlZiIsImNyb3Nzb3JpZ2luIiwiaDEiLCJjbGFzc05hbWUiLCJwIiwidGV4dGFyZWEiLCJvbkNoYW5nZSIsImNvbHMiLCJyb3dzIiwiYnV0dG9uIiwib25DbGljayIsInNyYyIsImEiLCJpZCIsImRvd25sb2FkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});