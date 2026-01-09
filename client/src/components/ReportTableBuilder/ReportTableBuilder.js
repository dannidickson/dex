import React from 'react';
import PropTypes from 'prop-types';
import fieldHolder from 'components/FieldHolder/FieldHolder';

const ReportTableBuilder = ({ tableTitle, data }) => (
  <div className="report-builder__card">
    <h3>{tableTitle}</h3>
    <p>Report table builder component</p>
    <p>This will contain the table builder UI</p>

    {/* {data.filterType} */}
    <ReportTables tables={data.tableNames} />
  </div>
);

const ReportTables = ({ tables }) => {
  if (!tables || tables.length === 0) {
    return <p>No tables available</p>;
  }

  return (
    <div className="report-tables">
      <h4>Available Tables</h4>
      <ul>
        {tables.map((table, index) => (
          <li key={index}>
            {table.Table || table.ClassName || table}
          </li>
        ))}
      </ul>
    </div>
  );
};

ReportTables.propTypes = {
  tables: PropTypes.array,
};

ReportTables.defaultProps = {
  tables: [],
};

ReportTableBuilder.propTypes = {
  tableTitle: PropTypes.string,
  data: PropTypes.shape({
    tableNames: PropTypes.array,
  }),
};

ReportTableBuilder.defaultProps = {
  tableTitle: 'Build a Report',
  data: {
    tableNames: [],
  },
};

export { ReportTableBuilder as Component };

export default fieldHolder(ReportTableBuilder);
