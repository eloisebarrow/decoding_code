const axios = require('axios');
const api = axios.create({
  baseURL: 'http://localhost:3000'
})

export const getDecks = async () => {
  try {
    const resp = await api.get('/decks');
    return resp.data;
  } catch (e) {
    return e.message
  }
};

// export const getOneDeck = async (deckId) => {
//   try {
//     const resp = await api.get(`/decks/${deckId}`)
//     return resp.data;
//   } catch (e) {
//     return e.messsage
//   }
// };

export const getCards = async () => {
  try {
    const resp = await api.get('/cards');
    return resp.data;
  } catch (e) {
    return e.message
  }
};

export const getCardsByDeck = async (deckId) => {
  try {
    const resp = await api.get(`/decks/${deckId}/cards`)
    return resp.data;
  } catch (e) {
    return e.messsage
  }
};
