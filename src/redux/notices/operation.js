import { createAsyncThunk } from '@reduxjs/toolkit';

import { instance } from '../../api/api';

export const fetchNoticesThunk = createAsyncThunk(
  'get notices',
  async (
    {
      page = 1,
      keyword = '',
      category = '',
      species = '',
      sex = '',
      locationId = '',
      // byDate = '',
      // byPrice = '',
      // byPopularity = '',
    },
    thunkAPI
  ) => {
    try {
      const { data } = await instance.get('/notices', {
        params: {
          page,
          keyword,
          category,
          species,
          sex,
          locationId,
          // byDate,
          // byPrice,
          // byPopularity,
        },
      });
      console.log(data);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchNoticesCategiriesThunk = createAsyncThunk(
  'get categories',
  async (_, thunkAPI) => {
    try {
      const { data } = await instance.get('/notices/categories');

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchNoticesSexThunk = createAsyncThunk(
  'get sex',
  async (_, thunkAPI) => {
    try {
      const { data } = await instance.get('/notices/sex');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchNoticesSpeciesThunk = createAsyncThunk(
  'get species',
  async (_, thunkAPI) => {
    try {
      const { data } = await instance.get('/notices/species');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchCitiesThunk = createAsyncThunk(
  'get cities',
  async (_, thunkAPI) => {
    try {
      const { data } = await instance.get('/cities');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
