"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/app/page.tsx":
/*!**************************!*\
  !*** ./src/app/page.tsx ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/react */ \"(app-pages-browser)/./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n// mark as client component\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n// importing necessary functions\n\n\nfunction Home() {\n    _s();\n    // extracting data from usesession as session\n    const { data: session } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.useSession)();\n    // checking if sessions exists\n    if (session) {\n        var _session_user, _session_user1, _session_user2;\n        // rendering components for logged in users\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"w-full h-screen flex flex-col justify-center items-center\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"w-44 h-44 relative mb-4\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        src: (_session_user = session.user) === null || _session_user === void 0 ? void 0 : _session_user.image,\n                        fill: true,\n                        alt: \"\",\n                        className: \"object-cover rounded-full\"\n                    }, void 0, false, {\n                        fileName: \"/Users/carolinebates/Desktop/Apps/basketball-substitutions/src/app/page.tsx\",\n                        lineNumber: 18,\n                        columnNumber: 9\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/carolinebates/Desktop/Apps/basketball-substitutions/src/app/page.tsx\",\n                    lineNumber: 17,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"text-2xl mb-2\",\n                    children: [\n                        \"Welcome \",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"font-bold\",\n                            children: (_session_user1 = session.user) === null || _session_user1 === void 0 ? void 0 : _session_user1.name\n                        }, void 0, false, {\n                            fileName: \"/Users/carolinebates/Desktop/Apps/basketball-substitutions/src/app/page.tsx\",\n                            lineNumber: 25,\n                            columnNumber: 46\n                        }, this),\n                        \". Signed In As\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/carolinebates/Desktop/Apps/basketball-substitutions/src/app/page.tsx\",\n                    lineNumber: 25,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"font-bold mb-4\",\n                    children: (_session_user2 = session.user) === null || _session_user2 === void 0 ? void 0 : _session_user2.email\n                }, void 0, false, {\n                    fileName: \"/Users/carolinebates/Desktop/Apps/basketball-substitutions/src/app/page.tsx\",\n                    lineNumber: 26,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"bg-red-600 py-2 px-6 rounded-md\",\n                    onClick: ()=>(0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.signOut)(),\n                    children: \"Sign out\"\n                }, void 0, false, {\n                    fileName: \"/Users/carolinebates/Desktop/Apps/basketball-substitutions/src/app/page.tsx\",\n                    lineNumber: 27,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/carolinebates/Desktop/Apps/basketball-substitutions/src/app/page.tsx\",\n            lineNumber: 16,\n            columnNumber: 7\n        }, this);\n    }\n    // rendering components for not logged in users\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-full h-screen flex flex-col justify-center items-center gap-4\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-2xl font-bold\",\n                children: \" Basketball Substitutions\"\n            }, void 0, false, {\n                fileName: \"/Users/carolinebates/Desktop/Apps/basketball-substitutions/src/app/page.tsx\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"text-xl mb-2\",\n                children: \"Not Signed In\"\n            }, void 0, false, {\n                fileName: \"/Users/carolinebates/Desktop/Apps/basketball-substitutions/src/app/page.tsx\",\n                lineNumber: 36,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"bg-blue-600 py-2 px-6 rounded-md mb-2\",\n                onClick: ()=>(0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.signIn)(\"google\"),\n                children: \"Sign in with google\"\n            }, void 0, false, {\n                fileName: \"/Users/carolinebates/Desktop/Apps/basketball-substitutions/src/app/page.tsx\",\n                lineNumber: 37,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"bg-none border-gray-300 border py-2 px-6 rounded-md mb-2\",\n                onClick: ()=>(0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.signIn)(\"github\"),\n                children: \"Sign in with github\"\n            }, void 0, false, {\n                fileName: \"/Users/carolinebates/Desktop/Apps/basketball-substitutions/src/app/page.tsx\",\n                lineNumber: 38,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/carolinebates/Desktop/Apps/basketball-substitutions/src/app/page.tsx\",\n        lineNumber: 34,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"xGqsfA9Yc4bug2CeORcyTsHwvXY=\", false, function() {\n    return [\n        next_auth_react__WEBPACK_IMPORTED_MODULE_1__.useSession\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSwyQkFBMkI7OztBQUczQixnQ0FBZ0M7QUFDNkI7QUFDOUI7QUFFaEIsU0FBU0k7O0lBQ3RCLDZDQUE2QztJQUM3QyxNQUFNLEVBQUVDLE1BQU1DLE9BQU8sRUFBRSxHQUFHTiwyREFBVUE7SUFFcEMsOEJBQThCO0lBQzlCLElBQUlNLFNBQVM7WUFNQUEsZUFNMkRBLGdCQUNuQ0E7UUFabkMsMkNBQTJDO1FBQzNDLHFCQUNFLDhEQUFDQztZQUFJQyxXQUFVOzs4QkFDYiw4REFBQ0Q7b0JBQUlDLFdBQVU7OEJBQ2YsNEVBQUNMLGtEQUFLQTt3QkFDSk0sR0FBRyxHQUFFSCxnQkFBQUEsUUFBUUksSUFBSSxjQUFaSixvQ0FBQUEsY0FBY0ssS0FBSzt3QkFDeEJDLElBQUk7d0JBQ0pDLEtBQUk7d0JBQ0pMLFdBQVU7Ozs7Ozs7Ozs7OzhCQUdaLDhEQUFDTTtvQkFBRU4sV0FBVTs7d0JBQWdCO3NDQUFRLDhEQUFDTzs0QkFBS1AsV0FBVTt1Q0FBYUYsaUJBQUFBLFFBQVFJLElBQUksY0FBWkoscUNBQUFBLGVBQWNVLElBQUk7Ozs7Ozt3QkFBUTs7Ozs7Ozs4QkFDNUYsOERBQUNGO29CQUFFTixXQUFVOytCQUFrQkYsaUJBQUFBLFFBQVFJLElBQUksY0FBWkoscUNBQUFBLGVBQWNXLEtBQUs7Ozs7Ozs4QkFDbEQsOERBQUNDO29CQUFPVixXQUFVO29CQUFrQ1csU0FBUyxJQUFNakIsd0RBQU9BOzhCQUFJOzs7Ozs7Ozs7Ozs7SUFHcEY7SUFFQSwrQ0FBK0M7SUFDL0MscUJBQ0UsOERBQUNLO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDWTtnQkFBR1osV0FBVTswQkFBcUI7Ozs7OzswQkFDakMsOERBQUNNO2dCQUFFTixXQUFVOzBCQUFlOzs7Ozs7MEJBQzVCLDhEQUFDVTtnQkFBT1YsV0FBVTtnQkFBd0NXLFNBQVMsSUFBTWxCLHVEQUFNQSxDQUFDOzBCQUFXOzs7Ozs7MEJBQzNGLDhEQUFDaUI7Z0JBQU9WLFdBQVU7Z0JBQTJEVyxTQUFTLElBQU1sQix1REFBTUEsQ0FBQzswQkFBVzs7Ozs7Ozs7Ozs7O0FBSXRIO0dBbEN3Qkc7O1FBRUlKLHVEQUFVQTs7O0tBRmRJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvcGFnZS50c3g/ZjY4YSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBtYXJrIGFzIGNsaWVudCBjb21wb25lbnRcblwidXNlIGNsaWVudFwiO1xuXG4vLyBpbXBvcnRpbmcgbmVjZXNzYXJ5IGZ1bmN0aW9uc1xuaW1wb3J0IHsgdXNlU2Vzc2lvbiwgc2lnbkluLCBzaWduT3V0IH0gZnJvbSBcIm5leHQtYXV0aC9yZWFjdFwiXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgLy8gZXh0cmFjdGluZyBkYXRhIGZyb20gdXNlc2Vzc2lvbiBhcyBzZXNzaW9uXG4gIGNvbnN0IHsgZGF0YTogc2Vzc2lvbiB9ID0gdXNlU2Vzc2lvbigpXG5cbiAgLy8gY2hlY2tpbmcgaWYgc2Vzc2lvbnMgZXhpc3RzXG4gIGlmIChzZXNzaW9uKSB7XG4gICAgLy8gcmVuZGVyaW5nIGNvbXBvbmVudHMgZm9yIGxvZ2dlZCBpbiB1c2Vyc1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBoLXNjcmVlbiBmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctNDQgaC00NCByZWxhdGl2ZSBtYi00XCI+XG4gICAgICAgIDxJbWFnZVxuICAgICAgICAgIHNyYz17c2Vzc2lvbi51c2VyPy5pbWFnZSBhcyBzdHJpbmd9XG4gICAgICAgICAgZmlsbFxuICAgICAgICAgIGFsdD1cIlwiXG4gICAgICAgICAgY2xhc3NOYW1lPVwib2JqZWN0LWNvdmVyIHJvdW5kZWQtZnVsbFwiXG4gICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBtYi0yXCI+V2VsY29tZSA8c3BhbiBjbGFzc05hbWU9XCJmb250LWJvbGRcIj57c2Vzc2lvbi51c2VyPy5uYW1lfTwvc3Bhbj4uIFNpZ25lZCBJbiBBczwvcD5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udC1ib2xkIG1iLTRcIj57c2Vzc2lvbi51c2VyPy5lbWFpbH08L3A+XG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYmctcmVkLTYwMCBweS0yIHB4LTYgcm91bmRlZC1tZFwiIG9uQ2xpY2s9eygpID0+IHNpZ25PdXQoKX0+U2lnbiBvdXQ8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxuXG4gIC8vIHJlbmRlcmluZyBjb21wb25lbnRzIGZvciBub3QgbG9nZ2VkIGluIHVzZXJzXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgaC1zY3JlZW4gZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgZ2FwLTRcIj5cbiAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LWJvbGRcIj4gQmFza2V0YmFsbCBTdWJzdGl0dXRpb25zPC9oMT5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14bCBtYi0yXCI+Tm90IFNpZ25lZCBJbjwvcD5cbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJiZy1ibHVlLTYwMCBweS0yIHB4LTYgcm91bmRlZC1tZCBtYi0yXCIgb25DbGljaz17KCkgPT4gc2lnbkluKCdnb29nbGUnKX0+U2lnbiBpbiB3aXRoIGdvb2dsZTwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJnLW5vbmUgYm9yZGVyLWdyYXktMzAwIGJvcmRlciBweS0yIHB4LTYgcm91bmRlZC1tZCBtYi0yXCIgb25DbGljaz17KCkgPT4gc2lnbkluKCdnaXRodWInKX0+U2lnbiBpbiB3aXRoIGdpdGh1YjwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICApXG5cbn0iXSwibmFtZXMiOlsidXNlU2Vzc2lvbiIsInNpZ25JbiIsInNpZ25PdXQiLCJJbWFnZSIsIkhvbWUiLCJkYXRhIiwic2Vzc2lvbiIsImRpdiIsImNsYXNzTmFtZSIsInNyYyIsInVzZXIiLCJpbWFnZSIsImZpbGwiLCJhbHQiLCJwIiwic3BhbiIsIm5hbWUiLCJlbWFpbCIsImJ1dHRvbiIsIm9uQ2xpY2siLCJoMSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.tsx\n"));

/***/ })

});