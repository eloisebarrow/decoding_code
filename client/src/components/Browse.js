import React from 'react';
import './Browse.css';
import { Link } from 'react-router-dom';

export default function Browse(props) {
  return (
    <div>
      <h2>Browse Decks</h2>
      <div className="browse-container">
        {props.decks.map( deck => {
          return (
            <Link to={`decks/${deck.id}/cards`} className="card-link" >
              <div key={deck.id} className="browse-deck-div" style={{backgroundImage: `url(${deck.img})`, backgroundSize: 'cover'}}></div>
            </Link>
          )
        })}
      </div>
      <Link to="/decks"><button className="all-decks-button browse-button">See All Decks</button></Link>
    </div>
  )
}

