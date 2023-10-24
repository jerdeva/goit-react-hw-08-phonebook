import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteContactThunk } from 'redux/contacts/operations';

const Contact = ({ contact }) => {
  const { id, name, number } = contact;

  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContactThunk(id));

  return (
    <p>
      <span>{name}:</span> {number}
      <button type="button" onClick={handleDelete}>
        Delete
      </button>
    </p>
  );
};

export default Contact;