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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_Qrcode__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Qrcode */ \"./components/Qrcode.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Home() {\n    var _this = this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\"), text = ref[0], setText = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\"), alt1 = ref1[0], setAlt = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\"), image1 = ref2[0], setImage = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(), loading = ref3[0], setLoading = ref3[1];\n    var onInputChange = function(e) {\n        e.preventDefault();\n        setText(e.target.value);\n    };\n    var imageChange = function() {\n        setImage(\"https://api.qrserver.com/v1/create-qr-code/?size=300x300&ecc=H&qzone=2&data=\".concat(text));\n        setAlt(text);\n        setText(\"\");\n    };\n    var checkData = function(image, alt) {\n        if (!image || !alt) {\n            return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false));\n        } else {\n            return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Qrcode__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                className: \" rounded-2xl\",\n                src: image,\n                alt: alt\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\junio\\\\Desktop\\\\Project\\\\qr-code\\\\pages\\\\index.js\",\n                lineNumber: 30,\n                columnNumber: 14\n            }, _this));\n        }\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"preconnect\",\n                        href: \"https://fonts.googleapis.com\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\junio\\\\Desktop\\\\Project\\\\qr-code\\\\pages\\\\index.js\",\n                        lineNumber: 37,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"preconnect\",\n                        href: \"https://fonts.gstatic.com\",\n                        crossorigin: true\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\junio\\\\Desktop\\\\Project\\\\qr-code\\\\pages\\\\index.js\",\n                        lineNumber: 38,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        href: \"https://fonts.googleapis.com/css2?family=Mitr&family=Pacifico&family=Prompt&display=swap\",\n                        rel: \"stylesheet\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\junio\\\\Desktop\\\\Project\\\\qr-code\\\\pages\\\\index.js\",\n                        lineNumber: 39,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"stylesheet\",\n                        href: \"https://pagecdn.io/lib/font-awesome/5.10.0-11/css/all.min.css\",\n                        integrity: \"sha256-p9TTWD+813MlLaxMXMbTA7wN/ArzGyW/L7c5+KkjOkM=\",\n                        crossorigin: \"anonymous\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\junio\\\\Desktop\\\\Project\\\\qr-code\\\\pages\\\\index.js\",\n                        lineNumber: 43,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\junio\\\\Desktop\\\\Project\\\\qr-code\\\\pages\\\\index.js\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \" font-Pacifico center mt-10 text-4xl md:text-7xl text-[#FFADF0] drop-shadow-lg\",\n                    children: \"Code-Message\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\junio\\\\Desktop\\\\Project\\\\qr-code\\\\pages\\\\index.js\",\n                    lineNumber: 52,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\junio\\\\Desktop\\\\Project\\\\qr-code\\\\pages\\\\index.js\",\n                lineNumber: 51,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \" center font-Mitr mt-9 text-base md:text-2xl\",\n                children: \"Enter Text\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\junio\\\\Desktop\\\\Project\\\\qr-code\\\\pages\\\\index.js\",\n                lineNumber: 56,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \" center mt-2\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                    className: \"border-blue-500 border-2 rounded-md w-[320px] h-[100px] md:w-[500px] md:h-[150px] px-3 text-left align-text-top\",\n                    onChange: onInputChange,\n                    value: text,\n                    cols: \"30\",\n                    rows: \"10\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\junio\\\\Desktop\\\\Project\\\\qr-code\\\\pages\\\\index.js\",\n                    lineNumber: 58,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\junio\\\\Desktop\\\\Project\\\\qr-code\\\\pages\\\\index.js\",\n                lineNumber: 57,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"center mt-6\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"button button--success\",\n                    onClick: imageChange,\n                    children: \"Create Qr\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\junio\\\\Desktop\\\\Project\\\\qr-code\\\\pages\\\\index.js\",\n                    lineNumber: 67,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\junio\\\\Desktop\\\\Project\\\\qr-code\\\\pages\\\\index.js\",\n                lineNumber: 66,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"center mt-4\",\n                children: checkData(image1, alt1)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\junio\\\\Desktop\\\\Project\\\\qr-code\\\\pages\\\\index.js\",\n                lineNumber: 71,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                className: \"md:hidden flex\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\junio\\\\Desktop\\\\Project\\\\qr-code\\\\pages\\\\index.js\",\n                lineNumber: 72,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                className: \"hidden md:flex\",\n                children: \"**คลิกขวาที่รูป และกดบันทึกรูปภาพเป็น\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\junio\\\\Desktop\\\\Project\\\\qr-code\\\\pages\\\\index.js\",\n                lineNumber: 73,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\junio\\\\Desktop\\\\Project\\\\qr-code\\\\pages\\\\index.js\",\n        lineNumber: 35,\n        columnNumber: 5\n    }, this));\n};\n_s(Home, \"O1KOg/bq+qAhvLU/NTe/pBf7UiA=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUMsQ0FBYTswQkFBRUQsU0FBUyxDQUFDVixNQUFLLEVBQUVGLElBQUc7Ozs7Ozt3RkFDakQ2QixDQUFJO2dCQUFDaEIsU0FBUyxFQUFDLENBQWdCOzs7Ozs7d0ZBQy9CZ0IsQ0FBSTtnQkFBQ2hCLFNBQVMsRUFBQyxDQUFnQjswQkFBQyxDQUFxQzs7Ozs7Ozs7Ozs7O0FBRzVFLENBQUM7R0F0RXVCaEIsSUFBSTtLQUFKQSxJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFFyY29kZSBmcm9tIFwiLi4vY29tcG9uZW50cy9RcmNvZGVcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgW3RleHQsIHNldFRleHRdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFthbHQsIHNldEFsdF0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW2ltYWdlLCBzZXRJbWFnZV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoKTtcblxuICBjb25zdCBvbklucHV0Q2hhbmdlID0gKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBzZXRUZXh0KGUudGFyZ2V0LnZhbHVlKTtcbiAgfTtcblxuICBjb25zdCBpbWFnZUNoYW5nZSA9ICgpID0+IHtcbiAgICBzZXRJbWFnZShcbiAgICAgIGBodHRwczovL2FwaS5xcnNlcnZlci5jb20vdjEvY3JlYXRlLXFyLWNvZGUvP3NpemU9MzAweDMwMCZlY2M9SCZxem9uZT0yJmRhdGE9JHt0ZXh0fWBcbiAgICApO1xuICAgIHNldEFsdCh0ZXh0KTtcbiAgICBzZXRUZXh0KFwiXCIpO1xuICB9O1xuXG4gIGNvbnN0IGNoZWNrRGF0YSA9IChpbWFnZSwgYWx0KSA9PiB7XG4gICAgaWYgKCFpbWFnZSB8fCAhYWx0KSB7XG4gICAgICByZXR1cm4gPD48Lz47XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiA8UXJjb2RlIGNsYXNzTmFtZT1cIiByb3VuZGVkLTJ4bFwiIHNyYz17aW1hZ2V9IGFsdD17YWx0fSAvPjtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDxsaW5rIHJlbD1cInByZWNvbm5lY3RcIiBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbVwiIC8+XG4gICAgICAgIDxsaW5rIHJlbD1cInByZWNvbm5lY3RcIiBocmVmPVwiaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbVwiIGNyb3Nzb3JpZ2luIC8+XG4gICAgICAgIDxsaW5rXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TWl0ciZmYW1pbHk9UGFjaWZpY28mZmFtaWx5PVByb21wdCZkaXNwbGF5PXN3YXBcIlxuICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxuICAgICAgICAvPlxuICAgICAgICA8bGlua1xuICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxuICAgICAgICAgIGhyZWY9XCJodHRwczovL3BhZ2VjZG4uaW8vbGliL2ZvbnQtYXdlc29tZS81LjEwLjAtMTEvY3NzL2FsbC5taW4uY3NzXCJcbiAgICAgICAgICBpbnRlZ3JpdHk9XCJzaGEyNTYtcDlUVFdEKzgxM01sTGF4TVhNYlRBN3dOL0Fyekd5Vy9MN2M1K0trak9rTT1cIlxuICAgICAgICAgIGNyb3Nzb3JpZ2luPVwiYW5vbnltb3VzXCJcbiAgICAgICAgPjwvbGluaz5cbiAgICAgIDwvSGVhZD5cblxuICAgICAgPGRpdj5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cIiBmb250LVBhY2lmaWNvICBjZW50ZXIgbXQtMTAgdGV4dC00eGwgbWQ6dGV4dC03eGwgdGV4dC1bI0ZGQURGMF0gZHJvcC1zaGFkb3ctbGdcIj5cbiAgICAgICAgICBDb2RlLU1lc3NhZ2VcbiAgICAgICAgPC9oMT5cbiAgICAgIDwvZGl2PlxuICAgICAgPHAgY2xhc3NOYW1lPVwiIGNlbnRlciBmb250LU1pdHIgbXQtOSB0ZXh0LWJhc2UgbWQ6dGV4dC0yeGxcIj5FbnRlciBUZXh0PC9wPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCIgY2VudGVyIG10LTJcIj5cbiAgICAgICAgPHRleHRhcmVhXG4gICAgICAgICAgY2xhc3NOYW1lPVwiYm9yZGVyLWJsdWUtNTAwIGJvcmRlci0yIHJvdW5kZWQtbWQgdy1bMzIwcHhdIGgtWzEwMHB4XSBtZDp3LVs1MDBweF0gbWQ6aC1bMTUwcHhdIHB4LTMgdGV4dC1sZWZ0IGFsaWduLXRleHQtdG9wXCJcbiAgICAgICAgICBvbkNoYW5nZT17b25JbnB1dENoYW5nZX1cbiAgICAgICAgICB2YWx1ZT17dGV4dH1cbiAgICAgICAgICBjb2xzPVwiMzBcIlxuICAgICAgICAgIHJvd3M9XCIxMFwiXG4gICAgICAgID48L3RleHRhcmVhPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNlbnRlciBtdC02XCI+XG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnV0dG9uIGJ1dHRvbi0tc3VjY2Vzc1wiIG9uQ2xpY2s9e2ltYWdlQ2hhbmdlfT5cbiAgICAgICAgICBDcmVhdGUgUXJcbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2VudGVyIG10LTRcIj57Y2hlY2tEYXRhKGltYWdlLCBhbHQpfTwvZGl2PlxuICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibWQ6aGlkZGVuIGZsZXhcIj48L3NwYW4+XG4gICAgICA8c3BhbiBjbGFzc05hbWU9XCJoaWRkZW4gbWQ6ZmxleFwiPioq4LiE4Lil4Li04LiB4LiC4Lin4Liy4LiX4Li14LmI4Lij4Li54LibIOC5geC4peC4sOC4geC4lOC4muC4seC4meC4l+C4tuC4geC4o+C4ueC4m+C4oOC4suC4nuC5gOC4m+C5h+C4mTwvc3Bhbj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJIZWFkIiwiSW1hZ2UiLCJ1c2VTdGF0ZSIsIlFyY29kZSIsIkhvbWUiLCJ0ZXh0Iiwic2V0VGV4dCIsImFsdCIsInNldEFsdCIsImltYWdlIiwic2V0SW1hZ2UiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsIm9uSW5wdXRDaGFuZ2UiLCJlIiwicHJldmVudERlZmF1bHQiLCJ0YXJnZXQiLCJ2YWx1ZSIsImltYWdlQ2hhbmdlIiwiY2hlY2tEYXRhIiwiY2xhc3NOYW1lIiwic3JjIiwiZGl2IiwibGluayIsInJlbCIsImhyZWYiLCJjcm9zc29yaWdpbiIsImludGVncml0eSIsImgxIiwicCIsInRleHRhcmVhIiwib25DaGFuZ2UiLCJjb2xzIiwicm93cyIsImJ1dHRvbiIsIm9uQ2xpY2siLCJzcGFuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});