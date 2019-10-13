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

  handleCardFormError = () => {
    this.setState({
      error: "Uh oh, missing info. Try again."
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
      }, () => {
        this.props.history.push('/');
      });
      this.clearLoginForm();
      
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
        currentUser,
        error: ''
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
    if (newCard.error) {
      this.handleCardFormError();
    } else if (newCard) {  
      this.setState( prevState => ({
        cards: [
          ...prevState.cards, 
          newCard
        ],
        decks: prevState.decks.map((deck) => {
          return {
              ...deck,
              cards: newCard.deck_id === deck.id ? deck.cards.concat([newCard]) : deck.cards
          } 
        }),
        error: ''
      }))
      this.props.history.push(`/decks/${this.state.newCardFormData.deck_id}/cards`);
      this.clearCardForm()
    } 
    return newCard;
  }

  handleUpdateCard = async (e, updateCardId) => {
    e.preventDefault();
    const updatedCard = await updateCard(this.state.newCardFormData, updateCardId);
    if (updatedCard.error) {
      this.handleCardFormError();
    } else if (updatedCard) {
      this.setState( prevState => ({
        cards: prevState.cards.map( card => card.id === updatedCard.id ? updatedCard : card),
        decks: prevState.decks.map((deck) => {
          return {
              ...deck,
              cards: deck.cards.map( card => card.id === updatedCard.id ? updatedCard : card)
          } 
        }),
        error: ''
      }))
      this.props.history.push(`/decks/${this.state.newCardFormData.deck_id}/cards`);
      this.clearCardForm();    
    }
    return updatedCard;
  }

  handleDeleteCard = async (deleteCardId, e) => {
    e.preventDefault();
    await deleteCard(deleteCardId)
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
  }

  /******************************** FAVES FUNCTIONS ***********************************/

  handleAddFave = async (e, deckId) => {
    console.log('fave added')
    e.preventDefault()
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

  handleDeleteFave = async (e, deckId, faveId) => {
    console.log('fave deleted')
    e.preventDefault();
    await deleteFave(deckId, faveId)
    // this.setState(prevState => ({
    //   currentUser: prevState.currentUser.faves.filter((fave) => fave.id !== faveId),
    // }))
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
    // this.showFaves();
  }

  render() {
    return (
      <div className="App">
        <Header 
          currentUser={this.state.currentUser}
          handleLogout={this.handleLogout}
          error={this.state.error} />
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
          decks={this.state.decks}
          currentUser={this.state.currentUser} />
      </div>
    );
  }
}

export default withRouter(App);
