"use strict";
(self["webpackChunksilverstripe_module_skeleton"] = self["webpackChunksilverstripe_module_skeleton"] || []).push([["client_src_components_TableBuilder_TableBuilder_js"],{

/***/ "./client/src/components/TableBuilder/TableBuilder.js":
/*!************************************************************!*\
  !*** ./client/src/components/TableBuilder/TableBuilder.js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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

/***/ })

}]);
//# sourceMappingURL=client_src_components_TableBuilder_TableBuilder_js.js.map