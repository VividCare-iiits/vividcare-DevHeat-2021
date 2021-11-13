import React, { useState, useRef, useEffect } from 'react'
// import { database } from '../firebase/db'
// import { collection, addDoc } from '@firebase/firestore'
// import { useHistory } from 'react-router'
// import { ToastContainer, toast } from 'react-toastify'
// import { useAuth } from '../firebase/firebase'




const EnterUserinfo = () => {


    // const [name, setname] = useState('')
    // const [email, setemail] = useState('{currentUser?.email}')
    // const [phoneNumber, setphoneNumber] = useState(null)
    // const [aadharNumber, setaadharNumber] = useState(null)
    // const [opt, setopt] = useState(null)
    // const [age, setage] = useState(null)

    // const [userData, setuserData] = useState([]);
    // const databseRef = collection(database , 'react-firebase');




    // const addData = ()=>{

    //     addDoc(databseRef , {
    //         Name: name,
    //         Email: email,
    //         PhoneNumber: phoneNumber,
    //         AadharNumber: aadharNumber
    //     }).then(()=>{

    //         toast.success("Data sent successfully",{
    //             pauseOnHover: true
    //         })
    //     }).catch(()=>{
    //         console.log("data is NOT sent an error occurs");
    //     })

    // }

    const [userData, setuserData] = useState({
        firstname: "",
        lastname: "",
        email: "",
        phoneNumber: "",
        aadharNumber: "",
        age: ""
    });

    let name, value;
    const getUserData = async (event) => {

        name = event.target.name;
        value = event.target.value;


        setuserData({...userData, [name]: value });
        // console.log(userData);


    }

    // connecting with firebase raltimedatabase
    const submitData = async (event) => {
        event.preventDefault();

        const { firstname, lastname, email, phoneNumber, aadharNumber, age } = userData;
        // console.log(firstname);

        if (firstname && lastname && email && phoneNumber && aadharNumber && age) {

            const res = fetch(
                "https://otp-verify-a2e17-default-rtdb.firebaseio.com/userDatabase.json",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        firstname,
                        lastname,
                        email,
                        phoneNumber,
                        aadharNumber,
                        age
                    })
                });

            if (res) {
                setuserData({
                    firstname: "",
                    lastname: "",
                    email: "",
                    phoneNumber: "",
                    aadharNumber: "",
                    age: ""
                })
                alert("Data Stored");
            } else {
                alert("Fill the Data properly");
            }
        } else {
            alert("Fill the Data properly");

        }

    }




    return (
        <>
            <div className="user_login">
                <div className="login" id="log">

                    <div id="sign_op" className="opt" >Information</div>
                    {/* <ToastContainer /> */}

                    <form action="/userLanding" method="POST" >
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">FirstName:</label>
                            <input required
                                // ref={nameRef} 
                                type="text"
                                className="form-control" id="name"
                                name="firstname"
                                placeholder="FirstName"
                                value={userData.firstname}
                                onChange={getUserData}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="con_password" className="form-label">LastName</label>
                            <input required
                                type="text"
                                className="form-control" id="con_password"
                                name="lastname"
                                placeholder="LastName"
                                value={ userData.lastname }
                                onChange={getUserData}
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email:</label>
                            <input required
                                type="email"
                                className="form-control" id="email" aria-describedby="emailHelp"
                                name="email"
                                placeholder="email"
                                value={userData.email}
                                onChange={getUserData}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="phone" className="form-label">Phone:</label>
                            <input required

                                type="number"
                                className="form-control" id="phone"
                                name="phoneNumber"
                                placeholder=""
                                value={userData.phoneNumber}
                                onChange={getUserData}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="aadhar" className="form-label">Aadhar No.:</label>
                            <input required

                                type="number"
                                className="form-control" id="aadhar"
                                name="aadharNumber"
                                placeholder="AADHAR NUMBER"
                                value={userData.aadharNumber}
                                onChange={getUserData}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="number" className="form-label">Age</label>
                            <input required

                                type="password"
                                className="form-control" id="password"
                            name="age" 
                            placeholder= "Age"
                            value={userData.age}
                            onChange={getUserData}
                            />
                        </div>


                        <button type="submit" className="btn btn-primary" onClick={submitData} >Submit</button>
                    </form>
                </div>
            </div>

        </>
    )
}


export default EnterUserinfo

