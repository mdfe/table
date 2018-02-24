webpackJsonp([9],{

/***/ 407:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(408);


/***/ }),

/***/ 408:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);
throw new Error("Cannot find module \"rc-table\"");
throw new Error("Cannot find module \"rc-table/assets/index.less\"");
/* eslint-disable no-console,func-names,react/no-multi-comp */





var columns = new Array(12).fill(1).map(function (a, i) {
  return {
    title: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { style: { width: 100, maxWidth: 100 } },
      'title' + i
    ),
    className: 'title' + i,
    dataIndex: 'a',
    key: Math.random().toString(),
    fixed: i > 1 ? '' : 'left',
    render: function render(value) {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { style: { width: 100, maxWidth: 100 } },
        value
      );
    }
  };
});

var data = [{ a: '123', b: 'xxxxxxxx xxxxxxxx', d: 3, key: '1' }, { a: 'cdd', b: 'edd12221 edd12221', d: 3, key: '2' }, { a: '133', c: 'edd12221 edd12221', d: 2, key: '3' }, { a: '133', c: 'edd12221 edd12221', d: 2, key: '4' }, { a: '133', c: 'edd12221 edd12221', d: 2, key: '5' }, { a: '133', c: 'edd12221 edd12221', d: 2, key: '6' }, { a: '133', c: 'edd12221 edd12221', d: 2, key: '7' }, { a: '133', c: 'edd12221 edd12221', d: 2, key: '8' }, { a: '133', c: 'edd12221 edd12221', d: 2, key: '9' }];

__WEBPACK_IMPORTED_MODULE_1_react_dom___default.a.render(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
  'div',
  null,
  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'h2',
    null,
    'simple table'
  ),
  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_rc_table___default.a, {
    columns: columns,
    footColumns: columns,
    data: data,
    style: { width: 800 },
    scroll: { x: true, y: 300 }
  })
), document.getElementById('__react-content'));

/***/ })

},[407]);
//# sourceMappingURL=withfooter.js.map