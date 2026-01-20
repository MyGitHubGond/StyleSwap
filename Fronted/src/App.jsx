import Sidebar from "./Sidebar/Sidebar";
import "./App.css";
import Name from "./name";

function App() {
  return (
    <div className="App">
      <header className="top-header">
        <Sidebar />
        <h1 className="title">Welcome to StyleSwap</h1>
        <Name />
      </header>
    </div>
  );
}

export default App;
