import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

export default function Header() {

  return (
    <div className="header-container">
      <Link to="/"><h1>De/Coding Code</h1></Link>
      <nav className="header-nav">
        <ul>
          <li> Topics
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
          </li>
          <Link to="/login"><li>Login</li></Link>
          <Link to="/register"><li>Sign Up</li></Link>
        </ul>

      </nav>


    </div>
  )
}
