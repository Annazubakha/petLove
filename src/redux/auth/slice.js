import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  fetchUserInfoThunk,
  loginThunk,
  logoutThunk,
  registerThunk,
} from './operations';

const initialState = {
  // user: {
  //   name: null,
  //   email: null,
  //   avatar: null,
  //   phone: null,
  //   noticesViewed: [],
  //   noticesFavorites: [],
  //   pets: [],
  // },
  token: null,
  isLoggedIn: false,
  error: null,
  isLoading: false,
  isRefreshing: null,
};

const slice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(registerThunk.fulfilled, (state, { payload: { token } }) => {
        state.token = token;
        state.isLoggedIn = true;
      })
      .addCase(loginThunk.fulfilled, (state, { payload: { token } }) => {
        state.token = token;
        state.isLoggedIn = true;
      })
      .addCase(logoutThunk.fulfilled, () => {
        return initialState;
      })
      .addCase(fetchUserInfoThunk.pending, (state) => {
        state.isRefreshing = true;
      })
      .addCase(fetchUserInfoThunk.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(fetchUserInfoThunk.rejected, (state) => {
        state.isRefreshing = false;
      })

      .addMatcher(
        isAnyOf(
          registerThunk.pending,
          loginThunk.pending,
          logoutThunk.pending,
          fetchUserInfoThunk.pending
        ),
        (state) => {
          state.isLoading = true;
          state.error = null;
        }
      )
      .addMatcher(
        isAnyOf(
          registerThunk.fulfilled,
          loginThunk.fulfilled,
          logoutThunk.fulfilled,
          fetchUserInfoThunk.fulfilled
        ),
        (state) => {
          state.isLoading = false;
        }
      )
      .addMatcher(
        isAnyOf(
          loginThunk.rejected,
          registerThunk.rejected,
          logoutThunk.rejected,
          fetchUserInfoThunk.rejected
        ),
        (state, { payload }) => {
          state.error = payload;
          state.isLoading = false;
        }
      );
  },
  selectors: {
    selectisRefreshing: (state) => state.isRefreshing,
    selectUser: (state) => state.user,
    selectToken: (state) => state.token,
    selectIsLoggedIn: (state) => state.isLoggedIn,
    selectError: (state) => state.error,
    selectIsLoading: (state) => state.isLoading,
  },
});

export const authReducer = slice.reducer;

export const {
  selectisRefreshing,
  selectUser,
  selectToken,
  selectIsLoggedIn,
  selectError,
  selectIsLoading,
} = slice.selectors;
