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
            error={props.error}
          />
        )} />
        <Route path="/register" render={()=>(
          <LoginRegisterForm 
            title={'register'}
            loginFormData={props.loginFormData}
            handleLoginFormChange={props.handleLoginFormChange}
            handleRegister={props.handleRegister}
            error={props.error}
          />
        )} />
        <Route path="/new-card" render={()=>(
          <NewCardForm 
            decks={props.decks} />
        )} />
        <Route path="/my-decks" render={()=>(
          <UserDecks />
        )} />
        <Route exact path="/decks/:id/cards" render={(routerProps)=>(
          <SingleDeck 
            {...routerProps}
            decks={props.decks} />
        )} />
        <Route path="/decks" render={()=>(
          <AllDecks 
            decks={props.decks} />
        )} />
        <Route path="/" render={()=>(
          <Home currentUser={props.currentUser} />
        )} />
      </Switch>
    </div>
  )
}