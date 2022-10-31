import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@apollo/client";

import { Auth, LOGIN } from "../../utils";
import "./Login.css";
import signupPhoto from "../../images/phone.png";

export default function Login() {
  document.title = "Login/Signup";
  // State to track password visibility
  let [showPassword, setShowPassword] = useState(false);

  // Programmatically route
  const navigate = useNavigate();

  // State to track login form
  const [form, setform] = useState({
    email: "",
    password: "",
  });

  const [login, { error }] = useMutation(LOGIN);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const mutationResponse = await login({
        variables: { email: form.email, password: form.password },
      });
      const token = mutationResponse.data.login.token;
      Auth.login(token);
    } catch (e) {
      console.log(e);
    }
  };

  /**
   * Update the login form state.
   * @param {element} element The form element.
   */
  const updateForm = (element) => {
    const id = element.id;
    const value = element.value.toString().trim();

    // Update the form state
    setform({
      ...form,
      [id]: value,
    });
  };

  return (
    <div className="login">
      <div className="login-container">
        <div className="login-main">
          <div className="login-main-wrapper card">
            <div className="login-main-title">
              <h1>Welcome Back!</h1>
            </div>
            <div className="login-main-description">
              <p>We Are Happy To Have You Back</p>
            </div>
            <form className="login-form" onSubmit={handleFormSubmit}>
              <div className="input-group">
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  id="email"
                  onInput={(e) => updateForm(e.target)}
                />
              </div>
              <div className="input-group">
                <label htmlFor="email">Password</label>
                <div className="input-wrapper">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    onInput={(e) => updateForm(e.target)}
                  />
                  <span
                    className={
                      showPassword ? "icon-eye-open" : "icon-eye-closed"
                    }
                    onClick={() => setShowPassword(!showPassword)}
                  ></span>
                </div>
              </div>
              <div className="input-group">
                <input type="submit" className="btn-black" value="Login" />
              </div>
            </form>
          </div>
        </div>

        <div className="login-register">
          <div className="login-register-content card">
            <div className="login-register-content-image">
              <img src={signupPhoto} alt="" />
            </div>
            <div className="login-register-content-title">
              <h2>Don't Have an Account?</h2>
            </div>
            <div className="login-register-content-description">
              <p>Get Started By Creating Your New Account</p>
            </div>
            <div className="login-register-content-button input-group">
              <input
                type="button"
                className="btn-white"
                value="Register"
                onClick={() => navigate("/register")}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
