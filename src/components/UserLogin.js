import React, { useState } from 'react'
import Login from './Content/Login'
import Signup from './Content/Signup'
import './CSS/UserLogin.css'

const UserLogin = () => {
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
        <div>
            <div className="user_login">
                <div className="login" id="log">
                    <div id="login_op" className="opt" onClick={lo}><span>Login In.</span> Already a User?</div>

                    {/* user signin page */}

                    <Login />

                    {/* signup form  */}
                    <div id="sign_op" className="opt" onClick={si}><span>Sign Up.</span> Existing User?</div>

                    <Signup />
                </div>
            </div>
        </div>
    )
}

export default UserLogin