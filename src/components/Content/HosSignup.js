import React, { useRef } from 'react'
import { signupHospital } from '../../context/HospitalState';

const HosSignup = () => {
    const emailRef = useRef();
    const passwordRef = useRef();
    const phoneRef = useRef();
    const nameRef = useRef();
    const regidRef = useRef();
    const handleSignup = async(e) => {
        e.preventDefault();
        const token = signupHospital(nameRef.current.value, emailRef.current.value, passwordRef.current.value, regidRef.current.value,phoneRef.current.value);
        console.log(token)
    }
    return (
        <div>
            <form id="signup" className="log_form" action="/enterHospitalInfo" onSubmit={handleSignup}>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email:</label>
                    <input required type="email" className="form-control" id="email" name='email' aria-describedby="emailHelp" ref={emailRef} />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input required type="password" className="form-control" id="password" name='password' ref={passwordRef} />
                </div>
                <div className="mb-3">
                        <label htmlFor="name" className="form-label">Hospital Name:</label>
                        <input required ref={nameRef} type="text" className="form-control" id="name" name='name' />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="phone" className="form-label">Phone:</label>
                        <input required ref={phoneRef} type="number" className="form-control" id="phone" name='phone' />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="regID" className="form-label">Registration Number :</label>
                        <input required ref={regidRef} type="text" className="form-control" id="regID" name='regID' />
                    </div>
                <button type="submit" className="btn btn-primary">Sign Up</button>
            </form>
        </div>
    )
}

export default HosSignup
