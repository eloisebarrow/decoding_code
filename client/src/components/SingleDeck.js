import React from 'react';
import './SingleDeck.css';
import './SingleCard.css';
import { Link, Redirect } from 'react-router-dom';
import SingleCard from './SingleCard';

export default function SingleDeck(props) {
  
  const [currentCard, setCurrentCard] = React.useState(0)
  const [isCardClicked, setIsCardClicked] = React.useState(true)

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
          <h3>Click a prompt to start studying!</h3>
          <ol className="prompts-list">
            {deck.cards.map( (card, index) => {
              if (card.is_public || (props.currentUser && card.user_id === props.currentUser.id)) {
                return (
                  <Link 
                    key={card.id} 
                    onClick={()=>{
                      setCurrentCard(index);
                      setIsCardClicked(false) }}>
                    <li className={!card.is_public ? 'single-prompt-container li-spacing' : null }>
                      {card.prompt} 
                      <section className="prompt-buttons">
                        {!card.is_public && 
                          (<><button className="user-card-button" onClick={(e)=>{props.handleUpdateForm(e, card.id)}}>Edit</button> 
                          <button className="user-card-button" onClick={(e)=>{props.handleDeleteCard(card.id, e)}}>Delete</button></>)}
                      </section>
                    </li>
                  </Link>
                )
              }
              })
            }
            <Link to={props.currentUser && !props.currentUser.error ? '/new-card' : '/login'}>
              <li className="create-your-own">...Or create your own!</li>
            </Link>
          </ol>
        </div>

        <div className="flashcard-container">
          <SingleCard 
            cards={deck.cards}
            currentCard={currentCard}
            isCardClicked={isCardClicked}
            flipCard={flipCard} />
          {/* <div className="flashcard-directions">
            <p>prev</p>
            <p>1/10</p>
            <p>next</p>
          </div> */}
        </div>
      </div>
    </div>
  )
}
