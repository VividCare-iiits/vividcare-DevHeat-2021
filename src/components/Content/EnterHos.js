import React, { useRef } from 'react'
import '../CSS/UserLogin.css'
import { hosEnterdata, hosuseAuth } from '../firebase/hospitalVerifyFire'

const EnterHos = () => {
    const currentUser = hosuseAuth();
    const nameRef = useRef();
    const phoneRef = useRef();
    const regidRef = useRef();
    const finalSign = async() => {
        try {
            await hosEnterdata(nameRef, phoneRef, regidRef)
        } catch (error) {
            alert(`Error!`)
        }
    }
    return (
        <div className="user_login">
            <div className="login" id="log">
                <form className="log_form active">
                    <div>{`Currently logged in as ${currentUser}`}</div>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Hospital Name:</label>
                        <input required ref={nameRef} type="text" className="form-control" id="name" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="phone" className="form-label">Phone:</label>
                        <input required ref={phoneRef} type="number" className="form-control" id="phone" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="regID" className="form-label">Registration Number :</label>
                        <input required ref={regidRef} type="text" className="form-control" id="regID" />
                    </div>
                    <button type="submit" className="btn btn-primary" style={{width: "200px"}} onClick={finalSign} >Complete Sign Up</button>
                </form>
            </div>
        </div>

    )
}

export default EnterHos
