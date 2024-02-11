import React from 'react'
import './ContactItem.css'

function ContactItem({ icon, title, text }) {
  return (
    <div className='contact-item d-flex justify-content-start px-3 text-gray'>
      <strong>
        <span className='text-primary'>{icon}&nbsp;&nbsp;</span>
        <span className='text-light-gray'>{title}</span>
      </strong>
      &nbsp;&nbsp;
      <span>{text}</span>
    </div>
  )
}

export default ContactItem
