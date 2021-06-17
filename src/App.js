import Header from "./component/header";
import TopBar from "./component/TopBar";
import MainGrid from "./component/MainGrid";
import "./App.css";

function App() {
  return (
    <div className="App">
      {/* This is the horizontal bar on top with the text/icons. */}
      <TopBar />

      {/* The header is currently empty, 
      but we can add text inside it or something else if we want! */}
      <Header />

      {/* This houses the grid boxes on the screen. */}
      <MainGrid />
    </div>
  );
}

export default App;
