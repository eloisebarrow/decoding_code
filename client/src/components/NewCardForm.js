import React from 'react';
import './NewCardForm.css';

export default function NewCardForm(props) {
  return (
    <div className="new-card-form-container">
      <h1>Make a new card!</h1>
      <form 
        className="new-card-form" 
        onSubmit={(e)=>{
        e.preventDefault();
        }}
      >
        <select name="decks">
          {
            props.decks.map( deck => {
              return (
                <option key={deck.id}>{deck.topic}</option>
              )
            }) 
          }
        </select>
        
        <label>Prompt: </label>
        <input></input>

        <label>Response: </label>
        <textarea rows="7" cols="55"></textarea>

        <button>Submit</button>
      </form>
    </div>
  )
}
