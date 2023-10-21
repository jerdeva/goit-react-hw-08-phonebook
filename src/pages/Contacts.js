// import ContactForm from 'components/ContactForm/ContactForm';
import {FilterForm} from '../components/FilterForm/FilterForm';
import {ContactsList} from '../components/ContactsList/ContactsList';

export default function Contacts() {
  return (
    <div>
      {/* <Helmet>Phonebook</Helmet> */}
      <h1>Phonebook</h1>
      <form />
      <h2>Contacts</h2>
      <FilterForm />
      <ContactsList />
    </div>
  );
}
