import React from 'react';

import './BestCities.scss';
import BestCitiesMain from './BestCitiesMain';
import BestCityItem from './BestCityItem';

function BestCities() {
  return (
    <div className='best-cities'>
        <BestCitiesMain />
        <BestCityItem />
        <BestCityItem />
        <BestCityItem />
    </div>
  )
}

export default BestCities;
