import './App.css'
import SampleTable from './sample-table'
import DownloaderDemo from './downloader-demo'
import DataPackage from './forms/datapackage'

function App() {
  return (
    <div className="App">
      <DataPackage />
      <SampleTable />
      <DownloaderDemo />
    </div>
  );
}

export default App;
