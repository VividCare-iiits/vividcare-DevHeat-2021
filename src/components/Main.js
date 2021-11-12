import React from 'react'
import { Link } from 'react-router-dom'
import './CSS/main.css'

const Main = () => {
    return (
        <>
            <div className="main">
                <div className="options active" id="option">
                    <Link to="/hospitalLogin" className="user_type" ><i className="fas fa-hospital-user"></i>Hospital</Link>
                    <Link to="/userLogin" className="user_type"><i className="fas fa-user"></i>Personal</Link>
                </div>
            </div>
        </>
    )
}

export default Main
