(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("react-addons-css-transition-group"), require("react-dom"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "react-addons-css-transition-group", "react-dom"], factory);
	else if(typeof exports === 'object')
		exports["react-alert"] = factory(require("react"), require("react-addons-css-transition-group"), require("react-dom"));
	else
		root["react-alert"] = factory(root["react"], root["react-addons-css-transition-group"], root["react-dom"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_11__, __WEBPACK_EXTERNAL_MODULE_18__, __WEBPACK_EXTERNAL_MODULE_20__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	//load styles
	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	__webpack_require__(2);

	//load js

	var _react = __webpack_require__(11);

	var _react2 = _interopRequireDefault(_react);

	var _devComponentsAlertContainer = __webpack_require__(12);

	var _devComponentsAlertContainer2 = _interopRequireDefault(_devComponentsAlertContainer);

	exports['default'] = _devComponentsAlertContainer2['default'];
	module.exports = exports['default'];

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(3);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(10)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/stylus-loader/index.js!./index.styl", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/stylus-loader/index.js!./index.styl");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	exports.push([module.id, ".react-alerts {\n  position: absolute;\n  right: 0;\n  bottom: 0;\n  margin: 20px;\n  z-index: 999999;\n}\n.react-alerts .alert {\n  width: 300px;\n  min-height: 50px;\n  margin: 10px 0 0 0;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  border-radius: 2px;\n  background-color: #333;\n  font-size: 11px;\n  box-shadow: 0 8px 12px 0 rgba(0,0,0,0.3);\n  color: #fff;\n}\n.react-alerts .alert .content {\n  flex: 1;\n  text-align: center;\n}\n.react-alerts .alert .icon {\n  width: 32px;\n  height: 32px;\n}\n.react-alerts .alert .icon div {\n  width: 100%;\n  height: 100%;\n  background-position-x: 50%;\n  background-repeat: no-repeat;\n}\n.react-alerts .alert .icon .info-icon {\n  background-image: url("+__webpack_require__(5)+");\n}\n.react-alerts .alert .icon .error-icon {\n  background-image: url("+__webpack_require__(6)+");\n}\n.react-alerts .alert .icon .success-icon {\n  background-image: url("+__webpack_require__(7)+");\n}\n.react-alerts .alert .message {\n  flex: 3;\n  text-transform: uppercase;\n  padding: 8px 2px;\n}\n.react-alerts .alert .close {\n  height: 50px;\n  background-color: #444;\n  border-radius: 0 2px 2px 0;\n  line-height: 50px;\n  cursor: pointer;\n}\n.react-alerts .alert .close .close-light {\n  background-image: url("+__webpack_require__(8)+");\n  width: 100%;\n  height: 100%;\n  background-position: 50%;\n  background-repeat: no-repeat;\n}\n.react-alerts .alert .close .close-dark {\n  background-image: url("+__webpack_require__(9)+");\n  width: 100%;\n  height: 100%;\n  background-position: 50%;\n  background-repeat: no-repeat;\n}\n.react-alerts .alert .close:hover {\n  opacity: 0.5;\n}\n.react-alerts .alert.hidden {\n  display: none;\n}\n.react-alerts .scale-enter {\n  transform: scale(0);\n}\n.react-alerts .scale-enter.scale-enter-active {\n  transform: scale(1);\n  transition: all 200ms cubic-bezier(0, 0, 0.5, 1.5);\n}\n.react-alerts .scale-leave {\n  transform: scale(1);\n}\n.react-alerts .scale-leave.scale-leave-active {\n  transform: scale(0);\n  transition: all 200ms ease-in-out;\n}\n.react-alerts .fade-enter {\n  opacity: 0.1;\n}\n.react-alerts .fade-enter.fade-enter-active {\n  opacity: 1;\n  transition: all 200ms ease-out;\n}\n.react-alerts .fade-leave {\n  opacity: 1;\n}\n.react-alerts .fade-leave.fade-leave-active {\n  opacity: 0.1;\n  transition: all 200ms ease-in;\n}\n", ""]);

/***/ },
/* 4 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEwAACxMBAJqcGAAAAvFJREFUWIXVl89LVFEUx7/nXBV/zdiEqIt0GhJaBabkJqKohSgFbZI2ou2yElOKiKRw40axhZILFxqCge5zZX+AWKCBuBic0ZVZ6ZSjo868e1qM83J+lO9N00Tf1Z1z3z3fz3uHOec94B+L0jnkGd0up4hUA1wCAKSNgBB7V+45Nv4agGckUC9atRFJE0DuX1zmE2CGmcdW7hbNZwSgaihYq5QMArhsFRYAROt3UKrb3168kB7AlCjPl+BzQPcAzHbMTWltCFOvv9TRh2YyLAO4xySfQ8E3AG6mZZysaRUuavF28n7iRvKdTYnKsDkA3DJydybwQpL8kgLRx55RcxPCU7b9NDEYV4Izr3bqNCJzadf8OGltQPi8r8PxMRaKM9ISGbBq7i5hTNwowOvrBah0WuRlVmDpjwvFFp6RQD2Ir1jLBDy8kIeLpxQuVSp01OVaPQYQNbiHgzVJAKJVm/UswNeQmOvNPfnNlcli0q2xdc5PMGmy05kH5w6wGRIIgLHFA1sAEGoE0AUcOnpGt8sRxrq9LH8mvR9xrXa5AjkAQBGpFptzqcrJqK2IVvDDusbad23rvCrIqwYwf1gCLgHs1bG2gjF4LR8A0D27ZxtARLuAVJ0wy2IgOs+zbUzEWyaAEHuzDWCEDrwmwOGbjC9r7oLl1S5XwASIxjCTNX8S08sEYOaxbAGQ0Li5PrpxevjbLDFftZKkMJdwMj96fHNPsBu2+DfWMuN74GyK/cyJ21SqG4bxHszquDy7YRumMW/oiCh6dDQW1wf87cULwtRrK6sNkdCztXbn0i8BAMBf6ugDMJ1pc9Ey6d9wDCTGkzthMxkqXNSSSQjRMllY5riDXkrq1ylbsbeT932fim9DpAdap3ydtiINHRGRJ/7PjpalZko5s48dgZ6h7XNg6QdRgx1zEXmrGY8Ta24bICb3cLCGSbdCqBGMs6ldsSwkMyQ07rvvWLSSN62PU/fLrROqIK86NlKJeMsIHXhj7fW/0g+OIxKtu3W5VAAAAABJRU5ErkJggg=="

/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEwAACxMBAJqcGAAAAeNJREFUWIXl1bFPE1EcwPHv7x0ELNqIf0GDiSMDtmBYRAqDk5Obk4uDTvwfLDC4ORCHGhONMcaBUkxwgIawmLj5N5AGO9C7e8+JUu7a3u89owtvujS93/eTd+9auO5LQm/s1qs1h2yARFZkq9w8+v7fAGdrtbpz7rPB3ACwEEfwdGav/emfA7LxixWK8AKMiv8NQg0oiociVABtPARRCPCN+yLGAsbFJ1bWmXz2HID47RuSb7tBCBMSB2B6ClOZw1TmYHpq1PDJFN5364tPvACqbe/1hl97InIA7TN35+eX12MARYgrAK8DNxgdwPgi+oCz1aV5r9M+GO0VAwYRnUfV5RxAcC98XjUX6x9BFhEZeZUDIC5WT4HMDugBANZK/4Y+ILHpNthT9RTlW5BdztIVYzZzgNv7J79wE2tahOucEjd2iBs7uI7O7SxdJzy+tXf44+Kz3C/h79UHC0jSBDNbONEYEIE0VcfLrfbBlRHZL95sHZ5odsJU7lJ694XSxybR/cWg+FCAFhFVl5DZO0ipRLT8MCg+EqBBJLtfSQ72SY+PSD40guKg+Dv2OhOecRUgBKGNqwE+CJ+4F0CD8I17A8YhQuJBgGGI0HgwAKBTr92LnLxEnLFOXpdb7Z+hs673+gMiYUmYq8aQJgAAAABJRU5ErkJggg=="

/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEwAACxMBAJqcGAAAA0RJREFUWIXVlz9sE3cUxz/v2SAGqgBqG0EiFRHqJiVtQmP1j0SJuoBk7DiOlYWJJWIlDEUdunVBLUydrE5MgKrEtgKNskR0oJQoAhopFJpUrYRAgirCCLE4/j0Gx1fHPsA9O636Juv9vr7P587Pv7uD/7ik4aQh8YnUfsQOmREV6HLQBqBQMFg2tbmw2Ew+mb+JYC0RGL04uvnZpuIxwZ0A7WnI1bGoamfvP2w/N388UwwsEMsOHZSSZkR5pxGwn4ipjV1O5a6+KKP+30Rik8lTGLNB4QCivAv2Y3xi+CTmf7L1TUNi2eQ3ipwMCvYt4/RUKvtF7WyEanOx/uQpRb5sKRxAOBC5EyncPX/n2vp2NTw7dBBjVlH/n6bJcriSmn46NZL9qdLzQKMXRzdLSTMbBS/DNIS4zODsYLhO4Nmm4rFmBq62RIQP9+xCpXbMtHdroe3oegFDDBtvJXxkoJvY+xHS0R6kRkIMb8AVID6R2q9Id6vg6YEe3utsB6B75xt0bH+tJqV9iVxinyeA2KFWwns73wSg5Izv5xa5t/KkLmul0GFPwIzoRsFvP3jkmzdxUU9AoOvfhAMYstcTqNzVfA+OkOiPMLB7Z8vgZbC1AYRfFhKEeP/bDOzexQdrO+j8Hw+ahldXuGxDwW/RMIolVyUT8SREhHS0h96OwPDHnoDBskC/X2p6YQmAj7s6PQkV4a3XtzUDx2D5bwG1OUHSLwpPLywhCB91dSAIR/oi3loQeLnkOqwNYVhs5lXxHxZ+4+ff763rBYdDaI2pAPlk/qY5Fl8p8cuSJ9EM3Iwb+eH8IlT+BYLppJ015LtGJMyMP/96EgheNpAzlY/e3fD+w/ZzjVwFgOmF5eBw3K2nO1Yu1AnMH88UTW3M4UoBj9wAm1VcaOzKZ1dW6wQALqdyV9X0843imzA+lZ6cq+7VPRPePf/rtcjt7i0IB1oKx766NJI7Xdv3fy8wJJ4bOuGMrxWtk/xH5Vg1YfzSSPZbv+WXvpjEJ4Y/QVwGtDcg/RYuNFZ72RsWABicHQxvLbQdLT9GaV8jWDNuYHLm6Y6VC9UDF0iguhK5xD4rhQ6buKgheyu3VOBxeW+X6yGxmcom87+o52ULbz5mpP7HAAAAAElFTkSuQmCC"

/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QAAAAAAAD5Q7t/AAAACXBIWXMAAABIAAAASABGyWs+AAAACXZwQWcAAAAYAAAAGAB4TKWmAAAAaElEQVRIx2NgGAUjFugwMDDsY2BgECVCrShUrQ4pFuxjYGD4z8DAcJmAJaJQNf+heogGyBpxWUKMGrItodhwfAZRzXBcllDVcGyWkGQ4E7VcMGiDiKaRTNNkSvOMRvOiguaF3SgYRgAA1bo+/as5g9sAAAAASUVORK5CYII="

/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QAAAAAAAD5Q7t/AAAACXBIWXMAAABIAAAASABGyWs+AAAACXZwQWcAAAAYAAAAGAB4TKWmAAAAaElEQVRIx2NgGAUjE/z//1/n////+/7//y9KhFpRqFodUizY9x8CLuOzBGr4ZajafaRYgKwRqyXEqCHbEooNx2cQ1QzHYwn1DMdhCUmGM1HFBYM2iGgayTRNpjTPaPQoKmhb2I2C4QUA0wmHwjkeewQAAAAASUVORK5CYII="

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0;

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function createStyleElement() {
		var styleElement = document.createElement("style");
		var head = getHeadElement();
		styleElement.type = "text/css";
		head.appendChild(styleElement);
		return styleElement;
	}

	function createLinkElement() {
		var linkElement = document.createElement("link");
		var head = getHeadElement();
		linkElement.rel = "stylesheet";
		head.appendChild(linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement());
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement();
			update = updateLink.bind(null, styleElement);
			remove = function() {
				styleElement.parentNode.removeChild(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement();
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				styleElement.parentNode.removeChild(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 11 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_11__;

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x5, _x6, _x7) { var _again = true; _function: while (_again) { var object = _x5, property = _x6, receiver = _x7; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x5 = parent; _x6 = property; _x7 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(11);

	var _react2 = _interopRequireDefault(_react);

	var _configConfig = __webpack_require__(13);

	var _configConfig2 = _interopRequireDefault(_configConfig);

	var _configEvents = __webpack_require__(17);

	var _reactAddonsCssTransitionGroup = __webpack_require__(18);

	var _reactAddonsCssTransitionGroup2 = _interopRequireDefault(_reactAddonsCssTransitionGroup);

	var _AlertMessage = __webpack_require__(19);

	var _AlertMessage2 = _interopRequireDefault(_AlertMessage);

	var AlertContainer = (function (_React$Component) {
	  _inherits(AlertContainer, _React$Component);

	  function AlertContainer(props) {
	    _classCallCheck(this, AlertContainer);

	    new _configConfig2['default']();
	    _get(Object.getPrototypeOf(AlertContainer.prototype), 'constructor', this).call(this, props);
	    this.state = {
	      alerts: []
	    };
	    this.style = this._setStyle();
	    this.theme = this._setTheme();
	    this._eventListners();
	  }

	  _createClass(AlertContainer, [{
	    key: 'success',
	    value: function success(message) {
	      var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

	      options.type = 'success';
	      this.show(message, options);
	    }
	  }, {
	    key: 'error',
	    value: function error(message) {
	      var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

	      options.type = 'error';
	      this.show(message, options);
	    }
	  }, {
	    key: 'info',
	    value: function info(message) {
	      var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

	      options.type = 'info';
	      this.show(message, options);
	    }
	  }, {
	    key: 'removeAll',
	    value: function removeAll() {
	      this.setState({ alerts: [] });
	    }
	  }, {
	    key: 'show',
	    value: function show(message) {
	      var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

	      var alert = {};
	      alert.message = message;
	      alert = Object.assign(alert, options);
	      this.setState({ alerts: this._addAlert(alert) });
	    }
	  }, {
	    key: '_addAlert',
	    value: function _addAlert(alert) {
	      alert.uniqueKey = this._genUniqueKey();
	      alert.style = this.theme;
	      if (!alert.hasOwnProperty('time')) {
	        alert.time = this.props.time;
	      };
	      alert.closeIconClass = 'close-' + this.props.theme;
	      this.state.alerts.push(alert);
	      return this.state.alerts;
	    }
	  }, {
	    key: '_genUniqueKey',
	    value: function _genUniqueKey() {
	      return new Date().getTime().toString() + Math.random().toString(36).substr(2, 5);
	    }
	  }, {
	    key: '_removeAlert',
	    value: function _removeAlert(alert) {
	      return this.state.alerts.filter(function (a) {
	        return a.uniqueKey != alert.props.uniqueKey;
	      });
	    }
	  }, {
	    key: '_eventListners',
	    value: function _eventListners() {
	      var _this = this;

	      events.on(_configEvents.ALERT.REMOVE, function (alert) {
	        _this.setState({ alerts: _this._removeAlert(alert) });
	      });
	    }
	  }, {
	    key: '_setStyle',
	    value: function _setStyle() {
	      var position = {};
	      switch (this.props.position) {
	        case 'top left':
	          position = {
	            top: 0,
	            right: 'auto',
	            bottom: 'auto',
	            left: 0
	          };
	          break;
	        case 'top right':
	          position = {
	            top: 0,
	            right: 0,
	            bottom: 'auto',
	            left: 'auto'
	          };
	          break;
	        case 'bottom left':
	          position = {
	            top: 'auto',
	            right: 'auto',
	            bottom: 0,
	            left: 0
	          };
	          break;
	        default:
	          position = {
	            top: 'auto',
	            right: 0,
	            bottom: 0,
	            left: 'auto'
	          };
	          break;
	      }

	      return {
	        margin: this.props.offset + 'px',
	        top: position.top,
	        right: position.right,
	        bottom: position.bottom,
	        left: position.left
	      };
	    }
	  }, {
	    key: '_setTheme',
	    value: function _setTheme() {
	      var theme = {};
	      switch (this.props.theme) {
	        case 'light':
	          theme = {
	            alert: {
	              backgroundColor: '#fff',
	              color: '#333'
	            },
	            closeButton: {
	              bg: '#f3f3f3'
	            }
	          };
	          break;
	        default:
	          theme = {
	            alert: {
	              backgroundColor: '#333',
	              color: '#fff'
	            },
	            closeButton: {
	              bg: '#444'
	            }
	          };
	          break;
	      }

	      return theme;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2['default'].createElement(
	        'div',
	        { style: this.style, className: 'react-alerts' },
	        _react2['default'].createElement(
	          _reactAddonsCssTransitionGroup2['default'],
	          {
	            transitionName: this.props.transition,
	            transitionEnterTimeout: 200,
	            transitionLeaveTimeout: 200 },
	          this.state.alerts.map(function (alert, index) {
	            return _react2['default'].createElement(_AlertMessage2['default'], _extends({ key: alert.uniqueKey }, alert));
	          })
	        )
	      );
	    }
	  }]);

	  return AlertContainer;
	})(_react2['default'].Component);

	AlertContainer.defaultProps = {
	  offset: 20,
	  position: 'bottom left',
	  theme: 'dark',
	  time: 5000,
	  transition: 'scale'
	};

	AlertContainer.propTypes = {
	  offset: _react2['default'].PropTypes.number,
	  position: _react2['default'].PropTypes.oneOf(['bottom left', 'bottom right', 'top right', 'top left']),
	  theme: _react2['default'].PropTypes.oneOf(['dark', 'light']),
	  time: _react2['default'].PropTypes.number,
	  transition: _react2['default'].PropTypes.oneOf(['scale', 'fade'])
	};

	exports['default'] = AlertContainer;
	module.exports = exports['default'];

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global, __dirname) {'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var _events = __webpack_require__(14);

	var _events2 = _interopRequireDefault(_events);

	var _path = __webpack_require__(15);

	var _path2 = _interopRequireDefault(_path);

	var Config = (function () {
	  function Config() {
	    _classCallCheck(this, Config);

	    this.globals();
	  }

	  _createClass(Config, [{
	    key: 'globals',
	    value: function globals() {
	      global.events = new _events2['default']();
	      global.paths = {
	        img: _path2['default'].join(__dirname, 'app/assets/img/')
	      };
	    }
	  }]);

	  return Config;
	})();

	exports['default'] = Config;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), "/"))

/***/ },
/* 14 */
/***/ function(module, exports) {

	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.

	function EventEmitter() {
	  this._events = this._events || {};
	  this._maxListeners = this._maxListeners || undefined;
	}
	module.exports = EventEmitter;

	// Backwards-compat with node 0.10.x
	EventEmitter.EventEmitter = EventEmitter;

	EventEmitter.prototype._events = undefined;
	EventEmitter.prototype._maxListeners = undefined;

	// By default EventEmitters will print a warning if more than 10 listeners are
	// added to it. This is a useful default which helps finding memory leaks.
	EventEmitter.defaultMaxListeners = 10;

	// Obviously not all Emitters should be limited to 10. This function allows
	// that to be increased. Set to zero for unlimited.
	EventEmitter.prototype.setMaxListeners = function(n) {
	  if (!isNumber(n) || n < 0 || isNaN(n))
	    throw TypeError('n must be a positive number');
	  this._maxListeners = n;
	  return this;
	};

	EventEmitter.prototype.emit = function(type) {
	  var er, handler, len, args, i, listeners;

	  if (!this._events)
	    this._events = {};

	  // If there is no 'error' event listener then throw.
	  if (type === 'error') {
	    if (!this._events.error ||
	        (isObject(this._events.error) && !this._events.error.length)) {
	      er = arguments[1];
	      if (er instanceof Error) {
	        throw er; // Unhandled 'error' event
	      }
	      throw TypeError('Uncaught, unspecified "error" event.');
	    }
	  }

	  handler = this._events[type];

	  if (isUndefined(handler))
	    return false;

	  if (isFunction(handler)) {
	    switch (arguments.length) {
	      // fast cases
	      case 1:
	        handler.call(this);
	        break;
	      case 2:
	        handler.call(this, arguments[1]);
	        break;
	      case 3:
	        handler.call(this, arguments[1], arguments[2]);
	        break;
	      // slower
	      default:
	        args = Array.prototype.slice.call(arguments, 1);
	        handler.apply(this, args);
	    }
	  } else if (isObject(handler)) {
	    args = Array.prototype.slice.call(arguments, 1);
	    listeners = handler.slice();
	    len = listeners.length;
	    for (i = 0; i < len; i++)
	      listeners[i].apply(this, args);
	  }

	  return true;
	};

	EventEmitter.prototype.addListener = function(type, listener) {
	  var m;

	  if (!isFunction(listener))
	    throw TypeError('listener must be a function');

	  if (!this._events)
	    this._events = {};

	  // To avoid recursion in the case that type === "newListener"! Before
	  // adding it to the listeners, first emit "newListener".
	  if (this._events.newListener)
	    this.emit('newListener', type,
	              isFunction(listener.listener) ?
	              listener.listener : listener);

	  if (!this._events[type])
	    // Optimize the case of one listener. Don't need the extra array object.
	    this._events[type] = listener;
	  else if (isObject(this._events[type]))
	    // If we've already got an array, just append.
	    this._events[type].push(listener);
	  else
	    // Adding the second element, need to change to array.
	    this._events[type] = [this._events[type], listener];

	  // Check for listener leak
	  if (isObject(this._events[type]) && !this._events[type].warned) {
	    if (!isUndefined(this._maxListeners)) {
	      m = this._maxListeners;
	    } else {
	      m = EventEmitter.defaultMaxListeners;
	    }

	    if (m && m > 0 && this._events[type].length > m) {
	      this._events[type].warned = true;
	      console.error('(node) warning: possible EventEmitter memory ' +
	                    'leak detected. %d listeners added. ' +
	                    'Use emitter.setMaxListeners() to increase limit.',
	                    this._events[type].length);
	      if (typeof console.trace === 'function') {
	        // not supported in IE 10
	        console.trace();
	      }
	    }
	  }

	  return this;
	};

	EventEmitter.prototype.on = EventEmitter.prototype.addListener;

	EventEmitter.prototype.once = function(type, listener) {
	  if (!isFunction(listener))
	    throw TypeError('listener must be a function');

	  var fired = false;

	  function g() {
	    this.removeListener(type, g);

	    if (!fired) {
	      fired = true;
	      listener.apply(this, arguments);
	    }
	  }

	  g.listener = listener;
	  this.on(type, g);

	  return this;
	};

	// emits a 'removeListener' event iff the listener was removed
	EventEmitter.prototype.removeListener = function(type, listener) {
	  var list, position, length, i;

	  if (!isFunction(listener))
	    throw TypeError('listener must be a function');

	  if (!this._events || !this._events[type])
	    return this;

	  list = this._events[type];
	  length = list.length;
	  position = -1;

	  if (list === listener ||
	      (isFunction(list.listener) && list.listener === listener)) {
	    delete this._events[type];
	    if (this._events.removeListener)
	      this.emit('removeListener', type, listener);

	  } else if (isObject(list)) {
	    for (i = length; i-- > 0;) {
	      if (list[i] === listener ||
	          (list[i].listener && list[i].listener === listener)) {
	        position = i;
	        break;
	      }
	    }

	    if (position < 0)
	      return this;

	    if (list.length === 1) {
	      list.length = 0;
	      delete this._events[type];
	    } else {
	      list.splice(position, 1);
	    }

	    if (this._events.removeListener)
	      this.emit('removeListener', type, listener);
	  }

	  return this;
	};

	EventEmitter.prototype.removeAllListeners = function(type) {
	  var key, listeners;

	  if (!this._events)
	    return this;

	  // not listening for removeListener, no need to emit
	  if (!this._events.removeListener) {
	    if (arguments.length === 0)
	      this._events = {};
	    else if (this._events[type])
	      delete this._events[type];
	    return this;
	  }

	  // emit removeListener for all listeners on all events
	  if (arguments.length === 0) {
	    for (key in this._events) {
	      if (key === 'removeListener') continue;
	      this.removeAllListeners(key);
	    }
	    this.removeAllListeners('removeListener');
	    this._events = {};
	    return this;
	  }

	  listeners = this._events[type];

	  if (isFunction(listeners)) {
	    this.removeListener(type, listeners);
	  } else if (listeners) {
	    // LIFO order
	    while (listeners.length)
	      this.removeListener(type, listeners[listeners.length - 1]);
	  }
	  delete this._events[type];

	  return this;
	};

	EventEmitter.prototype.listeners = function(type) {
	  var ret;
	  if (!this._events || !this._events[type])
	    ret = [];
	  else if (isFunction(this._events[type]))
	    ret = [this._events[type]];
	  else
	    ret = this._events[type].slice();
	  return ret;
	};

	EventEmitter.prototype.listenerCount = function(type) {
	  if (this._events) {
	    var evlistener = this._events[type];

	    if (isFunction(evlistener))
	      return 1;
	    else if (evlistener)
	      return evlistener.length;
	  }
	  return 0;
	};

	EventEmitter.listenerCount = function(emitter, type) {
	  return emitter.listenerCount(type);
	};

	function isFunction(arg) {
	  return typeof arg === 'function';
	}

	function isNumber(arg) {
	  return typeof arg === 'number';
	}

	function isObject(arg) {
	  return typeof arg === 'object' && arg !== null;
	}

	function isUndefined(arg) {
	  return arg === void 0;
	}


/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.

	// resolves . and .. elements in a path array with directory names there
	// must be no slashes, empty elements, or device names (c:\) in the array
	// (so also no leading and trailing slashes - it does not distinguish
	// relative and absolute paths)
	function normalizeArray(parts, allowAboveRoot) {
	  // if the path tries to go above the root, `up` ends up > 0
	  var up = 0;
	  for (var i = parts.length - 1; i >= 0; i--) {
	    var last = parts[i];
	    if (last === '.') {
	      parts.splice(i, 1);
	    } else if (last === '..') {
	      parts.splice(i, 1);
	      up++;
	    } else if (up) {
	      parts.splice(i, 1);
	      up--;
	    }
	  }

	  // if the path is allowed to go above the root, restore leading ..s
	  if (allowAboveRoot) {
	    for (; up--; up) {
	      parts.unshift('..');
	    }
	  }

	  return parts;
	}

	// Split a filename into [root, dir, basename, ext], unix version
	// 'root' is just a slash, or nothing.
	var splitPathRe =
	    /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
	var splitPath = function(filename) {
	  return splitPathRe.exec(filename).slice(1);
	};

	// path.resolve([from ...], to)
	// posix version
	exports.resolve = function() {
	  var resolvedPath = '',
	      resolvedAbsolute = false;

	  for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
	    var path = (i >= 0) ? arguments[i] : process.cwd();

	    // Skip empty and invalid entries
	    if (typeof path !== 'string') {
	      throw new TypeError('Arguments to path.resolve must be strings');
	    } else if (!path) {
	      continue;
	    }

	    resolvedPath = path + '/' + resolvedPath;
	    resolvedAbsolute = path.charAt(0) === '/';
	  }

	  // At this point the path should be resolved to a full absolute path, but
	  // handle relative paths to be safe (might happen when process.cwd() fails)

	  // Normalize the path
	  resolvedPath = normalizeArray(filter(resolvedPath.split('/'), function(p) {
	    return !!p;
	  }), !resolvedAbsolute).join('/');

	  return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';
	};

	// path.normalize(path)
	// posix version
	exports.normalize = function(path) {
	  var isAbsolute = exports.isAbsolute(path),
	      trailingSlash = substr(path, -1) === '/';

	  // Normalize the path
	  path = normalizeArray(filter(path.split('/'), function(p) {
	    return !!p;
	  }), !isAbsolute).join('/');

	  if (!path && !isAbsolute) {
	    path = '.';
	  }
	  if (path && trailingSlash) {
	    path += '/';
	  }

	  return (isAbsolute ? '/' : '') + path;
	};

	// posix version
	exports.isAbsolute = function(path) {
	  return path.charAt(0) === '/';
	};

	// posix version
	exports.join = function() {
	  var paths = Array.prototype.slice.call(arguments, 0);
	  return exports.normalize(filter(paths, function(p, index) {
	    if (typeof p !== 'string') {
	      throw new TypeError('Arguments to path.join must be strings');
	    }
	    return p;
	  }).join('/'));
	};


	// path.relative(from, to)
	// posix version
	exports.relative = function(from, to) {
	  from = exports.resolve(from).substr(1);
	  to = exports.resolve(to).substr(1);

	  function trim(arr) {
	    var start = 0;
	    for (; start < arr.length; start++) {
	      if (arr[start] !== '') break;
	    }

	    var end = arr.length - 1;
	    for (; end >= 0; end--) {
	      if (arr[end] !== '') break;
	    }

	    if (start > end) return [];
	    return arr.slice(start, end - start + 1);
	  }

	  var fromParts = trim(from.split('/'));
	  var toParts = trim(to.split('/'));

	  var length = Math.min(fromParts.length, toParts.length);
	  var samePartsLength = length;
	  for (var i = 0; i < length; i++) {
	    if (fromParts[i] !== toParts[i]) {
	      samePartsLength = i;
	      break;
	    }
	  }

	  var outputParts = [];
	  for (var i = samePartsLength; i < fromParts.length; i++) {
	    outputParts.push('..');
	  }

	  outputParts = outputParts.concat(toParts.slice(samePartsLength));

	  return outputParts.join('/');
	};

	exports.sep = '/';
	exports.delimiter = ':';

	exports.dirname = function(path) {
	  var result = splitPath(path),
	      root = result[0],
	      dir = result[1];

	  if (!root && !dir) {
	    // No dirname whatsoever
	    return '.';
	  }

	  if (dir) {
	    // It has a dirname, strip trailing slash
	    dir = dir.substr(0, dir.length - 1);
	  }

	  return root + dir;
	};


	exports.basename = function(path, ext) {
	  var f = splitPath(path)[2];
	  // TODO: make this comparison case-insensitive on windows?
	  if (ext && f.substr(-1 * ext.length) === ext) {
	    f = f.substr(0, f.length - ext.length);
	  }
	  return f;
	};


	exports.extname = function(path) {
	  return splitPath(path)[3];
	};

	function filter (xs, f) {
	    if (xs.filter) return xs.filter(f);
	    var res = [];
	    for (var i = 0; i < xs.length; i++) {
	        if (f(xs[i], i, xs)) res.push(xs[i]);
	    }
	    return res;
	}

	// String.prototype.substr - negative index don't work in IE8
	var substr = 'ab'.substr(-1) === 'b'
	    ? function (str, start, len) { return str.substr(start, len) }
	    : function (str, start, len) {
	        if (start < 0) start = str.length + start;
	        return str.substr(start, len);
	    }
	;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(16)))

/***/ },
/* 16 */
/***/ function(module, exports) {

	// shim for using process in browser

	var process = module.exports = {};
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;

	function cleanUpNextTick() {
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}

	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = setTimeout(cleanUpNextTick);
	    draining = true;

	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    clearTimeout(timeout);
	}

	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        setTimeout(drainQueue, 0);
	    }
	};

	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};

	function noop() {}

	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;

	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};

	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 17 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	var ALERT = {
	  REMOVE: 'REMOVE_ALERT'
	};
	exports.ALERT = ALERT;

/***/ },
/* 18 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_18__;

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(11);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(20);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _classnames = __webpack_require__(21);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _configEvents = __webpack_require__(17);

	var AlertMessage = (function (_React$Component) {
	  _inherits(AlertMessage, _React$Component);

	  function AlertMessage(props) {
	    _classCallCheck(this, AlertMessage);

	    _get(Object.getPrototypeOf(AlertMessage.prototype), 'constructor', this).call(this, props);
	    this.state = {
	      closeButtonStyle: {}
	    };
	  }

	  _createClass(AlertMessage, [{
	    key: '_handleCloseClick',
	    value: function _handleCloseClick() {
	      this._removeSelf();
	    }
	  }, {
	    key: '_showIcon',
	    value: function _showIcon() {
	      var icon = '';
	      if (this.props.icon) {
	        icon = this.props.icon;
	      } else {
	        icon = _react2['default'].createElement('div', { className: this.props.type + '-icon' });
	      }

	      return icon;
	    }
	  }, {
	    key: '_countdown',
	    value: function _countdown() {
	      var _this = this;

	      setTimeout(function () {
	        _this._removeSelf();
	      }, this.props.time);
	    }
	  }, {
	    key: '_removeSelf',
	    value: function _removeSelf() {
	      events.emit(_configEvents.ALERT.REMOVE, this);
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.domNode = _reactDom2['default'].findDOMNode(this);
	      this.setState({
	        closeButtonStyle: {
	          height: this.domNode.offsetHeight + 'px',
	          lineHeight: this.domNode.offsetHeight + 'px',
	          backgroundColor: this.props.style.closeButton.bg
	        }
	      });

	      if (this.props.time > 0) {
	        this._countdown();
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2['default'].createElement(
	        'div',
	        { style: this.props.style.alert, className: (0, _classnames2['default'])('alert', this.props.type) },
	        _react2['default'].createElement(
	          'div',
	          { className: 'content icon' },
	          this._showIcon.bind(this)()
	        ),
	        _react2['default'].createElement(
	          'div',
	          { className: 'content message' },
	          this.props.message
	        ),
	        _react2['default'].createElement(
	          'div',
	          { onClick: this._handleCloseClick.bind(this), style: this.state.closeButtonStyle, className: 'content close' },
	          _react2['default'].createElement('div', { className: this.props.closeIconClass })
	        )
	      );
	    }
	  }]);

	  return AlertMessage;
	})(_react2['default'].Component);

	AlertMessage.defaultProps = {
	  reactKey: '',
	  icon: '',
	  message: '',
	  type: 'info'
	};

	AlertMessage.propTypes = {
	  type: _react2['default'].PropTypes.oneOf(['info', 'success', 'error'])
	};

	exports['default'] = AlertMessage;
	module.exports = exports['default'];

/***/ },
/* 20 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_20__;

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  Copyright (c) 2015 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/
	/* global define */

	(function () {
		'use strict';

		var hasOwn = {}.hasOwnProperty;

		function classNames () {
			var classes = '';

			for (var i = 0; i < arguments.length; i++) {
				var arg = arguments[i];
				if (!arg) continue;

				var argType = typeof arg;

				if (argType === 'string' || argType === 'number') {
					classes += ' ' + arg;
				} else if (Array.isArray(arg)) {
					classes += ' ' + classNames.apply(null, arg);
				} else if (argType === 'object') {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes += ' ' + key;
						}
					}
				}
			}

			return classes.substr(1);
		}

		if (typeof module !== 'undefined' && module.exports) {
			module.exports = classNames;
		} else if (true) {
			// register as 'classnames', consistent with npm package name
			!(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return classNames;
			}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {
			window.classNames = classNames;
		}
	}());


/***/ }
/******/ ])
});
;