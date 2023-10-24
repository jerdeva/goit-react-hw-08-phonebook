import ContactForm from 'components/ContactForm/ContactForm';
import Filter from 'components/Filter/Filter';
import ContactList from '../../components/ContactList/ContactList';
import {FormikSt} from '../../components/ContactForm/ContactForm.styled'
export default function Contacts() {
  return (
    <div>
    <FormikSt>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
        <Filter />
              </FormikSt>
      <ContactList />
      </div>
  );
}