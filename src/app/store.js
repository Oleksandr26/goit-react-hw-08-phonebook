import contactsReducer from '../features/contact/contactReducer';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: contactsReducer,
});
