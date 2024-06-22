import { createAsyncThunk } from '@reduxjs/toolkit';

import { instance } from '../../api/api';

export const fetchFriendsThunk = createAsyncThunk(
  'get friends',
  async (_, thunkAPI) => {
    try {
      const { data } = await instance.get('/friends');
      console.log(data);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
