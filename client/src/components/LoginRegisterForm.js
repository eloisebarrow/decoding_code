import React from 'react';
import './LoginRegisterForm.css';

export default function LoginRegisterForm(props) {
  return (
    <>
      <h2>{props.title === 'login' ? "Login" : "Register"}</h2>
      <form className="login-form"
        onSubmit={(e) => {
        e.preventDefault()
        if (props.title === "register") {
          props.handleRegister();
        } else {
          props.handleLogin();
        }
      }}>
        {
          props.title === 'register' && (
            <> 
              <label htmlFor="first_name">First Name: </label>
              <input 
                onChange={(e) => props.handleLoginFormChange(e)}
                value={props.loginFormData.first_name}
                type="text" 
                name="first_name" 
                placeholder="Eloise"></input>

              <label htmlFor="last_name">Last Name: </label>
              <input 
                onChange={(e) => props.handleLoginFormChange(e)}
                value={props.loginFormData.last_name}
                type="text" 
                name="last_name" 
                placeholder="Barrow"></input>
            </>
          )
        }
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
