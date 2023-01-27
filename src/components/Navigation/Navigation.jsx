import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import selectors  from 'redux/auth/authSelectors';

import styles from './Navigation.module.css';

export default function Navigation() {
  const isLoggedIn = useSelector(selectors.getIsLoggedIn);

  return (
    <nav className={styles.nav}>
      {isLoggedIn ? (
        <NavLink
          to="/contacts"
          className={({ isActive }) => {
            return isActive
              ? [styles.button, styles.active].join(' ')
              : styles.button;
          }}
        >
          Contacts
        </NavLink>
      ) : (
        <NavLink
          to="/"
          className={({ isActive }) => {
            return isActive
              ? [styles.button, styles.active].join(' ')
              : styles.button;
          }}
        >
          Home
        </NavLink>
      )}
    </nav>
  );
}
