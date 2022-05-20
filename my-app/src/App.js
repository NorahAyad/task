import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./component/Home";
import Body from "./component/Body";
import Login from "./component/Login";
import Destail from "./component/Destail";
import Singin from "./component/Singin";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Home />
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Singin" element={<Singin />} />
          <Route path="/Destail" element={<Destail />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
