import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  fetchNoticesCategiriesThunk,
  fetchNoticesSexThunk,
  fetchNoticesSpeciesThunk,
  fetchNoticesThunk,
} from './operation';

const initialState = {
  notices: [],
  isLoading: false,
  error: null,
  page: 1,
  totalPages: null,
  categories: [],
  sex: [],
  species: [],
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
      .addCase(fetchNoticesCategiriesThunk.fulfilled, (state, { payload }) => {
        state.categories = payload;
        state.isLoading = false;
      })
      .addCase(fetchNoticesSexThunk.fulfilled, (state, { payload }) => {
        state.sex = payload;
        state.isLoading = false;
      })
      .addCase(fetchNoticesSpeciesThunk.fulfilled, (state, { payload }) => {
        state.species = payload;
        state.isLoading = false;
      })

      .addMatcher(
        isAnyOf(
          fetchNoticesThunk.pending,
          fetchNoticesCategiriesThunk.pending,
          fetchNoticesSexThunk.pending,
          fetchNoticesSpeciesThunk.pending
        ),
        (state) => {
          state.isLoading = true;
          state.error = null;
        }
      )
      .addMatcher(
        isAnyOf(
          fetchNoticesThunk.rejected,
          fetchNoticesCategiriesThunk.rejected,
          fetchNoticesSexThunk.rejected,
          fetchNoticesSpeciesThunk.rejected
        ),
        (state, { payload }) => {
          state.error = payload;
          state.isLoading = false;
        }
      );
  },
  selectors: {
    selectIsNotices: (state) => state.notices,
    selectIsLoading: (state) => state.isLoading,
    selectError: (state) => state.error,
    selectIsTotalPages: (state) => state.totalPages,
    selectIsPage: (state) => state.page,
    selectIsCategories: (state) => state.categories,
    selectIsSex: (state) => state.sex,
    selectIsSpecies: (state) => state.species,
  },
});

export const { setPage, setCategory } = slice.actions;

export const noticesReducer = slice.reducer;

export const {
  selectIsNotices,
  selectIsLoading,
  selectError,
  selectIsTotalPages,
  selectIsPage,
  selectIsCategories,
  selectIsSex,
  selectIsSpecies,
} = slice.selectors;
