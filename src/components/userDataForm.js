import React, { useRef } from 'react'
import './CSS/userDataForm.css'


const userDataForm = () => {

    const nameRef = useRef(null)
    const emailRef = useRef()
    const phoneNumberRef = useRef()
    const aadharNumberRef = useRef()
    const passwordRef = useRef()
    const confirmPasswordRef = useRef()




    return (
        <>
            <div className="user_login">
                <div className="login" id="log">

                    <div id="sign_op" className="opt" >Information</div>


                    <form action="/userLanding" method="post" >
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Name:</label>
                            <input required ref={nameRef} type="text" className="form-control" id="name" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email:</label>
                            <input required ref={emailRef} type="email" className="form-control" id="email" aria-describedby="emailHelp" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="phone" className="form-label">Phone:</label>
                            <input required ref={phoneNumberRef} type="number" className="form-control" id="phone" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="aadhar" className="form-label">Aadhar No.:</label>
                            <input required ref={aadharNumberRef} type="number" className="form-control" id="aadhar" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input required ref={passwordRef} type="password" className="form-control" id="password" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="con_password" className="form-label">Confirm Password</label>
                            <input required ref={confirmPasswordRef} type="password" className="form-control" id="con_password" />
                        </div>

                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>

        </>
    )
}

export default userDataForm