import React from 'react';
import { v4 as uuidv4 } from 'uuid';

import Section from './section';
import Form from './form';
import Contacts from './contacts';
import SearchForContacts from './searchForContacts';

import styles from './PhoneBook.module.css';

class PhoneBook extends React.Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  componentDidMount() {
    const contacts = localStorage.getItem('Contacts');
    const parsedContacts = JSON.parse(contacts);

    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('Contacts', JSON.stringify(this.state.contacts));
    }
  }

  addContacts = data => {
    //console.log(data);

    const checkForDuplicationOfContacts = this.state.contacts.find(
      contact => contact.name === data.name
    );

    if (checkForDuplicationOfContacts) {
      alert(`${data.name} is already in contacts`);
    } else {
      const contact = {
        id: uuidv4(),
        name: data.name,
        number: data.number,
      };

      this.setState(prevState => ({
        contacts: [contact, ...prevState.contacts],
      }));
    }
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  changeFilter = event => {
    this.setState({ filter: event.currentTarget.value });
  };

  getVisibleContacts = () => {
    const { filter, contacts } = this.state;

    const normalizeFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizeFilter)
    );
  };

  render() {
    const { filter } = this.state;

    const visibleContacts = this.getVisibleContacts();

    return (
      <Section className={styles.container} title="Phonebook">
        <Form onSubmit={this.addContacts} />

        <Contacts
          contacts={visibleContacts}
          title="Contacts"
          on
          onDeleteContact={this.deleteContact}
        >
          <SearchForContacts onChange={this.changeFilter} value={filter} />
        </Contacts>
      </Section>
    );
  }
}

export default PhoneBook;
