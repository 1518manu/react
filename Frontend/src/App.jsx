
// import Home from './Home';
// import Volunteer from './Pages/VolunteerLogin'
// import './index.css';

// const App = () => {
//   return (
//     <div className="App">
//       <Home />
//       <Volunteer/>
//     </div>
//   );
// };

// export default App;


// import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home'; // Adjust the import paths accordingly
import VolunteerLogin from './Pages/VolunteerLogin';
import VolunteerRegister from './Pages/VolunteerRegister';
import VolunteerPage from './Pages/VolunteerPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/volunteer-login" element={<VolunteerLogin />} />
        <Route path="/volunteer-register" element={<VolunteerRegister/>}/>
        <Route path="/volunteer-page" element={<VolunteerPage/>}/>
      </Routes>
    </Router>
  );
};

export default App;
