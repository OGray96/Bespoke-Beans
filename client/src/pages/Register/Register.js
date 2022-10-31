import { useMutation } from "@apollo/client";
import React, { useState } from "react";

import { Auth, ADD_USER } from "../../utils";

import "./Register.css";

export default function Register() {
  document.title = "Register Now";
  // State to track password visibility
  let [showPassword, setShowPassword] = useState(false);

  // State to track register form
  const [form, setform] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const [addUser] = useMutation(ADD_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const mutationResponse = await addUser({
      variables: {
        email: form.email,
        password: form.password,
        firstName: form.firstName,
        lastName: form.lastName,
      },
    });
    const token = mutationResponse.data.addUser.token;
    Auth.login(token);
  };

  /**
   * Update the register form state.
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
    <div className="register">
      <div className="register-container">
        <div className="register-main card">
          <div className="register-main-title">
            <h1>Register</h1>
          </div>
          <div className="register-main-description">
            <p>For Premium Coffee Lovers</p>
          </div>
          <form className="register-form" onSubmit={handleFormSubmit}>
            <div className="input-group">
              <label htmlFor="fistName">First Name</label>
              <input
                type="text"
                id="firstName"
                onInput={(e) => updateForm(e.target)}
              />
            </div>
            <div className="input-group">
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                id="lastName"
                onInput={(e) => updateForm(e.target)}
              />
            </div>
            <div className="input-group">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                id="email"
                onInput={(e) => updateForm(e.target)}
              />
            </div>
            <div className="input-group">
              <label htmlFor="password">Password</label>
              <div className="input-wrapper">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  placeholder="Please use 8 characters"
                  onInput={(e) => updateForm(e.target)}
                  minlength="8"
                />
                <span
                  className={showPassword ? "icon-eye-open" : "icon-eye-closed"}
                  onClick={() => setShowPassword(!showPassword)}
                ></span>
              </div>
            </div>
            <div className="input-group">
              <input type="submit" className="btn-black" value="Register" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
