import React, { useState } from 'react'
import HosLogin from './Content/HosLogin'
import HosSignup from './Content/HosSignup'
import './CSS/UserLogin.css'

const HospitalLogin = () => {
    const [login, setLogin] = useState('active')
    const [sign, setSign] = useState('')
    const lo = () => {
        if (login !== 'active' && sign === 'active') {
            setLogin('active');
            setSign('');
            const logi = document.getElementById('login');
            const sig = document.getElementById('signup');
            logi.classList.add('active');
            sig.classList.remove('active');
        }
    }
    const si = () => {
        if (login === 'active' && sign === '') {
            setSign('active');
            setLogin('');
            const logi = document.getElementById('login');
            const sig = document.getElementById('signup');
            logi.classList.remove('active');
            sig.classList.add('active');
        }
    }
    return (
        <>
            <div className="user_login">
                <div className="login" id="log">
                    <div id="login_op" className="opt" onClick={lo}><span>Login In.</span> Already a User?</div>
                    <HosLogin />
                    <div id="sign_op" className="opt" onClick={si}><span>Sign Up.</span> Existing User?</div>
                    <HosSignup />
                </div>
            </div>
        </>
    )
}

export default HospitalLogin