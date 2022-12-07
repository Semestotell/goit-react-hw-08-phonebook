import { useSelector } from 'react-redux';
import authSelectors from 'redux/auth/auth-selectors';
import { AuthNav } from './AuthNav';
import { Navigation } from './Navigation';
import { Container } from './Navigation.styled';
import { UserMenu } from './UserMenu';

export const AppBar = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
  <header>
    <Container>
      <Navigation />
      {!isLoggedIn && <AuthNav />}
      {isLoggedIn && <UserMenu />}
    </Container>    
    </header>  
  );
};
