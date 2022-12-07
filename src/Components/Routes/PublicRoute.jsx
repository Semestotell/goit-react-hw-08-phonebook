import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import authSelectors from 'redux/auth/auth-selectors';

export const PublicRoute = ({ children, redirect, restricted = false }) => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  
  return isLoggedIn && restricted ? <Navigate to={redirect} /> : children;
};
