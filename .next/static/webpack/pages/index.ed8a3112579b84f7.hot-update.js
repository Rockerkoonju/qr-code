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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var C_Users_junio_Desktop_Project_qr_code_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_junio_Desktop_Project_qr_code_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_junio_Desktop_Project_qr_code_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_Qrcode__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Qrcode */ \"./components/Qrcode.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _s = $RefreshSig$();\nfunction Home() {\n    var _this = this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(\"\"), text = ref[0], setText = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(\"\"), alt1 = ref1[0], setAlt = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(\"\"), image1 = ref2[0], setImage = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(), loading = ref3[0], setLoading = ref3[1];\n    var onInputChange = function(e) {\n        e.preventDefault();\n        setText(e.target.value);\n    };\n    var imageChange = function() {\n        setImage(\"https://api.qrserver.com/v1/create-qr-code/?size=300x300&ecc=H&qzone=2&data=\".concat(text));\n        setAlt(text);\n        setText(\"\");\n        Loading();\n    };\n    var Loading = function() {\n        var _ref = _asyncToGenerator(C_Users_junio_Desktop_Project_qr_code_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            return C_Users_junio_Desktop_Project_qr_code_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        setTimeout(function() {\n                            setLoading(true);\n                            console.log(loading);\n                        }, 1000);\n                        setLoading(false);\n                        console.log(loading);\n                    case 3:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function Loading() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var checkData = function(image, alt) {\n        if (!image || !alt) {\n            return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {}, void 0, false));\n        } else {\n            return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Qrcode__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                src: image,\n                alt: alt\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\junio\\\\Desktop\\\\Project\\\\qr-code\\\\pages\\\\index.js\",\n                lineNumber: 43,\n                columnNumber: 14\n            }, _this));\n        }\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"link\", {\n                        rel: \"preconnect\",\n                        href: \"https://fonts.googleapis.com\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\junio\\\\Desktop\\\\Project\\\\qr-code\\\\pages\\\\index.js\",\n                        lineNumber: 50,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"link\", {\n                        rel: \"preconnect\",\n                        href: \"https://fonts.gstatic.com\",\n                        crossorigin: true\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\junio\\\\Desktop\\\\Project\\\\qr-code\\\\pages\\\\index.js\",\n                        lineNumber: 51,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"link\", {\n                        href: \"https://fonts.googleapis.com/css2?family=Mitr&family=Pacifico&family=Prompt&display=swap\",\n                        rel: \"stylesheet\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\junio\\\\Desktop\\\\Project\\\\qr-code\\\\pages\\\\index.js\",\n                        lineNumber: 52,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\junio\\\\Desktop\\\\Project\\\\qr-code\\\\pages\\\\index.js\",\n                lineNumber: 49,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n                    className: \" font-Pacifico center mt-10 text-4xl text-[#FFADF0] drop-shadow-lg\",\n                    children: \"Code-Message\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\junio\\\\Desktop\\\\Project\\\\qr-code\\\\pages\\\\index.js\",\n                    lineNumber: 59,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\junio\\\\Desktop\\\\Project\\\\qr-code\\\\pages\\\\index.js\",\n                lineNumber: 58,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                className: \" center font-Mitr mt-9 text-base\",\n                children: \"Enter Text\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\junio\\\\Desktop\\\\Project\\\\qr-code\\\\pages\\\\index.js\",\n                lineNumber: 63,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \" center mt-2\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"textarea\", {\n                    className: \"border-blue-500 border-2 rounded-md w-[320px] h-[100px] text-left align-text-top\",\n                    onChange: onInputChange,\n                    value: text,\n                    cols: \"30\",\n                    rows: \"10\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\junio\\\\Desktop\\\\Project\\\\qr-code\\\\pages\\\\index.js\",\n                    lineNumber: 65,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\junio\\\\Desktop\\\\Project\\\\qr-code\\\\pages\\\\index.js\",\n                lineNumber: 64,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"center mt-6\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                    className: \"button button--success\",\n                    onClick: imageChange,\n                    children: \"Create Qr\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\junio\\\\Desktop\\\\Project\\\\qr-code\\\\pages\\\\index.js\",\n                    lineNumber: 74,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\junio\\\\Desktop\\\\Project\\\\qr-code\\\\pages\\\\index.js\",\n                lineNumber: 73,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"center mt-4\",\n                children: checkData(image1, alt1)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\junio\\\\Desktop\\\\Project\\\\qr-code\\\\pages\\\\index.js\",\n                lineNumber: 78,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\junio\\\\Desktop\\\\Project\\\\qr-code\\\\pages\\\\index.js\",\n        lineNumber: 48,\n        columnNumber: 5\n    }, this));\n};\n_s(Home, \"O1KOg/bq+qAhvLU/NTe/pBf7UiA=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQUk7Ozs7Ozs7Ozs7O3dGQUdaWCxDQUFHO2dCQUFDTSxTQUFTLEVBQUMsQ0FBYTtzR0FDekJNLENBQU07b0JBQUNOLFNBQVMsRUFBQyxDQUF3QjtvQkFBQ08sT0FBTyxFQUFFcEIsV0FBVzs4QkFBRSxDQUVqRTs7Ozs7Ozs7Ozs7d0ZBRURPLENBQUc7Z0JBQUNNLFNBQVMsRUFBQyxDQUFhOzBCQUN6QlIsU0FBUyxDQUFDZCxNQUFLLEVBQUNGLElBQUc7Ozs7Ozs7Ozs7OztBQUk1QixDQUFDO0dBN0V1QkgsSUFBSTtLQUFKQSxJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFFyY29kZSBmcm9tIFwiLi4vY29tcG9uZW50cy9RcmNvZGVcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgW3RleHQsIHNldFRleHRdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFthbHQsIHNldEFsdF0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW2ltYWdlLCBzZXRJbWFnZV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoKTtcblxuICBjb25zdCBvbklucHV0Q2hhbmdlID0gKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cblxuICAgIHNldFRleHQoZS50YXJnZXQudmFsdWUpO1xuICB9O1xuXG4gIGNvbnN0IGltYWdlQ2hhbmdlID0gKCkgPT4ge1xuICAgIHNldEltYWdlKFxuICAgICAgYGh0dHBzOi8vYXBpLnFyc2VydmVyLmNvbS92MS9jcmVhdGUtcXItY29kZS8/c2l6ZT0zMDB4MzAwJmVjYz1IJnF6b25lPTImZGF0YT0ke3RleHR9YFxuICAgICk7XG4gICAgc2V0QWx0KHRleHQpO1xuICAgIHNldFRleHQoXCJcIik7XG4gICAgTG9hZGluZygpXG4gIH07XG5cbiAgY29uc3QgTG9hZGluZyA9IGFzeW5jICgpID0+IHtcbiAgICBcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHNldExvYWRpbmcodHJ1ZSk7XG4gICAgICBjb25zb2xlLmxvZyhsb2FkaW5nKVxuICAgIH0sMTAwMCk7XG5cbiAgICBzZXRMb2FkaW5nKGZhbHNlKVxuICAgIGNvbnNvbGUubG9nKGxvYWRpbmcpXG4gIH1cblxuICBjb25zdCBjaGVja0RhdGEgPSAoaW1hZ2UsIGFsdCkgPT4ge1xuICAgIGlmKCFpbWFnZSB8fCAhYWx0KXtcbiAgICAgIHJldHVybiA8PjwvPlxuICAgIH1lbHNlIHtcbiAgICAgIHJldHVybiA8UXJjb2RlIHNyYz17aW1hZ2V9IGFsdD17YWx0fSAvPlxuICAgIH1cbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8bGluayByZWw9XCJwcmVjb25uZWN0XCIgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb21cIiAvPlxuICAgICAgICA8bGluayByZWw9XCJwcmVjb25uZWN0XCIgaHJlZj1cImh0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb21cIiBjcm9zc29yaWdpbiAvPlxuICAgICAgICA8bGlua1xuICAgICAgICAgIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU1pdHImZmFtaWx5PVBhY2lmaWNvJmZhbWlseT1Qcm9tcHQmZGlzcGxheT1zd2FwXCJcbiAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcbiAgICAgICAgLz5cbiAgICAgIDwvSGVhZD5cblxuICAgICAgPGRpdj5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cIiBmb250LVBhY2lmaWNvICBjZW50ZXIgbXQtMTAgdGV4dC00eGwgdGV4dC1bI0ZGQURGMF0gZHJvcC1zaGFkb3ctbGdcIj5cbiAgICAgICAgICBDb2RlLU1lc3NhZ2VcbiAgICAgICAgPC9oMT5cbiAgICAgIDwvZGl2PlxuICAgICAgPHAgY2xhc3NOYW1lPVwiIGNlbnRlciBmb250LU1pdHIgbXQtOSB0ZXh0LWJhc2VcIj5FbnRlciBUZXh0PC9wPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCIgY2VudGVyIG10LTJcIj5cbiAgICAgICAgPHRleHRhcmVhXG4gICAgICAgICAgY2xhc3NOYW1lPVwiYm9yZGVyLWJsdWUtNTAwIGJvcmRlci0yIHJvdW5kZWQtbWQgdy1bMzIwcHhdIGgtWzEwMHB4XSB0ZXh0LWxlZnQgYWxpZ24tdGV4dC10b3BcIlxuICAgICAgICAgIG9uQ2hhbmdlPXtvbklucHV0Q2hhbmdlfVxuICAgICAgICAgIHZhbHVlPXt0ZXh0fVxuICAgICAgICAgIGNvbHM9XCIzMFwiXG4gICAgICAgICAgcm93cz1cIjEwXCJcbiAgICAgICAgPjwvdGV4dGFyZWE+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2VudGVyIG10LTZcIj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidXR0b24gYnV0dG9uLS1zdWNjZXNzXCIgb25DbGljaz17aW1hZ2VDaGFuZ2V9PlxuICAgICAgICAgIENyZWF0ZSBRclxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjZW50ZXIgbXQtNFwiPlxuICAgICAgICB7Y2hlY2tEYXRhKGltYWdlLGFsdCl9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJIZWFkIiwiSW1hZ2UiLCJ1c2VTdGF0ZSIsIlFyY29kZSIsIkhvbWUiLCJ0ZXh0Iiwic2V0VGV4dCIsImFsdCIsInNldEFsdCIsImltYWdlIiwic2V0SW1hZ2UiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsIm9uSW5wdXRDaGFuZ2UiLCJlIiwicHJldmVudERlZmF1bHQiLCJ0YXJnZXQiLCJ2YWx1ZSIsImltYWdlQ2hhbmdlIiwiTG9hZGluZyIsInNldFRpbWVvdXQiLCJjb25zb2xlIiwibG9nIiwiY2hlY2tEYXRhIiwic3JjIiwiZGl2IiwibGluayIsInJlbCIsImhyZWYiLCJjcm9zc29yaWdpbiIsImgxIiwiY2xhc3NOYW1lIiwicCIsInRleHRhcmVhIiwib25DaGFuZ2UiLCJjb2xzIiwicm93cyIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});