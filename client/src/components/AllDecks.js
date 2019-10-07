import React from 'react';
import './AllDecks.css';
import { Link } from 'react-router-dom';
import { getCardsByDeck } from './../services/api-helper.js';

export default function AllDecks(props) {
  console.log('this is getcardsbydeck from AllDecks', props.getCardsByDeck)
  return (
    <div>
      <h1>All Decks</h1>
      <div className="decks-container">
        {props.decks.map( deck => {
          return <div key={deck.id}>
            <Link to={`decks/${deck.id}/cards`} className="deck-div">
              {deck.topic}
            </Link>
          </div>
        })}
      </div>
    </div>
  )
}
