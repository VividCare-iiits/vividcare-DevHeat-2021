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
import EnterUserinfo from './Content/enterUserinfo'
import EnterHos from './Content/EnterHos';

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
          <Route path="/enterUserinfo" element={<EnterUserinfo />} />
          <Route path="/enterHospitalInfo" element={<EnterHos />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App