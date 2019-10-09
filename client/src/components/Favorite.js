import React from 'react';
import './Favorite.css';

export default function Favorite(props) {
  // console.log('favorite props:', props.currentUser.faves.includes(props.deckId))
  return (
    <div>
      {/* { props.currentUser.faves.includes(props.deckId) ? 
          <button className="fave-button" onClick={(e)=>{props.handleDeleteFave(e)}}>-</button>
          : <button className="fave-button" onClick={(e)=>{props.handleAddFave(e)}}>+</button>
      } */}
    </div>
  )
}

