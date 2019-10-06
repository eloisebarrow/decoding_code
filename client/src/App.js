import React from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import { 
  getDecks,
  getCards,
  getCardsByDeck,
 } from './services/api-helper.js';

class App extends React.Component {
  state = {
    decks: [],
    cards: [],
    cardsByDeck: [],
    currentUser: null,
    loginFormData: {
      firstName: '',
      lastName: '',
      email: '',
      password: ''
    }
  }

  /********************** FORM FUNCTIONS *******************************/

  handleLogin = async () => {

  }

  handleLoginFormChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value)
    this.setState( prevState => ({
      ...prevState.loginFormData,
      loginFormData: {
        [name]: value
      }
    }))
  }

  /********************** API CALLS *****************************/
  allDecks = async () => {
    const decks = await getDecks();
    this.setState({
      decks
    })
  }

  allCards = async () => {
    const cards = await getCards();
    this.setState({
      cards
    })
  }

  allCardsByDeck = async (deckId) => {
    const cards = await getCardsByDeck(deckId)
    this.setState({
      cardsByDeck: cards
    })
  }

  componentDidMount = () => {
    this.allDecks();
    this.allCards();
    this.allCardsByDeck();
  }

  render() {
    console.log('this is all cards from App', this.state.cardsByDeck)
    return (
      <div className="App">
        <Header />
        <Main 
          decks={this.state.decks}
          cards={this.state.cards}
          cardsByDeck={this.state.cardsByDeck}
          loginFormData={this.state.loginFormData}
          handleLoginFormChange={this.handleLoginFormChange}
          handleLogin={this.handleLogin}
          handleRegister={this.handleRegister}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
