import React from 'react';

import styles from './Contacts.module.css';

const Contacts = ({ contacts, title, onDeleteContact, children }) => (
  <>
    <div className={styles.container}>
      <h2 className={styles.title}>{title} </h2>

      {children}

      <ul className={styles.list}>
        {contacts.map(({ id, name, number }) => (
          <li key={id} className={styles.item}>
            <span className={styles.marker}></span>
            <p className={styles.name}>{name}:</p>
            <p className={styles.number}>{number}</p>

            <button
              type="button"
              className={styles.btnRemove}
              onClick={() => onDeleteContact(id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  </>
);

export default Contacts;
