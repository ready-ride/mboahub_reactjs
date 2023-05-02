import React from 'react';
import { FaUserAlt, FaPhone, FaCalendarCheck } from 'react-icons/fa';

import TextButton from '../../components/common/TextButton/TextButton';
import FormInput from '../forms/FormInput';
import SelectInput from '../forms/SelectInput';
import './ContactForm.css';

function ContactForm() {
    // const handleSend = e => {
    //     e.preventDefault();
    // };

  return (
    <div className='contact-form p-4'>
        <form>
            <FormInput handleChange={''} data={''} name="sender_name" type="text" label="Your name*" icon={<FaUserAlt size={15} />} />
            <FormInput handleChange={''} data={''} name="sender_phone" type="text" label="Your phone*" icon={<FaPhone size={15} />} />
            <div className='row'>
                <div className='col-md-6'>
                   <FormInput handleChange={''} data={''} name="data" type="date" label="Date" icon={<FaCalendarCheck size={15} />} />
                </div>
                <div className='col-md-6 mt-2'>
                  <SelectInput options={[]} data={''} handleSelect={''} name="time" label="Time" />
                </div>
            </div>
            <TextButton text="Send" btnclass="w-100 my-4" />
        </form>
    </div>
  )
}

export default ContactForm;
