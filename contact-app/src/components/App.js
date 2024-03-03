import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {v4 as uuid} from 'uuid';
import './App.css';
import Header from './Header';
import AddContact from './AddContact';
import UpdateContact from './UpdateContact';
import ContactList from './ContactList';
import ContactDetail from './ContactDetail';
import api from '../api/contacts';

function App() {
  const [contacts, setContacts] = useState([]);
  const[searchTerm, setSearchTerm] = useState([]);
  const[searchResults, setSearchResults] = useState([]);

  // RetrieveContacts
  const retrieveContacts = async () => {
    const response = await api.get("/contacts");
    return response.data;
  }

  // AddContacts
  const addContactHandler = async (contact) => {
    const request = {
      id: uuid(),
      ...contact
    }

    const response = await api.post("/contacts", request)
    setContacts([...contacts, response.data]);
  }

  // Update Contacts
  const updateContactHandler = async (contact) => {
    const response = await api.put(`/contacts/${ contact.id }`, contact);
    const { id, userName, email } = response.data;
    setContacts(contacts.map(contact => {
      return contact.id === id ? { ...response.data } : contact;
    }));
  }

  // RemoveContact
  const removeContactHandler = async (id) => {
    await api.delete(`/contacts/${id}`);
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });
    setContacts(newContactList);
  }

  const searchHandler = (searchTerm) => {
    setSearchTerm(searchTerm);
    if(searchTerm !== ""){
      const filteredContactList = contacts.filter((contact) => {
        return Object.values(contact).join(" ").toLowerCase().includes(searchTerm.toLowerCase());
      });
      setSearchResults(filteredContactList);
    } else {
      setSearchResults(contacts);
    }    
  }

  useEffect(() => {
    const getAllContacts = async () => {
      const allContacts = await retrieveContacts();
      if(allContacts) setContacts(allContacts);
    }
    getAllContacts();
  }, []);

  return (
    <div>
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<ContactList contacts = {(searchTerm.length < 1 ? contacts : searchResults)} getContactId={ removeContactHandler } key={ contacts.id } term = { searchTerm } searchKeyword = { searchHandler }/>}/>
          <Route path="/add" element={<AddContact addContactHandler = {addContactHandler}/>}/>
          <Route path="/update/:id" element={<UpdateContact updateContactHandler = {updateContactHandler} contacts = {contacts}/>}/>
          <Route path="/contact/:id" element={<ContactDetail contacts = {contacts}/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
