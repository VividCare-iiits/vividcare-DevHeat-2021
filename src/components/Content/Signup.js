import React, { useRef } from 'react'

const Signup = () => {
    const emailRef = useRef();
    const passwordRef = useRef();
    const nameRef = useRef();
    const phoneRef = useRef();
    const aadharRef = useRef();
    const handleSignup = async (e) => {
        e.preventDefault();
        let url = "http://localhost:5000/api/auth/signup"
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name: nameRef.current.value, email: emailRef.current.value, password: passwordRef.current.value, aadhar: aadharRef.current.value, phone: phoneRef.current.value})
        });
        const json = await response.json();
        console.log(json);
    }

    return (
        <form id="signup" className="log_form" onSubmit={handleSignup}>
            <div className="mb-3">
                <label htmlFor="name" className="form-label">Name: </label>
                <input type="text" className="form-control" id="name" name='name' ref={nameRef} />
            </div>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email address</label>
                <input type="email" className="form-control" id="email" name='email' aria-describedby="emailHelp" ref={emailRef} />
            </div>
            <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input type="password" className="form-control" id="password" name='password' ref={passwordRef} />
            </div>
            <div className="mb-3">
                <label htmlFor="phone" className="form-label">Phone Number: </label>
                <input type="number" className="form-control" id="phone" name='phone' ref={phoneRef} />
            </div>
            <div className="mb-3">
                <label htmlFor="aadhar" className="form-label">Aadhar Number: </label>
                <input type="number" className="form-control" id="aadhar" name='aadhar' ref={aadharRef} />
            </div>
            <button type="submit" className="btn btn-primary">Sign Up</button>
        </form>
    )
}

export default Signup
