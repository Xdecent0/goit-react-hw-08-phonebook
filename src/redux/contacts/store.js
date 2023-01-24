import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { contactsApi } from '../../service/phoneApi';
import filter from '../contacts/reducer';

export const store = configureStore({
  reducer: { filter, [contactsApi.reducerPath]: contactsApi.reducer },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    contactsApi.middleware,
  ],
  logger,
  devTools: process.env.NODE_ENV === 'development',
});
