/* eslint-disable react/prop-types */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import ReactWhatsapp from 'react-whatsapp';
import './styles.css';

const WhatsApp = ({ phone, text }) => (
  <div className="whatsapp-chat">
    { phone && (
    <ReactWhatsapp number={phone.toString()} message="Hello interested in your property">
      {text}
      &nbsp;
      <FaWhatsapp size={30} color="limegreen" />
    </ReactWhatsapp>
    )}
  </div>
);

export default WhatsApp;
