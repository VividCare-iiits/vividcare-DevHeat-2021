import React, { useState, useRef } from 'react'
import { signup } from '../firebase/firebase'

const Signup = () => {
    const [ender, setEnder] = useState('/enterUserInfo');
    const emailRef = useRef();
    const passwordRef = useRef();
    const passConRef = useRef();
    async function handleSignup() {
        if(passwordRef.current.value === passConRef.current.value) {
            try {
                await signup(emailRef.current.value, passwordRef.current.value);
            }
            catch(error) {
                setEnder('/userLogin')
                alert("Account already exists !")
            }
        }
        else{
            alert("confirm password and password entered are not equal")
            setEnder('/userLogin')
        }
    }
    return (
        <form id="signup" className="log_form" action={ender}>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email:</label>
                <input required ref={emailRef} type="email" className="form-control" id="email" aria-describedby="emailHelp" />
            </div>
            <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input required ref={passwordRef} type="password" className="form-control" id="password" />
            </div>
            <div className="mb-3">
                <label htmlFor="con_password" className="form-label">Confirm Password</label>
                <input required ref={passConRef} type="password" className="form-control" id="con_password" />
            </div>
            <button type="submit" className="btn btn-primary" onClick={handleSignup}>Submit</button>
        </form>
    )
}

export default Signup
