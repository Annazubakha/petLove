import { lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { PrivateRoute, PublicRoute } from '../routes';
import { SharedLayout } from 'components';
import { selectIsLoggedIn } from '../redux/auth/slice';

const HomePage = lazy(() => import('pages/HomePage/HomePage'));
const RegistrationPage = lazy(() =>
  import('pages/RegistrationPage/RegistrationPage')
);
const LoginPage = lazy(() => import('pages/LoginPage/LoginPage'));
const FriendsPage = lazy(() => import('pages/FriendsPage/FriendsPage'));
const NotFoundPage = lazy(() => import('pages/NotFoundPage/NotFoundPage'));
const ProfilePage = lazy(() => import('pages/ProfilePage/ProfilePage'));

export const App = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const link = isLoggedIn ? '/profile' : '/home';
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route
            path="/home"
            element={
              <PublicRoute>
                <HomePage />
              </PublicRoute>
            }
          />
          <Route
            path="/login"
            element={
              <PublicRoute>
                <LoginPage />
              </PublicRoute>
            }
          />
          <Route
            path="/register"
            element={
              <PublicRoute>
                <RegistrationPage />
              </PublicRoute>
            }
          />
          <Route
            path="/friends"
            element={
              <PublicRoute>
                <FriendsPage />
              </PublicRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <PrivateRoute>
                <ProfilePage />
              </PrivateRoute>
            }
          />
          <Route path="*" element={<NotFoundPage />} />
          <Route path="/" element={<Navigate to={link} replace />} />
        </Route>
      </Routes>
    </>
  );
};
