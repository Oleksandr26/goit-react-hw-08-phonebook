import { ContactForm } from '../components/ContactForm/ContactForm';
import { ContactList } from '../components/ContactList/ContactList';
import { Filter } from '../components/Filter/Filter';

const Contacts = () => {
  return (
    <div>
      <h2 style={{ textAlign: 'center', marginBottom: '30px' }}>Phonebook</h2>
      <div>
        <ContactForm />
        <div>
          <Filter />
          <h2 style={{ textAlign: 'center', marginBottom: '10px' }}>
            Contacts
          </h2>
          <ContactList />
        </div>
      </div>
    </div>
  );
};

export default Contacts;
