import React from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import { getDecks } from './services/api-helper.js';

class App extends React.Component {
  state = {
    decks: []
  }

  componentDidMount = async () => {
    const allDecks = await getDecks();
    this.setState({
      decks: allDecks
    })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Main decks={this.state.decks} />
        <Footer />
      </div>
    );
  }
}

export default App;
