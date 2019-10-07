import React from 'react';
import './SingleCard.css';

export default function SingleCard(props) {

  const [isCardClicked, setIsCardClicked] = React.useState(false)

  const cardsArray = props.cards.map( (card, index) => {
    return (
      <div key={index}>
        {isCardClicked ? <h3>{card.answer}</h3> : <h3>{card.prompt}</h3>}
      </div>
    )
  }) 

  return (
    <div className="card-container">
      {cardsArray[0]}
    </div>
  )
}
