import React, { useState } from 'react';
import { FaUserAlt, FaPhone } from 'react-icons/fa';

import TextButton from '../../components/common/TextButton/TextButton';
import FormInput from '../forms/FormInput';
import './ContactForm.css';
import TextAreaInput from '../forms/TextAreaInput';
import { useMessages } from '../../hooks/messages/useMessages';

function ContactForm({ownerId, houseId}) {
  const [senderName, setSenderName] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [senderPhone, setSenderPhone] = useState('');
  const [message, setMessage] = useState('');

  const { error, response, messageloading, handleSendMessage } = useMessages();

  const handleSend = (e) => {
    e.preventDefault();

    const messageData = {
      sender_email: senderEmail,
      receiver_id: ownerId,
      house_id: houseId,
      sender_name: senderName,
      sender_phone: senderPhone,
      content: message
    }

    handleSendMessage(messageData)
  };
  
  return (
    <div className='contact-form p-4'>
        <form onSubmit={handleSend}>
            <FormInput handleChange={(e) => setSenderName(e.target.value)} data={senderName} name="senderName" type="text" label="Your name*" icon={<FaUserAlt size={15} />} />
            <FormInput handleChange={(e) => setSenderPhone(e.target.value)} data={senderPhone} name="senderPhone" type="text" label="Your phone*" icon={<FaPhone size={15} />} />
            <FormInput handleChange={(e) => setSenderEmail(e.target.value)} data={senderEmail} name="senderEmail" type="text" label="Your Email*" icon={<FaPhone size={15} />} />
            <div className='row'>
                <div className='col-md-12'>
                  <TextAreaInput rows={5} cols="50" name="message" label="Message property owner:" data={message} handleChange={(e) => setMessage(e.target.value)} />
                </div>
            </div>
            <TextButton type="submit" text={ messageloading || "Send" } btnclass="w-100 my-4" />
            {
             response === true ? 
              <p className='text-success'>Message sent</p> 
              : 
              <ul>
                {error && error.map((err, i) => <li key={i} className='text-danger'>{err}</li>)}
              </ul>
           }
        </form>
    </div>
  )
}

export default ContactForm;
