import React from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import { 
  getDecks
 } from './services/decks-api-helper.js';

class App extends React.Component {
  state = {
    decks: [],
    oneDeck: [],
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

  componentDidMount = () => {
    this.allDecks();
    
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Main 
          decks={this.state.decks}
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
