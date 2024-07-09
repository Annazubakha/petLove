import { createSlice } from '@reduxjs/toolkit';
import { fetchNewsThunk } from './operations';

const initialState = {
  news: [],
  isLoading: false,
  error: null,
};

const slice = createSlice({
  name: 'news',
  initialState,

  extraReducers: (builder) => {
    builder
      .addCase(fetchNewsThunk.fulfilled, (state, { payload }) => {
        state.news = payload;
        state.isLoading = false;
      })
      .addCase(fetchNewsThunk.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchNewsThunk.rejected, (state, { payload }) => {
        state.error = payload;
        state.isLoading = false;
      });
  },
  selectors: {
    selectIsNews: (state) => state.news,
    selectIsLoading: (state) => state.isLoading,
    selectError: (state) => state.error,
  },
});

export const newsReducer = slice.reducer;

export const { selectIsNews, selectIsLoading, selectError } = slice.selectors;
