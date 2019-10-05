import React from 'react';
import { getDecks } from './../services/api-helper.js';

class AllDecks extends React.Component {
  
  componentDidMount = async () => {
    await getDecks()
  }

  render() {
    return (
      <div>
        <h1>All Decks</h1>
      </div>
    )
  }
}

export default AllDecks;
