import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./component/NavBarHome";
import Login from "./component/Login";
import Destail from "./component/Career/Destail";
import Singin from "./component/Singin";
import Category from "./component/Career/Category"
import Jobs from "./component/Career/Jobs";
import Apply from "./component/Career/Apply";
import Admin from "./component/Admain/HomeAdmin"
import CreateOrder from "./component/Admain/CreateOrder"
import AcceptanceOrder from "./component/Admain/AcceptanceOrder"
import RejectionOrder from "./component/Admain/RejectionOrder"
import JobsAdmin from "./component/Admain/JobsAdmin"
import CreateOrderDetails from"./component/Admain/CreateOrderDetails"
import StatusUsers from"./component/Career/StatusUsers"
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Home />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/singin" element={<Singin />} />
          <Route path="/destail/:id" element={<Destail />} />
          <Route path="/" element={<Jobs />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/category" element={<Category />} />
          <Route path="/apply" element={<Apply />} />
          <Route path="/reject" element={<RejectionOrder />} />
          <Route path="/jobsAdmin" element={<JobsAdmin />} />
          <Route path="/accept" element={<AcceptanceOrder />} />
          <Route path="/create" element={<CreateOrder />} />
          <Route path="/create-Details" element={<CreateOrderDetails/>} />
          <Route path="/create-Details" element={<CreateOrderDetails/>} />
          <Route path="/status" element={<StatusUsers/>} />
          StatusUsers
       StatusUsers
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
