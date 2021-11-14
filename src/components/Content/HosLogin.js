import React, { useRef } from 'react'
import { loginHospital } from '../../context/HospitalState';

const HosLogin = () => {
    const emailRef = useRef();
    const passwordRef = useRef();
    const handleLogin = async (e) => {
        e.preventDefault();
        const token = await loginHospital( emailRef.current.value, passwordRef.current.value )
        console.log(token)
    }
    return (
        <div>
            <form id="login" className="log_form active" action="/" onSubmit={handleLogin} >
                <div className="mb-3">
                    <label htmlFor="hosEmail" className="form-label">Registration Email-ID :</label>
                    <input type="email" className="form-control" id="email" name='email' aria-describedby="emailHelp" ref={emailRef} />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" name='password' ref={passwordRef} />
                </div>
                <button type="submit" className="btn btn-primary">Log In</button>
            </form>
        </div>
    )
}

export default HosLogin
