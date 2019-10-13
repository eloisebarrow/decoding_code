import React from 'react';
import { Link } from 'react-router-dom';
import './UserDecks.css';
import Favorite from './Favorite';

export default function UserDecks(props) {

  return (
    <div>
      <h1>Saved Decks</h1>
      <section className="faves-container">
        {props.currentUser && props.currentUser.faves.map( fave => {
            return (
              <Link to={`/decks/${fave.deck_id}/cards`} key={fave.id} className="deck-link">
                <div  
                  className="deck-div" 
                  style={{backgroundImage: `url(${fave.deck.img})`, backgroundSize: 'cover'}}>
                  <Favorite 
                    currentUser={props.currentUser}
                    handleAddFave={props.handleAddFave}
                    handleDeleteFave={props.handleDeleteFave}
                    deckId={fave.deck_id}
                    faveId={fave.id} />
                </div>
              </Link>
            )
          })}
      </section>
    </div>
  )
}
