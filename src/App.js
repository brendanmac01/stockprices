import './App.css';
// importing Routes
import { Routes, Route } from "react-router-dom";

// importing "page" components
import Main from "./pages/Main";
import Stocks from "./pages/Stocks";
import Price from "./pages/Price";
import About from "./pages/About";

// import "UI" componennts
import Nav from "./components/Nav";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/stocks/:symbol" element={<Price />} />
        <Route path="/stocks" element={<Stocks />} />
      </Routes>
    </div>
  );
}

export default App;