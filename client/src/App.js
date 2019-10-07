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
  registerUser,
  verifyUser
 } from './services/api-helper.js';
 import { withRouter } from 'react-router-dom'; 

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
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
      this.props.history.push('/');
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
      this.props.history.push('/')
    }
  }

  handleLogout = () => {
    this.setState({
      currentUser: null
    })
    localStorage.removeItem('authToken');
  }

  /********************** API FUNCTIONS *****************************/
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
    const cards = await getCardsByDeck(5)
    this.setState({
      cardsByDeck: cards
    })
  }

  componentDidMount = async () => {
    this.allDecks();
    this.allCards();
    this.allCardsByDeck();
    const currentUser = await verifyUser();
    if (currentUser) {
      this.setState({ currentUser })
    }
  }

  render() {
    return (
      <div className="App">
        <Header 
          currentUser={this.state.currentUser}
          handleLogout={this.handleLogout} />
        <Main 
          decks={this.state.decks}
          cards={this.state.cards}
          currentUser={this.state.currentUser}
          cardsByDeck={this.state.cardsByDeck}
          loginFormData={this.state.loginFormData}
          handleLoginFormChange={this.handleLoginFormChange}
          error={this.state.error}
          handleLogin={this.handleLogin}
          handleRegister={this.handleRegister}
        />
        <Footer decks={this.state.decks} />
      </div>
    );
  }
}

export default withRouter(App);
