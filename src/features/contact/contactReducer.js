import { createReducer } from '@reduxjs/toolkit';
import { addContact, removeContact, filterContact } from './contactAction';

const initialState = {
  contacts: [],
  filter: '',
};

const contactReducer = createReducer(initialState, {
  [addContact]: (state, { payload }) => {
    state.contacts = [...state.contacts, payload];
  },
  [removeContact]: (state, { payload }) => {
    console.log('payload: ', payload);
    state.contacts = state.contacts.filter(item => item.id !== payload);
  },
  [filterContact]: (state, { payload }) => {
    state.filter = payload.toLowerCase().trim();
  },
});

export default contactReducer;
