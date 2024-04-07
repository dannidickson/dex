function TableGraph(props) {
  let types = props.graphTypes;
  return (
    <div>
      <div>Graphs and options to show will go here</div>
      <ul>
        {types.map(ele => (
          <li>{ele}</li>
        ))}
      </ul>
    </div>
  )
}

export default TableGraph;
