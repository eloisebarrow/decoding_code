import React from 'react';
import './Home.css';
import About from './About';
import GetStarted from './GetStarted';
import Browse from './Browse';
import Aside from './Aside';

export default function Home(props) {
  return (
    <div className="home-container">
      <About />
      <GetStarted currentUser={props.currentUser} />
      <Browse decks={props.decks} />
      <Aside />
    </div>
  )
}
