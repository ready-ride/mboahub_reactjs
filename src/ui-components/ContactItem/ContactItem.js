import React from 'react';
import './ContactItem.css';

function ContactItem({icon, title, text}) {
  return (
    <div className='contact-item d-flex justify-content-between py-2 px-3 text-gray'>
        <strong>
            <span className='text-blue'>
                {icon}&nbsp;&nbsp;
            </span>
            <span className='text-light-gray'>
              {title}
            </span>:
        </strong>
        <span>{text}</span>
    </div>
  )
}

export default ContactItem;
