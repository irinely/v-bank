webpackJsonp([0],{

/***/ 130:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(131);

var KEY_SPACE = 32;

$(document).on('click', '.checkbox, .radiobox', function (e) {
	e.currentTarget.focus();
});

$(document).on('keydown', '.checkbox, .radiobox', function (e) {
	if (e.keyCode === KEY_SPACE) {
		e.preventDefault();
		e.currentTarget.click();
	}
});

/***/ }),

/***/ 131:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(132);

var _svg4everybody = __webpack_require__(334);

var _svg4everybody2 = _interopRequireDefault(_svg4everybody);

var _jquery = __webpack_require__(335);

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _svg4everybody2.default)();

window.$ = _jquery2.default;
window.jQuery = _jquery2.default;

__webpack_require__(336);

/***/ })

},[130]);
//# sourceMappingURL=main.js.map