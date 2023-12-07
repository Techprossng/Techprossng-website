import React from 'react';
import "../../Components/Sign In Page/Style/sign-in.css"
import Line from "../../assets/images/line.png"
import GoogleLogo from "../../assets/images/google-logo.png"


const SignIn = () => {
     return (
       <>
         <form className="sign-in" method="GET">
               <div className="image">
                    <img src="../../../src/assets/images/Logo-Sign-In.png" alt="" />
               </div>
               <div className="email">
                    <p className="email-text font-secondary">Email address</p>
                    <div className="email-input">
                         <input type="email" placeholder="Enter email" />
                    </div>
               </div>
               <div className="password">
                    <p className="password-text font-secondary">Password</p>
                    <div className="password-input">
                         <input type="password" placeholder="Enter password" />
                    </div>
               </div>
               <div className="login-button font-secondary">
                    <button type="submit">Log In</button>
               </div>
               <div className="sign-up  font-secondary">
                    <p>Don&apos;t have an account? <a href="#">Sign Up</a></p>
               </div>
               <div className="line">
                    <img src={Line} alt="line image" />
               </div>
               <div className="google">
                    <a href="/auth" role="button"><img src={GoogleLogo} alt="" /></a>
               </div>
         </form>
       </>
     );
   };
 export default SignIn;
