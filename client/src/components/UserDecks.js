import React from 'react';
import { Link } from 'react-router-dom';
import './UserDecks.css';
import Favorite from './Favorite';

export default function UserDecks(props) {

  // const userFaves = props.decks.filter( deck => {
  //   // console.log('this is deck from filter', deck)
  //   props.faves.includes(deck.id)}).map( deck => {
  //   return (
  //     <Link to={`/decks/${deck.id}/cards`} key={deck.id} >
  //       <div 
  //         className="deck-div" 
  //         style={{backgroundImage: `url(${deck.img})`, backgroundSize: 'cover'}}>
  //         <Favorite 
  //           handleAddFave={props.handleAddFave}
  //           deckId={deck.id} />
  //       </div>
  //     </Link>
  //   )
  // }) 

  return (
    <div>
      <h1>User Decks</h1>
      {props.currentUser && props.currentUser.faves.map( deck => {
          return (
            <Link to={`/decks/${deck.id}/cards`} key={deck.id}>
              <div  
                className="deck-div" 
                style={{backgroundImage: `url(${deck.img})`, backgroundSize: 'cover'}}>
                <Favorite 
                  faves={props.faves}
                  handleAddFave={props.handleAddFave}
                  handleDeleteFave={props.handleDeleteFave}
                  deckId={deck.id} />
              </div>
            </Link>
          )
        })}
    </div>
  )
}

// { props.faves.forEach( fave => {
//   // console.log('this is fave from forEach', fave)
//     props.decks.map( deck => {
//       // console.log('this is deck from map', deck)
//       if (fave.deck_id === deck.id) {
//         return (
//           <Link to={`/decks/${deck.id}/cards`} key={deck.id} >
//             <div 
//               className="deck-div" 
//               style={{backgroundImage: `url(${deck.img})`, backgroundSize: 'cover'}}>
//               <Favorite 
//                 handleAddFave={props.handleAddFave}
//                 deckId={deck.id} />
//             </div>
//           </Link>
//         )
//       }
//     })
// }) }