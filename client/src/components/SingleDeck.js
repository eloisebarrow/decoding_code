import React from 'react';
import './SingleDeck.css';
import { Link, Redirect } from 'react-router-dom';
import SingleCard from './SingleCard';

export default function SingleDeck(props) {
  const deck = props.decks.find( deck => deck.id == props.match.params.id );
  if (!deck) {
    return <Redirect to="/decks" />
  }
  console.log('this is deck from singleDeck', deck)
  const prompts = deck.cards.map( prompt => {
    return (
      <Link to="#" key={prompt.id}><li>{prompt.prompt}</li></Link>
    )
  })
    return (
    <div className="single-deck-container">
      <h2>{deck.topic}</h2>
      <div className="single-card-container">
        <div className="prompts-container">
          <h4>Prompts</h4>
          <ol>
            {prompts}
          </ol>
        </div>

        <div className="flashcard-container">
          <SingleCard cards={deck.cards} />
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
