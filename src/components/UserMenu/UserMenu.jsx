import { useDispatch, useSelector } from 'react-redux';
import operations from 'redux/auth/authOperations';
import selectors  from 'redux/auth/authSelectors';
import styles from './UserMenu.module.css';

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(selectors.getUserName);
  const email = useSelector(selectors.getUserEmail);

  return (
    <div className={styles.nav}>
      <div className={styles.menu}>
        <p className={styles.text}>Current user: {name}</p>
        <p className={styles.text}>{email}</p>
      </div>
      <button
        type="button"
        className={styles.button}
        onClick={() => dispatch(operations.logOut())}
      >
        Log Out
      </button>
    </div>
  );
}