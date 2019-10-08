import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer(props) {
  return (
    <div className="footer-container">
      <nav className="footer-nav">
        <div>
          <Link to="/decks"><h4>Topics</h4></Link>
          <ul>
            {props.decks.map( deck => {
              return (
                  <Link to={`decks/${deck.id}/cards`} key={deck.id}><li>{deck.topic}</li></Link>
                )
              }) 
            }
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
