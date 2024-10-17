import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home'; // Adjust the import paths accordingly
import VolunteerLogin from './Pages/VolunteerLogin';
import VolunteerRegister from './Pages/VolunteerRegister';
import VolunteerPage from './Pages/VolunteerPage';
import UserLogin from './Pages/Userlogin';
import UserRegister from './Pages/UserRegister';
import AdminLogin from './Pages/AdminLogin';
import AdminRegister from './Pages/AdminRegister';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/volunteer-login" element={<VolunteerLogin />} />
        <Route path="/volunteer-register" element={<VolunteerRegister/>}/>
        <Route path="/volunteer-page" element={<VolunteerPage/>}/>
        <Route path="/user-login" element={<UserLogin/>}/>
        <Route path="/user-register" element={<UserRegister/>}/>
        <Route path="/admin-login" element={<AdminLogin/>}/>
        <Route path="/admin-register" element={<AdminRegister/>}/>
      </Routes>
    </Router>
  );
};

export default App;
