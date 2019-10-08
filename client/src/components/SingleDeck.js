import React from 'react';
import './SingleDeck.css';
import { Link, Redirect } from 'react-router-dom';
import SingleCard from './SingleCard';

export default function SingleDeck(props) {
  
  const [currentCard, setCurrentCard] = React.useState(0)
  const [isCardClicked, setIsCardClicked] = React.useState(false)

  const deck = props.decks.find( deck => deck.id.toString() === props.match.params.id );
  if (!deck) {
    return <Redirect to="/decks" />
  }

  let flipCard = () => {
    isCardClicked ? setIsCardClicked(false) : setIsCardClicked(true)
  }

  return (
    <div className="single-deck-container">
      <h2>{deck.topic}</h2>
      <div className="single-card-container">
        <div className="prompts-container">
          <h4>Prompts</h4>
          <ol>
            {deck.cards.map( (card, index) => {
              // if (card.is_public) {
                return (
                  <Link 
                    key={card.id} 
                    onClick={()=>{
                      setCurrentCard(index);
                      setIsCardClicked(false) }}>
                    <li>
                      {card.prompt} 
                      {!card.is_public && 
                        (<><button onClick={(e)=>{props.handleUpdateForm(e, card.id)}}>Edit</button> 
                        <button onClick={(e)=>{props.handleDeleteCard(card.id, e)}}>Delete</button></>)}
                    </li>
                  </Link>
                )
              
              })
            }
            <Link to={props.currentUser ? '/new-card' : '/login'}><li>Create your own!</li></Link>
          </ol>
        </div>

        <div className="flashcard-container">
          <SingleCard 
            cards={deck.cards}
            currentCard={currentCard}
            isCardClicked={isCardClicked}
            flipCard={flipCard} />
          <div className="flashcard-directions">
            <p>prev</p>
            <p>1/10</p>
            <p>next</p>
          </div>
        </div>
        
      </div>
    </div>
  )
}
