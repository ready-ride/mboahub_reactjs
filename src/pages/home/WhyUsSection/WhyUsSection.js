import React from 'react';

import { BiSupport } from 'react-icons/bi';

import './WhyUsSection.scss';

import WhyUsSectionItem from './WhyUsSectionItem';

function WhyUsSection() {
  return (
    <div className='main-margin'>
        <div className='why-us-section mx-4 d-flex align-items-center justify-content-between'>
            <div>
                <div className='secondary-heading'>Why Choose Our Properties</div>
                <div className='tertiary-heading'>Check video presentation to find out more about us .</div>
                <WhyUsSectionItem title="24 Hours Support" icon={<BiSupport size="30" />} />
                <WhyUsSectionItem title="User Admin Panel" icon={<BiSupport size="30" />}/>
                <WhyUsSectionItem title="Secure Payments Panel" icon={<BiSupport size="30" />}/>
            </div>
            <div>
                <img src="/photos/why-us-1.webp" alt="about_us" width="100%"/>
            </div>
        </div>
    </div>
  )
}

export default WhyUsSection;
