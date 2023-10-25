import { Formik, Form } from 'formik';
import * as yup from 'yup';
import React from 'react';
// import { toast } from 'react-toastify';
import Notiflix from 'notiflix';

// import { Field } from 'formik';
import {FormikSt, ErrorM, FieldSt, BTN, Label} from './ContactForm.styled'


import 'react-toastify/dist/ReactToastify.css';

import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';

import { addContactThunk } from 'redux/contacts/operations';

const schema = yup.object().shape({
  name: yup
    .string()
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    )
    .required(),
  number: yup
    .string()
    .matches(
      /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
    )
    .required(),
});


const initialValues = {
  name: '',
  number: '',
};

export default function ContactForm() {
  const { items } = useSelector(getContacts);
  const dispatch = useDispatch();

  const existedContact = (items, values) => {
    return items.find(contact => contact.name === values.name);
  };

  const handleSubmit = (values, { resetForm }) => {
    if (existedContact(items, values)) {
      Notiflix.Notify.failure(`${values.name} is already in contacts`);
      // resetForm();
      return;
    }

    dispatch(addContactThunk(values));
    resetForm();
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={schema}
    >
      <Form autoComplete="off">
        <FormikSt>
          <Label htmlFor="name">Name</Label>
          <FieldSt  type="text" name="name" id="name" placeholder="Adrian" />
          <ErrorM name="name" component="div" />

          <Label htmlFor="number">Phone</Label>
          <FieldSt
            type="tel"
            name="number"
            id="number"
            placeholder="000-111-22-33"
          />
          <ErrorM name="number" component="div" />
          <BTN type="submit">add contact</BTN>
        </FormikSt>
      </Form>
    </Formik>
  );
}
