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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/react */ \"(app-pages-browser)/./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var _assets_ballandhoop_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/ballandhoop.jpg */ \"(app-pages-browser)/./src/app/assets/ballandhoop.jpg\");\n// mark as client component\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n// importing necessary functions\n\n\n\nfunction Home() {\n    _s();\n    // extracting data from usesession as session\n    const { data: session } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.useSession)();\n    // checking if sessions exists\n    if (session) {\n        var _session_user, _session_user1, _session_user2;\n        // rendering components for logged in users\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"w-full h-screen flex flex-col justify-center items-center\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"w-20 h-20 relative mb-4\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        src: (_session_user = session.user) === null || _session_user === void 0 ? void 0 : _session_user.image,\n                        fill: true,\n                        alt: \"\",\n                        className: \"object-cover rounded-full\"\n                    }, void 0, false, {\n                        fileName: \"/Users/carolinebates/Desktop/Apps/basketball-substitutions/src/app/page.tsx\",\n                        lineNumber: 19,\n                        columnNumber: 9\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/carolinebates/Desktop/Apps/basketball-substitutions/src/app/page.tsx\",\n                    lineNumber: 18,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"text-2xl mb-2\",\n                    children: [\n                        \"Welcome \",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"font-bold\",\n                            children: (_session_user1 = session.user) === null || _session_user1 === void 0 ? void 0 : _session_user1.name\n                        }, void 0, false, {\n                            fileName: \"/Users/carolinebates/Desktop/Apps/basketball-substitutions/src/app/page.tsx\",\n                            lineNumber: 26,\n                            columnNumber: 46\n                        }, this),\n                        \". Signed In As\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/carolinebates/Desktop/Apps/basketball-substitutions/src/app/page.tsx\",\n                    lineNumber: 26,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"font-bold mb-4\",\n                    children: (_session_user2 = session.user) === null || _session_user2 === void 0 ? void 0 : _session_user2.email\n                }, void 0, false, {\n                    fileName: \"/Users/carolinebates/Desktop/Apps/basketball-substitutions/src/app/page.tsx\",\n                    lineNumber: 27,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"bg-green-50 hover:bg-green-100 py-2 px-6 rounded-md\",\n                    onClick: ()=>(0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.signOut)(),\n                    children: \"Sign out\"\n                }, void 0, false, {\n                    fileName: \"/Users/carolinebates/Desktop/Apps/basketball-substitutions/src/app/page.tsx\",\n                    lineNumber: 28,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/carolinebates/Desktop/Apps/basketball-substitutions/src/app/page.tsx\",\n            lineNumber: 17,\n            columnNumber: 7\n        }, this);\n    }\n    // rendering components for not logged in users\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-full h-screen flex flex-col justify-center items-center gap-4 py-4\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-2xl font-bold\",\n                children: \" Basketball Substitutions\"\n            }, void 0, false, {\n                fileName: \"/Users/carolinebates/Desktop/Apps/basketball-substitutions/src/app/page.tsx\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                className: \"\",\n                height: \"300\",\n                width: \"30\",\n                src: _assets_ballandhoop_jpg__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n                alt: \"Basketball and hoop\"\n            }, void 0, false, {\n                fileName: \"/Users/carolinebates/Desktop/Apps/basketball-substitutions/src/app/page.tsx\",\n                lineNumber: 37,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-full h-screen flex flex-col justify-center items-center gap-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"bg-blue-200 hover:bg-blue-300 py-2 px-6 rounded-md\",\n                        onClick: ()=>(0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.signIn)(\"google\"),\n                        children: \"Sign in with Google\"\n                    }, void 0, false, {\n                        fileName: \"/Users/carolinebates/Desktop/Apps/basketball-substitutions/src/app/page.tsx\",\n                        lineNumber: 39,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"bg-slate-200 hover:bg-slate-300 py-2 px-6 rounded-md\",\n                        onClick: ()=>(0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.signIn)(\"github\"),\n                        children: \"Sign in with Github\"\n                    }, void 0, false, {\n                        fileName: \"/Users/carolinebates/Desktop/Apps/basketball-substitutions/src/app/page.tsx\",\n                        lineNumber: 40,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/carolinebates/Desktop/Apps/basketball-substitutions/src/app/page.tsx\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/carolinebates/Desktop/Apps/basketball-substitutions/src/app/page.tsx\",\n        lineNumber: 35,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"xGqsfA9Yc4bug2CeORcyTsHwvXY=\", false, function() {\n    return [\n        next_auth_react__WEBPACK_IMPORTED_MODULE_1__.useSession\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsMkJBQTJCOzs7QUFHM0IsZ0NBQWdDO0FBQzZCO0FBQzlCO0FBQ3VCO0FBRXZDLFNBQVNLOztJQUN0Qiw2Q0FBNkM7SUFDN0MsTUFBTSxFQUFFQyxNQUFNQyxPQUFPLEVBQUUsR0FBR1AsMkRBQVVBO0lBRXBDLDhCQUE4QjtJQUM5QixJQUFJTyxTQUFTO1lBTUFBLGVBTTJEQSxnQkFDbkNBO1FBWm5DLDJDQUEyQztRQUMzQyxxQkFDRSw4REFBQ0M7WUFBSUMsV0FBVTs7OEJBQ2IsOERBQUNEO29CQUFJQyxXQUFVOzhCQUNmLDRFQUFDTixrREFBS0E7d0JBQ0pPLEdBQUcsR0FBRUgsZ0JBQUFBLFFBQVFJLElBQUksY0FBWkosb0NBQUFBLGNBQWNLLEtBQUs7d0JBQ3hCQyxJQUFJO3dCQUNKQyxLQUFJO3dCQUNKTCxXQUFVOzs7Ozs7Ozs7Ozs4QkFHWiw4REFBQ007b0JBQUVOLFdBQVU7O3dCQUFnQjtzQ0FBUSw4REFBQ087NEJBQUtQLFdBQVU7dUNBQWFGLGlCQUFBQSxRQUFRSSxJQUFJLGNBQVpKLHFDQUFBQSxlQUFjVSxJQUFJOzs7Ozs7d0JBQVE7Ozs7Ozs7OEJBQzVGLDhEQUFDRjtvQkFBRU4sV0FBVTsrQkFBa0JGLGlCQUFBQSxRQUFRSSxJQUFJLGNBQVpKLHFDQUFBQSxlQUFjVyxLQUFLOzs7Ozs7OEJBQ2xELDhEQUFDQztvQkFBT1YsV0FBVTtvQkFBc0RXLFNBQVMsSUFBTWxCLHdEQUFPQTs4QkFBSTs7Ozs7Ozs7Ozs7O0lBR3hHO0lBRUEsK0NBQStDO0lBQy9DLHFCQUNFLDhEQUFDTTtRQUFJQyxXQUFVOzswQkFDYiw4REFBQ1k7Z0JBQUdaLFdBQVU7MEJBQXFCOzs7Ozs7MEJBQ25DLDhEQUFDTixrREFBS0E7Z0JBQUNNLFdBQVU7Z0JBQUdhLFFBQU87Z0JBQU1DLE9BQU07Z0JBQUtiLEtBQUtOLCtEQUFlQTtnQkFBRVUsS0FBSzs7Ozs7OzBCQUN2RSw4REFBQ047Z0JBQUlDLFdBQVU7O2tDQUNiLDhEQUFDVTt3QkFBT1YsV0FBVTt3QkFBcURXLFNBQVMsSUFBTW5CLHVEQUFNQSxDQUFDO2tDQUFXOzs7Ozs7a0NBQ3hHLDhEQUFDa0I7d0JBQU9WLFdBQVU7d0JBQXVEVyxTQUFTLElBQU1uQix1REFBTUEsQ0FBQztrQ0FBVzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS2xIO0dBcEN3Qkk7O1FBRUlMLHVEQUFVQTs7O0tBRmRLIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvcGFnZS50c3g/ZjY4YSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBtYXJrIGFzIGNsaWVudCBjb21wb25lbnRcblwidXNlIGNsaWVudFwiO1xuXG4vLyBpbXBvcnRpbmcgbmVjZXNzYXJ5IGZ1bmN0aW9uc1xuaW1wb3J0IHsgdXNlU2Vzc2lvbiwgc2lnbkluLCBzaWduT3V0IH0gZnJvbSBcIm5leHQtYXV0aC9yZWFjdFwiXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCBiYXNrZXRiYWxsSW1hZ2UgZnJvbSBcIi4vYXNzZXRzL2JhbGxhbmRob29wLmpwZ1wiXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIC8vIGV4dHJhY3RpbmcgZGF0YSBmcm9tIHVzZXNlc3Npb24gYXMgc2Vzc2lvblxuICBjb25zdCB7IGRhdGE6IHNlc3Npb24gfSA9IHVzZVNlc3Npb24oKVxuXG4gIC8vIGNoZWNraW5nIGlmIHNlc3Npb25zIGV4aXN0c1xuICBpZiAoc2Vzc2lvbikge1xuICAgIC8vIHJlbmRlcmluZyBjb21wb25lbnRzIGZvciBsb2dnZWQgaW4gdXNlcnNcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgaC1zY3JlZW4gZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTIwIGgtMjAgcmVsYXRpdmUgbWItNFwiPlxuICAgICAgICA8SW1hZ2VcbiAgICAgICAgICBzcmM9e3Nlc3Npb24udXNlcj8uaW1hZ2UgYXMgc3RyaW5nfVxuICAgICAgICAgIGZpbGxcbiAgICAgICAgICBhbHQ9XCJcIlxuICAgICAgICAgIGNsYXNzTmFtZT1cIm9iamVjdC1jb3ZlciByb3VuZGVkLWZ1bGxcIlxuICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC0yeGwgbWItMlwiPldlbGNvbWUgPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1ib2xkXCI+e3Nlc3Npb24udXNlcj8ubmFtZX08L3NwYW4+LiBTaWduZWQgSW4gQXM8L3A+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cImZvbnQtYm9sZCBtYi00XCI+e3Nlc3Npb24udXNlcj8uZW1haWx9PC9wPlxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJnLWdyZWVuLTUwIGhvdmVyOmJnLWdyZWVuLTEwMCBweS0yIHB4LTYgcm91bmRlZC1tZFwiIG9uQ2xpY2s9eygpID0+IHNpZ25PdXQoKX0+U2lnbiBvdXQ8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxuXG4gIC8vIHJlbmRlcmluZyBjb21wb25lbnRzIGZvciBub3QgbG9nZ2VkIGluIHVzZXJzXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgaC1zY3JlZW4gZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgZ2FwLTQgcHktNFwiPlxuICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtYm9sZFwiPiBCYXNrZXRiYWxsIFN1YnN0aXR1dGlvbnM8L2gxPlxuICAgICAgPEltYWdlIGNsYXNzTmFtZT1cIlwiIGhlaWdodD1cIjMwMFwiIHdpZHRoPVwiMzBcIiBzcmM9e2Jhc2tldGJhbGxJbWFnZX0gYWx0PXtcIkJhc2tldGJhbGwgYW5kIGhvb3BcIn0gLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGgtc2NyZWVuIGZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIGdhcC00XCI+XG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYmctYmx1ZS0yMDAgaG92ZXI6YmctYmx1ZS0zMDAgcHktMiBweC02IHJvdW5kZWQtbWRcIiBvbkNsaWNrPXsoKSA9PiBzaWduSW4oJ2dvb2dsZScpfT5TaWduIGluIHdpdGggR29vZ2xlPC9idXR0b24+XG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYmctc2xhdGUtMjAwIGhvdmVyOmJnLXNsYXRlLTMwMCBweS0yIHB4LTYgcm91bmRlZC1tZFwiIG9uQ2xpY2s9eygpID0+IHNpZ25JbignZ2l0aHViJyl9PlNpZ24gaW4gd2l0aCBHaXRodWI8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcblxufSJdLCJuYW1lcyI6WyJ1c2VTZXNzaW9uIiwic2lnbkluIiwic2lnbk91dCIsIkltYWdlIiwiYmFza2V0YmFsbEltYWdlIiwiSG9tZSIsImRhdGEiLCJzZXNzaW9uIiwiZGl2IiwiY2xhc3NOYW1lIiwic3JjIiwidXNlciIsImltYWdlIiwiZmlsbCIsImFsdCIsInAiLCJzcGFuIiwibmFtZSIsImVtYWlsIiwiYnV0dG9uIiwib25DbGljayIsImgxIiwiaGVpZ2h0Iiwid2lkdGgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.tsx\n"));

/***/ })

});