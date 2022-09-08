import { useState } from 'react';
import { useDispatch } from 'react-redux/es/exports';
import { logIn } from '../features/Register';
import s from './Form.module.css';

const LoginForm = () => {
  const [user, setUser] = useState({ email: '', password: '' });
  const dispatch = useDispatch();

  const saveData = event => {
    const { name, value } = event.target;
    setUser(state => ({ ...state, [name]: value }));
  };
  const submitData = event => {
    event.preventDefault();
    dispatch(logIn(user));
  };

  return (
    <form className={s.form} onSubmit={submitData}>
      <p className={s.title}>Log into the Phonebook</p>
      <label className={s.label}>
        <span className={s.label__text}>Email</span>
        <input
          className={s.input}
          type="text"
          value={user.email}
          onChange={saveData}
          name="email"
          required
        />
      </label>
      <label className={s.label}>
        <span className={s.label__text}>Password</span>
        <input
          className={s.input}
          type="password"
          value={user.password}
          onChange={saveData}
          name="password"
          required
        />
      </label>
      <button className={s.button} type="submit">
        Log In
      </button>
    </form>
  );
};

export default LoginForm;
