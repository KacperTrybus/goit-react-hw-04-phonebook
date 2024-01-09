import React, { Component } from 'react';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import ContactForm from './ContactForm/ContactForm';
import './app.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [],
      filter: '',
    };
  }

  componentDidMount() {
    const storedContacts = localStorage.getItem('contacts');
    if (storedContacts) {
      this.setState({ contacts: JSON.parse(storedContacts) });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  contactExists = newContact => {
    const { contacts } = this.state;
    return contacts.some(
      contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
    );
  };

  addContact = newContact => {
    if (this.contactExists(newContact)) {
      alert('Contact already exists');
    } else {
      this.setState(prevState => ({
        contacts: [...prevState.contacts, newContact],
      }));
    }
  };

  handleContactDelete = deletedContact => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(
        contact => contact.id !== deletedContact.id
      ),
    }));
  };

  handleFilterChange = filterValue => {
    this.setState({ filter: filterValue });
  };

  render() {
    const { contacts, filter } = this.state;
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
      <div className="wrapper">
        <h1>Phonebook</h1>
        <ContactForm addContact={this.addContact} />
        <h2>Contacts</h2>
        <Filter filter={filter} setFilter={this.handleFilterChange} />
        <ContactList
          contacts={filteredContacts}
          handleContactDelete={this.handleContactDelete}
        />
      </div>
    );
  }
}

export default App;
