import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Main from './Main';
import HospitalLogin from './HospitalLogin'
import UserLanding from './UserLanding'
import UserTimeline from './UserTimeline'
import UserLogin from './UserLogin'
import EnterHos from './Content/EnterHos';
import HospitalLanding from './HospitalLanding';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" exact element={<Main />} />
          <Route path="/userLogin" element={<UserLogin />} />
          <Route path="/hospitalLogin" element={<HospitalLogin />} />
          <Route path="/userLanding" element={<UserLanding />} />
          <Route path="/userTimeline" element={<UserTimeline />} />
          <Route path="/enterHospitalInfo" element={<EnterHos />} />
<<<<<<< HEAD
          <Route path="/hospitallanding" element={<HospitalLanding />} />
=======
          <Route path="/hospitalLanding" element={<HospitalLanding />} />
>>>>>>> 8cd544ed7562edf24e1e61e579df839a5b2277db
        </Routes>
      </div>
    </Router>
  )
}

export default App