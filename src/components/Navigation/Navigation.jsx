import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux/es/exports';
import { logOut } from '../../features/Register';
import s from './Navigation.module.css';

const getActive = ({ isActive }) => (isActive ? s.active : s.link);

export const Navigation = () => {
  const auth = useSelector(state => state.auth);
  const dispatch = useDispatch();

  const exit = () => {
    dispatch(logOut());
  };
  return (
    <nav className={s.nav}>
      <div className={s.container}>
        <NavLink className={getActive} to="/">
          Home
        </NavLink>
        {auth.isLoggedIn && (
          <NavLink className={getActive} to="/contacts">
            Phonebook
          </NavLink>
        )}
      </div>
      <div className={s.container}>
        {auth.isLoggedIn ? (
          <>
            <span className={s.title}>
              Welcome, <span>{auth.user.name}</span>
            </span>
            <button className={s.button} type="button" onClick={exit}>
              Log Out
            </button>
          </>
        ) : (
          <>
            <NavLink className={getActive} to="/login">
              Sign in
            </NavLink>
            <NavLink className={getActive} to="/register">
              Sign up
            </NavLink>
          </>
        )}
      </div>
    </nav>
  );
};
