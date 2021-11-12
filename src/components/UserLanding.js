import React from 'react'
import './CSS/userLanding.css'
import UserTimeline from "./UserTimeline";

const UserLanding = () => {
    return (
        <div className="mainContainer">
            <div className="userMain">
                <div className="userInfo">
                    <div className="infoContainer">
                        <div className="userLogo">
                            <i className="fas fa-user"></i>
                        </div>
                        <div className="infoText">
                            <h3 className="textInfo">User Name</h3>
                            <div className="textInfo"  id="userAddhar">Aadhar Number: <span>XXXX XXXX XXXX</span> </div>
                            <div className="textInfo"  id="userNumber">Phone Number: <span> XXXXX XXXXX</span> </div>
                            <div className="textInfo"  id="userMail">Email Address: <span>xxxxxxxx@gmail.com</span>  </div>
                            <div className="textInfo" id="userEdit"><i className="fas fa-edit"></i> Edit Personal Inforamtion </div>
                        </div>
                    </div>
                </div>
                <div className="userOptions">
                    <div className="option" id="userRecord">View Report</div>  
                    <div className="option" id="userLocate">Locate Hospital</div>  
                    <div className="option" id="userVerify">Verify Report</div>  
                </div>
                <div className="userContainer">
                    <UserTimeline></UserTimeline>
                </div>
            </div>
        </div>
    )
}

export default UserLanding
