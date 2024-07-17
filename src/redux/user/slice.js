import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { UserUpdateThunk } from './operations';

const initialState = {
  name: null,
  email: null,
  phone: null,
  avatar: null,

  error: null,
  isLoading: false,
};

const slice = createSlice({
  name: 'user',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(UserUpdateThunk.fulfilled, (state, { payload }) => {
        state.name = payload.name;
        state.email = payload.email;
        state.phone = payload.phone;
        state.avatar = payload.avatar;
        state.isLoggedIn = true;
        state.isLoading = false;
      })
      .addMatcher(isAnyOf(UserUpdateThunk.pending), (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addMatcher(isAnyOf(UserUpdateThunk.rejected), (state, { payload }) => {
        state.error = payload;
        state.isLoading = false;
      });
  },
  selectors: {
    selectError: (state) => state.error,
    selectIsLoading: (state) => state.isLoading,
  },
});

export const userReducer = slice.reducer;

export const { selectUser, selectError, selectIsLoading } = slice.selectors;
