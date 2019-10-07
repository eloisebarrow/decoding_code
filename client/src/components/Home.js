import React from 'react';
import About from './About';
import GetStarted from './GetStarted';
import Browse from './Browse';
import Aside from './Aside';

export default function Home(props) {
  return (
    <div>
      <About />
      <GetStarted currentUser={props.currentUser} />
      <Browse />
      <Aside />
    </div>
  )
}
