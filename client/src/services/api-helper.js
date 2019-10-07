const axios = require('axios');
const api = axios.create({
  baseURL: 'http://localhost:3000'
})

/************************* DECK/CARDS API CALLS ***********************/

export const getDecks = async () => {
  try {
    const resp = await api.get('/decks');
    return resp.data;
  } catch (e) {
    return e.message
  }
};

export const getCards = async () => {
  try {
    const resp = await api.get('/cards');
    return resp.data;
  } catch (e) {
    return e.message
  }
};

export const createCard = async (newCardData) => {
  try {
    const resp = await api.post('/cards', { card: newCardData })
    return resp.data;
  } catch (e) {
    return e.message
  }
}

/************************* USER API CALLS ***********************/

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
    const resp = await api.post(`/users`, {user: registerData} );
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
    return e.message
  }
}