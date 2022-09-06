import { createReducer } from '@reduxjs/toolkit';
import { filterContact } from './contactAction';
import { addContact, removeContact, getContacts } from '../../services/API';

const initialState = {
  contacts: [],
  filter: '',
  error: null,
};

const contactReducer = createReducer(initialState, {
  [getContacts.fulfilled]: (state, action) => {
    state.contacts = action.payload;
  },

  [getContacts.rejected]: (state, action) => {
    state.error = action.payload;
  },

  [addContact.fulfilled]: (state, action) => {
    state.contacts.push(action.payload);
  },

  [addContact.rejected]: (state, action) => {
    state.error = action.payload;
  },

  [removeContact.fulfilled]: (state, action) => {
    state.contacts = state.contacts.filter(
      contact => contact.id !== action.payload
    );
  },

  [removeContact.rejected]: (state, action) => {
    state.error = action.payload;
  },

  [filterContact]: (state, action) => {
    state.filter = action.payload;
  },
});

export default contactReducer;
