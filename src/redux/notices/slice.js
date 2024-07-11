import { createSlice } from '@reduxjs/toolkit';
import { fetchNoticesThunk } from './operation';

const initialState = {
  notices: [],
  isLoading: false,
  error: null,
  page: 1,
  totalPages: null,
};

const slice = createSlice({
  name: 'notices',
  initialState,
  reducers: {
    setPage: (state, action) => {
      state.page = action.payload.page;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchNoticesThunk.fulfilled, (state, { payload }) => {
        state.notices = payload.results;
        state.totalPages = payload.totalPages;
        state.isLoading = false;
        state.page = payload.page;
      })
      .addCase(fetchNoticesThunk.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchNoticesThunk.rejected, (state, { payload }) => {
        state.error = payload;
        state.isLoading = false;
      });
  },
  selectors: {
    selectIsNotices: (state) => state.notices,
    selectIsLoading: (state) => state.isLoading,
    selectError: (state) => state.error,
    selectIsTotalPages: (state) => state.totalPages,
    selectIsPage: (state) => state.page,
  },
});

export const { setPage } = slice.actions;

export const noticesReducer = slice.reducer;

export const {
  selectIsNotices,
  selectIsLoading,
  selectError,
  selectIsTotalPages,
  selectIsPage,
} = slice.selectors;
