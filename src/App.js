import Header from "./component/header";
import TopBar from './component/topBar';
import ComponentGrid from "./component/componentGrid";
import './App.css';

function App() {
  return (
    <div className="App">
    <TopBar/>
    <Header/>
    <ComponentGrid/>
    </div>
  );
}

export default App;
