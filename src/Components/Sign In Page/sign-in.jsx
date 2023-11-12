import "../../Components/Sign In Page/Style/sign-in.css"

const SignIn = () => {
     return (
       <>
         <form className="sign-in" method="GET">
               <div className="image">
                    <img src="../../../src/assets/images/Logo-Sign-In.png" alt="" />
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
               <div className="sign-up">
                    <p>Don't have an account? <a href="#">Sign Up</a></p>
               </div>
               <div className="line">
                    <img src="../../../src/assets/images/line.png" alt="" />
               </div>
               <div className="google">
                    <a href="/auth" role="button"><img src="../../../src/assets/images/google-logo.png" alt="" /></a>
               </div>
         </form>
       </>
     );
   };
 export default SignIn;