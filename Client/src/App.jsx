import { Routes, Route } from 'react-router-dom';
import StaffLogin from './Components/StaffLogin';
import Dashboard from "./Components/Dashboard"; 
import Login from "./Components/StaffLogin"


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<StaffLogin />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default App;
