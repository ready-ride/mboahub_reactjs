import React from 'react';
import SmallTextButton from '../../../ui-components/Buttons/SmallTextButton/SmallTextButton';

import TestimonialItem from './TestimonialItem';
import './TestimonialSection.scss';

function TestimonialSection() {
  return (
    <div className='bg-gray testimonial-section'>
        <div className='text-center'>
            <span className='primary-heading'>TESTIMONILAS</span>
            <p className='secondary-heading'>What Our Clients Say</p>
        </div>
        <div className='testimonial-listing d-flex justify-content-around'>
           <TestimonialItem />
           <TestimonialItem />
           <TestimonialItem />
        </div>
        <div className='container'>
            <div className='news-letter-section'>
               <div className='row'>
                <div className='col-md-7 text-white text-bold'>
                        <span className='text-small'>NEWSLETTER</span><br />
                        <span className='text-medium'>Sign up for newsletter and get latest news and update</span>
                    </div>
                    <div className='col-md-5 bg-white rounded d-flex align-items-center'>
                        <input type="email" name="news_letter" placeholder='Enter Your Email' className='news-letter-email text-small' />
                        <SmallTextButton text="Subscribe" classes="px-4" />
                    </div>
               </div>
            </div>
        </div>
    </div>
  )
}

export default TestimonialSection;
