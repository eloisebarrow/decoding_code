import React from 'react';
import './NewCardForm.css';

export default function NewCardForm(props) {
  return (
    <div className="new-card-form-container">
      {props.title === 'new' ? <h1>Make a new card!</h1> : <h1>Update your card</h1>}
      <form 
        className="new-card-form" 
        onSubmit={(e) => {
          e.preventDefault();
          if (props.title === "update") {
            props.handleUpdateCard(e, props.match.params.id)
          } else if (props.title === "new") {
            props.handleNewCard(e)
          }
        }}
      >
        <select 
          name="deck_id"
          onChange={(e) => props.handleNewCardFormChange(e)}
        >
            <option>Select a topic</option>
          {
            props.decks.map( (deck, index) => {
              return (
                <option 
                  key={deck.id}
                  value={index + 1}
                  >
                {deck.topic}
                </option>
              )
            }) 
          }
        </select>

        <section className="new-card-inputs-container">
          <input
            onChange={(e) => props.handleNewCardFormChange(e)}
            value={props.newCardFormData.prompt}
            type="text"
            name="prompt"
            placeholder="Prompt">
          </input>

          <input 
            rows="7" 
            cols="55" 
            onChange={(e) => props.handleNewCardFormChange(e)}
            value={props.newCardFormData.answer}
            type="text"
            name="answer"
            placeholder="Response">
          </input>
        </section>

        <button type="submit">Submit</button>
      </form>
    </div>
  )
}
