import React from 'react';
import './Favorite.css';

export default function Favorite(props) {
  console.log('favorite props:', props)
  
  return (
    <div>
      { props.currentUser && props.currentUser.faves.map(fave=>fave.id).includes(props.deckId) ? 
          <button className="fave-button" onClick={(e)=>{props.handleAddFave(e, props.deckId)}}>+</button>
          : <button className="fave-button" onClick={(e)=>{props.handleDeleteFave(e, props.deckId, props.faveId)}}>-</button>
      }
    </div>
  )
}

