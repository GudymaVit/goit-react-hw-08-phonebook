import ContactForm from 'components/phoneBook/contactForm';
import ContactList from 'components/phoneBook/contactList';
import Filter from 'components/phoneBook/filter';
import styles from '../pages/pages.module.css';
import { useSelector } from 'react-redux';
import { getLoading } from 'redux/contacts/contacts-selectors';

const Contacts = () => {
  const isLoading = useSelector(getLoading);
  return (
    <div className={styles.container}>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      {isLoading && <p>Loading...</p>}
      <Filter />
      <ContactList />
    </div>
  );
};

export default Contacts;
