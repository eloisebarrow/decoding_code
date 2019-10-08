import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

export default function Header(props) {

  return (
    <div className="header-container">
      <Link to="/" className="title"><h1>De/Coding Code</h1></Link>
      <nav className="header-nav">
        <Link to="/decks">Topics
          <ul className="header-topics">
            <Link to="#"><li>General Programming</li></Link>
            <Link to="#"><li>HTML</li></Link>
            <Link to="#"><li>CSS</li></Link>
            <Link to="#"><li>JavaScript</li></Link>
            <Link to="#"><li>React</li></Link>
            <Link to="#"><li>Ruby on Rails</li></Link>
            <Link to="#"><li>Express.js</li></Link>
            <Link to="#"><li>Node.js</li></Link>
            <Link to="#"><li>SQL</li></Link>
            <Link to="#"><li>Git and Github</li></Link>
          </ul>
        </Link>
        { props.currentUser ? 
          <>
          <h4 className="user-greeting">Hi, {props.currentUser.first_name}</h4>
          <Link to="/login"><button onClick={props.handleLogout}>Sign Out</button></Link>
          </> : 
          <>
          <Link to="/login">Login</Link>
          <Link to="/register">Sign Up</Link>
          </>
        }
      </nav>
    </div>
  )
}
