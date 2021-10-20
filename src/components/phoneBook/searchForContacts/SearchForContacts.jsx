import React from 'react';
import { v4 as uuidv4 } from 'uuid';

import PropTypes from 'prop-types';

import styles from './SearchForContacts.module.css';

const SearchForContacts = ({ onChange, value, filterId = uuidv4() }) => (
  <div className={styles.container}>
    <label htmlFor={filterId} className={styles.label}>
      Find contacts by name
      <input
        type="text"
        name="filter"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
        required
        value={value}
        onChange={onChange}
        id={filterId}
        className={styles.input}
      />
    </label>
  </div>
);

SearchForContacts.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default SearchForContacts;
