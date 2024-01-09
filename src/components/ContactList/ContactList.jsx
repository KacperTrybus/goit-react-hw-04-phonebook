import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ContactList extends Component {
  renderContacts = () => {
    const { contacts, handleContactDelete } = this.props;

    return contacts.map(contact => (
      <li key={contact.id} className="contact">
        {contact.name}: {contact.number}
        <button type="button" onClick={() => handleContactDelete(contact)}>
          Delete
        </button>
      </li>
    ));
  };

  render() {
    return (
      <div>
        <h2>Contacts</h2>
        <ol>{this.renderContacts()}</ol>
      </div>
    );
  }
}

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  handleContactDelete: PropTypes.func.isRequired,
};

export default ContactList;
