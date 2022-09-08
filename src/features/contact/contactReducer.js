import { createReducer } from '@reduxjs/toolkit';
import { getContacts } from './OperationsWithContacts';
import { addContact } from './OperationsWithContacts';
import { deleteContact } from './OperationsWithContacts';
import { filterContacts } from './contactAction';

const initalState = {
  items: [],
  filter: '',
  isLoding: false,
  error: null,
};

const contacts = createReducer(initalState, {
  [getContacts.pending]: state => {
    state.isLoding = true;
  },

  [getContacts.fulfilled]: (state, action) => {
    state.items = action.payload;
    state.isLoding = false;
  },

  [getContacts.rejected]: (state, action) => {
    state.error = action.payload;
    state.isLoding = false;
  },

  [addContact.pending]: state => {
    state.isLoding = true;
  },

  [addContact.fulfilled]: (state, action) => {
    state.items.unshift(action.payload);
    state.isLoading = false;
  },

  [addContact.rejected]: (state, action) => {
    state.error = action.payload;
    state.isLoading = false;
  },

  [deleteContact.pending]: state => {
    state.isLoding = true;
  },

  [deleteContact.fulfilled]: (state, action) => {
    state.items = state.items.filter(contact => {
      return contact.id !== action.payload;
    });
    state.isLoading = false;
  },

  [deleteContact.rejected]: (state, action) => {
    state.error = action.payload;
    state.isLoading = false;
  },

  [filterContacts]: (state, action) => {
    state.filter = action.payload;
  },
});

export default contacts;
