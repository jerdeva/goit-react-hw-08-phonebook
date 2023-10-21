import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContactThunk } from '../../redux/contactsOperations';
import { selectContacts } from '../../redux/selectors';
import {
  BtnStyle,
  FormPhB,
  LabelStyle,
  InputSt,
  Wrapper,
} from './FormPhonebook.styled';

const initialValues = {
  name: '',
  number: '',
};

export function FormPhonebook() {
  const { items } = useSelector(getContacts);
  const dispatch = useDispatch();

  const existedContact = (items, values) => {
    return items.find(contact => contact.name === values.name);
  };

  const handleSubmit = (values, { resetForm }) => {
    if (existedContact(items, values)) {
      toast(`${values.name} is already in contacts`);
      resetForm();
      return;
    }

    dispatch(addContactThunk(values));
    resetForm();
  };

  return (
    <Wrapper>
      <h1>Phonebook</h1>
      <FormPhB onSubmit={handleSubmit}>
        <LabelStyle>Name</LabelStyle>
        <InputSt
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={handleNameChange}
        />
        <LabelStyle>phone</LabelStyle>
        <InputSt
          type="tel"
          name="phone"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone phone must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={phone}
          onChange={handlephoneChange}
        />

        <BtnStyle type="submit">Add contact</BtnStyle>
      </FormPhB>
    </Wrapper>
  );
}
