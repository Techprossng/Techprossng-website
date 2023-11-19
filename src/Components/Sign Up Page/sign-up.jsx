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
                    <p className="firstname-text">First Name</p>
                    <div className="firstname-input">
                         <input type="name" placeholder="Enter First Name" />
                    </div>
               </div>
               <div className="lastname">
                    <p className="lastname-text">Last Name</p>
                    <div className="lastname-input">
                         <input type="name" placeholder="Enter Last Name" />
                    </div>
               </div>
               <div className="email">
                    <p className="email-text">Email address</p>
                    <div className="email-input">
                         <input type="email" placeholder="Enter email" />
                    </div>
               </div>
               <div className="password">
                    <p className="password-text">Password</p>
                    <div className="password-input">
                         <input type="password" placeholder="Enter password" />
                    </div>
               </div>
               <div className="login-button">
                    <button type="submit">Log In</button>
               </div>
               <div className="log-in">
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