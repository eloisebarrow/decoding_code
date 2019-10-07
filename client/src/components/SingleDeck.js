import React from 'react';
import './SingleDeck.css';
import { Link } from 'react-router-dom';
import SingleCard from './SingleCard';

export default function SingleDeck(props) {
    return (
    <div className="single-deck-container">
      <h2>Example: JavaScript</h2>
      <div className="single-card-container">
        <div className="prompts-container">
          <h4>Prompts</h4>
          <ol>
            <Link to="#"><li>Prompt 1</li></Link>
            <Link to="#"><li>Prompt 2</li></Link>
          </ol>
        </div>


        <div className="flashcard-container">
          <SingleCard cards={props.cards} />
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
