import React from 'react';
import './Favorite.css';

export default function Favorite(props) {
  return (
    <div>
      <button className="fave-button" onClick={(e)=>props.handleAddFave(`${props.deckId}`, e)}>+</button>
    </div>
  )
}
