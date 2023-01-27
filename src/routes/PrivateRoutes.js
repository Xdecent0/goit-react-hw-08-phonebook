import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import selectors from 'redux/auth/authSelectors';

export default function PrivateRoute({ children }) {
  const isLoggedIn = useSelector(selectors.getIsLoggedIn);

  return <>{isLoggedIn ? children : <Navigate to="/" />}</>;
}
