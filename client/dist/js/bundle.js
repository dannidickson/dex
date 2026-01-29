/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./client/src/boot/index.js":
/*!**********************************!*\
  !*** ./client/src/boot/index.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var boot_registerComponents__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! boot/registerComponents */ "./client/src/boot/registerComponents.js");
/* harmony import */ var legacy_ReportTableBuilder_ReportTableBuilderEntwine__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! legacy/ReportTableBuilder/ReportTableBuilderEntwine */ "./client/src/legacy/ReportTableBuilder/ReportTableBuilderEntwine.js");


window.document.addEventListener('DOMContentLoaded', () => {
  (0,boot_registerComponents__WEBPACK_IMPORTED_MODULE_0__["default"])();
});

/***/ }),

/***/ "./client/src/boot/registerComponents.js":
/*!***********************************************!*\
  !*** ./client/src/boot/registerComponents.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lib_Injector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lib/Injector */ "lib/Injector");
/* harmony import */ var lib_Injector__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lib_Injector__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Dashboard_Dashboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Dashboard/Dashboard */ "./client/src/components/Dashboard/Dashboard.js");
/* harmony import */ var _components_ReportTableBuilder_ReportTableBuilder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/ReportTableBuilder/ReportTableBuilder */ "./client/src/components/ReportTableBuilder/ReportTableBuilder.js");



/* harmony default export */ __webpack_exports__["default"] = (() => {
  lib_Injector__WEBPACK_IMPORTED_MODULE_0___default().component.registerMany({
    Dashboard: _components_Dashboard_Dashboard__WEBPACK_IMPORTED_MODULE_1__["default"],
    ReportTableBuilder: _components_ReportTableBuilder_ReportTableBuilder__WEBPACK_IMPORTED_MODULE_2__["default"]
  });
});

/***/ }),

/***/ "./client/src/bundles/grid-field-reloader.js":
/*!***************************************************!*\
  !*** ./client/src/bundles/grid-field-reloader.js ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);

jquery__WEBPACK_IMPORTED_MODULE_0___default().entwine('ss', function ($) {
  $('.cms form[action^="admin/dex-custom-reporting/"] .grid-field:not([cms-loading-ignore-url-params])').entwine({
    showDetailView: function (url, event) {
      if (url.includes('admin/dex-custom-reporting/')) {
        window.location.href = url;
      }
    }
  });
});

/***/ }),

/***/ "./client/src/components/Dashboard/Dashboard.js":
/*!******************************************************!*\
  !*** ./client/src/components/Dashboard/Dashboard.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function Dashboard(props) {
  const types = props.CustomReports || [];
  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, "Reports"), react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", null, types.map(ele => react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    key: ele.ID
  }, ele.Title, " ", ele.ID))));
}
/* harmony default export */ __webpack_exports__["default"] = (Dashboard);

/***/ }),

/***/ "./client/src/components/ReportTableBuilder/ReportTableBuilder.js":
/*!************************************************************************!*\
  !*** ./client/src/components/ReportTableBuilder/ReportTableBuilder.js ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Component: function() { return /* binding */ ReportTableBuilder; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_FieldHolder_FieldHolder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/FieldHolder/FieldHolder */ "components/FieldHolder/FieldHolder");
/* harmony import */ var components_FieldHolder_FieldHolder__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(components_FieldHolder_FieldHolder__WEBPACK_IMPORTED_MODULE_2__);



const ReportTableBuilder = _ref => {
  let {
    tableTitle,
    data
  } = _ref;
  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "report-builder__container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "report-builder__menu-holder"
  }, react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "report-builder__menu"
  }, react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ReportTables, {
    tables: data.tableNames
  })), react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "report-builder__second-menu"
  }, react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h4", null, "SELECTED FIELDS"))), react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "report-builder__table-container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "report-builder__table-header"
  }, react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
    className: "report-builder__table-title"
  }, "Table layout"))));
};
const ReportTables = _ref2 => {
  let {
    tables
  } = _ref2;
  if (!tables || tables.length === 0) {
    return react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "No tables available");
  }
  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "report-tables"
  }, react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h4", null, "TABLES"), react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    className: "report-tables__list"
  }, tables.map((table, index) => react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "report-tables__item",
    key: index
  }, table.Table || table.ClassName || table))));
};
ReportTables.propTypes = {
  tables: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().array)
};
ReportTables.defaultProps = {
  tables: []
};
ReportTableBuilder.propTypes = {
  tableTitle: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  data: prop_types__WEBPACK_IMPORTED_MODULE_1___default().shape({
    tableNames: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().array)
  })
};
ReportTableBuilder.defaultProps = {
  tableTitle: 'Build a Report',
  data: {
    tableNames: []
  }
};

/* harmony default export */ __webpack_exports__["default"] = (components_FieldHolder_FieldHolder__WEBPACK_IMPORTED_MODULE_2___default()(ReportTableBuilder));

/***/ }),

/***/ "./client/src/legacy/ReportTableBuilder/ReportTableBuilderEntwine.js":
/*!***************************************************************************!*\
  !*** ./client/src/legacy/ReportTableBuilder/ReportTableBuilderEntwine.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/client */ "react-dom/client");
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lib_Injector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lib/Injector */ "lib/Injector");
/* harmony import */ var lib_Injector__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lib_Injector__WEBPACK_IMPORTED_MODULE_2__);
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }



window.jQuery.entwine('ss', $ => {
  $('.js-injector-boot .prismatic-rb-holder').entwine({
    Root: null,
    Component: null,
    onmatch() {
      const cmsContent = this.closest('.cms-content').attr('id');
      const context = cmsContent ? {
        context: cmsContent
      } : {};
      const schema = this.data('schema');
      if (schema) {
        this.data('entwine-value', schema.value);
        const Root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(this[0]);
        const ReactField = (0,lib_Injector__WEBPACK_IMPORTED_MODULE_2__.loadComponent)(schema.component, context);
        this.setRoot(Root);
        this.setComponent(ReactField);
        this._super();
        this.refresh();
      }
    },
    onunmatch() {
      const Root = this.getRoot();
      if (Root) {
        Root.unmount();
      }
    },
    getProps() {
      return {
        ...this.data('schema'),
        value: this.data('entwine-value') || '',
        onChange: this.handleChange.bind(this)
      };
    },
    refresh() {
      const Root = this.getRoot();
      const ReactField = this.getComponent();
      const props = this.getProps();
      console.log(props);
      Root.render(react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ReactField, _extends({}, props, {
        noHolder: true
      })));
    },
    handleChange(value) {
      this.data('entwine-value', value);
      this.refresh();
    }
  });
});

/***/ }),

/***/ "components/FieldHolder/FieldHolder":
/*!******************************!*\
  !*** external "FieldHolder" ***!
  \******************************/
/***/ (function(module) {

module.exports = FieldHolder;

/***/ }),

/***/ "lib/Injector":
/*!***************************!*\
  !*** external "Injector" ***!
  \***************************/
/***/ (function(module) {

module.exports = Injector;

/***/ }),

/***/ "prop-types":
/*!****************************!*\
  !*** external "PropTypes" ***!
  \****************************/
/***/ (function(module) {

module.exports = PropTypes;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ (function(module) {

module.exports = React;

/***/ }),

/***/ "react-dom/client":
/*!*********************************!*\
  !*** external "ReactDomClient" ***!
  \*********************************/
/***/ (function(module) {

module.exports = ReactDomClient;

/***/ }),

/***/ "jquery":
/*!*************************!*\
  !*** external "jQuery" ***!
  \*************************/
/***/ (function(module) {

module.exports = jQuery;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!**************************************!*\
  !*** ./client/src/bundles/bundle.js ***!
  \**************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var legacy_ReportTableBuilder_ReportTableBuilderEntwine__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! legacy/ReportTableBuilder/ReportTableBuilderEntwine */ "./client/src/legacy/ReportTableBuilder/ReportTableBuilderEntwine.js");
/* harmony import */ var _grid_field_reloader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./grid-field-reloader */ "./client/src/bundles/grid-field-reloader.js");
/* harmony import */ var boot__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! boot */ "./client/src/boot/index.js");



/******/ })()
;
//# sourceMappingURL=bundle.js.map