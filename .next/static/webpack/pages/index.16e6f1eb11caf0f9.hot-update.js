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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var C_Users_junio_Desktop_Project_qr_code_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_junio_Desktop_Project_qr_code_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_junio_Desktop_Project_qr_code_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_Qrcode__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Qrcode */ \"./components/Qrcode.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _s = $RefreshSig$();\nfunction Home() {\n    var _this = this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(\"\"), text = ref[0], setText = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(\"\"), alt1 = ref1[0], setAlt = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(\"\"), image1 = ref2[0], setImage = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(), loading = ref3[0], setLoading = ref3[1];\n    var onInputChange = function(e) {\n        e.preventDefault();\n        setText(e.target.value);\n    };\n    var imageChange = function() {\n        setImage(\"https://api.qrserver.com/v1/create-qr-code/?size=300x300&ecc=H&qzone=2&data=\".concat(text));\n        setAlt(text);\n        setText(\"\");\n        Loading();\n    };\n    var Loading = function() {\n        var _ref1 = _asyncToGenerator(C_Users_junio_Desktop_Project_qr_code_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee1() {\n            var delay, load;\n            return C_Users_junio_Desktop_Project_qr_code_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx1) {\n                while(1)switch(_ctx1.prev = _ctx1.next){\n                    case 0:\n                        delay = function(delayInms) {\n                            return new Promise(function(resolve) {\n                                setTimeout(function() {\n                                    resolve(2);\n                                }, delayInms);\n                            });\n                        };\n                        load = (function() {\n                            var _ref = _asyncToGenerator(C_Users_junio_Desktop_Project_qr_code_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n                                var delayres;\n                                return C_Users_junio_Desktop_Project_qr_code_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                                    while(1)switch(_ctx.prev = _ctx.next){\n                                        case 0:\n                                            setLoading(true);\n                                            _ctx.next = 3;\n                                            return delay(1000);\n                                        case 3:\n                                            delayres = _ctx.sent;\n                                            setLoading(false);\n                                        case 5:\n                                        case \"end\":\n                                            return _ctx.stop();\n                                    }\n                                }, _callee);\n                            }));\n                            return function load() {\n                                return _ref.apply(this, arguments);\n                            };\n                        })();\n                        load();\n                    case 3:\n                    case \"end\":\n                        return _ctx1.stop();\n                }\n            }, _callee1);\n        }));\n        return function Loading() {\n            return _ref1.apply(this, arguments);\n        };\n    }();\n    var checkData = function(image, alt) {\n        if (!image || !alt) {\n            return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {}, void 0, false));\n        } else {\n            return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Qrcode__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                src: image,\n                alt: alt\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\junio\\\\Desktop\\\\Project\\\\qr-code\\\\pages\\\\index.js\",\n                lineNumber: 51,\n                columnNumber: 14\n            }, _this));\n        }\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"link\", {\n                        rel: \"preconnect\",\n                        href: \"https://fonts.googleapis.com\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\junio\\\\Desktop\\\\Project\\\\qr-code\\\\pages\\\\index.js\",\n                        lineNumber: 58,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"link\", {\n                        rel: \"preconnect\",\n                        href: \"https://fonts.gstatic.com\",\n                        crossorigin: true\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\junio\\\\Desktop\\\\Project\\\\qr-code\\\\pages\\\\index.js\",\n                        lineNumber: 59,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"link\", {\n                        href: \"https://fonts.googleapis.com/css2?family=Mitr&family=Pacifico&family=Prompt&display=swap\",\n                        rel: \"stylesheet\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\junio\\\\Desktop\\\\Project\\\\qr-code\\\\pages\\\\index.js\",\n                        lineNumber: 60,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\junio\\\\Desktop\\\\Project\\\\qr-code\\\\pages\\\\index.js\",\n                lineNumber: 57,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n                    className: \" font-Pacifico center mt-10 text-4xl text-[#FFADF0] drop-shadow-lg\",\n                    children: \"Code-Message\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\junio\\\\Desktop\\\\Project\\\\qr-code\\\\pages\\\\index.js\",\n                    lineNumber: 67,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\junio\\\\Desktop\\\\Project\\\\qr-code\\\\pages\\\\index.js\",\n                lineNumber: 66,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                className: \" center font-Mitr mt-9 text-base\",\n                children: \"Enter Text\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\junio\\\\Desktop\\\\Project\\\\qr-code\\\\pages\\\\index.js\",\n                lineNumber: 71,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \" center mt-2\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"textarea\", {\n                    className: \"border-blue-500 border-2 rounded-md w-[320px] h-[100px] text-left align-text-top\",\n                    onChange: onInputChange,\n                    value: text,\n                    cols: \"30\",\n                    rows: \"10\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\junio\\\\Desktop\\\\Project\\\\qr-code\\\\pages\\\\index.js\",\n                    lineNumber: 73,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\junio\\\\Desktop\\\\Project\\\\qr-code\\\\pages\\\\index.js\",\n                lineNumber: 72,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"center mt-6\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                    className: \"button button--success\",\n                    onClick: imageChange,\n                    children: \"Create Qr\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\junio\\\\Desktop\\\\Project\\\\qr-code\\\\pages\\\\index.js\",\n                    lineNumber: 82,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\junio\\\\Desktop\\\\Project\\\\qr-code\\\\pages\\\\index.js\",\n                lineNumber: 81,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"center mt-4\",\n                children: checkData(image1, alt1)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\junio\\\\Desktop\\\\Project\\\\qr-code\\\\pages\\\\index.js\",\n                lineNumber: 86,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\junio\\\\Desktop\\\\Project\\\\qr-code\\\\pages\\\\index.js\",\n        lineNumber: 56,\n        columnNumber: 5\n    }, this));\n};\n_s(Home, \"O1KOg/bq+qAhvLU/NTe/pBf7UiA=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxDQUFxRTs4QkFBQyxDQUVwRjs7Ozs7Ozs7Ozs7d0ZBRURDLENBQUM7Z0JBQUNELFNBQVMsRUFBQyxDQUFrQzswQkFBQyxDQUFVOzs7Ozs7d0ZBQ3pETixDQUFHO2dCQUFDTSxTQUFTLEVBQUMsQ0FBYztzR0FDMUJFLENBQVE7b0JBQ1BGLFNBQVMsRUFBQyxDQUFrRjtvQkFDNUZHLFFBQVEsRUFBRXpCLGFBQWE7b0JBQ3ZCSSxLQUFLLEVBQUVaLElBQUk7b0JBQ1hrQyxJQUFJLEVBQUMsQ0FBSTtvQkFDVEMsSUFBSSxFQUFDLENBQUk7Ozs7Ozs7Ozs7O3dGQUdaWCxDQUFHO2dCQUFDTSxTQUFTLEVBQUMsQ0FBYTtzR0FDekJNLENBQU07b0JBQUNOLFNBQVMsRUFBQyxDQUF3QjtvQkFBQ08sT0FBTyxFQUFFeEIsV0FBVzs4QkFBRSxDQUVqRTs7Ozs7Ozs7Ozs7d0ZBRURXLENBQUc7Z0JBQUNNLFNBQVMsRUFBQyxDQUFhOzBCQUN6QlIsU0FBUyxDQUFDbEIsTUFBSyxFQUFDRixJQUFHOzs7Ozs7Ozs7Ozs7QUFJNUIsQ0FBQztHQXJGdUJILElBQUk7S0FBSkEsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBRcmNvZGUgZnJvbSBcIi4uL2NvbXBvbmVudHMvUXJjb2RlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IFt0ZXh0LCBzZXRUZXh0XSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbYWx0LCBzZXRBbHRdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtpbWFnZSwgc2V0SW1hZ2VdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKCk7XG5cbiAgY29uc3Qgb25JbnB1dENoYW5nZSA9IChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG5cbiAgICBzZXRUZXh0KGUudGFyZ2V0LnZhbHVlKTtcbiAgfTtcblxuICBjb25zdCBpbWFnZUNoYW5nZSA9ICgpID0+IHtcbiAgICBzZXRJbWFnZShcbiAgICAgIGBodHRwczovL2FwaS5xcnNlcnZlci5jb20vdjEvY3JlYXRlLXFyLWNvZGUvP3NpemU9MzAweDMwMCZlY2M9SCZxem9uZT0yJmRhdGE9JHt0ZXh0fWBcbiAgICApO1xuICAgIHNldEFsdCh0ZXh0KTtcbiAgICBzZXRUZXh0KFwiXCIpO1xuICAgIExvYWRpbmcoKVxuICB9O1xuXG4gIGNvbnN0IExvYWRpbmcgPSBhc3luYyAoKSA9PiB7XG4gICAgXG4gICAgY29uc3QgZGVsYXkgPSAoZGVsYXlJbm1zKSA9PiB7XG4gICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHJlc29sdmUoMik7XG4gICAgICAgIH0sIGRlbGF5SW5tcyk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBjb25zdCBsb2FkID0gYXN5bmMgKCkgPT4ge1xuICAgICAgc2V0TG9hZGluZyh0cnVlKVxuICAgICAgbGV0IGRlbGF5cmVzID0gYXdhaXQgZGVsYXkoMTAwMCk7XG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKVxuICAgIH1cblxuICAgIGxvYWQoKVxuICB9XG5cbiAgY29uc3QgY2hlY2tEYXRhID0gKGltYWdlLCBhbHQpID0+IHtcbiAgICBpZighaW1hZ2UgfHwgIWFsdCl7XG4gICAgICByZXR1cm4gPD48Lz5cbiAgICB9ZWxzZSB7XG4gICAgICByZXR1cm4gPFFyY29kZSBzcmM9e2ltYWdlfSBhbHQ9e2FsdH0gLz5cbiAgICB9XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPGxpbmsgcmVsPVwicHJlY29ubmVjdFwiIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tXCIgLz5cbiAgICAgICAgPGxpbmsgcmVsPVwicHJlY29ubmVjdFwiIGhyZWY9XCJodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tXCIgY3Jvc3NvcmlnaW4gLz5cbiAgICAgICAgPGxpbmtcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1NaXRyJmZhbWlseT1QYWNpZmljbyZmYW1pbHk9UHJvbXB0JmRpc3BsYXk9c3dhcFwiXG4gICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXG4gICAgICAgIC8+XG4gICAgICA8L0hlYWQ+XG5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCIgZm9udC1QYWNpZmljbyAgY2VudGVyIG10LTEwIHRleHQtNHhsIHRleHQtWyNGRkFERjBdIGRyb3Atc2hhZG93LWxnXCI+XG4gICAgICAgICAgQ29kZS1NZXNzYWdlXG4gICAgICAgIDwvaDE+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxwIGNsYXNzTmFtZT1cIiBjZW50ZXIgZm9udC1NaXRyIG10LTkgdGV4dC1iYXNlXCI+RW50ZXIgVGV4dDwvcD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIGNlbnRlciBtdC0yXCI+XG4gICAgICAgIDx0ZXh0YXJlYVxuICAgICAgICAgIGNsYXNzTmFtZT1cImJvcmRlci1ibHVlLTUwMCBib3JkZXItMiByb3VuZGVkLW1kIHctWzMyMHB4XSBoLVsxMDBweF0gdGV4dC1sZWZ0IGFsaWduLXRleHQtdG9wXCJcbiAgICAgICAgICBvbkNoYW5nZT17b25JbnB1dENoYW5nZX1cbiAgICAgICAgICB2YWx1ZT17dGV4dH1cbiAgICAgICAgICBjb2xzPVwiMzBcIlxuICAgICAgICAgIHJvd3M9XCIxMFwiXG4gICAgICAgID48L3RleHRhcmVhPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNlbnRlciBtdC02XCI+XG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnV0dG9uIGJ1dHRvbi0tc3VjY2Vzc1wiIG9uQ2xpY2s9e2ltYWdlQ2hhbmdlfT5cbiAgICAgICAgICBDcmVhdGUgUXJcbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2VudGVyIG10LTRcIj5cbiAgICAgICAge2NoZWNrRGF0YShpbWFnZSxhbHQpfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiSGVhZCIsIkltYWdlIiwidXNlU3RhdGUiLCJRcmNvZGUiLCJIb21lIiwidGV4dCIsInNldFRleHQiLCJhbHQiLCJzZXRBbHQiLCJpbWFnZSIsInNldEltYWdlIiwibG9hZGluZyIsInNldExvYWRpbmciLCJvbklucHV0Q2hhbmdlIiwiZSIsInByZXZlbnREZWZhdWx0IiwidGFyZ2V0IiwidmFsdWUiLCJpbWFnZUNoYW5nZSIsIkxvYWRpbmciLCJkZWxheSIsImxvYWQiLCJkZWxheUlubXMiLCJQcm9taXNlIiwicmVzb2x2ZSIsInNldFRpbWVvdXQiLCJkZWxheXJlcyIsImNoZWNrRGF0YSIsInNyYyIsImRpdiIsImxpbmsiLCJyZWwiLCJocmVmIiwiY3Jvc3NvcmlnaW4iLCJoMSIsImNsYXNzTmFtZSIsInAiLCJ0ZXh0YXJlYSIsIm9uQ2hhbmdlIiwiY29scyIsInJvd3MiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});