import React from 'react';
import './LoginRegisterForm.css';

export default function LoginRegisterForm(props) {
  return (
    <>
      <h2>{props.title == 'login' ? "Login" : "Register"}</h2>
      <form className="login-form"
        onSubmit={(e) => {
        e.preventDefault()
        if (props.title === "register") {
          props.handleRegister();
        } else {
          props.handleLogin();
        }
      }}>
        {/* {props.title == 'register' ? 
        <label htmlFor="firstName">First Name: </label>
        <input type="text" name="firstName" placeholder="Eloise"></input>

        <label htmlFor="lastName">Last Name: </label>
        <input type="text" name="lastName" placeholder="Barrow"></input>
        : nil} */}

        <label htmlFor="email">Email: </label>
        <input 
          onChange={(e) => props.handleLoginFormChange(e)} 
          value={props.loginFormData.email} 
          type="email" 
          name="email" 
          placeholder="superdev@rockstarengineers.com" />

        <label htmlFor="password">Password: </label>
        <input 
          onChange={(e) => props.handleLoginFormChange(e)} 
          value={props.loginFormData.password} 
          type="password" 
          name="password" />

        <button>Submit</button>
      </form>
    </>
  )
}
