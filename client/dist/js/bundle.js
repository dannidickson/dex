/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./client/src/boot/index.js":
/*!**********************************!*\
  !*** ./client/src/boot/index.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var boot_registerComponents__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! boot/registerComponents */ "./client/src/boot/registerComponents.js");
/* harmony import */ var boot_installComponents__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! boot/installComponents */ "./client/src/boot/installComponents.js");


window.document.addEventListener('DOMContentLoaded', () => {
  (0,boot_registerComponents__WEBPACK_IMPORTED_MODULE_0__["default"])();
  (0,boot_installComponents__WEBPACK_IMPORTED_MODULE_1__["default"])();
});

/***/ }),

/***/ "./client/src/boot/installComponents.js":
/*!**********************************************!*\
  !*** ./client/src/boot/installComponents.js ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/client */ "react-dom/client");
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom_client__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["default"] = (() => {
  const rootDOMs = document.querySelectorAll('div[data-component-name^="Dex"]:not([loaded])');
  const rootContainer = window['Federer'];
  rootContainer.init();
  rootContainer.get('Federer/InstallComponent').then(installer => {
    const InstallComponent = installer().default;
    rootDOMs.forEach(element => {
      const root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(element);
      const name = element.dataset.componentName;
      const title = element.dataset.componentTitle || name;
      const props = JSON.parse(element.dataset.componentProps || null);
      const children = element.dataset.componentChildren || null;
      const Component = InstallComponent(name, title, props, children);
      element.setAttribute('loaded', 'loaded');
      root.render(react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Component, {
        noHolder: true
      }));
    });
  });
});

/***/ }),

/***/ "./client/src/boot/registerComponents.js":
/*!***********************************************!*\
  !*** ./client/src/boot/registerComponents.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var components_ExampleComponent_ExampleComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/ExampleComponent/ExampleComponent */ "./client/src/components/ExampleComponent/ExampleComponent.js");
/* harmony import */ var components_TableBuilder_TableBuilder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/TableBuilder/TableBuilder */ "./client/src/components/TableBuilder/TableBuilder.js");
/* harmony import */ var _components_TableGraph_TableGraph__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/TableGraph/TableGraph */ "./client/src/components/TableGraph/TableGraph.js");
/* harmony import */ var _components_Dashboard_Dashboard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Dashboard/Dashboard */ "./client/src/components/Dashboard/Dashboard.js");




/* harmony default export */ __webpack_exports__["default"] = (() => {
  const container = window['Federer'];
  if (container) {
    container.init();
    container.get('Federer/Injector').then(module => {
      console.log('aaa');
      const Injector = module().default;
      Injector.component.registerMany({
        'Dex.ExampleComponent': components_ExampleComponent_ExampleComponent__WEBPACK_IMPORTED_MODULE_0__["default"],
        'Dex.TableBuilder': components_TableBuilder_TableBuilder__WEBPACK_IMPORTED_MODULE_1__["default"],
        'Dex.TableGraph': _components_TableGraph_TableGraph__WEBPACK_IMPORTED_MODULE_2__["default"],
        'Dex.Dashboard': _components_Dashboard_Dashboard__WEBPACK_IMPORTED_MODULE_3__["default"]
      });
    });
  }
});

/***/ }),

/***/ "./client/src/bundles/bundle.js":
/*!**************************************!*\
  !*** ./client/src/bundles/bundle.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var entwine_example_file__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! entwine/example-file */ "./client/src/entwine/example-file.js");
/* harmony import */ var entwine_example_file__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(entwine_example_file__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var boot__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! boot */ "./client/src/boot/index.js");



/***/ }),

/***/ "./client/src/components/Dashboard/Dashboard.js":
/*!******************************************************!*\
  !*** ./client/src/components/Dashboard/Dashboard.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function Dashboard(props) {
  let types = props.CustomReports;
  return React.createElement("div", null, React.createElement("div", null, "Reports"), React.createElement("ul", null, types.map(ele => React.createElement("li", null, ele.Title, " ", ele.ID))));
}
/* harmony default export */ __webpack_exports__["default"] = (Dashboard);

/***/ }),

/***/ "./client/src/components/ExampleComponent/ExampleComponent.js":
/*!********************************************************************!*\
  !*** ./client/src/components/ExampleComponent/ExampleComponent.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const ExampleComponent = () => react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
  className: "example-component"
}, "This is an example");
/* harmony default export */ __webpack_exports__["default"] = (ExampleComponent);

/***/ }),

/***/ "./client/src/components/TableBuilder/TableBuilder.js":
/*!************************************************************!*\
  !*** ./client/src/components/TableBuilder/TableBuilder.js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const ENDPOINT = '/dex/api/1/reports';
function TableBuilder(props) {
  let tables = JSON.parse(props.tables);
  const [selectedTable, setSelectedTable] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [fields, setFields] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();
  const [search, setSearch] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [tableHeaders, setTableHeaders] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const [tableData, settableData] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const [groupBy, setGroupBy] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [limit, setLimit] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();
  const reportTable = document.querySelector('[name="ReportTable"]');
  const reportFields = document.querySelector('[name="ReportFields"]');
  const reportGroupBy = document.querySelector('[name="ReportGroupBy"]');
  const reportLimit = document.querySelector('[name="ReportLimit"]');
  function handleClick(tableInfo) {
    setSelectedTable(tableInfo);
    setTableHeaders([]);
    settableData([]);
    setGroupBy('');
    setLimit();
    reportTable.value = tableInfo.ClassName;
    fetch(`${ENDPOINT}/getFields?tableName=${tableInfo.ClassName}`).then(res => res.json()).then(data => {
      setFields(Object.keys(data));
    });
  }
  function handleFieldClick(fieldName) {
    setTableHeaders([...tableHeaders, fieldName]);
    reportFields.value += `${fieldName}, `;
  }
  function handleSetLimit(limit) {
    setLimit(limit);
    reportLimit.value = limit;
  }
  function handleGroupBy(groupBy) {
    setGroupBy(groupBy);
    reportGroupBy.value = groupBy;
  }
  function handleTableData() {
    let body = {
      table: selectedTable.ClassName,
      columns: tableHeaders
    };
    if (limit) {
      body.limit = limit;
    }
    if (groupBy) {
      body.groupBy = groupBy;
    }
    return fetch(`${ENDPOINT}/tableData`, {
      method: 'POST',
      body: JSON.stringify(body),
      credentials: 'same-origin'
    }).then(res => res.json()).then(data => {
      console.log(data);
      data.map(row => {
        Object.keys(row).map(column => {
          console.log(column);
        });
      });
      settableData(data);
    });
  }
  return React.createElement("div", {
    class: "dex-report-builder"
  }, React.createElement("div", {
    className: "dex-builder__tables"
  }, React.createElement("h4", null, "Tables"), React.createElement("input", {
    name: "search",
    value: search,
    onChange: e => setSearch(e.target.value)
  }), React.createElement("div", {
    className: "dex-menu"
  }, tables.map(table => React.createElement("div", {
    className: "dex-item",
    onClick: () => handleClick(table)
  }, table.Table)))), React.createElement("div", {
    className: "dex-builder__fields"
  }, React.createElement("h4", null, "Fields"), React.createElement("div", {
    className: "dex-menu"
  }, fields && fields.map(field => React.createElement("div", {
    className: "dex-item",
    onClick: () => handleFieldClick(field)
  }, field)))), React.createElement("div", {
    className: "dex-builder__fields"
  }, React.createElement("h4", null, "Table layout ", React.createElement("button", {
    onClick: handleTableData
  }, "Get data")), React.createElement("div", {
    className: "filters"
  }, React.createElement("div", null, "Group by:"), React.createElement("select", {
    value: groupBy,
    onChange: e => handleGroupBy(e.target.value)
  }, tableHeaders.map((header, index) => React.createElement("option", {
    key: index
  }, header))), React.createElement("div", null, React.createElement("label", null, "Limit"), React.createElement("input", {
    type: "number",
    name: "limit",
    value: limit,
    onChange: e => handleSetLimit(e.target.value)
  }))), React.createElement("div", {
    className: "dex-menu"
  }, React.createElement("table", {
    className: "dex-table"
  }, React.createElement("thead", null, React.createElement("tr", null, groupBy && React.createElement("th", null, "Count from Groupby"), tableHeaders && tableHeaders.map(header => React.createElement("th", null, header)))), tableData && React.createElement("tbody", null, tableData.map((object, index) => React.createElement("tr", {
    key: index
  }, Object.values(object).map((column, i) => React.createElement("td", {
    key: i
  }, column ? column : 'N/A')))))))));
}
/* harmony default export */ __webpack_exports__["default"] = (TableBuilder);

/***/ }),

/***/ "./client/src/components/TableGraph/TableGraph.js":
/*!********************************************************!*\
  !*** ./client/src/components/TableGraph/TableGraph.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function TableGraph(props) {
  let types = props.graphTypes;
  return React.createElement("div", null, React.createElement("div", null, "Graphs and options to show will go here"), React.createElement("ul", null, types.map(ele => React.createElement("li", null, ele))));
}
/* harmony default export */ __webpack_exports__["default"] = (TableGraph);

/***/ }),

/***/ "./client/src/entwine/example-file.js":
/*!********************************************!*\
  !*** ./client/src/entwine/example-file.js ***!
  \********************************************/
/***/ (function() {

(function ($) {
  $(document).ready(() => {});
})(jQuery);

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = React;

/***/ }),

/***/ "react-dom/client":
/*!*********************************!*\
  !*** external "ReactDomClient" ***!
  \*********************************/
/***/ (function(module) {

"use strict";
module.exports = ReactDomClient;

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = __webpack_module_cache__;
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
/******/ 	/* webpack/runtime/sharing */
/******/ 	!function() {
/******/ 		__webpack_require__.S = {};
/******/ 		var initPromises = {};
/******/ 		var initTokens = {};
/******/ 		__webpack_require__.I = function(name, initScope) {
/******/ 			if(!initScope) initScope = [];
/******/ 			// handling circular init calls
/******/ 			var initToken = initTokens[name];
/******/ 			if(!initToken) initToken = initTokens[name] = {};
/******/ 			if(initScope.indexOf(initToken) >= 0) return;
/******/ 			initScope.push(initToken);
/******/ 			// only runs once
/******/ 			if(initPromises[name]) return initPromises[name];
/******/ 			// creates a new share scope if needed
/******/ 			if(!__webpack_require__.o(__webpack_require__.S, name)) __webpack_require__.S[name] = {};
/******/ 			// runs all init snippets from all modules reachable
/******/ 			var scope = __webpack_require__.S[name];
/******/ 			var warn = function(msg) {
/******/ 				if (typeof console !== "undefined" && console.warn) console.warn(msg);
/******/ 			};
/******/ 			var uniqueName = "silverstripe-module-skeleton";
/******/ 			var register = function(name, version, factory, eager) {
/******/ 				var versions = scope[name] = scope[name] || {};
/******/ 				var activeVersion = versions[version];
/******/ 				if(!activeVersion || (!activeVersion.loaded && (!eager != !activeVersion.eager ? eager : uniqueName > activeVersion.from))) versions[version] = { get: factory, from: uniqueName, eager: !!eager };
/******/ 			};
/******/ 			var initExternal = function(id) {
/******/ 				var handleError = function(err) { warn("Initialization of sharing external failed: " + err); };
/******/ 				try {
/******/ 					var module = __webpack_require__(id);
/******/ 					if(!module) return;
/******/ 					var initFn = function(module) { return module && module.init && module.init(__webpack_require__.S[name], initScope); }
/******/ 					if(module.then) return promises.push(module.then(initFn, handleError));
/******/ 					var initResult = initFn(module);
/******/ 					if(initResult && initResult.then) return promises.push(initResult['catch'](handleError));
/******/ 				} catch(err) { handleError(err); }
/******/ 			}
/******/ 			var promises = [];
/******/ 			switch(name) {
/******/ 			}
/******/ 			if(!promises.length) return initPromises[name] = 1;
/******/ 			return initPromises[name] = Promise.all(promises).then(function() { return initPromises[name] = 1; });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// module cache are used so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	var __webpack_exports__ = __webpack_require__("./client/src/bundles/bundle.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=bundle.js.map