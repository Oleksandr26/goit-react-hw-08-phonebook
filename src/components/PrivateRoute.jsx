import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

export const PrivateRoute = ({ children }) => {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  return isLoggedIn ? children : <Navigate to="/login" />;
};

PrivateRoute.propTypes = {
  children: PropTypes.element.isRequired,
};
