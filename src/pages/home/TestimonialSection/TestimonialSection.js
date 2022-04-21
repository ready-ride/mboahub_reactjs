import React from 'react';

import TestimonialItem from './TestimonialItem';
import './TestimonialSection.scss';

function TestimonialSection() {
  return (
    <div className='bg-gray testimonial-section'>
        <div className='text-center'>
            <span className='primary-heading'>TESTIMONILAS</span>
            <p className='secondary-heading'>What Our Clients Say</p>
        </div>
        <div className='testimonial-listing d-flex justify-content-around flex-wrap'>
           <TestimonialItem />
           <TestimonialItem />
           <TestimonialItem />
        </div>
    </div>
  )
}

export default TestimonialSection;
