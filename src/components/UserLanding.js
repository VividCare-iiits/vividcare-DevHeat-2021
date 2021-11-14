import React, {  useEffect } from 'react'
import { getUser } from '../context/UserState';
import './CSS/userLanding.css'
import UserTimeline from "./UserTimeline";

export const UserLanding = () => {
    // let user={};
    let user ;
    useEffect(() => {
        // getUser()
        user =  getUser();
        console.log(user);
        //eslint-disable-next-line
    }, [])
    return (
        <>
            <div className="mainContainer">
                <div className="userMain">
                    <div className="userInfo">
                        <div className="infoContainer">
                            <div className="userLogo">
                                <i className="fas fa-user"></i>
                            </div>
                            <div className="infoText">
                                {/* <h3 className="textInfo">{user.name}</h3> */}
                                {/* <div className="textInfo" id="userAddhar">Aadhar Number: <span>{user.aadhar}</span> </div> */}
                                {/* <div className="textInfo" id="userNumber">Phone Number: <span> {user.phone}</span> </div> */}
                                {/* <div className="textInfo" id="userMail">Email Address: <span>{user.email}</span>  </div> */}
                                <div className="textInfo" id="userEdit"><i className="fas fa-edit"></i> Edit Personal Inforamtion </div>
                            </div>
                        </div>
                    </div>
                    <div className="userOptions">
                        <div className="option" id="userRecord">View Report</div>
                        <div className="option" id="userLocate">Locate Hospital</div>
                        <div className="option" id="userVerify">Verify Report</div>
                    </div>
                    <button>Submit</button>
                    <div className="userContainer">
                        <UserTimeline></UserTimeline>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UserLanding