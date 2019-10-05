import React from 'react';
import Home from './Home';
import LoginRegisterForm from './LoginRegisterForm';
import AllDecks from './AllDecks';
import SingleDeck from './SingleDeck';
import NewCardForm from './NewCardForm';
import UserDecks from './UserDecks';
import { Route, Switch } from 'react-router-dom';

export default function Main(props) {
  return (
    <div>
      <Switch>
        <Route path="/login" render={()=>(
          <LoginRegisterForm />
        )} />
        <Route path="/register" render={()=>(
          <LoginRegisterForm />
        )} />
        <Route path="/new-card" render={()=>(
          <NewCardForm />
        )} />
        <Route path="/my-decks" render={()=>(
          <UserDecks />
        )} />
        <Route exact path="/decks/deck-name" render={()=>(
          <SingleDeck />
        )} />
        <Route path="/decks" render={()=>(
          <AllDecks decks={props.decks}/>
        )} />
        <Route path="/" render={()=>(
          <Home />
        )} />
      </Switch>
      
    </div>
  )
}