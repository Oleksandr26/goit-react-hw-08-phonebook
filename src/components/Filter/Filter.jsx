import { useDispatch } from 'react-redux/es/exports';
import { filterContacts } from '../../features/contact/contactAction';
import s from './Filter.module.css';

export const Filter = () => {
  const dispatch = useDispatch();
  const onChange = event => {
    dispatch(filterContacts(event.currentTarget.value.toLowerCase()));
  };

  return (
    <div className={s.container}>
      <label className={s.label}>
        <span>Find contacts by name:</span>
        <input type="text" className={s.input} onChange={onChange} />
      </label>
    </div>
  );
};
