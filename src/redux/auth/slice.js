import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  UserUpdateThunk,
  addFavoritePetThunk,
  addPetThunk,
  deleteFavoritePetThunk,
  deletePetThunk,
  fetchUserInfoThunk,
  loginThunk,
  logoutThunk,
  registerThunk,
} from './operations';

const initialState = {
  user: {
    name: null,
    email: null,
    avatar: null,
    phone: null,
    noticesFavorites: [],
    pets: [],
  },
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
      .addCase(UserUpdateThunk.fulfilled, (state, { payload }) => {
        state.user.name = payload.name;
        state.user.email = payload.email;
        state.user.phone = payload.phone;
        state.user.avatar = payload.avatar;
      })
      .addCase(addPetThunk.fulfilled, (state, { payload }) => {
        state.user.pets.push(payload);
      })
      .addCase(deletePetThunk.fulfilled, (state, { payload }) => {
        const index = state.user.pets.findIndex(
          (pet) => pet._id === payload.id
        );
        state.user.pets.splice(index, 1);
      })
      .addCase(addFavoritePetThunk.fulfilled, (state, { payload }) => {
        state.user.noticesFavorites.push(payload);
      })
      .addCase(deleteFavoritePetThunk.fulfilled, (state, { payload }) => {
        const index = state.user.noticesFavorites.findIndex(
          (pet) => pet._id === payload.id
        );
        state.user.noticesFavorites.splice(index, 1);
      })
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
          fetchUserInfoThunk.pending,
          addFavoritePetThunk.pending,
          deleteFavoritePetThunk.pending,
          UserUpdateThunk.pending,
          addPetThunk.pending,
          deletePetThunk.pending
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
          fetchUserInfoThunk.fulfilled,
          addFavoritePetThunk.fulfilled,
          deleteFavoritePetThunk.fulfilled,
          UserUpdateThunk.fulfilled,
          addPetThunk.fulfilled,
          deletePetThunk.fulfilled
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
          fetchUserInfoThunk.rejected,
          addFavoritePetThunk.rejected,
          deleteFavoritePetThunk.rejected,
          UserUpdateThunk.rejected,
          addPetThunk.rejected,
          deletePetThunk.rejected
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
    selectNoticesFavorites: (state) => state.user.noticesFavorites,
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
  selectNoticesFavorites,
} = slice.selectors;
