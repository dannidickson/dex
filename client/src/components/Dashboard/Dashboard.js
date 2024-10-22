function Dashboard(props) {
  let types = props.CustomReports;
  return (
    <div>
      <div>Reports</div>
      <ul>
        {types.map(ele => (
          <li>{ele.Title} {ele.ID}</li>
        ))}
      </ul>
    </div>
  )
}

export default Dashboard;
