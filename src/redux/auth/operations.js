import { createAsyncThunk } from '@reduxjs/toolkit';
import { clearToken, instance, setToken } from '../../api/api';

export const registerThunk = createAsyncThunk(
  'register',
  async (credentials, thunkAPI) => {
    try {
      await instance.post('/users/signup', credentials);
    } catch (error) {
      if (error.response.request.status === 409) {
        return thunkAPI.rejectWithValue('The email is already in use.');
      }

      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const loginThunk = createAsyncThunk(
  'login',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await instance.post('/users/signin', credentials);
      setToken(data.token);
      return data;
    } catch (error) {
      if (error.request.status === 403) {
        return thunkAPI.rejectWithValue(
          "The email doesn't exist or password is incorrect. Please try again."
        );
      }
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logoutThunk = createAsyncThunk(
  'logout',
  async (token, thunkAPI) => {
    try {
      await instance.post('/users/signout', token);
      clearToken();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
