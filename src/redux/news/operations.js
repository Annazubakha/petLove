import { createAsyncThunk } from '@reduxjs/toolkit';

import { instance } from '../../api/api';

export const fetchNewsThunk = createAsyncThunk(
  'get news',
  async ({ page = 1, limit = 6, keyword = '' }, thunkAPI) => {
    try {
      const { data } = await instance.get('/news', {
        params: { page, limit, keyword },
      });
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
