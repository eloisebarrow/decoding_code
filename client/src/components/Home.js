import React from 'react';
import About from './About';
import GetStarted from './GetStarted';
import Browse from './Browse';
import Aside from './Aside';

export default function Home() {
  return (
    <div>
      <About />
      <GetStarted />
      <Browse />
      <Aside />
    </div>
  )
}
