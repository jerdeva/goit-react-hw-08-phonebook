import { createSlice } from '@reduxjs/toolkit';
import { register, logIn, logOut, refreshUser } from 'redux/auth/operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [register.fulfilled](state, actions) {
      state.user = actions.payload.user;
      state.token = actions.payload.token;
      state.isLoggedIn = true;
    },
    [logIn.fulfilled](state, actions) {
      state.user = actions.payload.user;
      state.token = actions.payload.token;
      state.isLoggedIn = true;
    },
    [logOut.fulfilled](state) {
      (state.user = { name: null, email: null }), (state.token = null);
      state.isLoggedIn = false;
    },
    [refreshUser.pending](state) {
      state.isRefreshing = true;
    },
    [refreshUser.fulfilled](state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isRefreshing = false;
      },
      [refreshUser.rejected](state) {
      state.isRefreshing = false;
    }
  },
});

export const authReducer = authSlice.reducer;
