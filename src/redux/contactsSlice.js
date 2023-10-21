import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  getContactsThunk,
  addContactThunk,
  deleteContactThunk,
} from './contactsOperations';

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

const arrayOfThunk = [addContactThunk, deleteContactThunk, getContactsThunk];
const helpFn = type => arrayOfThunk.map(el => el[type]);

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialState,
  reducers: {}, // You can define regular reducers here if needed

  extraReducers: builder => {
    const { PENDING, FULFILLED, REJECTED } = STATUS;
    builder
      .addCase(getContactsThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(addContactThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items.push(action.payload);
      })
      .addCase(deleteContactThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = state.items.filter(el => el.id !== action.payload.id);
      })
      .addMatcher(isAnyOf(...helpFn(PENDING)), state => {
        state.isLoading = true;
      })
      .addMatcher(isAnyOf(...helpFn(REJECTED)), (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addMatcher(isAnyOf(...helpFn(FULFILLED)), state => {
        state.isLoading = false;
        state.error = null;
      });
  },
});

export const { reducer: contactsReducer } = contactsSlice;
