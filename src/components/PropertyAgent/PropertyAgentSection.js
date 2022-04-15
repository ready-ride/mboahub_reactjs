import React from 'react';

import PropertyAgent from './PropertyAgent';

import './PropertyAgentSection.scss';

function PropertyAgentSection() {
  return (
    <div className='main-margin'>
        <div className='text-center'>
            <span className='primary-heading'>THE BEST AGENTS</span>
            <p className='secondary-heading'>Meet Our Agents</p>
        </div>
        <div className='agent-listing'>
            <PropertyAgent />
            <PropertyAgent />
            <PropertyAgent />
        </div>
    </div>
  )
}

export default PropertyAgentSection;
