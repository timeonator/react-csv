import './App.css';
import SampleTable from './sample-table';
import DownloaderDemo from './downloader-demo';
import DataPackage from './forms/datapackage';
import ATable from './a-table';
import DanfoTable from './danfo-table';
import ETable from './e-table';

function App() {
  return (
    <div className="App">
      <DataPackage />
      <SampleTable />
      <DownloaderDemo />
      <ATable />
      <h4>Danfo Table</h4>
      <DanfoTable />
      <ETable />
    </div>
  );
}

export default App;
