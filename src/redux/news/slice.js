import { createSlice } from '@reduxjs/toolkit';
import { fetchNewsThunk } from './operations';

const initialState = {
  news: [],
  isLoading: false,
  error: null,
  page: 1,
  totalPages: null,
};

const slice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    setPage: (state, action) => {
      state.page = action.payload.page;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchNewsThunk.fulfilled, (state, { payload }) => {
        state.news = payload.results;
        state.totalPages = payload.totalPages;
        state.isLoading = false;
        state.page = payload.page;
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
    selectIsTotalPages: (state) => state.totalPages,
    selectIsPage: (state) => state.page,
  },
});

export const { setPage } = slice.actions;

export const newsReducer = slice.reducer;

export const {
  selectIsNews,
  selectIsLoading,
  selectError,
  selectIsTotalPages,
  selectIsPage,
} = slice.selectors;
