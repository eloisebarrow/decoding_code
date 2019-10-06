import React from 'react';
import './GetStarted.css';
import { Link } from 'react-router-dom';

export default function GetStarted() {
  return (
    <div className="get-started-container">
      <h2 className="sub-headline">Create an account to save decks or make your own flashcards.</h2>
      <div className="example-card">
        <p>// Your Content Here</p>
        <Link to="/login"><button>Start Studying</button></Link>
      </div>
    </div>
  )
}