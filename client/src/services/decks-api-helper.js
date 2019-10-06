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

export const getOneDeck = async (deckId) => {
  try {
    const resp = await api.get(`/decks/${deckId}`)
  } catch (e) {
    return e.messsage
  }
};