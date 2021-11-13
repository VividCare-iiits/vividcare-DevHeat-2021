import React, { useRef } from 'react'
import { hosSignup } from '../firebase/hospitalVerifyFire';

const HosSignup = () => {
    const emailRef = useRef();
    const passwordRef = useRef();
    const passConRef = useRef();
    const handleSignup = async() => {
        const signForm = document.getElementById('signup');
        const infoForm = document.getElementById('hosInfo');
        try {
            await hosSignup(emailRef.current.value, passwordRef.current.value);
            signForm.classList.remove('active');
            infoForm.classList.add('active');
        } catch(error) {
            alert('error!')
        }
    }
    return (
        <div>
            <form id="signup" className="log_form" action="/enterHospitalInfo">
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email:</label>
                    <input ref={emailRef} required type="email" className="form-control" id="email" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input ref={passwordRef} required type="password" className="form-control" id="password" />
                </div>
                <div className="mb-3">
                    <label htmlFor="con_password" className="form-label">Confirm Password</label>
                    <input ref={passConRef} required type="password" className="form-control" id="con_password" />
                </div>
                <button type="submit" className="btn btn-primary" onClick={handleSignup}>Sign Up</button>
            </form>
        </div>
    )
}

export default HosSignup
