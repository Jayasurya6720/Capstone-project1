import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'; 

const ContactList = ({ contacts, setEdits, searchQuery, setSearchQuery }) => {
    const [contactList, setContactList] = useState(contacts);

    useEffect(() => {
        setContactList(contacts);
    }, [contacts]);

    const deleteContact = (id) => {
        setContactList(contactList.filter(contact => contact.id !== id));
    };

    // Filter contacts based on search query
    const filteredContacts = contactList.filter(contact => 
        contact.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div>
           
            <input 
             
                className='search'
                type="text" 
                placeholder="Search by name" 
                value={searchQuery} 
                onChange={(e) => setSearchQuery(e.target.value)} 
            />
            <Link to="/">
                <Button variant="success" style={{ marginBottom: '10px' }}>
                    Add Contact
                </Button>
            </Link>
            <table className="table table-dark">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>City</th>
                        <th>Mobile</th>
                        <th>Age</th>
                        <th>Email ID</th>
                        <th>Designation</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredContacts.map((contact) => (
                        <tr key={contact.id}>
                            <td>{contact.id}</td>
                            <td>{contact.name}</td>
                            <td>{contact.city}</td>
                            <td>{contact.mobile}</td>
                            <td>{contact.age}</td>
                            <td>{contact.emailid}</td>
                            <td>{contact.designation}</td>
                            <td>
                                <Button variant="primary" type="button" onClick={() => setEdits(contact)}>Edit</Button>
                                &nbsp;&nbsp; 
                                <Button variant="danger" type="button" onClick={() => deleteContact(contact.id)}>Delete</Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ContactList;
