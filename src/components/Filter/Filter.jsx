import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from '../../redux/contacts/selectors';
import { filterContact } from '../../redux/contacts/actions';

import style from './Filter.module.css';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  return (
    <div className={style.FilterContainer}>
      <label>
        Find contacts by name
        <input
          type="text"
          name="filter"
          className={style.FilterInput}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Find contacts by name"
          placeholder="Enter search request here"
          value={filter}
          onChange={event => dispatch(filterContact(event))}
        />
      </label>
    </div>
  );
};

Filter.propTypes = {
  filter: PropTypes.string,
};

export default Filter;