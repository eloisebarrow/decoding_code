import React from 'react';
import './NewCardForm.css';

export default function NewCardForm(props) {
  return (
    <div className="new-card-form-container">
      <h1>Make a new card!</h1>
      <form 
        className="new-card-form" 
        onSubmit={
          (e)=>{e.preventDefault();
          props.handleNewCardFormChange()
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
                  value={index + 1}>{deck.topic}</option>
              )
            }) 
          }
        </select>
        
        <label htmlFor="prompt">Prompt: </label>
        <input
          onChange={(e) => props.handleNewCardFormChange(e)}
          value={props.newCardFormData.prompt}
          type="text"
          name="prompt">
        </input>

        <label>Response: </label>
        <textarea 
          rows="7" 
          cols="55" 
          onChange={(e) => props.handleNewCardFormChange(e)}
          value={props.newCardFormData.response}
          type="text"
          name="response">
        </textarea>
        
        <button>Submit</button>
      </form>
    </div>
  )
}
