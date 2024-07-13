import React from "react";
import './LoginSignup.css';
import user_icon from '../../Assets/user.png';
import email_icon from '../../Assets/mail.png';
import password_icon from '../../Assets/pw.png';



const LoginSignup=()=>
{
    return(
        <div className="container">

            <div className="header">
                <div className="text">Signup</div>
                <div className="underline"></div>
            </div>
            <div className="inputs">
                <div className="input">
                    <img src={user_icon} alt='user' />
                    <input type="text" placeholder="Name" />
                </div>
                <div className="input">
                    <img src={email_icon} alt="email" />
                    <input type="email" placeholder="Email" />
                </div>
                <div className="input">
                    <img src={password_icon} alt="pw" />
                    <input type="password" placeholder="Password" />
                </div>
            </div>
            <div className="forgot-password">Lost password<span>click here</span>
                <div className="submit-container">
                    <button className="submit">Signup</button>
                    <button className="submit">Login</button>
                </div>
            </div>
        </div>
    )
}
export default LoginSignup;