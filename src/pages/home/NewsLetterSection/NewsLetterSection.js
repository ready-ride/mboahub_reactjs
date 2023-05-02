import React from 'react';
import './NewsLetterSection.scss';

import SmallTextButton from '../../../components/common/Buttons/SmallTextButton/SmallTextButton';

function NewsLetterSection() {
  return (
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
  )
}

export default NewsLetterSection;
