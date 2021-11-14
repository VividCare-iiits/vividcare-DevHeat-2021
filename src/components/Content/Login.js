import React, { useRef } from 'react';
import { loginUser } from '../../context/UserState';

const Login = () => {
    const emailRef = useRef();
    const passwordRef = useRef();
    const handleLogin = async (e) => {
        e.preventDefault();
        const token = await loginUser( emailRef.current.value, passwordRef.current.value )
        console.log(token)
    }
    return (
        <div>
            <form id="login" className="log_form active" onSubmit={handleLogin}>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
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

export default Login;