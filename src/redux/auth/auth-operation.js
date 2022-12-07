import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

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
    const { data } = await axios.post('users/signup', credentials);
    token.set(data.token);
    toast.success(`Success! New user added!`);
    return data;
  } catch (error) {
    toast.error('Something went wrong! Try again!');
    return credentials.rejectWithValue();
  }
});

const logIn = createAsyncThunk('auth/login', async credentials => {
  try {
    const { data } = await axios.post('users/login', credentials);
    token.set(data.token);
    toast.success('Welcome in Your Phonebook!');
    return data;
  } catch (error) {
    toast.error('Something went wrong! Try again!');
    return credentials.rejectWithValue();
  }
});

const logout = createAsyncThunk('auth/logout', async () => {
  try {
    await axios.post('users/logout');
    token.unset();
  } catch (error) {
    toast.error('Something went wrong! Try again!');
    return error;
  }
});

const fetchCurrentUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistToken = state.auth.token;

    if (persistToken === null) {
      return thunkAPI.rejectWithValue();
    }
    token.set(persistToken);
    try {
      const { data } = await axios.get('users/current');
      return data;
    } catch (error) {
      toast.error('Something went wrong! Try again!');
      return error;
    }
  }
);
const authOperiation = { register, logIn, logout, fetchCurrentUser };
export default authOperiation;
