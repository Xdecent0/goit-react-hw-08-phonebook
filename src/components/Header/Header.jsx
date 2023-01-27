import { useSelector } from 'react-redux';
import selectors  from '../../redux/auth/authSelectors';
import AuthForm from 'components/AuthForm/AuthForm';
import Navigation from 'components/Navigation/Navigation';
import UserMenu from 'components/UserMenu/UserMenu';

import styles from './Header.module.css';

export default function Header() {
  const isLoggedIn = useSelector(selectors.getIsLoggedIn);
  return (
    <header className={styles.header}>
      <div className={styles.nav}>
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthForm />}
      </div>
    </header>
  );
}