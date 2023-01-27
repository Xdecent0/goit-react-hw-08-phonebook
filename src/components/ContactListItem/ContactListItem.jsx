import PropTypes from 'prop-types';
import { useDeleteContactMutation } from '../../service/phoneApi';
import style from './ContactListItem.module.css';

const ContactListItem = ({ id, name, number }) => {
  const [deleteContact] = useDeleteContactMutation();
  return (
    <>
      <li className={style.ContactList__item} key={id}>
        <span className={style.ContactList__text}>
          {name}: {number}
        </span>
        <button
          className={style.ContactList__button}
          onClick={() => deleteContact(id)}
        >
          Delete
        </button>
      </li>
    </>
  );
};

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default ContactListItem;