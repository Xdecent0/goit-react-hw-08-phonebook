import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import Notiflix from 'notiflix';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const SIGN_UP_ENDPOINT = '/users/signup';
const SIGN_IN_ENDPOINT = '/users/login';
const SIGN_OUT_ENDPOINT = '/users/logout';
const GET_USER_ENDPOINT = '/users/current';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};
const register = createAsyncThunk('auth/register', async credentials => {
  try {
    const { data } = await axios.post(SIGN_UP_ENDPOINT, credentials);
    token.set(data.token);
    console.log(data);
    return data;
  } catch (error) {
    return Notiflix.Notify.failure(error.message);
  }
});
const logIn = createAsyncThunk('auth/login', async credentials => {
  try {
    const res = await axios.post(SIGN_IN_ENDPOINT, credentials);
    token.set(res.data.token);
    return res.data;
  } catch (error) {
    return Notiflix.Notify.failure(error.message);
  }
});
const logOut = createAsyncThunk('auth/logout', async () => {
  try {
    await axios.post(SIGN_OUT_ENDPOINT);
    token.unset();
  } catch (error) {
    return Notiflix.Notify.failure(error.message);
  }
});

const fetchCurrentUser = createAsyncThunk(
  'auth/refresh',
  async (__, thunkAPI) => {
    const savedToken = thunkAPI.getState().auth.token;

    if (!savedToken) {
      return thunkAPI.rejectWithValue('No users logined');
    }
    token.set(savedToken);
    try {
      const res = await axios.get(GET_USER_ENDPOINT);
      return res.data;
    } catch (error) {
      token.unset();
      return Notiflix.Notify.failure(error.message);
    }
  }
);

const authOperations = {
  register,
  logIn,
  logOut,
  fetchCurrentUser,
};

export default authOperations;
