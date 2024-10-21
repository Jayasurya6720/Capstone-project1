import React from 'react'

const ContactCard = ({contact}) => {
  return (
    <div>

        <h2>{contact.id}</h2>
        <p>{contact.name}</p>
        <p>{contact.city}</p>
        <p>{contact.mobile}</p>
        <p>{contact.age}</p>
        <p>{contact.emailid}</p>
        <p>{contact.designation}</p>
    </div>
  )
}

export default ContactCard










