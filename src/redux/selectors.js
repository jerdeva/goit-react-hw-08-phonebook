import { createSelector } from '@reduxjs/toolkit';

export const getContacts = state => state.contacts;
export const getFilterValue = state => state.filter.filter;

export const selectVisibleContacts = createSelector(
  [getContacts, getFilterValue],
  (contacts, filter) => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.items.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  }
);

export const selectIsLoggedIn = state => state.auth.isLoggedIn;

export const selectUser = state => state.auth.user;

export const selectIsRefreshing = state => state.auth.isRefreshing;
