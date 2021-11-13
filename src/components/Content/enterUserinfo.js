import React, { useState, useRef, useEffect } from 'react'
import { database } from '../firebase/db'
import { collection, addDoc } from '@firebase/firestore'
import { useHistory } from 'react-router'
import { ToastContainer, toast } from 'react-toastify'
// import { useAuth } from '../firebase/firebase'




const EnterUserinfo = () => {

    // const nameRef = useRef(null)
    // const emailRef = useRef()
    // const phoneNumberRef = useRef()
    // const aadharNumberRef = useRef()
    // const passwordRef = useRef()
    // const confirmPasswordRef = useRef()

    const [name, setname] = useState('')
    const [email, setemail] = useState('{currentUser?.email}')
    const [phoneNumber, setphoneNumber] = useState(null)
    const [aadharNumber, setaadharNumber] = useState(null)
    const [opt, setopt] = useState(null)
    const [age, setage] = useState(null)
    // const currentUser = useAuth();

    // let history = useHistory();
    // const [userData, setuserData] = useState([]);
    const databseRef = collection(database , 'react-firebase');


    

    const addData = ()=>{

        addDoc(databseRef , {
            Name: name,
            Email: email,
            PhoneNumber: phoneNumber,
            AadharNumber: aadharNumber
        }).then(()=>{

            toast.success("Data sent successfully",{
                pauseOnHover: true
            })
        }).catch(()=>{
            console.log("data is NOT sent an error occurs");
        })

    }





    return (
        <>
            <div className="user_login">
                <div className="login" id="log">

                    <div id="sign_op" className="opt" >Information</div>
                    <ToastContainer />

                    <form action="/userLanding" method="post" >
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Name:</label>
                            <input required 
                            // ref={nameRef} 
                            type="text" 
                            className="form-control" id="name" 
                            onChange={(e) => setname(e.target.value)} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email:</label>
                            <input required 
                            // ref={emailRef} 
                            type="email" 
                            className="form-control" id="email" aria-describedby="emailHelp" 
                            onChange={(e) => setemail(e.target.value)} 
                            // value={currentUser?.email} 
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="phone" className="form-label">Phone:</label>
                            <input required 
                            // ref={phoneNumberRef} 
                            type="number" 
                            className="form-control" id="phone"
                            onChange={(e) => setphoneNumber(e.target.value)} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="aadhar" className="form-label">Aadhar No.:</label>
                            <input required 
                            // ref={aadharNumberRef} 
                            type="number" 
                            className="form-control" id="aadhar"
                            onChange={(e) => setaadharNumber(e.target.value)} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">otp</label>
                            <input required 
                            // ref={passwordRef} 
                            type="password" 
                            className="form-control" id="password"
                            onChange={(e) => setopt(e.target.value)} />
                        </div>
                        {/* <div className="mb-3">
                            <label htmlFor="con_password" className="form-label">Confirm otp</label>
                            <input required ref={confirmPasswordRef} type="password" className="form-control" id="con_password" />
                        </div> */}

                        <button type="submit" className="btn btn-primary" onClick={addData} >Submit</button>
                    </form>
                </div>
            </div>

        </>
    )
}


export default EnterUserinfo

