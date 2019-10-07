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

export const loginUser = async (loginData) => {
  try {
    const resp = await api.post(`/auth/login`, loginData);
    localStorage.setItem('authToken', resp.data.token);
    api.defaults.headers.common.authorization = `Bearer ${resp.data.token}`;
    return resp.data.user
  } catch (e) {
    return { error: e.message };
  }
}

export const registerUser = async (registerData) => {
  try {
    const resp = await api.post(`/users`, registerData);
    localStorage.setItem('authToken', resp.data.token);
    api.defaults.headers.common.authorization = `Bearer ${resp.data.token}`;
    return resp.data.user
  } catch (e) {
    return { error: e.message };
  }
}

export const verifyUser = async () => {
  try {
    const token = localStorage.getItem('authToken');
    if (token) {
      api.defaults.headers.common.authorization = `Bearer ${token}`;
      const resp = await api.post('/auth/verify');
      return resp.data;
    } 
    return false;
  } catch (e) {
    return e.message
  }
}