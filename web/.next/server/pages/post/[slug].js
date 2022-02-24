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
exports.id = "pages/post/[slug]";
exports.ids = ["pages/post/[slug]"];
exports.modules = {

/***/ "./client.js":
/*!*******************!*\
  !*** ./client.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _sanity_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sanity/client */ \"@sanity/client\");\n/* harmony import */ var _sanity_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sanity_client__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_sanity_client__WEBPACK_IMPORTED_MODULE_0___default()({\n    projectId: '4eqy1x7a',\n    dataset: 'production',\n    useCdn: true // `false` if you want to ensure fresh data\n}));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQXlDO0FBRXpDLGlFQUFlQSxxREFBWSxDQUFDLENBQUM7SUFDM0JDLFNBQVMsRUFBRSxDQUFVO0lBQ3JCQyxPQUFPLEVBQUUsQ0FBWTtJQUNyQkMsTUFBTSxFQUFFLElBQUksQ0FBNEM7QUFDMUQsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2ViLy4vY2xpZW50LmpzPzk3MTUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHNhbml0eUNsaWVudCBmcm9tICdAc2FuaXR5L2NsaWVudCdcblxuZXhwb3J0IGRlZmF1bHQgc2FuaXR5Q2xpZW50KHtcbiAgcHJvamVjdElkOiAnNGVxeTF4N2EnLCAvLyB5b3UgY2FuIGZpbmQgdGhpcyBpbiBzYW5pdHkuanNvblxuICBkYXRhc2V0OiAncHJvZHVjdGlvbicsIC8vIG9yIHRoZSBuYW1lIHlvdSBjaG9zZSBpbiBzdGVwIDFcbiAgdXNlQ2RuOiB0cnVlIC8vIGBmYWxzZWAgaWYgeW91IHdhbnQgdG8gZW5zdXJlIGZyZXNoIGRhdGFcbn0pIl0sIm5hbWVzIjpbInNhbml0eUNsaWVudCIsInByb2plY3RJZCIsImRhdGFzZXQiLCJ1c2VDZG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./client.js\n");

/***/ }),

/***/ "./pages/post/[slug].js":
/*!******************************!*\
  !*** ./pages/post/[slug].js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getStaticPaths\": () => (/* binding */ getStaticPaths),\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var groq__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! groq */ \"groq\");\n/* harmony import */ var groq__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(groq__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @sanity/image-url */ \"@sanity/image-url\");\n/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_sanity_image_url__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _portabletext_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @portabletext/react */ \"@portabletext/react\");\n/* harmony import */ var _portabletext_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_portabletext_react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../client */ \"./client.js\");\n\n// [slug].js\n\n\n\n\nfunction urlFor(source) {\n    return _sanity_image_url__WEBPACK_IMPORTED_MODULE_2___default()(_client__WEBPACK_IMPORTED_MODULE_4__[\"default\"]).image(source);\n}\nconst ptComponents = {\n    types: {\n        image: ({ value  })=>{\n            var ref;\n            if (!(value === null || value === void 0 ? void 0 : (ref = value.asset) === null || ref === void 0 ? void 0 : ref._ref)) {\n                return null;\n            }\n            return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                alt: value.alt || ' ',\n                loading: \"lazy\",\n                src: urlFor(value).width(320).height(240).fit('max').auto('format')\n            }, void 0, false, {\n                fileName: \"/Users/omar/Code/next-tailwind-sanity-template/web/pages/post/[slug].js\",\n                lineNumber: 18,\n                columnNumber: 9\n            }, undefined));\n        }\n    }\n};\nconst Post = ({ post  })=>{\n    const { title ='Missing title' , name ='Missing name' , categories , authorImage , body =[]  } = post;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"article\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-6xl font-extrabold\",\n                children: title\n            }, void 0, false, {\n                fileName: \"/Users/omar/Code/next-tailwind-sanity-template/web/pages/post/[slug].js\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                children: [\n                    \"By \",\n                    name\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/omar/Code/next-tailwind-sanity-template/web/pages/post/[slug].js\",\n                lineNumber: 39,\n                columnNumber: 7\n            }, undefined),\n            categories && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: [\n                    \"Posted in\",\n                    categories.map((category)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            children: category\n                        }, category, false, {\n                            fileName: \"/Users/omar/Code/next-tailwind-sanity-template/web/pages/post/[slug].js\",\n                            lineNumber: 43,\n                            columnNumber: 39\n                        }, undefined)\n                    )\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/omar/Code/next-tailwind-sanity-template/web/pages/post/[slug].js\",\n                lineNumber: 41,\n                columnNumber: 9\n            }, undefined),\n            authorImage && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: urlFor(authorImage).width(50).url(),\n                    alt: `${name}'s picture`\n                }, void 0, false, {\n                    fileName: \"/Users/omar/Code/next-tailwind-sanity-template/web/pages/post/[slug].js\",\n                    lineNumber: 48,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/omar/Code/next-tailwind-sanity-template/web/pages/post/[slug].js\",\n                lineNumber: 47,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_portabletext_react__WEBPACK_IMPORTED_MODULE_3__.PortableText, {\n                value: body,\n                components: ptComponents\n            }, void 0, false, {\n                fileName: \"/Users/omar/Code/next-tailwind-sanity-template/web/pages/post/[slug].js\",\n                lineNumber: 56,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/omar/Code/next-tailwind-sanity-template/web/pages/post/[slug].js\",\n        lineNumber: 37,\n        columnNumber: 5\n    }, undefined));\n};\nconst query = (groq__WEBPACK_IMPORTED_MODULE_1___default())`*[_type == \"post\" && slug.current == $slug][0]{\n  title,\n  \"name\": author->name,\n  \"categories\": categories[]->title,\n  \"authorImage\": author->image,\n  body\n}`;\nasync function getStaticPaths() {\n    const paths = await _client__WEBPACK_IMPORTED_MODULE_4__[\"default\"].fetch((groq__WEBPACK_IMPORTED_MODULE_1___default())`*[_type == \"post\" && defined(slug.current)][].slug.current`);\n    return {\n        paths: paths.map((slug)=>({\n                params: {\n                    slug\n                }\n            })\n        ),\n        fallback: true\n    };\n}\nasync function getStaticProps(context) {\n    // It's important to default the slug so that it doesn't return \"undefined\"\n    const { slug =\"\"  } = context.params;\n    const post = await _client__WEBPACK_IMPORTED_MODULE_4__[\"default\"].fetch(query, {\n        slug\n    });\n    return {\n        props: {\n            post\n        }\n    };\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Post);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFjLENBQUNDLE9BQU8sRUFBRSxDQUFDO0lBQzdDLEVBQTJFO0lBQzNFLEtBQUssQ0FBQyxDQUFDLENBQUNKLElBQUksRUFBRyxDQUFFLEdBQUMsQ0FBQyxHQUFHSSxPQUFPLENBQUNILE1BQU07SUFDcEMsS0FBSyxDQUFDdEIsSUFBSSxHQUFHLEtBQUssQ0FBQ2xCLHFEQUFZLENBQUNtQyxLQUFLLEVBQUUsQ0FBQztRQUFDSSxJQUFJO0lBQUMsQ0FBQztJQUMvQyxNQUFNLENBQUMsQ0FBQztRQUNOSyxLQUFLLEVBQUUsQ0FBQztZQUNOMUIsSUFBSTtRQUNOLENBQUM7SUFDSCxDQUFDO0FBQ0gsQ0FBQztBQUNELGlFQUFlRCxJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2ViLy4vcGFnZXMvcG9zdC9bc2x1Z10uanM/MzQ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBbc2x1Z10uanNcbmltcG9ydCBncm9xIGZyb20gJ2dyb3EnXG5pbXBvcnQgaW1hZ2VVcmxCdWlsZGVyIGZyb20gJ0BzYW5pdHkvaW1hZ2UtdXJsJ1xuaW1wb3J0IHtQb3J0YWJsZVRleHR9IGZyb20gJ0Bwb3J0YWJsZXRleHQvcmVhY3QnXG5pbXBvcnQgY2xpZW50IGZyb20gJy4uLy4uL2NsaWVudCdcblxuZnVuY3Rpb24gdXJsRm9yIChzb3VyY2UpIHtcbiAgcmV0dXJuIGltYWdlVXJsQnVpbGRlcihjbGllbnQpLmltYWdlKHNvdXJjZSlcbn1cblxuY29uc3QgcHRDb21wb25lbnRzID0ge1xuICB0eXBlczoge1xuICAgIGltYWdlOiAoeyB2YWx1ZSB9KSA9PiB7XG4gICAgICBpZiAoIXZhbHVlPy5hc3NldD8uX3JlZikge1xuICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgfVxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGltZ1xuICAgICAgICAgIGFsdD17dmFsdWUuYWx0IHx8ICcgJ31cbiAgICAgICAgICBsb2FkaW5nPVwibGF6eVwiXG4gICAgICAgICAgc3JjPXt1cmxGb3IodmFsdWUpLndpZHRoKDMyMCkuaGVpZ2h0KDI0MCkuZml0KCdtYXgnKS5hdXRvKCdmb3JtYXQnKX1cbiAgICAgICAgLz5cbiAgICAgIClcbiAgICB9XG4gIH1cbn1cblxuY29uc3QgUG9zdCA9ICh7cG9zdH0pID0+IHtcbiAgY29uc3Qge1xuICAgIHRpdGxlID0gJ01pc3NpbmcgdGl0bGUnLFxuICAgIG5hbWUgPSAnTWlzc2luZyBuYW1lJyxcbiAgICBjYXRlZ29yaWVzLFxuICAgIGF1dGhvckltYWdlLFxuICAgIGJvZHkgPSBbXVxuICB9ID0gcG9zdFxuICByZXR1cm4gKFxuICAgIDxhcnRpY2xlPlxuICAgICAgPGgxIGNsYXNzTmFtZT0ndGV4dC02eGwgZm9udC1leHRyYWJvbGQnPnt0aXRsZX08L2gxPlxuICAgICAgPHNwYW4+Qnkge25hbWV9PC9zcGFuPlxuICAgICAge2NhdGVnb3JpZXMgJiYgKFxuICAgICAgICA8dWw+XG4gICAgICAgICAgUG9zdGVkIGluXG4gICAgICAgICAge2NhdGVnb3JpZXMubWFwKGNhdGVnb3J5ID0+IDxsaSBrZXk9e2NhdGVnb3J5fT57Y2F0ZWdvcnl9PC9saT4pfVxuICAgICAgICA8L3VsPlxuICAgICAgKX1cbiAgICAgIHthdXRob3JJbWFnZSAmJiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGltZ1xuICAgICAgICAgICAgc3JjPXt1cmxGb3IoYXV0aG9ySW1hZ2UpXG4gICAgICAgICAgICAgIC53aWR0aCg1MClcbiAgICAgICAgICAgICAgLnVybCgpfVxuICAgICAgICAgICAgYWx0PXtgJHtuYW1lfSdzIHBpY3R1cmVgfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICAgIDxQb3J0YWJsZVRleHRcbiAgICAgICAgdmFsdWU9e2JvZHl9XG4gICAgICAgIGNvbXBvbmVudHM9e3B0Q29tcG9uZW50c31cbiAgICAgIC8+XG4gICAgPC9hcnRpY2xlPlxuICApXG59XG5cbmNvbnN0IHF1ZXJ5ID0gZ3JvcWAqW190eXBlID09IFwicG9zdFwiICYmIHNsdWcuY3VycmVudCA9PSAkc2x1Z11bMF17XG4gIHRpdGxlLFxuICBcIm5hbWVcIjogYXV0aG9yLT5uYW1lLFxuICBcImNhdGVnb3JpZXNcIjogY2F0ZWdvcmllc1tdLT50aXRsZSxcbiAgXCJhdXRob3JJbWFnZVwiOiBhdXRob3ItPmltYWdlLFxuICBib2R5XG59YFxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1BhdGhzKCkge1xuICBjb25zdCBwYXRocyA9IGF3YWl0IGNsaWVudC5mZXRjaChcbiAgICBncm9xYCpbX3R5cGUgPT0gXCJwb3N0XCIgJiYgZGVmaW5lZChzbHVnLmN1cnJlbnQpXVtdLnNsdWcuY3VycmVudGBcbiAgKVxuXG4gIHJldHVybiB7XG4gICAgcGF0aHM6IHBhdGhzLm1hcCgoc2x1ZykgPT4gKHtwYXJhbXM6IHtzbHVnfX0pKSxcbiAgICBmYWxsYmFjazogdHJ1ZSxcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoY29udGV4dCkge1xuICAvLyBJdCdzIGltcG9ydGFudCB0byBkZWZhdWx0IHRoZSBzbHVnIHNvIHRoYXQgaXQgZG9lc24ndCByZXR1cm4gXCJ1bmRlZmluZWRcIlxuICBjb25zdCB7IHNsdWcgPSBcIlwiIH0gPSBjb250ZXh0LnBhcmFtc1xuICBjb25zdCBwb3N0ID0gYXdhaXQgY2xpZW50LmZldGNoKHF1ZXJ5LCB7IHNsdWcgfSlcbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgcG9zdFxuICAgIH1cbiAgfVxufVxuZXhwb3J0IGRlZmF1bHQgUG9zdCJdLCJuYW1lcyI6WyJncm9xIiwiaW1hZ2VVcmxCdWlsZGVyIiwiUG9ydGFibGVUZXh0IiwiY2xpZW50IiwidXJsRm9yIiwic291cmNlIiwiaW1hZ2UiLCJwdENvbXBvbmVudHMiLCJ0eXBlcyIsInZhbHVlIiwiYXNzZXQiLCJfcmVmIiwiaW1nIiwiYWx0IiwibG9hZGluZyIsInNyYyIsIndpZHRoIiwiaGVpZ2h0IiwiZml0IiwiYXV0byIsIlBvc3QiLCJwb3N0IiwidGl0bGUiLCJuYW1lIiwiY2F0ZWdvcmllcyIsImF1dGhvckltYWdlIiwiYm9keSIsImFydGljbGUiLCJoMSIsImNsYXNzTmFtZSIsInNwYW4iLCJ1bCIsIm1hcCIsImNhdGVnb3J5IiwibGkiLCJkaXYiLCJ1cmwiLCJjb21wb25lbnRzIiwicXVlcnkiLCJnZXRTdGF0aWNQYXRocyIsInBhdGhzIiwiZmV0Y2giLCJzbHVnIiwicGFyYW1zIiwiZmFsbGJhY2siLCJnZXRTdGF0aWNQcm9wcyIsImNvbnRleHQiLCJwcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/post/[slug].js\n");

/***/ }),

/***/ "@portabletext/react":
/*!**************************************!*\
  !*** external "@portabletext/react" ***!
  \**************************************/
/***/ ((module) => {

module.exports = require("@portabletext/react");

/***/ }),

/***/ "@sanity/client":
/*!*********************************!*\
  !*** external "@sanity/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@sanity/client");

/***/ }),

/***/ "@sanity/image-url":
/*!************************************!*\
  !*** external "@sanity/image-url" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("@sanity/image-url");

/***/ }),

/***/ "groq":
/*!***********************!*\
  !*** external "groq" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("groq");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/post/[slug].js"));
module.exports = __webpack_exports__;

})();