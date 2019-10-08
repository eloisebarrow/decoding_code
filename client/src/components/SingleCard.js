import React from 'react';
import './SingleCard.css';
// import './GetStarted.css';
import { Link } from 'react-router-dom';

export default function SingleCard(props) {

  const cardsArray = props.cards.map( (card, index) => {
    return (
      <div 
        key={index}
        className={ props.isCardClicked ? 'answer-card' : null }>
          <Link 
            onClick={() => props.flipCard()} 
            >
            {props.isCardClicked ? 
              <h5 className="answer-text">{card.answer}</h5> 
              : <h3 className="prompt-text">{card.prompt}</h3>}
          </Link>
      </div>
    )
  }) 

  return (
    <div className="card-container">
      {cardsArray[props.currentCard]}
    </div>
  )
}
