import { React, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  fetchContacts,
  deleteContact,
} from 'redux/contacts/contacts-operations';
import { getVisibleContacts } from 'redux/contacts/contacts-selectors';
import styles from './contactList.module.css';

const ContactList = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(getVisibleContacts);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <ul>
        {contacts.map(({ id, name, number }) => (
          <li className={styles.contact_list} key={id}>
            <p className={styles.contact_item}>
              {name}: {number}{' '}
              <button
                className={styles.btn_del}
                type="button"
                onClick={() => dispatch(deleteContact(id))}
              >
                Remove
              </button>
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
