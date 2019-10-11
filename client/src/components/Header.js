import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';

export default function Header(props) {

  // const [ hamburgerIsClicked, setHamburgerIsClicked ] = React.useState(false);

  return (
    <div className="header-container">
      { props.currentUser && 
          <h4 className="user-greeting">Hi, {props.currentUser.first_name}</h4>
      }
    <Link to="/" className="title"><h1>De/Coding Code</h1></Link>
    <Sidebar 
      currentUser={props.currentUser}
      handleLogout={props.handleLogout}/>
  </div>

    // <div className="header-container">
    //   <Link to="/" className="title"><h1>De/Coding Code</h1></Link>
    //   <div className="mobile-container">
    //     { props.currentUser && 
    //       <h4 className="user-greeting">Hi, {props.currentUser.first_name}</h4>
    //     }
    //     <button className="hamburger-container">
    //     <div>
    //       <span className="hamburger-lines"></span>
    //       <span className="hamburger-lines"></span>
    //       <span className="hamburger-lines"></span>
    //     </div>
    //     </button>
    //   </div>
      
    //   <nav className="header-nav">
    //     <Link to="/decks">Topics</Link>
    //     { props.currentUser ? 
    //       <>
    //       <Link to="/my-decks">My Decks</Link>
    //       <Link to="/login"><button onClick={props.handleLogout}>Sign Out</button></Link>
    //       </> : 
    //       <>
    //       <Link to="/login">Login</Link>
    //       <Link to="/register">Sign Up</Link>
    //       </>
    //     }
    //   </nav>
    // </div>
  )
}



/* POSSIBLE HAMBURGER MENU FROM 'REACT-HAMGBURGER-MENU' PACKAGE
import React from 'react';
import { fallDown as Menu } from 'react-burger-menu'
 
export default class Header extends React.Component {
  showSettings (event) {
    event.preventDefault();
  }
 
  render () {
    return (
      <div id="outer-container" className="header-container">
        <Menu 
          right 
          pageWrapId={ "page-wrap" } 
          className="nav-header"
          width={ '30%' } >
     
            <a id="home" className="menu-item" href="/">Home</a>
            <a id="decks" className="menu-item" href="/decks">Topics</a>
            <a id="my-decks" className="menu-item" href="/my-decks">My Decks</a>
            <a onClick={ this.showSettings } className="menu-item--small" href="">Sign Out</a>

          
        </Menu>
      </div>

    );
  }
}
*/

