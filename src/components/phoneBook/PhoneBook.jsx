import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

import Section from './section';
import Form from './form';
import Contacts from './contacts';
import SearchForContacts from './searchForContacts';

import styles from './PhoneBook.module.css';

function PhoneBook() {
  const [contacts, setContacts] = useState(
    () => JSON.parse(localStorage.getItem('Contacts')) ?? []
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('Contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContacts = data => {
    const contact = {
      id: uuidv4(),
      ...data,
    };

    const checkForDuplicationOfContacts = contacts.find(
      contact => contact.name.toLowerCase() === data.name.toLowerCase()
    );

    if (checkForDuplicationOfContacts) {
      alert(`${data.name} is already in contacts`);
    } else {
      setContacts(prevState => [contact, ...prevState]);
    }
  };



  const deleteContact = contactId => {
    setContacts(contacts.filter(contact => contact.id !== contactId));
  };

  const changeFilter = event => {
    setFilter(event.currentTarget.value.toLowerCase());
  };

  const normalizedFilter = filter.toLowerCase();
  const visibleContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );

  return (
    <Section className={styles.container} title="Phonebook">
      <Form onSubmit={addContacts} />

      <Contacts
        contacts={visibleContacts}
        title="Contacts"
        onDeleteContact={deleteContact}
      >
        <SearchForContacts onChange={changeFilter} value={filter} />
      </Contacts>
    </Section>
  );
}

export default PhoneBook;
