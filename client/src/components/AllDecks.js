import React from 'react';
import './AllDecks.css';
import { Link } from 'react-router-dom';
import Favorite from './Favorite';

export default function AllDecks(props) {
  console.log(props)
  return (
    <div>
      <h1>All Decks</h1>
      <h4>Select one to get started!</h4>
      <div className="decks-container">
        {props.decks.map( deck => {
          return (
            <Link to={`/decks/${deck.id}/cards`}>
              <div 
                key={deck.id} 
                className="deck-div" 
                style={{backgroundImage: `url(${deck.img})`, backgroundSize: 'cover'}}>
                <Favorite 
                  currentUser={props.currentUser}
                  handleAddFave={props.handleAddFave}
                  handleDeleteFave={props.handleDeleteFave}
                  deckId={deck.id} />
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
