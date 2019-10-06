import React from 'react';
import './About.css';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className="about-container">
      <h2>A Software Engineering study guide for new developers.</h2>
      <h3>Explore our decks or create your own.</h3>
      <Link to="/decks"><button>See All Decks</button></Link>
    </div>
  )
}
