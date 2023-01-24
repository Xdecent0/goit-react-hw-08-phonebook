import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterContact } from 'redux/contacts/actions';
import { getFilter } from 'redux/contacts/selectors';
import s from './Filter.module.css';

const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const changeFilter = e => dispatch(filterContact(e.target.value));

  return (
    <div className={s.filterBox}>
      <label>
        Search contacts by name
        <input
          type="text"
          name="filter"
          value={filter}
          onChange={changeFilter}
          placeholder="Enter search name"
        />
      </label>
    </div>
  );
};

export default Filter;
