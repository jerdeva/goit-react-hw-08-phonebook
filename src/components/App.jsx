import { Route, Routes } from 'react-router-dom';
import { lazy, useEffect } from 'react';
import { Layout } from './Layout';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';
import { refreshUser } from 'redux/auth/operations';
import { useAuth } from 'hooks/useAuth';
import { useDispatch } from 'react-redux';

const HomePage = lazy(() => import('../pages/Home/Home'));
const ContactsPage = lazy(() => import('../pages/Contacts/Contacts'));
const RegisterPage = lazy(() => import('../pages/Register'));
const LoginPage = lazy(() => import('../pages/Login'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          index
          element={
            <RestrictedRoute
              redirectedTo="/contacts"
              component={<HomePage />}
            />
          }
        />
        <Route
          path="register"
          element={
            <RestrictedRoute
              redirectedTo="/contacts"
              component={<RegisterPage />}
            />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute
              redirectedTo="/contacts"
              component={<LoginPage />}
            />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectedTo="/login" component={<ContactsPage />} />
          }
        />
      </Route>
    </Routes>
  );
};