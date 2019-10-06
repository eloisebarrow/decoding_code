import React from 'react';
import './AllDecks.css';
import { Link } from 'react-router-dom';

export default function AllDecks(props) {
  return (
    <div>
      <h1>All Decks</h1>
      <div className="decks-container">
        {props.decks.map( deck => {
          return <div key={deck.id}>
            <Link to={`decks/${deck.id}`} className="deck-div">
              {deck.topic}
            </Link>
          </div>
        })}
      </div>
    </div>
  )
}
