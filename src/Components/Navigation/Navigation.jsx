import { useSelector } from 'react-redux';
import authSelectors from 'redux/auth/auth-selectors';
import { Link, Nav } from './Navigation.styled';

export const Navigation = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <Nav>
      <Link to="/">Home</Link>
      {isLoggedIn && <Link to="/contacts">Contacts</Link>}
    </Nav>
  );
};
