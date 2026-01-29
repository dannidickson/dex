import React from 'react';
import PropTypes from 'prop-types';
import fieldHolder from 'components/FieldHolder/FieldHolder';

const ReportTableBuilder = ({ tableTitle, data }) => (
  <div className="report-builder__container">

    <div className="report-builder__menu-holder">
      <div className="report-builder__menu">
        <ReportTables tables={data.tableNames} />
      </div>

      <div className="report-builder__second-menu">
        <h4>SELECTED FIELDS</h4>
      </div>
    </div>

    <div className="report-builder__table-container">
      <div className="report-builder__table-header">
        <h3 className="report-builder__table-title">Table layout</h3>
      </div>
    </div>
  </div>
);

const ReportTables = ({ tables }) => {
  if (!tables || tables.length === 0) {
    return <p>No tables available</p>;
  }

  return (
    <div className="report-tables">
      <h4>TABLES</h4>
      <ul className="report-tables__list">
        {tables.map((table, index) => (
          <li className="report-tables__item" key={index}>
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
