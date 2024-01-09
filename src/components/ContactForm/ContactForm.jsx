import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { customAlphabet } from 'nanoid';

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      number: '',
    };
    this.nanoid = customAlphabet('1234567890abcdef', 10);
  }

  nameChange = e => {
    this.setState({ name: e.target.value });
  };

  numberChange = e => {
    this.setState({ number: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { name, number } = this.state;
    const contact = {
      id: this.nanoid(),
      name: name,
      number: number,
    };

    this.props.addContact(contact);

    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    const { name, number } = this.state;

    return (
      <div>
        <form className="phonebook-menu" onSubmit={this.handleSubmit}>
          <label className="phonebook-label">Name</label>
          <input
            type="text"
            name="name"
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={this.nameChange}
          />
          <label className="phonebook-label">Number</label>
          <input
            type="tel"
            name="number"
            value={number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={this.numberChange}
          />
          <button type="submit" className="phonebook-btn">
            Add Contact
          </button>
        </form>
      </div>
    );
  }
}

ContactForm.propTypes = {
  addContact: PropTypes.func.isRequired,
};

export default ContactForm;
