const axios = require('axios');
const api = axios.create({
  baseURL: 'http://localhost:3000'
})

export const getDecks = async () => {
  try {
    const resp = await api.get('/decks');
    console.log(resp.data);
  } catch (e) {
    console.log(e.message)
  }
};