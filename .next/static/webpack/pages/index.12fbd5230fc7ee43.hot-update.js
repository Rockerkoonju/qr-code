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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var C_Users_junio_Desktop_Project_qr_code_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_junio_Desktop_Project_qr_code_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_junio_Desktop_Project_qr_code_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_Qrcode__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Qrcode */ \"./components/Qrcode.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _s = $RefreshSig$();\nfunction Home() {\n    var _this = this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(\"\"), text = ref[0], setText = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(\"\"), alt1 = ref1[0], setAlt = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(\"\"), image1 = ref2[0], setImage = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(), loading = ref3[0], setLoading = ref3[1];\n    var onInputChange = function(e) {\n        e.preventDefault();\n        setText(e.target.value);\n    };\n    var imageChange = function() {\n        setImage(\"https://api.qrserver.com/v1/create-qr-code/?size=300x300&ecc=H&qzone=2&data=\".concat(text));\n        setAlt(text);\n        setText(\"\");\n        Loading();\n    };\n    var Loading = function() {\n        var _ref = _asyncToGenerator(C_Users_junio_Desktop_Project_qr_code_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            return C_Users_junio_Desktop_Project_qr_code_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        setTimeout(function() {\n                            setLoading(true);\n                            console.log(loading);\n                        }, 1000);\n                        _ctx.next = 3;\n                        return setLoading(false);\n                    case 3:\n                        console.log(loading);\n                    case 4:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function Loading() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var checkData = function(image, alt) {\n        if (!image || !alt) {\n            return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {}, void 0, false));\n        } else {\n            return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Qrcode__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                src: image,\n                alt: alt\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\junio\\\\Desktop\\\\Project\\\\qr-code\\\\pages\\\\index.js\",\n                lineNumber: 43,\n                columnNumber: 14\n            }, _this));\n        }\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"link\", {\n                        rel: \"preconnect\",\n                        href: \"https://fonts.googleapis.com\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\junio\\\\Desktop\\\\Project\\\\qr-code\\\\pages\\\\index.js\",\n                        lineNumber: 50,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"link\", {\n                        rel: \"preconnect\",\n                        href: \"https://fonts.gstatic.com\",\n                        crossorigin: true\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\junio\\\\Desktop\\\\Project\\\\qr-code\\\\pages\\\\index.js\",\n                        lineNumber: 51,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"link\", {\n                        href: \"https://fonts.googleapis.com/css2?family=Mitr&family=Pacifico&family=Prompt&display=swap\",\n                        rel: \"stylesheet\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\junio\\\\Desktop\\\\Project\\\\qr-code\\\\pages\\\\index.js\",\n                        lineNumber: 52,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\junio\\\\Desktop\\\\Project\\\\qr-code\\\\pages\\\\index.js\",\n                lineNumber: 49,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n                    className: \" font-Pacifico center mt-10 text-4xl text-[#FFADF0] drop-shadow-lg\",\n                    children: \"Code-Message\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\junio\\\\Desktop\\\\Project\\\\qr-code\\\\pages\\\\index.js\",\n                    lineNumber: 59,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\junio\\\\Desktop\\\\Project\\\\qr-code\\\\pages\\\\index.js\",\n                lineNumber: 58,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                className: \" center font-Mitr mt-9 text-base\",\n                children: \"Enter Text\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\junio\\\\Desktop\\\\Project\\\\qr-code\\\\pages\\\\index.js\",\n                lineNumber: 63,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \" center mt-2\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"textarea\", {\n                    className: \"border-blue-500 border-2 rounded-md w-[320px] h-[100px] text-left align-text-top\",\n                    onChange: onInputChange,\n                    value: text,\n                    cols: \"30\",\n                    rows: \"10\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\junio\\\\Desktop\\\\Project\\\\qr-code\\\\pages\\\\index.js\",\n                    lineNumber: 65,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\junio\\\\Desktop\\\\Project\\\\qr-code\\\\pages\\\\index.js\",\n                lineNumber: 64,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"center mt-6\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                    className: \"button button--success\",\n                    onClick: imageChange,\n                    children: \"Create Qr\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\junio\\\\Desktop\\\\Project\\\\qr-code\\\\pages\\\\index.js\",\n                    lineNumber: 74,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\junio\\\\Desktop\\\\Project\\\\qr-code\\\\pages\\\\index.js\",\n                lineNumber: 73,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"center mt-4\",\n                children: checkData(image1, alt1)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\junio\\\\Desktop\\\\Project\\\\qr-code\\\\pages\\\\index.js\",\n                lineNumber: 78,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\junio\\\\Desktop\\\\Project\\\\qr-code\\\\pages\\\\index.js\",\n        lineNumber: 48,\n        columnNumber: 5\n    }, this));\n};\n_s(Home, \"O1KOg/bq+qAhvLU/NTe/pBf7UiA=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUMsQ0FBSTs7Ozs7Ozs7Ozs7d0ZBR1pYLENBQUc7Z0JBQUNNLFNBQVMsRUFBQyxDQUFhO3NHQUN6Qk0sQ0FBTTtvQkFBQ04sU0FBUyxFQUFDLENBQXdCO29CQUFDTyxPQUFPLEVBQUVwQixXQUFXOzhCQUFFLENBRWpFOzs7Ozs7Ozs7Ozt3RkFFRE8sQ0FBRztnQkFBQ00sU0FBUyxFQUFDLENBQWE7MEJBQ3pCUixTQUFTLENBQUNkLE1BQUssRUFBQ0YsSUFBRzs7Ozs7Ozs7Ozs7O0FBSTVCLENBQUM7R0E3RXVCSCxJQUFJO0tBQUpBLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUXJjb2RlIGZyb20gXCIuLi9jb21wb25lbnRzL1FyY29kZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBbdGV4dCwgc2V0VGV4dF0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW2FsdCwgc2V0QWx0XSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbaW1hZ2UsIHNldEltYWdlXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSgpO1xuXG4gIGNvbnN0IG9uSW5wdXRDaGFuZ2UgPSAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuXG4gICAgc2V0VGV4dChlLnRhcmdldC52YWx1ZSk7XG4gIH07XG5cbiAgY29uc3QgaW1hZ2VDaGFuZ2UgPSAoKSA9PiB7XG4gICAgc2V0SW1hZ2UoXG4gICAgICBgaHR0cHM6Ly9hcGkucXJzZXJ2ZXIuY29tL3YxL2NyZWF0ZS1xci1jb2RlLz9zaXplPTMwMHgzMDAmZWNjPUgmcXpvbmU9MiZkYXRhPSR7dGV4dH1gXG4gICAgKTtcbiAgICBzZXRBbHQodGV4dCk7XG4gICAgc2V0VGV4dChcIlwiKTtcbiAgICBMb2FkaW5nKClcbiAgfTtcblxuICBjb25zdCBMb2FkaW5nID0gYXN5bmMgKCkgPT4ge1xuICAgIFxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgc2V0TG9hZGluZyh0cnVlKTtcbiAgICAgIGNvbnNvbGUubG9nKGxvYWRpbmcpXG4gICAgfSwxMDAwKTtcblxuICAgIGF3YWl0IHNldExvYWRpbmcoZmFsc2UpXG4gICAgY29uc29sZS5sb2cobG9hZGluZylcbiAgfVxuXG4gIGNvbnN0IGNoZWNrRGF0YSA9IChpbWFnZSwgYWx0KSA9PiB7XG4gICAgaWYoIWltYWdlIHx8ICFhbHQpe1xuICAgICAgcmV0dXJuIDw+PC8+XG4gICAgfWVsc2Uge1xuICAgICAgcmV0dXJuIDxRcmNvZGUgc3JjPXtpbWFnZX0gYWx0PXthbHR9IC8+XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDxsaW5rIHJlbD1cInByZWNvbm5lY3RcIiBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbVwiIC8+XG4gICAgICAgIDxsaW5rIHJlbD1cInByZWNvbm5lY3RcIiBocmVmPVwiaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbVwiIGNyb3Nzb3JpZ2luIC8+XG4gICAgICAgIDxsaW5rXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TWl0ciZmYW1pbHk9UGFjaWZpY28mZmFtaWx5PVByb21wdCZkaXNwbGF5PXN3YXBcIlxuICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxuICAgICAgICAvPlxuICAgICAgPC9IZWFkPlxuXG4gICAgICA8ZGl2PlxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwiIGZvbnQtUGFjaWZpY28gIGNlbnRlciBtdC0xMCB0ZXh0LTR4bCB0ZXh0LVsjRkZBREYwXSBkcm9wLXNoYWRvdy1sZ1wiPlxuICAgICAgICAgIENvZGUtTWVzc2FnZVxuICAgICAgICA8L2gxPlxuICAgICAgPC9kaXY+XG4gICAgICA8cCBjbGFzc05hbWU9XCIgY2VudGVyIGZvbnQtTWl0ciBtdC05IHRleHQtYmFzZVwiPkVudGVyIFRleHQ8L3A+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIiBjZW50ZXIgbXQtMlwiPlxuICAgICAgICA8dGV4dGFyZWFcbiAgICAgICAgICBjbGFzc05hbWU9XCJib3JkZXItYmx1ZS01MDAgYm9yZGVyLTIgcm91bmRlZC1tZCB3LVszMjBweF0gaC1bMTAwcHhdIHRleHQtbGVmdCBhbGlnbi10ZXh0LXRvcFwiXG4gICAgICAgICAgb25DaGFuZ2U9e29uSW5wdXRDaGFuZ2V9XG4gICAgICAgICAgdmFsdWU9e3RleHR9XG4gICAgICAgICAgY29scz1cIjMwXCJcbiAgICAgICAgICByb3dzPVwiMTBcIlxuICAgICAgICA+PC90ZXh0YXJlYT5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjZW50ZXIgbXQtNlwiPlxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ1dHRvbiBidXR0b24tLXN1Y2Nlc3NcIiBvbkNsaWNrPXtpbWFnZUNoYW5nZX0+XG4gICAgICAgICAgQ3JlYXRlIFFyXG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNlbnRlciBtdC00XCI+XG4gICAgICAgIHtjaGVja0RhdGEoaW1hZ2UsYWx0KX1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbIkhlYWQiLCJJbWFnZSIsInVzZVN0YXRlIiwiUXJjb2RlIiwiSG9tZSIsInRleHQiLCJzZXRUZXh0IiwiYWx0Iiwic2V0QWx0IiwiaW1hZ2UiLCJzZXRJbWFnZSIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwib25JbnB1dENoYW5nZSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInRhcmdldCIsInZhbHVlIiwiaW1hZ2VDaGFuZ2UiLCJMb2FkaW5nIiwic2V0VGltZW91dCIsImNvbnNvbGUiLCJsb2ciLCJjaGVja0RhdGEiLCJzcmMiLCJkaXYiLCJsaW5rIiwicmVsIiwiaHJlZiIsImNyb3Nzb3JpZ2luIiwiaDEiLCJjbGFzc05hbWUiLCJwIiwidGV4dGFyZWEiLCJvbkNoYW5nZSIsImNvbHMiLCJyb3dzIiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});