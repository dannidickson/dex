import React from 'react';

function Dashboard(props) {
  const types = props.CustomReports || [];
  return (
    <div>
      <div>Reports</div>
      <ul>
        {types.map((ele) => (
          <li key={ele.ID}>{ele.Title} {ele.ID}</li>
        ))}
      </ul>
    </div>
  );
}

export default Dashboard;
