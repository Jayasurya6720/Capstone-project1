import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import { Button } from 'react-bootstrap'; 


const ContactForm = ({ addContact, editContact }) => {
    const [contact, setContact] = useState({
        id: '',
        name: '',
        city: '',
        mobile: '',
        age: '',
        emailid: '',
        designation: ''
    });

    const handleChange = (e) => {
        const { id, value } = e.target;
        setContact({ ...contact, [id]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addContact(contact);
        setContact({ id: '', name: '', city: '', mobile: '', age: '', emailid: '', designation: '' });
    };

    return (
        <form class="container-sm" onSubmit={handleSubmit}>
            <h2>Contact Form</h2>
            <br />
            <label >Enter Id : </label>
            <input type='number' class="form-control" id='id' placeholder='ID' value={contact.id} onChange={handleChange} />
            <br />
            <label>Enter Name : </label>
            <input type='text' class="form-control" id='name' placeholder='Name' value={contact.name} onChange={handleChange} />
            <br />
            <label>Enter City : </label>
            <input type='text' class="form-control" id='city' placeholder='City' value={contact.city} onChange={handleChange} />
            <br />
            <label>Enter Mobile : </label>
            <input type='text' class="form-control" id='mobile' placeholder='Mobile' value={contact.mobile} onChange={handleChange} />
            <br />
            <label>Enter Age : </label>
            <input type='number' class="form-control" id='age' placeholder='Age' value={contact.age} onChange={handleChange} />
            <br />
            <label>Enter Email Id : </label>
            <input type='text' class="form-control" id='emailid' placeholder='Email Id' value={contact.emailid} onChange={handleChange} />
            <br />
            <label>Enter Designation : </label>
            <input type='text' class="form-control" id='designation' placeholder='Designation' value={contact.designation} onChange={handleChange} />
            <br />
            <Button type='submit'>Add Contact</Button>
            <Link to="/contacts">
                <Button variant="secondary" style={{ marginLeft: '20px' }}>Go to Table</Button>
            </Link>
        </form>
    );
};

export default ContactForm;
