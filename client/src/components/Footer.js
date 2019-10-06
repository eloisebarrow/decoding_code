import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  return (
    <div className="footer-container">
      <nav className="footer-nav">
        <div>
          <h4>Topics</h4>
          <ul>
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
        </div>

        <div>
          <h4>Help</h4>
          <ul>
            <Link to="/login"><li>Login</li></Link>
            <Link to="/register"><li>Sign Up</li></Link>
          </ul>
        </div>

        <div>
          <h4>About</h4>
          <ul>
            <li><a href="https://github.com/eloisebarrow/decoding_code" target="_blank" rel="noopener noreferrer">Project</a></li>
            <li><a href="https://medium.com/me/stories/public" target="_blank" rel="noopener noreferrer">Process</a></li>
          </ul>
        </div>
      </nav>

      <footer>
        <h5>&copy; eloiseressbarrow 2019</h5>
      </footer>
    </div>
  )
}
