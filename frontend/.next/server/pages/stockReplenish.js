"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/stockReplenish";
exports.ids = ["pages/stockReplenish"];
exports.modules = {

/***/ "./components/ViewData.js":
/*!********************************!*\
  !*** ./components/ViewData.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst STable = (styled_components__WEBPACK_IMPORTED_MODULE_2___default().table)`\r\n    width: 100%;\r\n    border: 0.1rem solid black;\r\n    border-collapse: collapse;\r\n    & td, th {\r\n        border: 0.05rem solid black;\r\n        padding: 0.25rem;\r\n    }\r\n`;\nfunction ViewData() {\n    const [info, setInfo] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchData = async ()=>{\n            const res = await fetch(\"http://localhost:4000/items/\");\n            const data = await res.json();\n            setInfo(data);\n        };\n        fetchData();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(STable, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                        children: \"Name\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Programming\\\\bags_of_hope\\\\frontend\\\\components\\\\ViewData.js\",\n                        lineNumber: 28,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                        children: \"Quantity\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Programming\\\\bags_of_hope\\\\frontend\\\\components\\\\ViewData.js\",\n                        lineNumber: 29,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                        children: \"Expiry\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Programming\\\\bags_of_hope\\\\frontend\\\\components\\\\ViewData.js\",\n                        lineNumber: 30,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                        children: \"Note\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Programming\\\\bags_of_hope\\\\frontend\\\\components\\\\ViewData.js\",\n                        lineNumber: 31,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Programming\\\\bags_of_hope\\\\frontend\\\\components\\\\ViewData.js\",\n                lineNumber: 27,\n                columnNumber: 13\n            }, this),\n            info.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                            children: item.name\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Programming\\\\bags_of_hope\\\\frontend\\\\components\\\\ViewData.js\",\n                            lineNumber: 35,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                            children: item.quantity\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Programming\\\\bags_of_hope\\\\frontend\\\\components\\\\ViewData.js\",\n                            lineNumber: 36,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                            children: new Date(item.expiry_date).toLocaleDateString(\"en-GB\")\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Programming\\\\bags_of_hope\\\\frontend\\\\components\\\\ViewData.js\",\n                            lineNumber: 37,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                            children: item.note\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Programming\\\\bags_of_hope\\\\frontend\\\\components\\\\ViewData.js\",\n                            lineNumber: 38,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, item._id, true, {\n                    fileName: \"C:\\\\Programming\\\\bags_of_hope\\\\frontend\\\\components\\\\ViewData.js\",\n                    lineNumber: 34,\n                    columnNumber: 17\n                }, this))\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Programming\\\\bags_of_hope\\\\frontend\\\\components\\\\ViewData.js\",\n        lineNumber: 26,\n        columnNumber: 9\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ViewData);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1ZpZXdEYXRhLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUEyQztBQUNMO0FBRXRDLE1BQU1HLFNBQVNELGdFQUFZLENBQUM7QUFVNUIsU0FBU0c7SUFDTCxNQUFNLENBQUNDLE1BQU1DLFFBQVEsR0FBR047SUFDeEJELFVBQVUsSUFBTTtRQUNaLE1BQU1RO1lBQ0YsTUFBTUMsTUFBTSxNQUFNQyxNQUFNO1lBQ3hCLE1BQU1DLE9BQU87OztRQUdqQkg7SUFDSixHQUFHLEVBQUU7SUFFTDs7MEJBRVEsUUFBQ0s7Ozs7Ozs7Ozs7a0NBRU87Ozs7Ozs7a0NBQ0E7Ozs7Ozs7a0NBQ0E7Ozs7Ozs7Ozs7OztZQUVQUCxLQUFLUyxHQUFHLENBQUNDLENBQUFBOzs7Ozs7Ozs7O3NDQUdHQSw2REFBS0csTUFBUTs7Ozs7OztzQ0FDYiw2REFBSUMsRUFBS0osS0FBS0s7Ozs7Ozs7c0NBQ2RMLDZEQUFLTyxFQUFJOzs7Ozs7O21CQUpUUCxLQUFLUSxHQUFHOzs7Ozs7Ozs7OztBQVNqQztBQUVBLGVBQWVuQixTQUFTIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9jb21wb25lbnRzL1ZpZXdEYXRhLmpzP2FkODUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xyXG5cclxuY29uc3QgU1RhYmxlID0gc3R5bGVkLnRhYmxlYFxyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3JkZXI6IDAuMXJlbSBzb2xpZCBibGFjaztcclxuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbiAgICAmIHRkLCB0aCB7XHJcbiAgICAgICAgYm9yZGVyOiAwLjA1cmVtIHNvbGlkIGJsYWNrO1xyXG4gICAgICAgIHBhZGRpbmc6IDAuMjVyZW07XHJcbiAgICB9XHJcbmBcclxuXHJcbmZ1bmN0aW9uIFZpZXdEYXRhKCkge1xyXG4gICAgY29uc3QgW2luZm8sIHNldEluZm9dID0gdXNlU3RhdGUoW10pXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGZldGNoRGF0YSA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXCJodHRwOi8vbG9jYWxob3N0OjQwMDAvaXRlbXMvXCIpXHJcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpXHJcbiAgICAgICAgICAgIHNldEluZm8oZGF0YSlcclxuICAgICAgICB9XHJcbiAgICAgICAgZmV0Y2hEYXRhKClcclxuICAgIH0sIFtdKVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFNUYWJsZT5cclxuICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgPHRoPk5hbWU8L3RoPlxyXG4gICAgICAgICAgICAgICAgPHRoPlF1YW50aXR5PC90aD5cclxuICAgICAgICAgICAgICAgIDx0aD5FeHBpcnk8L3RoPlxyXG4gICAgICAgICAgICAgICAgPHRoPk5vdGU8L3RoPlxyXG4gICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICB7aW5mby5tYXAoaXRlbSA9PiBcclxuICAgICAgICAgICAgICAgIDx0ciBrZXk9e2l0ZW0uX2lkfT5cclxuICAgICAgICAgICAgICAgICAgICA8dGQ+e2l0ZW0ubmFtZX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZD57aXRlbS5xdWFudGl0eX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZD57bmV3IERhdGUoaXRlbS5leHBpcnlfZGF0ZSkudG9Mb2NhbGVEYXRlU3RyaW5nKFwiZW4tR0JcIil9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGQ+e2l0ZW0ubm90ZX08L3RkPlxyXG4gICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICA8L1NUYWJsZT5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFZpZXdEYXRhOyJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInN0eWxlZCIsIlNUYWJsZSIsInRhYmxlIiwiVmlld0RhdGEiLCJpbmZvIiwic2V0SW5mbyIsImZldGNoRGF0YSIsInJlcyIsImZldGNoIiwiZGF0YSIsImpzb24iLCJ0ciIsInRoIiwibWFwIiwiaXRlbSIsInRkIiwibmFtZSIsInF1YW50aXR5IiwiRGF0ZSIsImV4cGlyeV9kYXRlIiwidG9Mb2NhbGVEYXRlU3RyaW5nIiwibm90ZSIsIl9pZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/ViewData.js\n");

/***/ }),

/***/ "./pages/stockReplenish/index.js":
/*!***************************************!*\
  !*** ./pages/stockReplenish/index.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_ViewData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/ViewData */ \"./components/ViewData.js\");\n\n\nfunction StockReplenish() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Stock replenishment page\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Programming\\\\bags_of_hope\\\\frontend\\\\pages\\\\stockReplenish\\\\index.js\",\n                lineNumber: 6,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ViewData__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Programming\\\\bags_of_hope\\\\frontend\\\\pages\\\\stockReplenish\\\\index.js\",\n                lineNumber: 7,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Programming\\\\bags_of_hope\\\\frontend\\\\pages\\\\stockReplenish\\\\index.js\",\n        lineNumber: 5,\n        columnNumber: 9\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StockReplenish);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9zdG9ja1JlcGxlbmlzaC9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFBZ0Q7QUFFaEQsU0FBU0MsaUJBQWlCO0lBQ3RCLHFCQUNJLDhEQUFDQzs7MEJBQ0csOERBQUNDOzBCQUFHOzs7Ozs7MEJBQ0osOERBQUNILDREQUFRQTs7Ozs7Ozs7Ozs7QUFHckI7QUFFQSxpRUFBZUMsY0FBY0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250ZW5kLy4vcGFnZXMvc3RvY2tSZXBsZW5pc2gvaW5kZXguanM/ZTg5YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVmlld0RhdGEgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9WaWV3RGF0YSdcclxuXHJcbmZ1bmN0aW9uIFN0b2NrUmVwbGVuaXNoKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8aDE+U3RvY2sgcmVwbGVuaXNobWVudCBwYWdlPC9oMT5cclxuICAgICAgICAgICAgPFZpZXdEYXRhLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3RvY2tSZXBsZW5pc2g7Il0sIm5hbWVzIjpbIlZpZXdEYXRhIiwiU3RvY2tSZXBsZW5pc2giLCJkaXYiLCJoMSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/stockReplenish/index.js\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("styled-components");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/stockReplenish/index.js"));
module.exports = __webpack_exports__;

})();