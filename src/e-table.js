const data = [
  { name: 'bruce', employed: 'no', married: 'no' },
  { name: 'jan', employed: 'yes', married: 'yes' },
  { name: 'malissa', employed: 'yes', married: 'no' },
  { name: 'frank', employed: 'yes', married: 'yes' },
];
console.log('data => ', data);
const ETable = (props) => {
  const _keys = Object.keys(data[0]);
  const _headings = _keys.map((k) => {
    return <td>{k}</td>;
  });
  const _rows = data.map((obj) => {
    return (
      <tr>
        {Object.values(obj).map((v) => {
          return <td>{v}</td>;
        })}
      </tr>
    );
  });

  //   const _values = data.forEach((r) => {
  //     r.map((v) => {
  //       return <td>{v}</td>;
  //     });
  //   });

  console.log(_headings);
  console.log('rows => ', _rows);
  return (
    <div className="e-table">
      <h3>ETable</h3>
      <table>
        <thead>
          <tr>{_headings}</tr>
        </thead>
        <tbody>{_rows}</tbody>
      </table>
    </div>
  );
};

export default ETable;
