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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_Qrcode__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Qrcode */ \"./components/Qrcode.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Home() {\n    var _this = this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\"), text = ref[0], setText = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\"), alt1 = ref1[0], setAlt = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\"), image1 = ref2[0], setImage = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(), loading = ref3[0], setLoading = ref3[1];\n    var onInputChange = function(e) {\n        e.preventDefault();\n        setText(e.target.value);\n    };\n    var imageChange = function() {\n        setImage(\"https://api.qrserver.com/v1/create-qr-code/?size=300x300&ecc=H&qzone=2&data=\".concat(text));\n        setAlt(text);\n        setText(\"\");\n    };\n    var checkData = function(image, alt) {\n        if (!image || !alt) {\n            return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false));\n        } else {\n            return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"center\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Qrcode__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                className: \" rounded-2xl\",\n                                src: image,\n                                alt: alt\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\junio\\\\Desktop\\\\Project\\\\qr-code\\\\pages\\\\index.js\",\n                                lineNumber: 32,\n                                columnNumber: 9\n                            }, _this),\n                            \";\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\junio\\\\Desktop\\\\Project\\\\qr-code\\\\pages\\\\index.js\",\n                        lineNumber: 31,\n                        columnNumber: 7\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"center\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"md:hidden flex relative text-slate-700 font-Prompt mt-4\",\n                                children: \"**กดค้างที่รูป และกดบันทึกรูปภาพ**\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\junio\\\\Desktop\\\\Project\\\\qr-code\\\\pages\\\\index.js\",\n                                lineNumber: 36,\n                                columnNumber: 7\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"hidden md:flex relative text-slate-700 font-Prompt mt-4\",\n                                children: \"**คลิกขวาที่รูป และกดบันทึกรูปภาพเป็น**\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\junio\\\\Desktop\\\\Project\\\\qr-code\\\\pages\\\\index.js\",\n                                lineNumber: 37,\n                                columnNumber: 7\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\junio\\\\Desktop\\\\Project\\\\qr-code\\\\pages\\\\index.js\",\n                        lineNumber: 35,\n                        columnNumber: 7\n                    }, _this)\n                ]\n            }, void 0, true));\n        }\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"preconnect\",\n                        href: \"https://fonts.googleapis.com\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\junio\\\\Desktop\\\\Project\\\\qr-code\\\\pages\\\\index.js\",\n                        lineNumber: 46,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"preconnect\",\n                        href: \"https://fonts.gstatic.com\",\n                        crossorigin: true\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\junio\\\\Desktop\\\\Project\\\\qr-code\\\\pages\\\\index.js\",\n                        lineNumber: 47,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        href: \"https://fonts.googleapis.com/css2?family=Mitr&family=Pacifico&family=Prompt&display=swap\",\n                        rel: \"stylesheet\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\junio\\\\Desktop\\\\Project\\\\qr-code\\\\pages\\\\index.js\",\n                        lineNumber: 48,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"stylesheet\",\n                        href: \"https://pagecdn.io/lib/font-awesome/5.10.0-11/css/all.min.css\",\n                        integrity: \"sha256-p9TTWD+813MlLaxMXMbTA7wN/ArzGyW/L7c5+KkjOkM=\",\n                        crossorigin: \"anonymous\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\junio\\\\Desktop\\\\Project\\\\qr-code\\\\pages\\\\index.js\",\n                        lineNumber: 52,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\junio\\\\Desktop\\\\Project\\\\qr-code\\\\pages\\\\index.js\",\n                lineNumber: 45,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \" font-Pacifico center mt-10 text-4xl md:text-7xl text-[#FFADF0] drop-shadow-lg\",\n                    children: \"Code-Message\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\junio\\\\Desktop\\\\Project\\\\qr-code\\\\pages\\\\index.js\",\n                    lineNumber: 61,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\junio\\\\Desktop\\\\Project\\\\qr-code\\\\pages\\\\index.js\",\n                lineNumber: 60,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \" center font-Mitr mt-9 text-base md:text-2xl\",\n                children: \"Enter Text\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\junio\\\\Desktop\\\\Project\\\\qr-code\\\\pages\\\\index.js\",\n                lineNumber: 65,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \" center mt-2\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                    className: \"border-blue-500 border-2 rounded-md w-[320px] h-[100px] md:w-[500px] md:h-[150px] px-3 text-left align-text-top\",\n                    onChange: onInputChange,\n                    value: text,\n                    cols: \"30\",\n                    rows: \"10\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\junio\\\\Desktop\\\\Project\\\\qr-code\\\\pages\\\\index.js\",\n                    lineNumber: 67,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\junio\\\\Desktop\\\\Project\\\\qr-code\\\\pages\\\\index.js\",\n                lineNumber: 66,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"center mt-6\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"button button--success\",\n                    onClick: imageChange,\n                    children: \"Create Qr\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\junio\\\\Desktop\\\\Project\\\\qr-code\\\\pages\\\\index.js\",\n                    lineNumber: 76,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\junio\\\\Desktop\\\\Project\\\\qr-code\\\\pages\\\\index.js\",\n                lineNumber: 75,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"center mt-4\",\n                children: checkData(image1, alt1)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\junio\\\\Desktop\\\\Project\\\\qr-code\\\\pages\\\\index.js\",\n                lineNumber: 80,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\junio\\\\Desktop\\\\Project\\\\qr-code\\\\pages\\\\index.js\",\n        lineNumber: 44,\n        columnNumber: 5\n    }, this));\n};\n_s(Home, \"O1KOg/bq+qAhvLU/NTe/pBf7UiA=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUVaLElBQUk7b0JBQ1g0QixJQUFJLEVBQUMsQ0FBSTtvQkFDVEMsSUFBSSxFQUFDLENBQUk7Ozs7Ozs7Ozs7O3dGQUdaZCxDQUFHO2dCQUFDQyxTQUFTLEVBQUMsQ0FBYTtzR0FDekJjLENBQU07b0JBQUNkLFNBQVMsRUFBQyxDQUF3QjtvQkFBQ2UsT0FBTyxFQUFFbEIsV0FBVzs4QkFBRSxDQUVqRTs7Ozs7Ozs7Ozs7d0ZBRURFLENBQUc7Z0JBQUNDLFNBQVMsRUFBQyxDQUFhOzBCQUFFRixTQUFTLENBQUNWLE1BQUssRUFBRUYsSUFBRzs7Ozs7Ozs7Ozs7O0FBSXhELENBQUM7R0E5RXVCSCxJQUFJO0tBQUpBLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUXJjb2RlIGZyb20gXCIuLi9jb21wb25lbnRzL1FyY29kZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBbdGV4dCwgc2V0VGV4dF0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW2FsdCwgc2V0QWx0XSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbaW1hZ2UsIHNldEltYWdlXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSgpO1xuXG4gIGNvbnN0IG9uSW5wdXRDaGFuZ2UgPSAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIHNldFRleHQoZS50YXJnZXQudmFsdWUpO1xuICB9O1xuXG4gIGNvbnN0IGltYWdlQ2hhbmdlID0gKCkgPT4ge1xuICAgIHNldEltYWdlKFxuICAgICAgYGh0dHBzOi8vYXBpLnFyc2VydmVyLmNvbS92MS9jcmVhdGUtcXItY29kZS8/c2l6ZT0zMDB4MzAwJmVjYz1IJnF6b25lPTImZGF0YT0ke3RleHR9YFxuICAgICk7XG4gICAgc2V0QWx0KHRleHQpO1xuICAgIHNldFRleHQoXCJcIik7XG4gIH07XG5cbiAgY29uc3QgY2hlY2tEYXRhID0gKGltYWdlLCBhbHQpID0+IHtcbiAgICBpZiAoIWltYWdlIHx8ICFhbHQpIHtcbiAgICAgIHJldHVybiA8PjwvPjtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIDw+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNlbnRlclwiPlxuICAgICAgICA8UXJjb2RlIGNsYXNzTmFtZT1cIiByb3VuZGVkLTJ4bFwiIHNyYz17aW1hZ2V9IGFsdD17YWx0fSAvPjtcbiAgICAgIDwvZGl2PlxuICAgICAgXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNlbnRlclwiPlxuICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibWQ6aGlkZGVuIGZsZXggcmVsYXRpdmUgdGV4dC1zbGF0ZS03MDAgZm9udC1Qcm9tcHQgbXQtNFwiPioq4LiB4LiU4LiE4LmJ4Liy4LiH4LiX4Li14LmI4Lij4Li54LibIOC5geC4peC4sOC4geC4lOC4muC4seC4meC4l+C4tuC4geC4o+C4ueC4m+C4oOC4suC4nioqPC9zcGFuPlxuICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaGlkZGVuIG1kOmZsZXggcmVsYXRpdmUgdGV4dC1zbGF0ZS03MDAgZm9udC1Qcm9tcHQgbXQtNFwiPioq4LiE4Lil4Li04LiB4LiC4Lin4Liy4LiX4Li14LmI4Lij4Li54LibIOC5geC4peC4sOC4geC4lOC4muC4seC4meC4l+C4tuC4geC4o+C4ueC4m+C4oOC4suC4nuC5gOC4m+C5h+C4mSoqPC9zcGFuPlxuICAgICAgPC9kaXY+XG4gICAgICA8Lz5cbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDxsaW5rIHJlbD1cInByZWNvbm5lY3RcIiBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbVwiIC8+XG4gICAgICAgIDxsaW5rIHJlbD1cInByZWNvbm5lY3RcIiBocmVmPVwiaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbVwiIGNyb3Nzb3JpZ2luIC8+XG4gICAgICAgIDxsaW5rXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TWl0ciZmYW1pbHk9UGFjaWZpY28mZmFtaWx5PVByb21wdCZkaXNwbGF5PXN3YXBcIlxuICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxuICAgICAgICAvPlxuICAgICAgICA8bGlua1xuICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxuICAgICAgICAgIGhyZWY9XCJodHRwczovL3BhZ2VjZG4uaW8vbGliL2ZvbnQtYXdlc29tZS81LjEwLjAtMTEvY3NzL2FsbC5taW4uY3NzXCJcbiAgICAgICAgICBpbnRlZ3JpdHk9XCJzaGEyNTYtcDlUVFdEKzgxM01sTGF4TVhNYlRBN3dOL0Fyekd5Vy9MN2M1K0trak9rTT1cIlxuICAgICAgICAgIGNyb3Nzb3JpZ2luPVwiYW5vbnltb3VzXCJcbiAgICAgICAgPjwvbGluaz5cbiAgICAgIDwvSGVhZD5cblxuICAgICAgPGRpdj5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cIiBmb250LVBhY2lmaWNvICBjZW50ZXIgbXQtMTAgdGV4dC00eGwgbWQ6dGV4dC03eGwgdGV4dC1bI0ZGQURGMF0gZHJvcC1zaGFkb3ctbGdcIj5cbiAgICAgICAgICBDb2RlLU1lc3NhZ2VcbiAgICAgICAgPC9oMT5cbiAgICAgIDwvZGl2PlxuICAgICAgPHAgY2xhc3NOYW1lPVwiIGNlbnRlciBmb250LU1pdHIgbXQtOSB0ZXh0LWJhc2UgbWQ6dGV4dC0yeGxcIj5FbnRlciBUZXh0PC9wPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCIgY2VudGVyIG10LTJcIj5cbiAgICAgICAgPHRleHRhcmVhXG4gICAgICAgICAgY2xhc3NOYW1lPVwiYm9yZGVyLWJsdWUtNTAwIGJvcmRlci0yIHJvdW5kZWQtbWQgdy1bMzIwcHhdIGgtWzEwMHB4XSBtZDp3LVs1MDBweF0gbWQ6aC1bMTUwcHhdIHB4LTMgdGV4dC1sZWZ0IGFsaWduLXRleHQtdG9wXCJcbiAgICAgICAgICBvbkNoYW5nZT17b25JbnB1dENoYW5nZX1cbiAgICAgICAgICB2YWx1ZT17dGV4dH1cbiAgICAgICAgICBjb2xzPVwiMzBcIlxuICAgICAgICAgIHJvd3M9XCIxMFwiXG4gICAgICAgID48L3RleHRhcmVhPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNlbnRlciBtdC02XCI+XG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnV0dG9uIGJ1dHRvbi0tc3VjY2Vzc1wiIG9uQ2xpY2s9e2ltYWdlQ2hhbmdlfT5cbiAgICAgICAgICBDcmVhdGUgUXJcbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2VudGVyIG10LTRcIj57Y2hlY2tEYXRhKGltYWdlLCBhbHQpfTwvZGl2PlxuICAgICAgXG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiSGVhZCIsIkltYWdlIiwidXNlU3RhdGUiLCJRcmNvZGUiLCJIb21lIiwidGV4dCIsInNldFRleHQiLCJhbHQiLCJzZXRBbHQiLCJpbWFnZSIsInNldEltYWdlIiwibG9hZGluZyIsInNldExvYWRpbmciLCJvbklucHV0Q2hhbmdlIiwiZSIsInByZXZlbnREZWZhdWx0IiwidGFyZ2V0IiwidmFsdWUiLCJpbWFnZUNoYW5nZSIsImNoZWNrRGF0YSIsImRpdiIsImNsYXNzTmFtZSIsInNyYyIsInNwYW4iLCJsaW5rIiwicmVsIiwiaHJlZiIsImNyb3Nzb3JpZ2luIiwiaW50ZWdyaXR5IiwiaDEiLCJwIiwidGV4dGFyZWEiLCJvbkNoYW5nZSIsImNvbHMiLCJyb3dzIiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});