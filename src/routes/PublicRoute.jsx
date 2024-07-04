import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';

import { selectIsLoggedIn } from '../redux/auth/slice';

export const PublicRoute = ({ children, restricted }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const location = useLocation();
  if (isLoggedIn && restricted) {
    return <Navigate to={location.state?.from || '/profile'} />;
  }

  return children;
};
