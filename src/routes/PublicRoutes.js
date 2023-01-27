import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import selectors from '../redux/auth/authSelectors';

export default function PublicRoute({
  children,
  restricted = false,
  redirectTo = '/',
}) {
  const isLoggedIn = useSelector(selectors.getIsLoggedIn);
  const shouldRedirect = isLoggedIn && restricted;

  return <>{shouldRedirect ? <Navigate to={redirectTo} /> : children}</>;
}
