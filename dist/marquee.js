(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Marquee"] = factory();
	else
		root["Marquee"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Marquee = function () {
    function Marquee(options) {
        _classCallCheck(this, Marquee);

        this.interval = options.interval || 2000;
        this.duration = options.duration || 300;
        this.direction = options.direction || 'up';
        this.itemHeight = 0;
        this.currenTranslateY = 0;
        this.height = options.height;
        this.length = 0;
        this.currentIndex = 0;
        this.noAnimate = false;
        this.timer = '';
        this.cloneNode = '';
        this.ele = options.ele;
        this.destroy();
        this.init();
        this.start();
    }

    _createClass(Marquee, [{
        key: 'destroy',
        value: function destroy() {
            this.timer && clearInterval(this.timer);
        }
    }, {
        key: 'init',
        value: function init() {
            this.destroy();
            if (this.cloneNode) {
                this.ele.removeChild(this.cloneNode);
            }
            this.cloneNode = null;
            var firstItem = this.ele.firstElementChild;
            if (!firstItem) {
                return false;
            }
            this.length = this.ele.children.length;
            this.height = this.itemHeight || firstItem.offsetHeight;
            if (this.direction === 'up') {
                this.cloneNode = firstItem.cloneNode(true);
                this.ele.appendChild(this.cloneNode);
            } else {
                this.cloneNode = this.ele.lastElementChild.cloneNode(true);
                this.ele.insertBefore(this.cloneNode, firstItem);
            }
            return true;
        }
    }, {
        key: 'start',
        value: function start() {
            var _this = this;

            if (this.direction === 'down') this.go(false);
            this.timer = setInterval(function () {

                if (_this.direction === 'up') {
                    _this.currentIndex += 1;
                    _this.currenTranslateY = -_this.currentIndex * _this.height;
                } else {
                    _this.currentIndex -= 1;
                    _this.currenTranslateY = -(_this.currentIndex + 1) * _this.height;
                }
                _this.ele.style.transform = 'translateY(' + _this.currenTranslateY + 'px)';
                _this.ele.style.transition = 'transform ' + _this.duration + 'ms';

                if (_this.currentIndex === _this.length) {
                    setTimeout(function () {
                        _this.go(true);
                    }, _this.duration);
                } else if (_this.currentIndex === -1) {
                    setTimeout(function () {
                        _this.go(false);
                    }, _this.duration);
                } else {
                    _this.noAnimate = false;
                }
            }, this.interval + this.duration);
        }
    }, {
        key: 'go',
        value: function go(toFirst) {
            this.noAnimate = true;
            if (toFirst) {
                this.currentIndex = 0;
                this.currenTranslateY = 0;
            } else {
                this.currentIndex = this.length - 1;
                this.currenTranslateY = -(this.currentIndex + 1) * this.height;
            }
            this.ele.style.transform = 'translateY(' + this.currenTranslateY + 'px)';
            this.ele.style.transition = '';
        }
    }]);

    return Marquee;
}();

/***/ })
/******/ ]);
});
//# sourceMappingURL=marquee.js.map