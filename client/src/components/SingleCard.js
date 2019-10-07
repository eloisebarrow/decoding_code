import React from 'react';
import './SingleCard.css';
import { Link } from 'react-router-dom';

export default function SingleCard(props) {

  const cardsArray = props.cards.map( (card, index) => {
    return (
      <div key={index}>
        <Link onClick={() => props.flipCard()}>{props.isCardClicked ? <h3>{card.answer}</h3> : <h3>{card.prompt}</h3>}</Link>
      </div>
    )
  }) 

  return (
    <div className="card-container">
      {cardsArray[props.currentCard]}
    </div>
  )
}
