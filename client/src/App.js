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
  createFave,
  showFaves,
  deleteFave
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

  clearLoginForm = () => {
    this.setState({
      loginFormData: {
        first_name: '',
        last_name: '',
        email: '',
        password: '',
      }
    })
  }

  clearCardForm = () => {
    this.setState({
      newCardFormData: {
        deck_id: '',
        prompt: '',
        answer: '',
        is_public: false,
        user_id: null,
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
      this.clearLoginForm();
    } else {
      this.setState({
        currentUser,
        error: ''
      });
      this.clearLoginForm();
      this.props.history.push('/my-decks');
    }
  }

  handleRegister = async () => {
    const currentUser = await registerUser(this.state.loginFormData)
    if (currentUser.error) {
      this.setState({
        error: 'Invalid Credentials'
      })
      this.clearLoginForm();
    } else {
      this.setState({
        currentUser
      });
      this.clearLoginForm();
      this.props.history.push('/my-decks')
    }
  }

  handleLogout = () => {
    this.setState({
      currentUser: null
    })
    localStorage.removeItem('authToken');
  }

  /*********************** NEW/UPDATE CARD FORM FUNCTIONS ***************************/

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
    const newCard = await createCard(this.state.newCardFormData);
    if (newCard) {  
      this.setState( prevState => ({
        cards: [
          ...prevState.cards,
          newCard
        ]
      }))
      this.props.history.push(`/decks/${this.state.newCardFormData.deck_id}/cards`)
    } else {
      return newCard.error
    }
    return newCard;
  }

  handleUpdateCard = async (e, updateCardId) => {
    e.preventDefault();
    const updatedCard = await updateCard(this.state.newCardFormData, updateCardId);
    if (updatedCard) {
      //then change state
      this.clearCardForm()
      this.props.history.push(`/decks/${this.state.newCardFormData.deck_id}/cards`); 
    }
    return updatedCard;
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
    // e.preventDefault()
    const parsedDeckId = parseInt(deckId)
    const card = await createFave(this.state.currentUser.id, parsedDeckId)
    return card;
  }

  showFaves = async () => {
    const faves = await showFaves();
    this.setState({
      faves
    })
  }

  handleDeleteFave = async (deckId) => {
    // e.preventDefault();
    await deleteFave(deckId)
  }

  /********************** REACT LIFECYCLE METHODS *****************************/

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
    this.showFaves();
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
          handleDeleteFave={this.handleDeleteFave}
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
