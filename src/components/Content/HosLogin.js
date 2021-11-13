import React, { useRef } from 'react'
import { hosLogin } from '../firebase/hospitalVerifyFire';

const HosLogin = () => {
    const emailRef = useRef();
    const passwordRef = useRef();
    const handleLogin = async (e) => {
        try {
            await hosLogin(emailRef.current.value, passwordRef.current.value)
            console.log(`Logged In`)
            e.preventDefault()
        } catch (error) {
            alert("Error")
        }
    }
    return (
        <div>
            <form id="login" className="log_form active" action="/" >
                <div className="mb-3">
                    <label htmlFor="hosEmail" className="form-label">Registration Email-ID :</label>
                    <input ref={emailRef} required type="email" className="form-control" id="hosEmail" />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input ref={passwordRef} required type="password" className="form-control" id="password" />
                </div>
                <button type="submit" className="btn btn-primary" onClick={handleLogin}>Log In</button>
            </form>
        </div>
    )
}

export default HosLogin
