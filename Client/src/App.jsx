import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import StaffLogin from "./Components/StaffLogin";
import Dashboard from "./Components/Dashboard";
import Login from "./Components/StaffLogin";
import UserRegister from "./Components/UserRegister";
import Navbar from "./Components/Navbar";
import AppointScheduleUser from "./Components/AppointScheduleUser"
import History from "./Components/HistoryUser"
// import AppointScheduling from './Components/AppointScheduling';



// navbar ko conditionally rendering Karenge --
function AppWrapper() {
  const location = useLocation();
  // jaha navbar hide karna hai un routes ka list
  const hideNavbarRoutes = ["/", "/staff", "/dashboard", "/login"];
  // agar current path inme se hai to navbar hide hoga
  const hideNavbar = hideNavbarRoutes.includes(location.pathname);
  return (
    <>
      {!hideNavbar && <Navbar />}

      <div className="pt-16">
        <Routes>
          {/* User Register (Homepage) */}
          <Route path="/" element={<UserRegister />} />
          <Route path="/appointment" element={<AppointScheduleUser/>}/>
          <Route path="/history" element={<History/>}/>


          {/* Staff Login */}
          <Route path="/staff" element={<StaffLogin />} />

          {/* Staff Dashboard */}
          <Route path="/dashboard" element={<Dashboard />} />

          {/* Duplicate login route */}
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </>
  );
}
const App = () => (
  
    <AppWrapper />
 
);

export default App;
