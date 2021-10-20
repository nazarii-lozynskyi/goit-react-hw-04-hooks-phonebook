import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import PropTypes from 'prop-types';

import styles from './Form.module.css';




function Form ({onSubmit}) {
  const [state, setState] = useState({ name: '', number: '' });

 

  const nameInputId = uuidv4();
  const numberInputId = uuidv4();

  const handleChange = event => {
    const { name, value } = event.currentTarget;
    setState((prevState)=>({...prevState, [name]: value }));
  };

  const handleSubmit = event => {
    event.preventDefault();

    onSubmit(state);

    reset();
  };

  const reset = () => {
    setState({ name: '', number: '' });
  };

  return (
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.inputContainer}>
          <label htmlFor={nameInputId} className={styles.label}>
            Name
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
              required
              value={state.name}
              onChange={handleChange}
              id={nameInputId}
              className={styles.input}
            />
          </label>

          <label htmlFor={numberInputId} className={styles.label}>
            Phone
            <input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
              required
              value={state.number}
              onChange={handleChange}
              id={numberInputId}
              className={styles.input}
            />
          </label>
        </div>

        <button type="submit" className={styles.btn}>
          Add contact
        </button>
      </form>
    );
  }


  Form.propTypes = {
    onSubmit: PropTypes.func,
  };


export default Form;
