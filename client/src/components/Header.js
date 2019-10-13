import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';

export default function Header(props) {

  return (
    <div className="header-container">
      <Link to="/" className="title"><h1>De/Coding Code</h1></Link>

      <nav className="header-nav">
        <Link to="/decks">Topics</Link>
        { props.currentUser && props.currentUser.first_name ? 
          <>
          <h4 className="user-greeting">Hi, {props.currentUser.first_name}</h4>
          <Link to="/login"><button onClick={props.handleLogout} className="sign-out-btn">Sign Out</button></Link>
          </> : 
          <>
          <Link to="/login">Login</Link>
          <Link to="/register" className="sign-up-btn">Sign Up</Link>
          </>
        }
      </nav>
    </div>
  )
}

