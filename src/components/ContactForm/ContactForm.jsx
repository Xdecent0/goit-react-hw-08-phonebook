import { useState } from 'react';
import { nanoid } from 'nanoid';
import { Notify } from 'notiflix';
import {
  useAddContactMutation,
  useGetContactsQuery,
} from '../../service/phoneApi';

import style from './ContactForm.module.css';

const INITIAL_STATE = {
  name: '',
  number: '',
};

const ContactForm = () => {
  const [name, setName] = useState(INITIAL_STATE.name);
  const [number, setNumber] = useState(INITIAL_STATE.number);

  const nameInputId = nanoid();
  const numberInputId = nanoid();
  const { data: contacts } = useGetContactsQuery();
  const [addContact] = useAddContactMutation();

  const onSubmit = event => {
    event.preventDefault();
    if (
      contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      return Notify.failure(`Contact '${name}' is already exist`);
    }
    const id = nanoid();
    addContact({ id, name, number });
    reset();
  };

  const reset = () => {
    setName(INITIAL_STATE.name);
    setNumber(INITIAL_STATE.number);
  };

  return (
    <form className={style.FormInput} onSubmit={onSubmit}>
      <label htmlFor={nameInputId}>Name</label>
      <input
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        maxLength="40"
        required
        value={name}
        onChange={event => setName(event.target.value)}
        id={nameInputId}
        className={style.FormInput__input}
      />
      <label htmlFor={numberInputId}>Number</label>
      <input
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        maxLength="12"
        required
        value={number}
        onChange={event => setNumber(event.target.value)}
        id={numberInputId}
        className={style.FormInput__input}
      />
      <button type="submit" className={style.FormButton}>
        Add Contact
      </button>
    </form>
  );
};

export default ContactForm;