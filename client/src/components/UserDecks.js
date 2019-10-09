import React from 'react';
import { Link } from 'react-router-dom';
import './UserDecks.css';
import Favorite from './Favorite';

export default function UserDecks(props) {
  
  const userFaves = props.decks.map( deck => {
    return (
      <Link to={`/decks/${deck.id}/cards`}>
        <div 
          key={deck.id} 
          className="deck-div" 
          style={{backgroundImage: `url(${deck.img})`, backgroundSize: 'cover'}}>
          <Favorite 
            handleAddFave={props.handleAddFave}
            deckId={deck.id} />
        </div>
      </Link>
    )
  })

  return (
    <div>
      <h1>User Decks</h1>
      {userFaves}
    </div>
  )
}
