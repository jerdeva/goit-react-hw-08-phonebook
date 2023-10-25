import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteContactThunk } from 'redux/contacts/operations';
import {Wrapper, ButtonStyle, Paragrapher, Span} from './ContactInfo.styled'

const Contact = ({ contact }) => {
  const { id, name, number } = contact;

  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContactThunk(id));

  return (

    <Wrapper>
      <Paragrapher><Span>{name}:</Span> {number}</Paragrapher>
      <ButtonStyle type="button" onClick={handleDelete}> Delete</ButtonStyle>
      </Wrapper>
  );
};

export default Contact;