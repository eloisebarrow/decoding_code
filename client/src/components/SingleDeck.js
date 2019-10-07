import React from 'react';
import './SingleDeck.css';
import { Link, Redirect } from 'react-router-dom';
import SingleCard from './SingleCard';

export default function SingleDeck(props) {
  
  const [currentCard, setCurrentCard] = React.useState(0)
  const [isCardClicked, setIsCardClicked] = React.useState(false)

  const deck = props.decks.find( deck => deck.id == props.match.params.id );
  if (!deck) {
    return <Redirect to="/decks" />
  }

  let flipCard = () => {
    isCardClicked === true ? setIsCardClicked(false): setIsCardClicked(true)
  }

  return (
    <div className="single-deck-container">
      <h2>{deck.topic}</h2>
      <div className="single-card-container">
        <div className="prompts-container">
          <h4>Prompts</h4>
          <ol>
            {deck.cards.map( (prompt, index) => {
              return (
                <Link 
                  key={prompt.id} 
                  onClick={()=>{
                    setCurrentCard(index);
                    setIsCardClicked(false) }}>
                  <li>
                    {prompt.prompt} 
                    {!prompt.is_public && (<><button>Edit</button> <button>Delete</button></>)}
                  </li>
                </Link>
              )
              })
            }
            <Link to="/new-card"><li>Create your own!</li></Link>
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
