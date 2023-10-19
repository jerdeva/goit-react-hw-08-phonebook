import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  getContactsThunk,
  addContactThunk,
  deleteContactThunk,
} from './contactsOperations';
import { type } from '@testing-library/user-event/dist/type';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const STATUS = {
  PENDING: 'pending',
  FULFILLED: 'fulfilled',
  REJECTED: 'rejected',
};

const array = [addContactThunk, deleteContactThunk, getContactsThunk];
const help = type = array.map(el => el[type]);
const handleFulfilled = state => {
  state.isLoading = false;
  state.error = '';
}

const handlePending = state => {
  state.isLoading = true;
}


const handleFulfilledGet = (state, { payload }) => {
  state.items = payload;
}

  const handleFulfilledAdd = (state, { payload }) => {
    state.items.push(payload)
  }


const handleFulfilledDel = (state, { payload }) => {
    state.items = state.items.filter(el => el.id !== payload.id);
}

const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialState,
  extraReducers: builder => {
    const { PENDING, FULFILLED, REJECTED } = STATUS;
    builder

      .addCase(getContactsThunk.fulfilled, handleFulfilledGet)

      .addCase(addContactThunk.fulfilled, handleFulfilledAdd)

      .addCase(deleteContactThunk.fulfilled, handleFulfilledDel)

      .addMatcher(isAnyOf(...help(PENDING)), handlePending)
      .addMatcher(isAnyOf(...help(REJECTED)), handleRejected)
      .addMatcher(isAnyOf(...help(FULFILLED)), handleFulfilled);
  },
});

export const { reducer: contactsReducer } = contactsSlice;
