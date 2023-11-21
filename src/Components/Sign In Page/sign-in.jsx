import "../../Components/Sign In Page/Style/sign-in.css";
import Line from "../../assets/images/line.png";
import GoogleLogo from "../../assets/images/google-logo.png";
import { useEffect, useState } from "react";

const SignIn = () => {
  const initialValue = { email: "", password: "" };
  const [formValue, setFormValue] = useState(initialValue);
  const [formError, setFormError] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
    console.log(formValue);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormError(validate(formValue));
    setIsSubmit(true);
  };

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (values.email === "") {
      errors.email = "Email is required";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format";
    }
    if (values.password === "") {
      errors.password = "Password is required";
    } else if (values.password.length < 5) {
      errors.password = "Password is too short";
    } else if (values.password.length > 20) {
      errors.password = "Password is too long";
    }
    return errors;
  };

  useEffect(() => {
    console.log(formError);
    if (isSubmit) {
      console.log(formValue);
    }
    if (Object.keys(formError).length === 0) {
      console.log(formValue);
    }
  }, [formError]);

  return (
    <>
      <form className="sign-in" onSubmit={handleSubmit}>
        <div className="image">
          <img src="../../../src/assets/images/Logo-Sign-In.png" alt="" />
        </div>
        <div className="email">
          <p className="email-text">Email address</p>
          <div className="email-input">
            <input
              type="email"
              placeholder="Enter email"
              name="email"
              value={formValue.email}
              onChange={handleChange}
            />
          </div>
          <small className="text-red-600">{formError.email}</small>
        </div>
        <div className="password">
          <p className="password-text">Password</p>
          <div className="password-input">
            <input
              type="password"
              placeholder="Enter password"
              name="password"
              value={formValue.password}
              onChange={handleChange}
            />
          </div>
          <small className="text-red-600">{formError.password}</small>
        </div>
        <div className="login-button">
          <button>Log In</button>
        </div>
        <div className="sign-up">
          <p>
            Don&apos;t have an account? <a href="#">Sign Up</a>
          </p>
        </div>
        <div className="line">
          <img src={Line} alt="line image" />
        </div>
        <div className="google">
          <a href="/auth" role="button">
            <img src={GoogleLogo} alt="" />
          </a>
        </div>
      </form>
    </>
  );
};
export default SignIn;
