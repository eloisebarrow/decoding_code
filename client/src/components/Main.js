import React from 'react';
import './Main.css';
import Home from './Home';
import LoginRegisterForm from './LoginRegisterForm';
import AllDecks from './AllDecks';
import SingleDeck from './SingleDeck';
import NewCardForm from './NewCardForm';
import UserDecks from './UserDecks';
import { Route, Switch } from 'react-router-dom';

export default function Main(props) {
  return (
    <div className="main-container">
      <Switch>
        <Route path="/login" render={()=>(
          <LoginRegisterForm 
            title={'login'}
            loginFormData={props.loginFormData}
            handleLoginFormChange={props.handleLoginFormChange}
            handleLogin={props.handleLogin}
          />
        )} />
        <Route path="/register" render={()=>(
          <LoginRegisterForm 
            title={'register'}
            loginFormData={props.loginFormData}
            handleLoginFormChange={props.handleLoginFormChange}
            handleRegister={props.handleRegister}  
          />
        )} />
        <Route path="/new-card" render={()=>(
          <NewCardForm />
        )} />
        <Route path="/my-decks" render={()=>(
          <UserDecks />
        )} />
        <Route exact path="/decks/:id" render={()=>(
          <SingleDeck cards={props.cards} />
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