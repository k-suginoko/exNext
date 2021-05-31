webpackHotUpdate_N_E("pages/about",{

/***/ "./src/component/atoms/Button/index.js":
/*!*********************************************!*\
  !*** ./src/component/atoms/Button/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.scss */ "./src/component/atoms/Button/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_2__);


var _jsxFileName = "C:\\Users\\kna.sugihara\\Documents\\ex_next\\ex-next\\component\\atoms\\Button\\index.js",
    _this = undefined,
    _s = $RefreshSig$();

/**
 * atom button
 */


var ANIME_DURATION = 280;

var Button = function Button(props) {
  _s();

  var btnRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);

  var handleClick = function handleClick(e) {
    e.stopPropagation();

    if (props.params) {
      props.onClick(props.params);
    } else if (props.onClick) props.onClick(e);

    if (props.getRef) {
      props.getRef(btnRef);
    }
  };

  var className = Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(function () {
    var arr = [];
    props.disabled && arr.push('disabled');
    props.round && arr.push('round');
    props.icon && arr.push('icon');
    props.wrap && arr.push('wrap');
    props.color && arr.push(props.color);
    props.size && arr.push(props.size);
    return arr.reduce(function (cn, type) {
      cn += " button--".concat(type);
      return cn;
    }, 'button');
  }, [props.color, props.size, props.disabled, props.round, props.icon, props.wrap]);
  var customClass = Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(function () {
    if (props.classNames) return " ".concat(props.classNames);
    return '';
  }, [props.classNames]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
    type: "button",
    className: "".concat(className).concat(customClass),
    disabled: props.disabled,
    onClick: handleClick,
    style: props.styleParams,
    ref: btnRef,
    children: props.children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 50,
    columnNumber: 5
  }, _this);
};

_s(Button, "FwY7l9D5Y1R5z9oNkYnpkYhXMU0=");

_c = Button;
/* harmony default export */ __webpack_exports__["default"] = (Button);

var _c;

$RefreshReg$(_c, "Button");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./src/pages/about.tsx":
/*!*****************************!*\
  !*** ./src/pages/about.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _component_atoms_Button___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../component/atoms/Button/ */ "./src/component/atoms/Button/index.js");


var _jsxFileName = "C:\\Users\\kna.sugihara\\Documents\\ex_next\\ex-next\\src\\pages\\about.tsx",
    _this = undefined;



var About = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["memo"])(_c = function _c() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: ["\u30DC\u30BF\u30F3\u62BC\u3059\u3088", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_component_atoms_Button___WEBPACK_IMPORTED_MODULE_2__["default"], {
      onClick: function onClick() {},
      children: "test"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 5
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 10
  }, _this);
});
_c2 = About;
/* harmony default export */ __webpack_exports__["default"] = (About);

var _c, _c2;

$RefreshReg$(_c, "About$memo");
$RefreshReg$(_c2, "About");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50L2F0b21zL0J1dHRvbi9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2Fib3V0LnRzeCJdLCJuYW1lcyI6WyJBTklNRV9EVVJBVElPTiIsIkJ1dHRvbiIsInByb3BzIiwiYnRuUmVmIiwidXNlUmVmIiwiaGFuZGxlQ2xpY2siLCJlIiwic3RvcFByb3BhZ2F0aW9uIiwicGFyYW1zIiwib25DbGljayIsImdldFJlZiIsImNsYXNzTmFtZSIsInVzZU1lbW8iLCJhcnIiLCJkaXNhYmxlZCIsInB1c2giLCJyb3VuZCIsImljb24iLCJ3cmFwIiwiY29sb3IiLCJzaXplIiwicmVkdWNlIiwiY24iLCJ0eXBlIiwiY3VzdG9tQ2xhc3MiLCJjbGFzc05hbWVzIiwic3R5bGVQYXJhbXMiLCJjaGlsZHJlbiIsIkFib3V0IiwibWVtbyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBRUEsSUFBTUEsY0FBYyxHQUFHLEdBQXZCOztBQUVBLElBQU1DLE1BQU0sR0FBRyxTQUFUQSxNQUFTLENBQUFDLEtBQUssRUFBSTtBQUFBOztBQUN0QixNQUFNQyxNQUFNLEdBQUdDLG9EQUFNLENBQUMsSUFBRCxDQUFyQjs7QUFFQSxNQUFNQyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFDQyxDQUFELEVBQU87QUFDekJBLEtBQUMsQ0FBQ0MsZUFBRjs7QUFFQSxRQUFJTCxLQUFLLENBQUNNLE1BQVYsRUFBa0I7QUFDaEJOLFdBQUssQ0FBQ08sT0FBTixDQUFjUCxLQUFLLENBQUNNLE1BQXBCO0FBQ0QsS0FGRCxNQUVPLElBQUlOLEtBQUssQ0FBQ08sT0FBVixFQUFtQlAsS0FBSyxDQUFDTyxPQUFOLENBQWNILENBQWQ7O0FBRTFCLFFBQUlKLEtBQUssQ0FBQ1EsTUFBVixFQUFrQjtBQUNoQlIsV0FBSyxDQUFDUSxNQUFOLENBQWFQLE1BQWI7QUFDRDtBQUNGLEdBVkQ7O0FBWUEsTUFBTVEsU0FBUyxHQUFHQyxxREFBTyxDQUFDLFlBQU07QUFDOUIsUUFBTUMsR0FBRyxHQUFHLEVBQVo7QUFDQVgsU0FBSyxDQUFDWSxRQUFOLElBQWtCRCxHQUFHLENBQUNFLElBQUosQ0FBUyxVQUFULENBQWxCO0FBQ0FiLFNBQUssQ0FBQ2MsS0FBTixJQUFlSCxHQUFHLENBQUNFLElBQUosQ0FBUyxPQUFULENBQWY7QUFDQWIsU0FBSyxDQUFDZSxJQUFOLElBQWNKLEdBQUcsQ0FBQ0UsSUFBSixDQUFTLE1BQVQsQ0FBZDtBQUNBYixTQUFLLENBQUNnQixJQUFOLElBQWNMLEdBQUcsQ0FBQ0UsSUFBSixDQUFTLE1BQVQsQ0FBZDtBQUVBYixTQUFLLENBQUNpQixLQUFOLElBQWVOLEdBQUcsQ0FBQ0UsSUFBSixDQUFTYixLQUFLLENBQUNpQixLQUFmLENBQWY7QUFFQWpCLFNBQUssQ0FBQ2tCLElBQU4sSUFBY1AsR0FBRyxDQUFDRSxJQUFKLENBQVNiLEtBQUssQ0FBQ2tCLElBQWYsQ0FBZDtBQUVBLFdBQU9QLEdBQUcsQ0FBQ1EsTUFBSixDQUFXLFVBQUNDLEVBQUQsRUFBS0MsSUFBTCxFQUFjO0FBQzlCRCxRQUFFLHVCQUFpQkMsSUFBakIsQ0FBRjtBQUVBLGFBQU9ELEVBQVA7QUFDRCxLQUpNLEVBSUosUUFKSSxDQUFQO0FBS0QsR0FoQndCLEVBZ0J0QixDQUFFcEIsS0FBSyxDQUFDaUIsS0FBUixFQUFlakIsS0FBSyxDQUFDa0IsSUFBckIsRUFBMkJsQixLQUFLLENBQUNZLFFBQWpDLEVBQTJDWixLQUFLLENBQUNjLEtBQWpELEVBQXdEZCxLQUFLLENBQUNlLElBQTlELEVBQW9FZixLQUFLLENBQUNnQixJQUExRSxDQWhCc0IsQ0FBekI7QUFrQkEsTUFBTU0sV0FBVyxHQUFHWixxREFBTyxDQUFDLFlBQU07QUFDaEMsUUFBSVYsS0FBSyxDQUFDdUIsVUFBVixFQUFzQixrQkFBV3ZCLEtBQUssQ0FBQ3VCLFVBQWpCO0FBQ3RCLFdBQU8sRUFBUDtBQUNELEdBSDBCLEVBR3hCLENBQUN2QixLQUFLLENBQUN1QixVQUFQLENBSHdCLENBQTNCO0FBS0Esc0JBQ0U7QUFDRSxRQUFJLEVBQUMsUUFEUDtBQUVFLGFBQVMsWUFBTWQsU0FBTixTQUFrQmEsV0FBbEIsQ0FGWDtBQUdFLFlBQVEsRUFBR3RCLEtBQUssQ0FBQ1ksUUFIbkI7QUFJRSxXQUFPLEVBQUdULFdBSlo7QUFLRSxTQUFLLEVBQUdILEtBQUssQ0FBQ3dCLFdBTGhCO0FBTUUsT0FBRyxFQUFHdkIsTUFOUjtBQUFBLGNBUUlELEtBQUssQ0FBQ3lCO0FBUlY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBWUQsQ0FsREQ7O0dBQU0xQixNOztLQUFBQSxNO0FBb0RTQSxxRUFBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOURBO0FBQ0E7QUFFQSxJQUFNMkIsS0FBUSxnQkFBR0Msa0RBQUksTUFBQyxjQUFNO0FBQzFCLHNCQUFPO0FBQUEsb0VBRUwscUVBQUMsZ0VBQUQ7QUFBUSxhQUFPLEVBQUcsbUJBQU0sQ0FBRSxDQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZLO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFQO0FBSUQsQ0FMb0IsQ0FBckI7TUFBTUQsSztBQU9TQSxvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9hYm91dC4zZTExZTQ1MTdiYTQ3OWZlMWYxMy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIGF0b20gYnV0dG9uXHJcbiAqL1xyXG5cclxuaW1wb3J0IFJlYWN0LCB7IG1lbW8sIHVzZU1lbW8sIHVzZVJlZiB9IGZyb20gJ3JlYWN0J1xyXG5cclxuaW1wb3J0ICcuL2luZGV4LnNjc3MnXHJcblxyXG5jb25zdCBBTklNRV9EVVJBVElPTiA9IDI4MFxyXG5cclxuY29uc3QgQnV0dG9uID0gcHJvcHMgPT4ge1xyXG4gIGNvbnN0IGJ0blJlZiA9IHVzZVJlZihudWxsKVxyXG5cclxuICBjb25zdCBoYW5kbGVDbGljayA9IChlKSA9PiB7XHJcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpXHJcblxyXG4gICAgaWYgKHByb3BzLnBhcmFtcykge1xyXG4gICAgICBwcm9wcy5vbkNsaWNrKHByb3BzLnBhcmFtcylcclxuICAgIH0gZWxzZSBpZiAocHJvcHMub25DbGljaykgcHJvcHMub25DbGljayhlKVxyXG5cclxuICAgIGlmIChwcm9wcy5nZXRSZWYpIHtcclxuICAgICAgcHJvcHMuZ2V0UmVmKGJ0blJlZilcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0IGNsYXNzTmFtZSA9IHVzZU1lbW8oKCkgPT4ge1xyXG4gICAgY29uc3QgYXJyID0gW11cclxuICAgIHByb3BzLmRpc2FibGVkICYmIGFyci5wdXNoKCdkaXNhYmxlZCcpXHJcbiAgICBwcm9wcy5yb3VuZCAmJiBhcnIucHVzaCgncm91bmQnKVxyXG4gICAgcHJvcHMuaWNvbiAmJiBhcnIucHVzaCgnaWNvbicpXHJcbiAgICBwcm9wcy53cmFwICYmIGFyci5wdXNoKCd3cmFwJylcclxuXHJcbiAgICBwcm9wcy5jb2xvciAmJiBhcnIucHVzaChwcm9wcy5jb2xvcilcclxuXHJcbiAgICBwcm9wcy5zaXplICYmIGFyci5wdXNoKHByb3BzLnNpemUpXHJcblxyXG4gICAgcmV0dXJuIGFyci5yZWR1Y2UoKGNuLCB0eXBlKSA9PiB7XHJcbiAgICAgIGNuICs9IGAgYnV0dG9uLS0keyB0eXBlIH1gXHJcblxyXG4gICAgICByZXR1cm4gY25cclxuICAgIH0sICdidXR0b24nKVxyXG4gIH0sIFsgcHJvcHMuY29sb3IsIHByb3BzLnNpemUsIHByb3BzLmRpc2FibGVkLCBwcm9wcy5yb3VuZCwgcHJvcHMuaWNvbiwgcHJvcHMud3JhcCBdKVxyXG5cclxuICBjb25zdCBjdXN0b21DbGFzcyA9IHVzZU1lbW8oKCkgPT4ge1xyXG4gICAgaWYgKHByb3BzLmNsYXNzTmFtZXMpIHJldHVybiBgICR7cHJvcHMuY2xhc3NOYW1lc31gXHJcbiAgICByZXR1cm4gJydcclxuICB9LCBbcHJvcHMuY2xhc3NOYW1lc10pXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8YnV0dG9uXHJcbiAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICBjbGFzc05hbWU9eyBgJHtjbGFzc05hbWV9JHtjdXN0b21DbGFzc31gIH1cclxuICAgICAgZGlzYWJsZWQ9eyBwcm9wcy5kaXNhYmxlZCB9XHJcbiAgICAgIG9uQ2xpY2s9eyBoYW5kbGVDbGljayB9XHJcbiAgICAgIHN0eWxlPXsgcHJvcHMuc3R5bGVQYXJhbXMgfVxyXG4gICAgICByZWY9eyBidG5SZWYgfVxyXG4gICAgPlxyXG4gICAgICB7IHByb3BzLmNoaWxkcmVuIH1cclxuICAgIDwvYnV0dG9uPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQnV0dG9uXHJcbiIsImltcG9ydCBSZWFjdCwgeyBGQywgbWVtbywgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICcuLi9jb21wb25lbnQvYXRvbXMvQnV0dG9uLyc7XG5cbmNvbnN0IEFib3V0OkZDID0gbWVtbygoKSA9PiB7XG4gIHJldHVybiA8ZGl2PlxuICAgIOODnOOCv+ODs+aKvOOBmeOCiFxuICAgIDxCdXR0b24gb25DbGljaz17ICgpID0+IHt9IH0+dGVzdDwvQnV0dG9uPlxuICA8L2Rpdj5cbn0pXG5cbmV4cG9ydCBkZWZhdWx0IEFib3V0XG4iXSwic291cmNlUm9vdCI6IiJ9