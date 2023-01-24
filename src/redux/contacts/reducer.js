import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { filterContact } from './actions';

const filter = createReducer('', {
  [filterContact]: (_, { payload }) => payload,
});
export default combineReducers({ filter });
