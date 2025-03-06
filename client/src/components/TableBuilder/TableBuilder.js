import { useState } from 'react';

const ENDPOINT = '/dex/api/1/reports';
function TableBuilder(props) {
  let tables = JSON.parse(props.tables);

  /**
   * @typedef TableInfo
   * @property {String} Table
   * @property {String} ClassName
   */
  const [selectedTable, setSelectedTable] = useState('');
  const [fields, setFields] = useState();

  const [search, setSearch] = useState('');

  const [tableHeaders, setTableHeaders] = useState([]);
  const [tableData, settableData] = useState([]);

  const [groupBy, setGroupBy] = useState('');
  const [limit, setLimit] = useState();

  const reportTable = document.querySelector('[name="ReportTable"]');
  const reportFields = document.querySelector('[name="ReportFields"]');
  const reportGroupBy = document.querySelector('[name="ReportGroupBy"]');
  const reportLimit = document.querySelector('[name="ReportLimit"]');


  /**
   *
   * @param {TableInfo} tableInfo
   */
  function handleClick(tableInfo) {
    setSelectedTable(tableInfo);
    setTableHeaders([]);
    settableData([]);
    setGroupBy('');
    setLimit();

    reportTable.value = tableInfo.ClassName;

    fetch(`${ENDPOINT}/getFields?tableName=${tableInfo.ClassName}`)
      .then(res => res.json())
      .then(data => {
        setFields(Object.keys(data));
      });
  }

  function handleFieldClick(fieldName) {
    setTableHeaders([
      ...tableHeaders,
      fieldName
    ]);

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
      columns: tableHeaders,
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
      credentials: 'same-origin',
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);

        data.map(row => {
          Object.keys(row).map(column => {
            console.log(column);
          });
        });

        settableData(data);
      });
  }

  return (
    <div class="dex-report-builder">

      <div className='dex-builder__tables'>
        <h4>Tables</h4>
        <input name="search" value={search} onChange={e => setSearch(e.target.value)} />

        <div className='dex-menu'>
          {tables.map((table) => (
            <div className="dex-item" onClick={() => handleClick(table)}>{table.Table}</div>
          ))}
        </div>
      </div>

      <div className='dex-builder__fields'>
        <h4>Fields</h4>
        <div className='dex-menu'>
          {fields && fields.map((field) => (
            <div className="dex-item" onClick={() => handleFieldClick(field)}>{field}</div>
          ))}
        </div>
      </div>

      <div className='dex-builder__fields'>
        <h4>Table layout <button onClick={handleTableData}>Get data</button></h4>
        <div className='filters'>
          <div>Group by:</div>

          <select value={groupBy}
            onChange={e => handleGroupBy(e.target.value)}>
            {tableHeaders.map((header, index) => (
              <option key={index}>{header}</option>
            ))}
          </select>

          <div>
            <label>Limit</label>
            <input type="number" name="limit" value={limit} onChange={e => handleSetLimit(e.target.value)} />
          </div>
        </div>

        <div className='dex-menu'>
          <table className='dex-table'>
            <thead>
              <tr>
                {groupBy && (
                  <th>Count from Groupby</th>
                )}

                {tableHeaders && tableHeaders.map((header) => (
                  <th>{header}</th>
                ))}
              </tr>
            </thead>
            {tableData && (
              <tbody>
                {tableData.map((object, index) => (
                  <tr key={index}>
                    {Object.values(object).map((column, i) => (
                      <td key={i}>{column ? column : 'N/A'}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            )}
          </table>
        </div>
      </div>
    </div>
  );
}

export default TableBuilder;
