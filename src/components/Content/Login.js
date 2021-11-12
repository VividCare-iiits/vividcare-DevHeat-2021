import React, { useState, useRef } from 'react';
import { useAuth, login } from '../firebase/firebase'

const Login = () => {
    const [ender, setEnder] = useState('/enterUserInfo');
    const [loading, setLoading] = useState(false);
    const emailRef = useRef();
    const passwordRef = useRef();
    async function handleLogin() {
        setLoading(true);
        try {
            await login(emailRef.current.value, passwordRef.current.value)
            console.log(`Logined`)
        }
        catch {
            setEnder('/userLogin')
            alert("Error!")
        }
        setLoading(false);
    }
    return (
        <div>
            <form id="login" className="log_form active" action={ender}>
                <div className="mb-3">
                    <label htmlFor="email/phone" className="form-label">Email / Phone No. :</label>
                    <input ref={emailRef} required type="text" className="form-control" id="email/phone" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input ref={passwordRef} required type="password" className="form-control" id="password" />
                </div>
                <button disabled={loading} type="submit" className="btn btn-primary" onClick={handleLogin}>Submit</button>
            </form>
        </div>
    )
}

export default Login
