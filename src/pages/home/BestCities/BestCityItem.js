import React from 'react';

import SmallTextButton from '../../../components/common/Buttons/SmallTextButton/SmallTextButton';

function BestCityItem() {
  return (
    <div className="best-city-content text-white">
      <SmallTextButton text="26 Properties" />
      <strong className="text-medium my-2">Find Dream in Paris</strong>
      <p className="text-small">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>
  );
}

export default BestCityItem;
