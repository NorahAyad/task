import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./component/NavBarHome";
import Login from "./component/Login";
import Destail from "./component/Career Page/Destail";
import Singin from "./component/Singin";
import Category from "./component/Career Page/Category"
import Jobs from "./component/Career Page/Jobs";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Home />
        <Routes>
          <Route path="/Login" element={<Login />} />
          <Route path="/Singin" element={<Singin />} />
          <Route path="/Destail/:id" element={<Destail />} />
          <Route path="/" element={<Jobs />} />
          <Route path="/Category" element={<Category />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
