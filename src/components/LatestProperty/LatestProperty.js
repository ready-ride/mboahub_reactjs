import React, { useState, useEffect } from 'react';
import { getHouses } from '../../services/HouseServices';
import { Oval} from  'react-loader-spinner';

import TextButton from '../../ui-components/TextButton/TextButton';
import PropertyItem from '../PropertyItem/PropertyItem';

import './LatestProperty.css';

function LatestProperty() {
    const [item, setItem] = useState('all');

    const [houses, setHouses] = useState();
    const [houseloading, setHouseLoading] = useState(false);
    const [error, setError] = useState();

    useEffect(() => {
        (async() => {
            setHouseLoading(true);
            let res = await getHouses();
            setHouseLoading(false);
            if (Object.keys(res).includes('errors')) {
                setError(res.error);
            }else{
                setHouses(res);
            }
          })();
    }, []);

    const all_style = item === 'all' ? 'latest-property-header-item-active' : 'latest-property-header-item';
    const for_sale_style = item === 'for_sale' ? 'latest-property-header-item-active' : 'latest-property-header-item';
    const for_rent = item === 'for_rent' ? 'latest-property-header-item-active' : 'latest-property-header-item';
console.log(houses)
  return (
    <div className='latest-property'>
        <div className='container'>
            <div className='latest-property-header'>
                <div className='lestest-property-header-left my-2'>
                    <span className='primary-heading'>BROWSE HOT OFFERS</span><br />
                    <span className='secondary-heading'>Latest Properties</span>
                </div>
                <div className='latest-property-header-right my-2 rounded'>
                    <span onClick={() => setItem('all')} className={all_style}>All Categories</span>
                    <span onClick={() => setItem('for_sale')} className={for_sale_style}>For Sale</span>
                    <span onClick={() => setItem('for_rent')} className={for_rent}>For rent</span>
                </div>
            </div>
            <div className='latest-property-items d-flex flex-wrap'>
                {
                 houseloading ?
                   <div className='mx-auto'>
                      <Oval color="#00BFFF" height={200} width={200} />
                   </div>
                 :
                 houses && houses.map((house) => {
                    return <PropertyItem house={house} />
                 })
                }
            </div>

            <TextButton text="View all properties" />
        </div>
    </div>
  )
}

export default LatestProperty;
