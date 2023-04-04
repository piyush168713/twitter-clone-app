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
exports.id = "pages/api/trends/place/[id]";
exports.ids = ["pages/api/trends/place/[id]"];
exports.modules = {

/***/ "(api)/./src/lib/api/auth.ts":
/*!*****************************!*\
  !*** ./src/lib/api/auth.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AUTH\": () => (/* binding */ AUTH)\n/* harmony export */ });\nconst AUTH = {\n    headers: {\n        Authorization: `Bearer ${process.env.TWITTER_BEARER_TOKEN}`\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvbGliL2FwaS9hdXRoLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBTyxNQUFNQSxJQUFJLEdBQTBCO0lBQ3pDQyxPQUFPLEVBQUU7UUFDUEMsYUFBYSxFQUFFLENBQUMsT0FBTyxFQUFFQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0Msb0JBQW9CLENBQVcsQ0FBQztLQUN0RTtDQUNGLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90d2l0dGVyLWNsb25lLy4vc3JjL2xpYi9hcGkvYXV0aC50cz84ODNjIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBBVVRIOiBSZWFkb25seTxSZXF1ZXN0SW5pdD4gPSB7XG4gIGhlYWRlcnM6IHtcbiAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7cHJvY2Vzcy5lbnYuVFdJVFRFUl9CRUFSRVJfVE9LRU4gYXMgc3RyaW5nfWBcbiAgfVxufTtcbiJdLCJuYW1lcyI6WyJBVVRIIiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJwcm9jZXNzIiwiZW52IiwiVFdJVFRFUl9CRUFSRVJfVE9LRU4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./src/lib/api/auth.ts\n");

/***/ }),

/***/ "(api)/./src/pages/api/trends/place/[id].ts":
/*!********************************************!*\
  !*** ./src/pages/api/trends/place/[id].ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ placeIdEndpoint)\n/* harmony export */ });\n/* harmony import */ var _lib_api_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @lib/api/auth */ \"(api)/./src/lib/api/auth.ts\");\n\nasync function placeIdEndpoint(req, res) {\n    const { id , limit  } = req.query;\n    const response = await fetch(`https://api.twitter.com/1.1/trends/place.json?id=${id}`, _lib_api_auth__WEBPACK_IMPORTED_MODULE_0__.AUTH);\n    const rawData = await response.json();\n    const data = \"errors\" in rawData ? rawData : {\n        trends: rawData[0].trends,\n        location: rawData[0].locations[0].name\n    };\n    const limitParam = limit ? parseInt(limit, 10) : null;\n    let formattedTrends = limitParam && !(\"errors\" in data) ? data.trends : null;\n    if (formattedTrends) {\n        const filteredTrends = formattedTrends.filter(({ tweet_volume  })=>tweet_volume);\n        formattedTrends = filteredTrends.map(({ url , ...rest })=>({\n                ...rest,\n                url: url.replace(/http.*.com/, \"\")\n            })).sort((a, b)=>b.tweet_volume - a.tweet_volume);\n        if (limitParam) formattedTrends = formattedTrends.slice(0, limitParam);\n    }\n    const formattedData = formattedTrends ? {\n        ...data,\n        trends: formattedTrends\n    } : null;\n    res.status(response.status).json(formattedData ?? data);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL3RyZW5kcy9wbGFjZS9baWRdLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQXFDO0FBY3RCLGVBQWVDLGVBQWUsQ0FDM0NDLEdBQW1CLEVBQ25CQyxHQUFvRCxFQUNyQztJQUNmLE1BQU0sRUFBRUMsRUFBRSxHQUFFQyxLQUFLLEdBQUUsR0FBR0gsR0FBRyxDQUFDSSxLQUFLO0lBRS9CLE1BQU1DLFFBQVEsR0FBRyxNQUFNQyxLQUFLLENBQzFCLENBQUMsaURBQWlELEVBQUVKLEVBQUUsQ0FBQyxDQUFDLEVBQ3hESiwrQ0FBSSxDQUNMO0lBRUQsTUFBTVMsT0FBTyxHQUFJLE1BQU1GLFFBQVEsQ0FBQ0csSUFBSSxFQUFFO0lBRXRDLE1BQU1DLElBQUksR0FDUixRQUFRLElBQUlGLE9BQU8sR0FDZkEsT0FBTyxHQUNQO1FBQUVHLE1BQU0sRUFBRUgsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDRyxNQUFNO1FBQUVDLFFBQVEsRUFBRUosT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDSyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUNDLElBQUk7S0FBRTtJQUUzRSxNQUFNQyxVQUFVLEdBQUdYLEtBQUssR0FBR1ksUUFBUSxDQUFDWixLQUFLLEVBQUUsRUFBRSxDQUFDLEdBQUcsSUFBSTtJQUVyRCxJQUFJYSxlQUFlLEdBQUdGLFVBQVUsSUFBSSxDQUFDLENBQUMsUUFBUSxJQUFJTCxJQUFJLENBQUMsR0FBR0EsSUFBSSxDQUFDQyxNQUFNLEdBQUcsSUFBSTtJQUU1RSxJQUFJTSxlQUFlLEVBQUU7UUFDbkIsTUFBTUMsY0FBYyxHQUFHRCxlQUFlLENBQUNFLE1BQU0sQ0FDM0MsQ0FBQyxFQUFFQyxZQUFZLEdBQUUsR0FBS0EsWUFBWSxDQUNuQztRQUVESCxlQUFlLEdBQUdDLGNBQWMsQ0FDN0JHLEdBQUcsQ0FBQyxDQUFDLEVBQUVDLEdBQUcsR0FBRSxHQUFHQyxJQUFJLEVBQUUsR0FBSyxDQUFDO2dCQUMxQixHQUFHQSxJQUFJO2dCQUNQRCxHQUFHLEVBQUVBLEdBQUcsQ0FBQ0UsT0FBTyxlQUFlLEVBQUUsQ0FBQzthQUNuQyxDQUFDLENBQUMsQ0FDRkMsSUFBSSxDQUFDLENBQUNDLENBQUMsRUFBRUMsQ0FBQyxHQUFLQSxDQUFDLENBQUNQLFlBQVksR0FBR00sQ0FBQyxDQUFDTixZQUFZLENBQUMsQ0FBQztRQUVuRCxJQUFJTCxVQUFVLEVBQUVFLGVBQWUsR0FBR0EsZUFBZSxDQUFDVyxLQUFLLENBQUMsQ0FBQyxFQUFFYixVQUFVLENBQUMsQ0FBQztLQUN4RTtJQUVELE1BQU1jLGFBQWEsR0FBR1osZUFBZSxHQUNqQztRQUFFLEdBQUdQLElBQUk7UUFBRUMsTUFBTSxFQUFFTSxlQUFlO0tBQUUsR0FDcEMsSUFBSTtJQUVSZixHQUFHLENBQUM0QixNQUFNLENBQUN4QixRQUFRLENBQUN3QixNQUFNLENBQUMsQ0FBQ3JCLElBQUksQ0FBQ29CLGFBQWEsSUFBSW5CLElBQUksQ0FBQyxDQUFDO0NBQ3pEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdHdpdHRlci1jbG9uZS8uL3NyYy9wYWdlcy9hcGkvdHJlbmRzL3BsYWNlL1tpZF0udHM/MDk0MSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBVVRIIH0gZnJvbSAnQGxpYi9hcGkvYXV0aCc7XG5pbXBvcnQgdHlwZSB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tICduZXh0JztcbmltcG9ydCB0eXBlIHtcbiAgVHJlbmRzRGF0YSxcbiAgRXJyb3JSZXNwb25zZSxcbiAgVHJlbmRzUmVzcG9uc2UsXG4gIEZpbHRlcmVkVHJlbmRzXG59IGZyb20gJ0BsaWIvdHlwZXMvcGxhY2UnO1xuXG50eXBlIFBsYWNlSWRFbmRwb2ludFF1ZXJ5ID0ge1xuICBpZDogc3RyaW5nO1xuICBsaW1pdD86IHN0cmluZztcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIHBsYWNlSWRFbmRwb2ludChcbiAgcmVxOiBOZXh0QXBpUmVxdWVzdCxcbiAgcmVzOiBOZXh0QXBpUmVzcG9uc2U8VHJlbmRzUmVzcG9uc2UgfCBFcnJvclJlc3BvbnNlPlxuKTogUHJvbWlzZTx2b2lkPiB7XG4gIGNvbnN0IHsgaWQsIGxpbWl0IH0gPSByZXEucXVlcnkgYXMgUGxhY2VJZEVuZHBvaW50UXVlcnk7XG5cbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICBgaHR0cHM6Ly9hcGkudHdpdHRlci5jb20vMS4xL3RyZW5kcy9wbGFjZS5qc29uP2lkPSR7aWR9YCxcbiAgICBBVVRIXG4gICk7XG5cbiAgY29uc3QgcmF3RGF0YSA9IChhd2FpdCByZXNwb25zZS5qc29uKCkpIGFzIFRyZW5kc0RhdGEgfCBFcnJvclJlc3BvbnNlO1xuXG4gIGNvbnN0IGRhdGEgPVxuICAgICdlcnJvcnMnIGluIHJhd0RhdGFcbiAgICAgID8gcmF3RGF0YVxuICAgICAgOiB7IHRyZW5kczogcmF3RGF0YVswXS50cmVuZHMsIGxvY2F0aW9uOiByYXdEYXRhWzBdLmxvY2F0aW9uc1swXS5uYW1lIH07XG5cbiAgY29uc3QgbGltaXRQYXJhbSA9IGxpbWl0ID8gcGFyc2VJbnQobGltaXQsIDEwKSA6IG51bGw7XG5cbiAgbGV0IGZvcm1hdHRlZFRyZW5kcyA9IGxpbWl0UGFyYW0gJiYgISgnZXJyb3JzJyBpbiBkYXRhKSA/IGRhdGEudHJlbmRzIDogbnVsbDtcblxuICBpZiAoZm9ybWF0dGVkVHJlbmRzKSB7XG4gICAgY29uc3QgZmlsdGVyZWRUcmVuZHMgPSBmb3JtYXR0ZWRUcmVuZHMuZmlsdGVyKFxuICAgICAgKHsgdHdlZXRfdm9sdW1lIH0pID0+IHR3ZWV0X3ZvbHVtZVxuICAgICkgYXMgRmlsdGVyZWRUcmVuZHM7XG5cbiAgICBmb3JtYXR0ZWRUcmVuZHMgPSBmaWx0ZXJlZFRyZW5kc1xuICAgICAgLm1hcCgoeyB1cmwsIC4uLnJlc3QgfSkgPT4gKHtcbiAgICAgICAgLi4ucmVzdCxcbiAgICAgICAgdXJsOiB1cmwucmVwbGFjZSgvaHR0cC4qLmNvbS8sICcnKVxuICAgICAgfSkpXG4gICAgICAuc29ydCgoYSwgYikgPT4gYi50d2VldF92b2x1bWUgLSBhLnR3ZWV0X3ZvbHVtZSk7XG5cbiAgICBpZiAobGltaXRQYXJhbSkgZm9ybWF0dGVkVHJlbmRzID0gZm9ybWF0dGVkVHJlbmRzLnNsaWNlKDAsIGxpbWl0UGFyYW0pO1xuICB9XG5cbiAgY29uc3QgZm9ybWF0dGVkRGF0YSA9IGZvcm1hdHRlZFRyZW5kc1xuICAgID8geyAuLi5kYXRhLCB0cmVuZHM6IGZvcm1hdHRlZFRyZW5kcyB9XG4gICAgOiBudWxsO1xuXG4gIHJlcy5zdGF0dXMocmVzcG9uc2Uuc3RhdHVzKS5qc29uKGZvcm1hdHRlZERhdGEgPz8gZGF0YSk7XG59XG4iXSwibmFtZXMiOlsiQVVUSCIsInBsYWNlSWRFbmRwb2ludCIsInJlcSIsInJlcyIsImlkIiwibGltaXQiLCJxdWVyeSIsInJlc3BvbnNlIiwiZmV0Y2giLCJyYXdEYXRhIiwianNvbiIsImRhdGEiLCJ0cmVuZHMiLCJsb2NhdGlvbiIsImxvY2F0aW9ucyIsIm5hbWUiLCJsaW1pdFBhcmFtIiwicGFyc2VJbnQiLCJmb3JtYXR0ZWRUcmVuZHMiLCJmaWx0ZXJlZFRyZW5kcyIsImZpbHRlciIsInR3ZWV0X3ZvbHVtZSIsIm1hcCIsInVybCIsInJlc3QiLCJyZXBsYWNlIiwic29ydCIsImEiLCJiIiwic2xpY2UiLCJmb3JtYXR0ZWREYXRhIiwic3RhdHVzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/trends/place/[id].ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/trends/place/[id].ts"));
module.exports = __webpack_exports__;

})();