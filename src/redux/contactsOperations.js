import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

// Thunk to fetch all contacts
export const getContactsThunk = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/contacts');
      return response.data;
    } catch (error) {
      // Provide more context in error handling
      return thunkAPI.rejectWithValue({
        errorMessage: 'Failed to fetch contacts',
        originalError: error,
      });
    }
  }
);

// Thunk to add a new contact
export const addContactThunk = createAsyncThunk(
  'contacts/addContact',
  async (contact, thunkAPI) => {
    try {
      const response = await axios.post('/contacts', { ...contact });
      return response.data;
    } catch (error) {
      // Provide more context in error handling
      return thunkAPI.rejectWithValue({
        errorMessage: 'Failed to add contact',
        originalError: error,
      });
    }
  }
);

// Thunk to delete a contact by ID
export const deleteContactThunk = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${contactId}`);
      return response.data;
    } catch (error) {
      // Provide more context in error handling
      return thunkAPI.rejectWithValue({
        errorMessage: 'Failed to delete contact',
        originalError: error,
      });
    }
  }
);
