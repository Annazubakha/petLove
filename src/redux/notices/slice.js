import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  fetchCitiesThunk,
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
  cities: [],
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
      .addCase(fetchCitiesThunk.fulfilled, (state, { payload }) => {
        state.cities = payload;
        state.isLoading = false;
      })
      .addMatcher(
        isAnyOf(
          fetchNoticesThunk.pending,
          fetchNoticesCategiriesThunk.pending,
          fetchNoticesSexThunk.pending,
          fetchNoticesSpeciesThunk.pending,
          fetchCitiesThunk.pending
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
          fetchNoticesSpeciesThunk.rejected,
          fetchCitiesThunk.rejected
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
    selectIsCities: (state) => state.cities,
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
  selectIsCities,
} = slice.selectors;
