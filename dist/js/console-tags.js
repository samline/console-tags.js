/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/console-tags.js":
/*!*****************************!*\
  !*** ./src/console-tags.js ***!
  \*****************************/
/*! exports provided: default, success, error, warning */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"success\", function() { return success; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"error\", function() { return error; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"warning\", function() { return warning; });\n/**\n * // Custom\n * import msg from 'path/to/console'\n *\n * // Types\n * import * as msg from 'path/to/console'\n *\n * // Custom and types\n * import msg, * as msgType from 'path/to/console'\n *\n * // Variables *\n * text-1 | required\n * text-2 | optional\n * color  | optional | hex or rgb\n *\n * // Usage\n *\n * // Custom\n * msg('text-1', 'text-2', color)\n *\n * // Types\n * msg.success('text-1', 'text-2')\n * msg.warning('text-1', 'text-2')\n * msg.error('text-1', 'text-2')\n *\n * // Custom and types\n * msg('text-1', 'text-2', color)\n * msgType.success('text-1', 'text-2')\n * msgType.warning('text-1', 'text-2')\n * msgType.error('text-1', 'text-2')\n */\nvar msg = function msg() {\n  var msg1 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';\n  var msg2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';\n  var bg = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '#607d8b';\n  var color = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '#fff';\n  var msg = '%c' + msg1 + '%c' + msg2;\n  var sty1 = 'background: ' + bg + '; color: ' + color + '; font-weight: bold; padding: 5px;';\n  var sty2 = 'background: #fafafa; color: #888; font-weight: bold; padding: 5px;';\n  console.log(msg, sty1, sty2);\n};\n\nvar _error = function _error() {\n  var msg1 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';\n  var msg2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';\n  var msg = '%c' + msg1 + '%c' + msg2;\n  var sty1 = 'background: #ef5350; color: #fff; font-weight: bold; padding: 5px;';\n  var sty2 = 'background: #fafafa; color: #888; font-weight: bold; padding: 5px;';\n  console.log(msg, sty1, sty2);\n};\n\nvar _success = function _success() {\n  var msg1 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';\n  var msg2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';\n  var msg = '%c' + msg1 + '%c' + msg2;\n  var sty1 = 'background: #4caf50; color: #fff; font-weight: bold; padding: 5px;';\n  var sty2 = 'background: #fafafa; color: #888; font-weight: bold; padding: 5px;';\n  console.log(msg, sty1, sty2);\n};\n\nvar _sarning = function _sarning() {\n  var msg1 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';\n  var msg2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';\n  var msg = '%c' + msg1 + '%c' + msg2;\n  var sty1 = 'background: #ffc400; color: #fff; font-weight: bold; padding: 5px;';\n  var sty2 = 'background: #fafafa; color: #888; font-weight: bold; padding: 5px;';\n  console.log(msg, sty1, sty2);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (msg);\nvar success = _success;\nvar error = _error;\nvar warning = _sarning;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29uc29sZS10YWdzLmpzP2VlMjgiXSwibmFtZXMiOlsibXNnIiwibXNnMSIsIm1zZzIiLCJiZyIsImNvbG9yIiwic3R5MSIsInN0eTIiLCJjb25zb2xlIiwibG9nIiwiX2Vycm9yIiwiX3N1Y2Nlc3MiLCJfc2FybmluZyIsInN1Y2Nlc3MiLCJlcnJvciIsIndhcm5pbmciXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFnQ0EsSUFBTUEsR0FBRyxHQUFHLGVBS1A7QUFBQSxNQUpIQyxJQUlHLHVFQUpLLEVBSUw7QUFBQSxNQUhIQyxJQUdHLHVFQUhLLEVBR0w7QUFBQSxNQUZIQyxFQUVHLHVFQUZLLFNBRUw7QUFBQSxNQURIQyxLQUNHLHVFQURLLE1BQ0w7QUFDSCxNQUFNSixHQUFHLEdBQUksT0FBT0MsSUFBUCxHQUFjLElBQWQsR0FBcUJDLElBQWxDO0FBQ0EsTUFBTUcsSUFBSSxHQUFHLGlCQUFpQkYsRUFBakIsR0FBc0IsV0FBdEIsR0FBb0NDLEtBQXBDLEdBQTRDLG9DQUF6RDtBQUNBLE1BQU1FLElBQUksR0FBRyxvRUFBYjtBQUVBQyxTQUFPLENBQUNDLEdBQVIsQ0FDRVIsR0FERixFQUVFSyxJQUZGLEVBR0VDLElBSEY7QUFLRCxDQWZEOztBQWlCQSxJQUFNRyxNQUFNLEdBQUcsU0FBVEEsTUFBUyxHQUdWO0FBQUEsTUFGSFIsSUFFRyx1RUFGSSxFQUVKO0FBQUEsTUFESEMsSUFDRyx1RUFESSxFQUNKO0FBQ0gsTUFBTUYsR0FBRyxHQUFJLE9BQU9DLElBQVAsR0FBYyxJQUFkLEdBQXFCQyxJQUFsQztBQUNBLE1BQU1HLElBQUksR0FBRyxvRUFBYjtBQUNBLE1BQU1DLElBQUksR0FBRyxvRUFBYjtBQUVBQyxTQUFPLENBQUNDLEdBQVIsQ0FDRVIsR0FERixFQUVFSyxJQUZGLEVBR0VDLElBSEY7QUFLRCxDQWJEOztBQWVBLElBQU1JLFFBQVEsR0FBRyxTQUFYQSxRQUFXLEdBR1o7QUFBQSxNQUZIVCxJQUVHLHVFQUZJLEVBRUo7QUFBQSxNQURIQyxJQUNHLHVFQURJLEVBQ0o7QUFDSCxNQUFNRixHQUFHLEdBQUksT0FBT0MsSUFBUCxHQUFjLElBQWQsR0FBcUJDLElBQWxDO0FBQ0EsTUFBTUcsSUFBSSxHQUFHLG9FQUFiO0FBQ0EsTUFBTUMsSUFBSSxHQUFHLG9FQUFiO0FBRUFDLFNBQU8sQ0FBQ0MsR0FBUixDQUNFUixHQURGLEVBRUVLLElBRkYsRUFHRUMsSUFIRjtBQUtELENBYkQ7O0FBZUEsSUFBTUssUUFBUSxHQUFHLFNBQVhBLFFBQVcsR0FHWjtBQUFBLE1BRkhWLElBRUcsdUVBRkksRUFFSjtBQUFBLE1BREhDLElBQ0csdUVBREksRUFDSjtBQUNILE1BQU1GLEdBQUcsR0FBSSxPQUFPQyxJQUFQLEdBQWMsSUFBZCxHQUFxQkMsSUFBbEM7QUFDQSxNQUFNRyxJQUFJLEdBQUcsb0VBQWI7QUFDQSxNQUFNQyxJQUFJLEdBQUcsb0VBQWI7QUFFQUMsU0FBTyxDQUFDQyxHQUFSLENBQ0VSLEdBREYsRUFFRUssSUFGRixFQUdFQyxJQUhGO0FBS0QsQ0FiRDs7QUFlZU4sa0VBQWY7QUFDTyxJQUFRWSxPQUFPLEdBQUlGLFFBQW5CO0FBQ0EsSUFBUUcsS0FBSyxHQUFNSixNQUFuQjtBQUNBLElBQVFLLE9BQU8sR0FBSUgsUUFBbkIiLCJmaWxlIjoiLi9zcmMvY29uc29sZS10YWdzLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiAvLyBDdXN0b21cbiAqIGltcG9ydCBtc2cgZnJvbSAncGF0aC90by9jb25zb2xlJ1xuICpcbiAqIC8vIFR5cGVzXG4gKiBpbXBvcnQgKiBhcyBtc2cgZnJvbSAncGF0aC90by9jb25zb2xlJ1xuICpcbiAqIC8vIEN1c3RvbSBhbmQgdHlwZXNcbiAqIGltcG9ydCBtc2csICogYXMgbXNnVHlwZSBmcm9tICdwYXRoL3RvL2NvbnNvbGUnXG4gKlxuICogLy8gVmFyaWFibGVzICpcbiAqIHRleHQtMSB8IHJlcXVpcmVkXG4gKiB0ZXh0LTIgfCBvcHRpb25hbFxuICogY29sb3IgIHwgb3B0aW9uYWwgfCBoZXggb3IgcmdiXG4gKlxuICogLy8gVXNhZ2VcbiAqXG4gKiAvLyBDdXN0b21cbiAqIG1zZygndGV4dC0xJywgJ3RleHQtMicsIGNvbG9yKVxuICpcbiAqIC8vIFR5cGVzXG4gKiBtc2cuc3VjY2VzcygndGV4dC0xJywgJ3RleHQtMicpXG4gKiBtc2cud2FybmluZygndGV4dC0xJywgJ3RleHQtMicpXG4gKiBtc2cuZXJyb3IoJ3RleHQtMScsICd0ZXh0LTInKVxuICpcbiAqIC8vIEN1c3RvbSBhbmQgdHlwZXNcbiAqIG1zZygndGV4dC0xJywgJ3RleHQtMicsIGNvbG9yKVxuICogbXNnVHlwZS5zdWNjZXNzKCd0ZXh0LTEnLCAndGV4dC0yJylcbiAqIG1zZ1R5cGUud2FybmluZygndGV4dC0xJywgJ3RleHQtMicpXG4gKiBtc2dUeXBlLmVycm9yKCd0ZXh0LTEnLCAndGV4dC0yJylcbiAqL1xuXG5jb25zdCBtc2cgPSAoXG4gIG1zZzEgID0gJycsXG4gIG1zZzIgID0gJycsXG4gIGJnICAgID0gJyM2MDdkOGInLFxuICBjb2xvciA9ICcjZmZmJyxcbikgPT4ge1xuICBjb25zdCBtc2cgID0gJyVjJyArIG1zZzEgKyAnJWMnICsgbXNnMlxuICBjb25zdCBzdHkxID0gJ2JhY2tncm91bmQ6ICcgKyBiZyArICc7IGNvbG9yOiAnICsgY29sb3IgKyAnOyBmb250LXdlaWdodDogYm9sZDsgcGFkZGluZzogNXB4OydcbiAgY29uc3Qgc3R5MiA9ICdiYWNrZ3JvdW5kOiAjZmFmYWZhOyBjb2xvcjogIzg4ODsgZm9udC13ZWlnaHQ6IGJvbGQ7IHBhZGRpbmc6IDVweDsnXG5cbiAgY29uc29sZS5sb2coXG4gICAgbXNnLFxuICAgIHN0eTEsXG4gICAgc3R5MlxuICApO1xufVxuXG5jb25zdCBfZXJyb3IgPSAoXG4gIG1zZzEgPSAnJyxcbiAgbXNnMiA9ICcnLFxuKSA9PiB7XG4gIGNvbnN0IG1zZyAgPSAnJWMnICsgbXNnMSArICclYycgKyBtc2cyXG4gIGNvbnN0IHN0eTEgPSAnYmFja2dyb3VuZDogI2VmNTM1MDsgY29sb3I6ICNmZmY7IGZvbnQtd2VpZ2h0OiBib2xkOyBwYWRkaW5nOiA1cHg7J1xuICBjb25zdCBzdHkyID0gJ2JhY2tncm91bmQ6ICNmYWZhZmE7IGNvbG9yOiAjODg4OyBmb250LXdlaWdodDogYm9sZDsgcGFkZGluZzogNXB4OydcblxuICBjb25zb2xlLmxvZyhcbiAgICBtc2csXG4gICAgc3R5MSxcbiAgICBzdHkyXG4gICk7XG59XG5cbmNvbnN0IF9zdWNjZXNzID0gKFxuICBtc2cxID0gJycsXG4gIG1zZzIgPSAnJyxcbikgPT4ge1xuICBjb25zdCBtc2cgID0gJyVjJyArIG1zZzEgKyAnJWMnICsgbXNnMlxuICBjb25zdCBzdHkxID0gJ2JhY2tncm91bmQ6ICM0Y2FmNTA7IGNvbG9yOiAjZmZmOyBmb250LXdlaWdodDogYm9sZDsgcGFkZGluZzogNXB4OydcbiAgY29uc3Qgc3R5MiA9ICdiYWNrZ3JvdW5kOiAjZmFmYWZhOyBjb2xvcjogIzg4ODsgZm9udC13ZWlnaHQ6IGJvbGQ7IHBhZGRpbmc6IDVweDsnXG5cbiAgY29uc29sZS5sb2coXG4gICAgbXNnLFxuICAgIHN0eTEsXG4gICAgc3R5MlxuICApO1xufVxuXG5jb25zdCBfc2FybmluZyA9IChcbiAgbXNnMSA9ICcnLFxuICBtc2cyID0gJycsXG4pID0+IHtcbiAgY29uc3QgbXNnICA9ICclYycgKyBtc2cxICsgJyVjJyArIG1zZzJcbiAgY29uc3Qgc3R5MSA9ICdiYWNrZ3JvdW5kOiAjZmZjNDAwOyBjb2xvcjogI2ZmZjsgZm9udC13ZWlnaHQ6IGJvbGQ7IHBhZGRpbmc6IDVweDsnXG4gIGNvbnN0IHN0eTIgPSAnYmFja2dyb3VuZDogI2ZhZmFmYTsgY29sb3I6ICM4ODg7IGZvbnQtd2VpZ2h0OiBib2xkOyBwYWRkaW5nOiA1cHg7J1xuXG4gIGNvbnNvbGUubG9nKFxuICAgIG1zZyxcbiAgICBzdHkxLFxuICAgIHN0eTJcbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbXNnXG5leHBvcnQgY29uc3QgICBzdWNjZXNzICA9IF9zdWNjZXNzXG5leHBvcnQgY29uc3QgICBlcnJvciAgICA9IF9lcnJvclxuZXhwb3J0IGNvbnN0ICAgd2FybmluZyAgPSBfc2FybmluZ1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/console-tags.js\n");

/***/ }),

/***/ 0:
/*!***********************************!*\
  !*** multi ./src/console-tags.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/samuel.olvera/Documents/sites/htdocs/samline/console-tags/src/console-tags.js */"./src/console-tags.js");


/***/ })

/******/ });