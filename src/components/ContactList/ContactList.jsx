import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux/es/exports';
import {
  getContacts,
  deleteContact,
} from '../../features/contact/OperationsWithContacts';
import s from './ContactList.module.css';

export const ContactList = () => {
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.contacts.filter);
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isLoggedIn) dispatch(getContacts());
  }, [dispatch, isLoggedIn]);

  const onDelete = id => {
    dispatch(deleteContact(id));
  };

  const visibleList = contacts.filter(({ name }) =>
    name.toLowerCase().includes(filter)
  );

  return visibleList.length > 0 ? (
    <ul className={s.list}>
      {visibleList.map(({ name, number, id }) => (
        <li className={s.item} key={id}>
          <div className={s.user}>
            <span>{name} :</span>
            <span>{number}</span>
          </div>
          <button
            className={s.button}
            type="button"
            title="delete contact"
            onClick={() => onDelete(id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  ) : (
    <div style={{ textAlign: 'center' }}>You haven't contacts</div>
  );
};
