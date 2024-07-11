import { lazy, useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { PrivateRoute, PublicRoute } from '../routes';
import { SharedLayout } from 'components';
import { selectIsLoggedIn, selectToken } from '../redux/auth/slice';
import { fetchUserInfoThunk } from '../redux/auth/operations';

const HomePage = lazy(() => import('pages/HomePage/HomePage'));
const RegistrationPage = lazy(() =>
  import('pages/RegistrationPage/RegistrationPage')
);
const LoginPage = lazy(() => import('pages/LoginPage/LoginPage'));
const FriendsPage = lazy(() => import('pages/FriendsPage/FriendsPage'));
const NotFoundPage = lazy(() => import('pages/NotFoundPage/NotFoundPage'));
const ProfilePage = lazy(() => import('pages/ProfilePage/ProfilePage'));
const NewsPage = lazy(() => import('pages/NewsPage/NewsPage'));
const NoticesPage = lazy(() => import('pages/NoticesPage/NoticesPage'));
export const App = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const token = useSelector(selectToken);
  const dispatch = useDispatch();
  useEffect(() => {
    if (token && !isLoggedIn) {
      dispatch(fetchUserInfoThunk());
    }
  }, [dispatch, isLoggedIn, token]);

  const link = isLoggedIn ? '/profile' : '/home';
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route
            path="/home"
            element={
              <PublicRoute restricted={false}>
                <HomePage />
              </PublicRoute>
            }
          />
          <Route
            path="/login"
            element={
              <PublicRoute restricted={true}>
                <LoginPage />
              </PublicRoute>
            }
          />
          <Route
            path="/news"
            element={
              <PublicRoute restricted={false}>
                <NewsPage />
              </PublicRoute>
            }
          />
          <Route
            path="/register"
            element={
              <PublicRoute restricted={true}>
                <RegistrationPage />
              </PublicRoute>
            }
          />
          <Route
            path="/friends"
            element={
              <PublicRoute restricted={false}>
                <FriendsPage />
              </PublicRoute>
            }
          />
          <Route
            path="/notices"
            element={
              <PublicRoute restricted={false}>
                <NoticesPage />
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
