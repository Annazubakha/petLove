import { createAsyncThunk } from '@reduxjs/toolkit';

import { instance } from '../../api/api';

export const UserUpdateThunk = createAsyncThunk(
  'update user info',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await instance.patch('/users/current/edit', credentials);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addPetThunk = createAsyncThunk(
  'add user pet',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await instance.post(
        '/users/current/pets/add',
        credentials
      );
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
