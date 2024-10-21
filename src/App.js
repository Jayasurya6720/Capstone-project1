import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import './App.css';

const App = () => {
    const [contacts, setContacts] = useState([]);
    const [editContact, setEditContact] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');
    
    const addContact = (contact) => {
        if (editContact) {
            setContacts(contacts.map(c => (c.id === contact.id ? contact : c)));
            setEditContact(null);
        } else {
            setContacts([...contacts, { ...contact, id: contacts.length + 1 }]); // Generate ID sequentially
        }
    };
       
   
    return (
        <div>
            <h2>Contact Management System</h2>
           
            <Routes>
                <Route 
                    path="/" 
                    element={
                        <ContactForm 
                            addContact={addContact} 
                            editContact={editContact} 
                        />
                    } 
                />
                <Route 
                    path="/contacts" 
                    element={
                        <ContactList 
                            contacts={contacts} 
                            setEdits={setEditContact} 
                            searchQuery={searchQuery} 
                            setSearchQuery={setSearchQuery} 
                        />
                    } 
                />
                <Route 
                    path="/edit/:id" 
                    element={
                        <ContactForm 
                            addContact={addContact} 
                            editContact={editContact} 
                        />
                    } 
                />
            </Routes>
        </div>
    );
};

const AppWithRouter = () => (
    <Router>
        <App />
    </Router>
);

export default AppWithRouter;
