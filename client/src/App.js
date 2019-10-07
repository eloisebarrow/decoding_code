import React from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import { 
  getDecks,
  getCards,
  getCardsByDeck,
  loginUser,
  registerUser
 } from './services/api-helper.js';

class App extends React.Component {
  state = {
    decks: [],
    cards: [],
    cardsByDeck: [],
    currentUser: null,
    loginFormData: {
      first_name: '',
      last_name: '',
      email: '',
      password: '',
    },
    error: '',
  }

  /********************** FORM FUNCTIONS *******************************/

  clearForm = () => {
    this.setState({
      loginFormData: {
        first_name: '',
        last_name: '',
        email: '',
        password: '',
      }
    })
  }

  handleLoginError = () => {
    this.setState({
      error: 'Invalid Credentials'
    })
  }

  handleLoginFormChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value)
    this.setState( prevState => ({
      loginFormData: {
        ...prevState.loginFormData,
        [name]: value
      }
    }))
  }

  handleLogin = async () => {
    const currentUser = await loginUser(this.state.loginFormData)
    if (currentUser.error) {
      this.handleLoginError();
      this.clearForm();
    } else {
      this.setState({
        currentUser,
        error: ''
      });
      this.clearForm();
      // this.props.history.push('/home');
    }
  }

  handleRegister = async () => {
    const currentUser = await registerUser(this.state.loginFormData)
    if (currentUser.error) {
      this.setState({
        error: 'Invalid Credentials'
      })
      this.clearForm();
    } else {
      this.setState({
        currentUser
      });
      this.clearForm();
      // this.props.history.push('/')
    }
  }

  handleLogout = () => {
    this.setState({
      currentUser: null
    })
    localStorage.removeItem('authToken');
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

  allCardsByDeck = async () => {
    const cards = await getCardsByDeck()
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
    return (
      <div className="App">
        <Header 
          currentUser={this.state.currentUser}
           />
        <Main 
          decks={this.state.decks}
          error={this.state.error}
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
