import React from 'react';
import "../../Components/Sign Up Page/Style/sign-up.css"
import Line from "../../assets/images/line.png"
import GoogleLogo from "../../assets/images/google-logo.png"

const SignUp = () => {
     return (
       <>
         <form className="sign-up">
               <div className="image">
                    <img src="../../../src/assets/images/Logo-Sign-Up.png" alt="" />
               </div>
               <div className="firstname">
                    <p className="firstname-text font-secondary">First Name</p>
                    <div className="firstname-input font-secondary">
                         <input type="name" placeholder="Enter First Name" />
                    </div>
               </div>
               <div className="lastname">
                    <p className="lastname-text font-secondary">Last Name</p>
                    <div className="lastname-input font-secondary">
                         <input type="name" placeholder="Enter Last Name" />
                    </div>
               </div>
               <div className="email">
                    <p className="email-text font-secondary">Email address</p>
                    <div className="email-input font-secondary">
                         <input type="email" placeholder="Enter email" />
                    </div>
               </div>
               <div className="password">
                    <p className="password-text font-secondary">Password</p>
                    <div className="password-input font-secondary">
                         <input type="password" placeholder="Enter password" />
                    </div>
               </div>
               <div className="login-button font-secondary">
                    <button type="submit">Log In</button>
               </div>
               <div className="log-in font-secondary">
                    <p>Already have an account? <a href="#">Log In</a></p>
               </div>
               <div className="line">
                    <img src={Line} alt="line image" />
               </div>
               <div className="google">
                    <a href="#"><img src={GoogleLogo} alt="google logo" /></a>
               </div>
         </form>
       </>
     );
   };
 export default SignUp;
