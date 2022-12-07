import React, { useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { RegisterView } from './pages/RegisterViev';
import { LoginView } from './pages/LoginView';
import { Route, Routes } from 'react-router-dom';
import { HomeView } from './pages/Home/HomeView';
import { ContactsView } from './pages/ContactsView';
import { PrivateRoute, PublicRoute } from './Routes';
import { ThemeProvider } from '@mui/material';
import theme from './theme';
import Layout from './Layout/Layout';
import { useDispatch, useSelector } from 'react-redux';
import authOperiation from 'redux/auth/auth-operation';
import authSelectors from 'redux/auth/auth-selectors';

export default function App() {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(
    authSelectors.getFetchingCurrentUser
  );
  useEffect(() => {
    dispatch(authOperiation.fetchCurrentUser());
  }, [dispatch]);

  return (
    !isFetchingCurrentUser && (
      <>
        <ThemeProvider theme={theme}>
          <ToastContainer />
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route
                index
                element={
                  <PublicRoute redirect='/contacts'>
                    <HomeView />
                  </PublicRoute>
                }
              />

              <Route
                path="register"
                element={
                  <PublicRoute restricted redirect='/contacts'>
                    <RegisterView />
                  </PublicRoute>
                }
              />
              <Route
                path="login"
                element={
                  <PublicRoute restricted redirect='/contacts'>
                    <LoginView />
                  </PublicRoute>
                }
              />
              <Route
                path="/contacts"
                element={
                  <PrivateRoute redirect='/login'>
                    <ContactsView />
                  </PrivateRoute>
                }
              />
              <Route path="*" element={<HomeView />} />
            </Route>
          </Routes>
        </ThemeProvider>
      </>
    )
  );
}
