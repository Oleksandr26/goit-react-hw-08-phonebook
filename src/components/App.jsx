import 'modern-normalize/modern-normalize.css';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { useDispatch, useSelector } from 'react-redux';
import {
  addContact,
  removeContact,
  filterContact,
} from '../features/contact/contactAction';

export function App() {
  const { contacts } = useSelector(state => state.contacts);
  const { filter } = useSelector(state => state.contacts);

  const dispatch = useDispatch();
  const filterValue = filter;

  function handleAddContact(contact) {
    const action = addContact(contact);
    const { name } = contact;
    if (
      contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      Notify.failure(`${name} is already in contacts`);
      return;
    } else if (name === '') {
      alert('Please enter your name');
      return;
    }

    dispatch(action);
  }

  function handlefilterContact(event) {
    dispatch(filterContact(event.target.value));
  }

  function handleRemoveContact(id) {
    dispatch(removeContact(id));
  }

  const visibleContacts = () => {
    return contacts.filter(item =>
      item.name.toLowerCase().includes(filterValue)
    );
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        padding: '30px',
      }}
    >
      <h2 style={{ textAlign: 'center', marginBottom: '30px' }}>Phonebook</h2>
      <ContactForm onSubmit={handleAddContact} />
      <h2 style={{ textAlign: 'center', marginBottom: '10px' }}>Contacts</h2>
      <Filter onChange={handlefilterContact} />
      <ContactList
        contacts={visibleContacts()}
        onDelete={handleRemoveContact}
      />
    </div>
  );
}
