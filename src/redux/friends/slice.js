import { createSlice } from '@reduxjs/toolkit';
import {} from '../auth/operations';
import { fetchFriendsThunk } from './operations';

const initialState = {
  friends: [],
  isLoading: false,
  error: null,
};

const slice = createSlice({
  name: 'friends',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchFriendsThunk.fulfilled, (state, { payload }) => {
        state.friends = payload;
        state.isLoading = false;
      })
      .addCase(fetchFriendsThunk.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchFriendsThunk.rejected, (state, { payload }) => {
        state.error = payload;
        state.isLoading = false;
      });
  },
  selectors: {
    selectIsFriends: (state) => state.friends,
    selectIsLoading: (state) => state.isLoading,
    selectError: (state) => state.error,
  },
});

export const friendsReducer = slice.reducer;

export const { selectIsFriends, selectIsLoading, selectError } =
  slice.selectors;
