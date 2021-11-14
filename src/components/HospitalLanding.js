import React, {  useEffect } from 'react'
import './CSS/HospitalLanding.css'
import { getUser } from '../context/UserState';
import UserTimeline from "./UserTimeline";

export const HospitalLanding = () => {
    let user;
    useEffect(async () => {
        // getUser()
        user = await getUser();
        console.log(user)
        //eslint-disable-next-line
    }, [])


    return (
        <div>
            <div className="mainContainer">
                <div className="userMain">
                    <div className="userInfo">
                        <div className="infoContainer">
                            <div className="userLogo">
                                <i className="fas fa-user"></i>
                            </div>
                            <div className="infoText">
                                <h3 className="textInfo">{user.name}</h3>
                                <div className="textInfo" id="userAddhar">Aadhar Number: <span>{user.aadhar}</span> </div>
                                <div className="textInfo" id="userNumber">Phone Number: <span> {user.phone}</span> </div>
                                <div className="textInfo" id="userMail">Email Address: <span>{user.email}</span>  </div>
                                <div className="textInfo" id="userEdit"><i className="fas fa-edit"></i> Edit Personal Inforamtion </div>
                            </div>
                        </div>
                    </div>
                    <div className="hospitalOptions">
                        <div className="option" id="userRecord">View Report</div>
                        <div className="option" id="userLocate">Locate Hospital</div>
                        <div className="option" id="userEdit">Edit Report</div>
                    </div>
                    <button>Submit</button>
                    <div className="userContainer">
                        <UserTimeline></UserTimeline>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HospitalLanding
