const Table = ({ rows = "", data }) => {


  if(!rows) return null

  return (
    <table>
      <tr>
        {rows.map(({ title }) => <td>{title}</td>)}
      </tr>
      {data && data.map((val) => {
        const rowData = rows.map(({ dataIndex }) => {
          console.log({a: val[dataIndex], val, dataIndex})
          return (
            <td>{val[dataIndex] || ''} </td>
          )
        })
        return (
          <tr>
            {rowData}
          </tr>
        )
      })}
    </table>
  )

}

export default Table