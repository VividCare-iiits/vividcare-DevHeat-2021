import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

// import Web3 from 'web3';
import Main from './Main';
import HospitalLogin from './HospitalLogin'
import UserLanding from './UserLanding'
import UserTimeline from './UserTimeline'
import UserLogin from './UserLogin'
import EnterHos from './Content/EnterHos';
import Web3 from 'web3';

class App extends Component {

  // componentWillMount(){
  //   this.loadBlockchainData();
  // }

  // async loadBlockchainData() {
  //   const Web3 = new Web3(Web3.givenProvider || "https://localhost:8545");
  //   const network = await Web3.eth.net.getNetworkType()
  //   console.log("network: " ,network);



  // }

  render() {
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
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App