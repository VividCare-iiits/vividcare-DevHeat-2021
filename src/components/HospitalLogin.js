import React, { useState } from 'react'
import './CSS/UserLogin.css'

const HospitalLogin = () => {
    const [login, setLogin] = useState('active')
    const [sign, setSign] = useState('')
    const lo = () => {
        if (login !== 'active' && sign === 'active') {
            setLogin('active');
            setSign('');
            const logi = document.getElementById('login');
            const sig = document.getElementById('signup');
            logi.classList.add('active');
            sig.classList.remove('active');
        }
    }
    const si = () => {
        if (login === 'active' && sign === '') {
            setSign('active');
            setLogin('');
            const logi = document.getElementById('login');
            const sig = document.getElementById('signup');
            logi.classList.remove('active');
            sig.classList.add('active');
        }
    }
    return (
        <>
            <div className="user_login">
                <div className="login" id="log">
                    <div id="login_op" className="opt" onClick={lo}><span>Login In.</span> Already a User?</div>
                    <form id="login" className="log_form active" action="/" >
                        <div className="mb-3">
                            <label htmlFor="regID" className="form-label">Registration Number :</label>
                            <input required type="text" className="form-control" id="regID" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input required type="password" className="form-control" id="password" />
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                    <div id="sign_op" className="opt" onClick={si}><span>Sign Up.</span> Existing User?</div>
                    <form id="signup" className="log_form">
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Hospital Name:</label>
                            <input required type="text" className="form-control" id="name" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email:</label>
                            <input required type="email" className="form-control" id="email" aria-describedby="emailHelp" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="phone" className="form-label">Phone:</label>
                            <input required type="number" className="form-control" id="phone" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="regID" className="form-label">Registration Number :</label>
                            <input required type="text" className="form-control" id="regID" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input required type="password" className="form-control" id="password" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="con_password" className="form-label">Confirm Password</label>
                            <input required type="password" className="form-control" id="con_password" />
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default HospitalLogin