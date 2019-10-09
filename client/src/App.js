import React from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import { 
  getDecks,
  getCards,
  createCard,
  updateCard,
  deleteCard,
  loginUser,
  registerUser,
  verifyUser,
  createFave
 } from './services/api-helper.js';
 import { withRouter } from 'react-router-dom'; 

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      decks: [],
      cards: [],
      currentUser: null,
      loginFormData: {
        first_name: '',
        last_name: '',
        email: '',
        password: '',
      },
      error: '',
      newCardFormData: {
        deck_id: '',
        prompt: '',
        answer: '',
        is_public: false,
        user_id: null,
      },
    }
  }

  /********************** GENERAL FORM FUNCTIONS *******************************/

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

  /************************** LOGIN FORM FUNCTIONS **************************/

  handleLoginFormChange = (e) => {
    const { name, value } = e.target;
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

  /*********************** NEW CARD FORM FUNCTIONS ***************************/

  handleNewCardFormChange = (e) => {
    const { name, value } = e.target;
    this.setState( prevState => ({
      newCardFormData: {
        ...prevState.newCardFormData,
        [name]: value
      }
    }))
  }

  handleUpdateForm = (e, cardId) => {
    e.preventDefault();
    const cardData = this.state.cards.find( card => card.id === cardId );
    const { created_at, updated_at, id, ...card } = cardData;
    this.props.history.push(`/update-card/${cardId}`)
    this.setState({
      newCardFormData: card
    })
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

  handleNewCard = async () => {
    console.log(this.state.newCardFormData)
    const newCard = await createCard(this.state.newCardFormData);
    return newCard;
  }

  handleUpdateCard = async (e, updateCardId) => {
    e.preventDefault();
    await updateCard(this.state.newCardFormData, updateCardId);
    this.props.history.push(`/decks/${this.state.newCardFormData.deck_id}/cards`);    
  }

  handleDeleteCard = async (deleteCardId, e) => {
    e.preventDefault();
    await deleteCard(deleteCardId)
    console.log(deleteCardId)
    this.setState(prevState => ({
      cards: prevState.cards.filter((card) => card.id !== deleteCardId),
      decks: prevState.decks.map((deck) => {
        return {
            ...deck,
            cards: deck.cards.filter((card) => {
            return card.id !== deleteCardId;
          })
        } 
      })
    }))
    this.props.history.push(`/decks/${this.state.newCardFormData.deck_id}/cards`)
  }

  handleAddFave = async (deckId, e) => {
    e.preventDefault()
    const parsedDeckId = parseInt(deckId)
    const card = await createFave(this.state.currentUser.id, parsedDeckId)
    return card;
  }

  componentDidMount = async () => {
    this.allDecks();
    this.allCards();
    const currentUser = await verifyUser();
    if (currentUser) {
      this.setState( prevState => ({
        currentUser,
        newCardFormData: {
          ...prevState.newCardFormData, 
          user_id: currentUser.id
        }
      }))
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
          loginFormData={this.state.loginFormData}
          newCardFormData={this.state.newCardFormData}
          handleAddFave={this.handleAddFave}
          handleLoginFormChange={this.handleLoginFormChange}
          handleNewCardFormChange={this.handleNewCardFormChange}
          handleDeleteCard={this.handleDeleteCard}
          handleUpdateCard={this.handleUpdateCard}
          handleUpdateForm={this.handleUpdateForm}
          error={this.state.error}
          handleLogin={this.handleLogin}
          handleRegister={this.handleRegister}
          handleNewCard={this.handleNewCard}
        />
        <Footer 
          decks={this.state.decks} />
      </div>
    );
  }
}

export default withRouter(App);
