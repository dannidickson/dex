import React from 'react';

function TableGraph(props) {
  const types = props.graphTypes || [];
  return (
    <div>
      <div>Graphs and options to show will go here</div>
      <ul>
        {types.map((ele) => (
          <li key={ele}>{ele}</li>
        ))}
      </ul>
    </div>
  );
}

export default TableGraph;
