import { useState } from 'react';
import { useDispatch } from 'react-redux/es/exports';
import { register } from '../features/Register';
import s from './Form.module.css';

const RegisterForm = () => {
  const [user, setUser] = useState({ name: '', email: '', password: '' });
  const dispatch = useDispatch();

  const saveData = event => {
    const { name, value } = event.target;
    setUser(state => ({ ...state, [name]: value }));
  };
  const submitData = event => {
    event.preventDefault();
    dispatch(register(user));
  };

  return (
    <form className={s.form} onSubmit={submitData}>
      <p className={s.title}>Fill in for registration</p>
      <label className={s.label}>
        <span>Name</span>
        <input
          className={s.input}
          type="text"
          value={user.name}
          onChange={saveData}
          name="name"
          required
        />
      </label>
      <label className={s.label}>
        <span>Email</span>
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
        <span>Password</span>
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
        Registration
      </button>
    </form>
  );
};

export default RegisterForm;
