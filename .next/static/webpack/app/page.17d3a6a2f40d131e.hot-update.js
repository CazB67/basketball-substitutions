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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/react */ \"(app-pages-browser)/./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n// mark as client component\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n// importing necessary functions\n\n\nfunction Home() {\n    _s();\n    // extracting data from usesession as session\n    const { data: session } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.useSession)();\n    // checking if sessions exists\n    if (session) {\n        var _session_user, _session_user1, _session_user2;\n        // rendering components for logged in users\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"w-full h-screen flex flex-col justify-center items-center\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"w-20 h-20 relative mb-4\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        src: (_session_user = session.user) === null || _session_user === void 0 ? void 0 : _session_user.image,\n                        fill: true,\n                        alt: \"\",\n                        className: \"object-cover rounded-full\"\n                    }, void 0, false, {\n                        fileName: \"/Users/carolinebates/Desktop/Apps/basketball-substitutions/src/app/page.tsx\",\n                        lineNumber: 18,\n                        columnNumber: 9\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/carolinebates/Desktop/Apps/basketball-substitutions/src/app/page.tsx\",\n                    lineNumber: 17,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"text-2xl mb-2\",\n                    children: [\n                        \"Welcome \",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"font-bold\",\n                            children: (_session_user1 = session.user) === null || _session_user1 === void 0 ? void 0 : _session_user1.name\n                        }, void 0, false, {\n                            fileName: \"/Users/carolinebates/Desktop/Apps/basketball-substitutions/src/app/page.tsx\",\n                            lineNumber: 25,\n                            columnNumber: 46\n                        }, this),\n                        \". Signed In As\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/carolinebates/Desktop/Apps/basketball-substitutions/src/app/page.tsx\",\n                    lineNumber: 25,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"font-bold mb-4\",\n                    children: (_session_user2 = session.user) === null || _session_user2 === void 0 ? void 0 : _session_user2.email\n                }, void 0, false, {\n                    fileName: \"/Users/carolinebates/Desktop/Apps/basketball-substitutions/src/app/page.tsx\",\n                    lineNumber: 26,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"bg-green-50 hover:bg-green-100 py-2 px-6 rounded-md\",\n                    onClick: ()=>(0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.signOut)(),\n                    children: \"Sign out\"\n                }, void 0, false, {\n                    fileName: \"/Users/carolinebates/Desktop/Apps/basketball-substitutions/src/app/page.tsx\",\n                    lineNumber: 27,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/carolinebates/Desktop/Apps/basketball-substitutions/src/app/page.tsx\",\n            lineNumber: 16,\n            columnNumber: 7\n        }, this);\n    }\n    // rendering components for not logged in users\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-full h-screen flex flex-col justify-center items-center gap-4\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-2xl font-bold\",\n                children: \" Basketball Substitutions\"\n            }, void 0, false, {\n                fileName: \"/Users/carolinebates/Desktop/Apps/basketball-substitutions/src/app/page.tsx\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"bg-blue-200 hover:bg-blue-300 py-2 px-6 rounded-md mb-2\",\n                onClick: ()=>(0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.signIn)(\"google\"),\n                children: \"Sign in with Google\"\n            }, void 0, false, {\n                fileName: \"/Users/carolinebates/Desktop/Apps/basketball-substitutions/src/app/page.tsx\",\n                lineNumber: 36,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"bg-slate-200 hover:bg-slate-300 py-2 px-6 rounded-md mb-2\",\n                onClick: ()=>(0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.signIn)(\"github\"),\n                children: \"Sign in with Github\"\n            }, void 0, false, {\n                fileName: \"/Users/carolinebates/Desktop/Apps/basketball-substitutions/src/app/page.tsx\",\n                lineNumber: 37,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/carolinebates/Desktop/Apps/basketball-substitutions/src/app/page.tsx\",\n        lineNumber: 34,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"xGqsfA9Yc4bug2CeORcyTsHwvXY=\", false, function() {\n    return [\n        next_auth_react__WEBPACK_IMPORTED_MODULE_1__.useSession\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSwyQkFBMkI7OztBQUczQixnQ0FBZ0M7QUFDNkI7QUFDOUI7QUFFaEIsU0FBU0k7O0lBQ3RCLDZDQUE2QztJQUM3QyxNQUFNLEVBQUVDLE1BQU1DLE9BQU8sRUFBRSxHQUFHTiwyREFBVUE7SUFFcEMsOEJBQThCO0lBQzlCLElBQUlNLFNBQVM7WUFNQUEsZUFNMkRBLGdCQUNuQ0E7UUFabkMsMkNBQTJDO1FBQzNDLHFCQUNFLDhEQUFDQztZQUFJQyxXQUFVOzs4QkFDYiw4REFBQ0Q7b0JBQUlDLFdBQVU7OEJBQ2YsNEVBQUNMLGtEQUFLQTt3QkFDSk0sR0FBRyxHQUFFSCxnQkFBQUEsUUFBUUksSUFBSSxjQUFaSixvQ0FBQUEsY0FBY0ssS0FBSzt3QkFDeEJDLElBQUk7d0JBQ0pDLEtBQUk7d0JBQ0pMLFdBQVU7Ozs7Ozs7Ozs7OzhCQUdaLDhEQUFDTTtvQkFBRU4sV0FBVTs7d0JBQWdCO3NDQUFRLDhEQUFDTzs0QkFBS1AsV0FBVTt1Q0FBYUYsaUJBQUFBLFFBQVFJLElBQUksY0FBWkoscUNBQUFBLGVBQWNVLElBQUk7Ozs7Ozt3QkFBUTs7Ozs7Ozs4QkFDNUYsOERBQUNGO29CQUFFTixXQUFVOytCQUFrQkYsaUJBQUFBLFFBQVFJLElBQUksY0FBWkoscUNBQUFBLGVBQWNXLEtBQUs7Ozs7Ozs4QkFDbEQsOERBQUNDO29CQUFPVixXQUFVO29CQUFzRFcsU0FBUyxJQUFNakIsd0RBQU9BOzhCQUFJOzs7Ozs7Ozs7Ozs7SUFHeEc7SUFFQSwrQ0FBK0M7SUFDL0MscUJBQ0UsOERBQUNLO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDWTtnQkFBR1osV0FBVTswQkFBcUI7Ozs7OzswQkFDakMsOERBQUNVO2dCQUFPVixXQUFVO2dCQUEwRFcsU0FBUyxJQUFNbEIsdURBQU1BLENBQUM7MEJBQVc7Ozs7OzswQkFDN0csOERBQUNpQjtnQkFBT1YsV0FBVTtnQkFBNERXLFNBQVMsSUFBTWxCLHVEQUFNQSxDQUFDOzBCQUFXOzs7Ozs7Ozs7Ozs7QUFJdkg7R0FqQ3dCRzs7UUFFSUosdURBQVVBOzs7S0FGZEkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9wYWdlLnRzeD9mNjhhIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIG1hcmsgYXMgY2xpZW50IGNvbXBvbmVudFxuXCJ1c2UgY2xpZW50XCI7XG5cbi8vIGltcG9ydGluZyBuZWNlc3NhcnkgZnVuY3Rpb25zXG5pbXBvcnQgeyB1c2VTZXNzaW9uLCBzaWduSW4sIHNpZ25PdXQgfSBmcm9tIFwibmV4dC1hdXRoL3JlYWN0XCJcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICAvLyBleHRyYWN0aW5nIGRhdGEgZnJvbSB1c2VzZXNzaW9uIGFzIHNlc3Npb25cbiAgY29uc3QgeyBkYXRhOiBzZXNzaW9uIH0gPSB1c2VTZXNzaW9uKClcblxuICAvLyBjaGVja2luZyBpZiBzZXNzaW9ucyBleGlzdHNcbiAgaWYgKHNlc3Npb24pIHtcbiAgICAvLyByZW5kZXJpbmcgY29tcG9uZW50cyBmb3IgbG9nZ2VkIGluIHVzZXJzXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGgtc2NyZWVuIGZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0yMCBoLTIwIHJlbGF0aXZlIG1iLTRcIj5cbiAgICAgICAgPEltYWdlXG4gICAgICAgICAgc3JjPXtzZXNzaW9uLnVzZXI/LmltYWdlIGFzIHN0cmluZ31cbiAgICAgICAgICBmaWxsXG4gICAgICAgICAgYWx0PVwiXCJcbiAgICAgICAgICBjbGFzc05hbWU9XCJvYmplY3QtY292ZXIgcm91bmRlZC1mdWxsXCJcbiAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtMnhsIG1iLTJcIj5XZWxjb21lIDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtYm9sZFwiPntzZXNzaW9uLnVzZXI/Lm5hbWV9PC9zcGFuPi4gU2lnbmVkIEluIEFzPC9wPlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJmb250LWJvbGQgbWItNFwiPntzZXNzaW9uLnVzZXI/LmVtYWlsfTwvcD5cbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJiZy1ncmVlbi01MCBob3ZlcjpiZy1ncmVlbi0xMDAgcHktMiBweC02IHJvdW5kZWQtbWRcIiBvbkNsaWNrPXsoKSA9PiBzaWduT3V0KCl9PlNpZ24gb3V0PC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cblxuICAvLyByZW5kZXJpbmcgY29tcG9uZW50cyBmb3Igbm90IGxvZ2dlZCBpbiB1c2Vyc1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGgtc2NyZWVuIGZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIGdhcC00XCI+XG4gICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC0yeGwgZm9udC1ib2xkXCI+IEJhc2tldGJhbGwgU3Vic3RpdHV0aW9uczwvaDE+XG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYmctYmx1ZS0yMDAgaG92ZXI6YmctYmx1ZS0zMDAgcHktMiBweC02IHJvdW5kZWQtbWQgbWItMlwiIG9uQ2xpY2s9eygpID0+IHNpZ25JbignZ29vZ2xlJyl9PlNpZ24gaW4gd2l0aCBHb29nbGU8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJiZy1zbGF0ZS0yMDAgaG92ZXI6Ymctc2xhdGUtMzAwIHB5LTIgcHgtNiByb3VuZGVkLW1kIG1iLTJcIiBvbkNsaWNrPXsoKSA9PiBzaWduSW4oJ2dpdGh1YicpfT5TaWduIGluIHdpdGggR2l0aHViPC9idXR0b24+XG4gICAgPC9kaXY+XG4gIClcblxufSJdLCJuYW1lcyI6WyJ1c2VTZXNzaW9uIiwic2lnbkluIiwic2lnbk91dCIsIkltYWdlIiwiSG9tZSIsImRhdGEiLCJzZXNzaW9uIiwiZGl2IiwiY2xhc3NOYW1lIiwic3JjIiwidXNlciIsImltYWdlIiwiZmlsbCIsImFsdCIsInAiLCJzcGFuIiwibmFtZSIsImVtYWlsIiwiYnV0dG9uIiwib25DbGljayIsImgxIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.tsx\n"));

/***/ })

});