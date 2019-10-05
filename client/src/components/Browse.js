import React from 'react';
import './Browse.css';
import { Link } from 'react-router-dom';

export default function Browse() {
  return (
    <div>
      <h2>Browse Decks</h2>
      <div className="browse-container">
        <div className="example-deck"></div>
        <div className="example-deck"></div>
        <div className="example-deck"></div>
        <div className="example-deck"></div>
      </div>
      <Link to="/decks"><button>See All Decks</button></Link>
    </div>
  )
}
