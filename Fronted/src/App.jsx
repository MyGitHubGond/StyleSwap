import Sidebar from "./Sidebar/Sidebar";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="top-header">
        <Sidebar />
        <h1 className="title">Welcome to StyleSwap</h1>
      </header>
    </div>
  );
}

export default App;
