import React from 'react';
import { RiDoubleQuotesR } from 'react-icons/ri';

import SmallTextButton from '../../../components/common/Buttons/SmallTextButton/SmallTextButton';
import Rating from '../../../components/common/Rating/Rating';

function TestimonialItem() {
  return (
    <div className='testimonial-item col-sm'>
        <div className='testimonial-item-header'>
            <div className='d-flex align-items-center'>
                <img src="/photos/anthony-moore.webp" alt="testimonial" className="rounded-circle" width="75px" height="75px" />
                <div>
                    <strong className='text-dark-blue text-small'>ANTHONY MOORE</strong>
                    <Rating />
                </div>
            </div>
            <RiDoubleQuotesR size={20} color="lightgray"/>
        </div>
        <p className='testimonial-item-text py-4 text-small'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <SmallTextButton text="Via Twitter" />
   </div>
  )
}

export default TestimonialItem;
