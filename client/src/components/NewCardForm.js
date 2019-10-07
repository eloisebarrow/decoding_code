import React from 'react'

export default function NewCardForm(props) {
  return (
    <div>
      <h1>Make a new card!</h1>
      <form>
        <select name="decks">
          {
            props.decks.map( deck => {
              return (
                <option key={deck.id}>{deck.topic}</option>
              )
          }) }
        </select>
        
        <label>Prompt: </label>
        <input></input>

        <label>Response: </label>
        <input></input>
      </form>
    </div>
  )
}
