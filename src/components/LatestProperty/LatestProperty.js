import React from 'react';
import PropertyItem from '../PropertyItem/PropertyItem';

import './LatestProperty.css';

function LatestProperty() {
  return (
    <div className='row latest-property'>
        <div className='col-md-1'></div>
            <div className='col-md-10 px-2'>
                <div className='latest-property-header'>
                    <div className='lestest-property-header-left my-2'>
                        <span className='text-primary font-weight-bold'>BROWSE HOT OFFERS</span><br />
                        <span className='text-dark'>Latest Properties</span>
                    </div>
                    <div className='latest-property-header-right my-2 rounded'>
                        <span>All Categories</span>
                        <span>For Sale</span>
                        <span>For rent</span>
                    </div>
                </div>
                <div className='latest-property-items d-flex flex-wrap'>
                    <PropertyItem />
                    <PropertyItem />
                    <PropertyItem />
                    <PropertyItem />
                    <PropertyItem />
                    <PropertyItem />
                </div>
            </div>
        <div className='col-md-1'></div>
    </div>
  )
}

export default LatestProperty