import { createAction } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

export const addContact = createAction('contacts/addContact', contact => {
  return {
    payload: {
      ...contact,
      id: nanoid(),
    },
  };
});

export const removeContact = createAction('contacts/deleteContact');
export const filterContact = createAction('contacts/filter');
