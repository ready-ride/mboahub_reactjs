import React from 'react';

import { BiSupport } from 'react-icons/bi';

import './WhyUsSection.scss';

import WhyUsSectionItem from './WhyUsSectionItem';

function WhyUsSection() {
  return (
    <div className='row main-margin'>
        <div className='col-md-10 mx-auto'>
            <div className='row'>
                <div className='col-md-6'>
                    <div className='secondary-heading'>Why Choose Our Properties</div>
                    <div className='tertiary-heading'>Check video presentation to find out more about us .</div>
                    <WhyUsSectionItem title="24 Hours Support" icon={<BiSupport size="30" />} />
                    <WhyUsSectionItem title="User Admin Panel" icon={<BiSupport size="30" />}/>
                    <WhyUsSectionItem title="Secure Payments Panel" icon={<BiSupport size="30" />}/>
                </div>
                <div className='col-md-6'>
                    <img src="https://homeradar.kwst.net/images/all/27.jpg" alt="about_us" width="100%"/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default WhyUsSection;
