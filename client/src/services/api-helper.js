const axios = require('axios');
const api = axios.create({
  //baseURL: 'http://localhost:3000' // development URL
  baseURL: 'https://decoding-code.herokuapp.com' // PRODUCTION 
})

/************************* DECK/CARDS API CALLS ***********************/

export const getDecks = async () => {
  try {
    const resp = await api.get('/decks');
    return resp.data;
  } catch (e) {
    return { error: e.message };
  }
};

export const getCards = async () => {
  try {
    const resp = await api.get('/cards');
    return resp.data;
  } catch (e) {
    return { error: e.message };
  }
};

export const createCard = async (newCardData) => {
  try {
    const resp = await api.post('/cards', { card: newCardData });
    console.log('new card from api-helper', resp.data)
    return resp.data;
  } catch (e) {
    return { error: e.message };
  }
}

export const updateCard = async (updateCardData, cardId) => {
  try {
    const resp = await api.put(`/cards/${cardId}`, { card: updateCardData, cardId })
    return resp.data;
  } catch (e) {
    return { error: e.message };
  }
}

export const deleteCard = async (cardId) => {
  try {
    await api.delete(`/cards/${cardId}`)
  } catch (e) {
    return { error: e.message };
  }
}

/************************* FAVE API CALLS ***********************/

export const createFave = async (userId, deckId) => {
  try {
    const newFave = await api.post(`/decks/${deckId}/faves`, userId, deckId)
    return newFave;
  } catch (e) {
    return { error: e.message };
  }  
}

export const showFaves = async () => {
  try {
    const resp = await api.get('/faves')
    return resp.data;
  } catch (e) {
    return { error: e.message };
  }
}

export const deleteFave = async (deckId, faveId) => {
  try {
    await api.delete(`/decks/${deckId}/faves/${faveId}`)
  } catch (e) {
    return { error: e.message };
  }
}

/************************* USER API CALLS ***********************/

export const loginUser = async (loginData) => {
  try {
    const resp = await api.post(`/auth/login`, loginData);
    localStorage.setItem('authToken', resp.data.token);
    api.defaults.headers.common.authorization = `Bearer ${resp.data.token}`;
    console.log(resp.data.user);
    return resp.data.user;
  } catch (e) {
    return { error: e.message };
  }
}

export const registerUser = async (registerData) => {
  try {
    const resp = await api.post(`/users`, { user: registerData } );
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
      const resp = await api.get('/auth/verify');
      return resp.data;
    } 
    return false;
  } catch (e) {
    return { error: e.message };
  }
}