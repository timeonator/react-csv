import './App.css';
import * as dfd from 'danfojs/src/index';
import Table from './table';
import * as _ from 'lodash';

function DanfoTable() {
  const ds = { pig: [20, 18, 489, 675, 1776], horse: [4, 25, 281, 600, 1900] };
  const index = { index: [1990, 1997, 2003, 2009, 2014] };
  const df = new dfd.DataFrame(ds, index);

  //   console.log('df => ', df);
  //   console.log(df.column_names);

  const columns = df.column_names.map((v, i) => {
    return { Header: v, accessor: v };
  });

  return (
    <div className="App">
      <Table columns={columns} data={df.data} />
    </div>
  );
}
export default DanfoTable;
