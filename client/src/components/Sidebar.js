import React from 'react';
import './Sidebar.css'
import { fallDown as Menu } from 'react-burger-menu'
import { Link } from 'react-router-dom';

export default function Sidebar(props) {
  return (
    <div>
      <Menu right>
        <br/>
        <Link to="/" className="menu-item">Home</Link>
        <Link to="/decks" className="menu-item">Topics</Link>

        { props.currentUser && !props.currentUser.error ? 
          <ul className="bm-item-list ul-test">    
            <li className="menu-item"><Link to="/my-decks">My Decks</Link></li>

            <li className="menu-item"><Link to="/login" onClick={props.handleLogout} id="logout" className="menu-item">Sign Out</Link></li>
          </ul>
          :
          <ul className="bm-item-list ul-test">
            <li className="menu-item"><Link to="/login">Login</Link></li>
   
            <li className="menu-item"><Link to="/register">Sign Up</Link></li>
          </ul>  
        }
      </Menu>
    </div>
  )
}