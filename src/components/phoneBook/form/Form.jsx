import { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

import PropTypes from 'prop-types';

import styles from './Form.module.css';

class Form extends Component {
  state = { name: '', number: '' };

  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  nameInputId = uuidv4();
  numberInputId = uuidv4();

  handleChange = event => {
    this.setState({ [event.currentTarget.name]: event.currentTarget.value });
  };

  handleSubmit = event => {
    event.preventDefault();

    console.log(this.state);
    this.props.onSubmit(this.state);

    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className={styles.form}>
        <div className={styles.inputContainer}>
          <label htmlFor={this.nameInputId} className={styles.label}>
            Name
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
              required
              value={this.state.name}
              onChange={this.handleChange}
              id={this.nameInputId}
              className={styles.input}
            />
          </label>

          <label htmlFor={this.numberInputId} className={styles.label}>
            Phone
            <input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
              required
              value={this.state.number}
              onChange={this.handleChange}
              id={this.numberInputId}
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
}

export default Form;
