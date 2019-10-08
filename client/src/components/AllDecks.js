import React from 'react';
import './AllDecks.css';
import { Link } from 'react-router-dom';

export default function AllDecks(props) {
  console.log(props.decks)
  return (
    <div>
      <h1>All Decks</h1>
      <h4>Select one to get started!</h4>
      <div className="decks-container">
        {props.decks.map( deck => {
          return <div key={deck.id}>
            <Link to={`decks/${deck.id}/cards`} className="deck-div" style={{backgroundImage: `url(${deck.img})`, backgroundSize: 'cover'}}>
              {/* {deck.topic} */}
            </Link>
          </div>
        })}
      </div>
    </div>
  )
}
