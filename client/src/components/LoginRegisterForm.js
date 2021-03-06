import React from 'react';
import './LoginRegisterForm.css';

export default function LoginRegisterForm(props) {
  return (
    <div className="login-form-container">
      <form className="login-form"
        onSubmit={(e) => {
        e.preventDefault()
        if (props.title === "register") {
          props.handleRegister();
        } else {
          props.handleLogin();
        }
      }}>
        <h2 className="login-title">{props.title === 'login' ? "Login" : "Register"}</h2>
        {
          props.title === 'register' && (
            <> 
              <label htmlFor="first_name">First Name: </label>
              <input 
                onChange={(e) => props.handleLoginFormChange(e)}
                value={props.loginFormData.first_name}
                type="text" 
                name="first_name" />

              <label htmlFor="last_name">Last Name: </label>
              <input 
                onChange={(e) => props.handleLoginFormChange(e)}
                value={props.loginFormData.last_name}
                type="text" 
                name="last_name" />
            </>
          )
        }
        <label htmlFor="email">Email: </label>
        <input 
          onChange={(e) => props.handleLoginFormChange(e)} 
          value={props.loginFormData.email} 
          type="email" 
          name="email" />

        <label htmlFor="password">Password: </label>
        <input 
          onChange={(e) => props.handleLoginFormChange(e)} 
          value={props.loginFormData.password} 
          type="password" 
          name="password" />

        <p className="error-message">{props.error}</p>

        <button className="submit-button">Submit</button>
        
      </form>
      
    </div>
  )
}
