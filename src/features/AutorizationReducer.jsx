import { createReducer } from '@reduxjs/toolkit';
import { register, logIn, logOut, getLastUser } from './Register';
import Notiflix from 'notiflix';

const initalState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isGettingUser: false,
};

const autorization = createReducer(initalState, {
  [register.fulfilled]: (state, action) => {
    state.user = action.payload.user;
    state.token = action.payload.token;
    state.isLoggedIn = true;
    Notiflix.Notify.success('Welcome to your personal phone book!');
  },

  [register.rejected]: () => {
    Notiflix.Notify.failure(
      'Registration error,check the correctness of the recorded data and try again'
    );
  },

  [logIn.rejected]: () => {
    Notiflix.Notify.failure('Login failed, wrong username or password');
  },

  [logIn.fulfilled]: (state, action) => {
    state.user = action.payload.user;
    state.token = action.payload.token;
    state.isLoggedIn = true;
    Notiflix.Notify.success(`Welcome back ${state.user.name}`);
  },

  [logOut.rejected]: () => {
    Notiflix.Notify.failure('Logout failed, please try again');
  },

  [logOut.fulfilled]: (state, action) => {
    state.user = { name: null, email: null };
    state.token = null;
    state.isLoggedIn = false;
  },

  [getLastUser.rejected]: (state, action) => {
    state.isGettingUser = false;
  },

  [getLastUser.fulfilled]: (state, action) => {
    state.user = action.payload;
    state.isLoggedIn = true;
    state.isGettingUser = false;
  },

  [getLastUser.pending]: (state, action) => {
    state.isGettingUser = true;
  },
});

export default autorization;
