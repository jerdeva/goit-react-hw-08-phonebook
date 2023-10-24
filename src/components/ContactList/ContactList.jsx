import { useDispatch, useSelector } from 'react-redux';
import { getContacts, selectVisibleContacts } from 'redux/selectors';

import Contact from 'components/Contact/Contact';
import { useEffect } from 'react';
import { getContactsThunk } from 'redux/contacts/operations';
import { ToastContainer } from 'react-toastify';
import { Loader } from 'components/Loader/Loader';

export default function ContactList() {
  const { isLoading, error } = useSelector(getContacts);

  const visibleContacts = useSelector(selectVisibleContacts);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getContactsThunk());
  }, [dispatch]);

  return (
    <>
      <ToastContainer autoClose={1500} />
      {isLoading && <Loader />}
      {Array.isArray(visibleContacts) && (
        <div>
          {visibleContacts.map(item => {
            return (
              <li key={item.id}>
                <Contact contact={item} />
              </li>
            );
          })}
        </div>
      )}
      {error && <h2>{error}</h2>}
    </>
  );
}