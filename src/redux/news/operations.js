import { createAsyncThunk } from '@reduxjs/toolkit';

import { instance } from '../../api/api';

export const fetchNewsThunk = createAsyncThunk(
  'get news',
  async ({ page = 1, keyword = '' }, thunkAPI) => {
    try {
      const { data } = await instance.get('/news', {
        params: { page, keyword },
      });

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
