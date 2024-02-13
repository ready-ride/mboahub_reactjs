/* eslint-disable react/prop-types */
import React from 'react';

import IconBox from '../../../components/common/IconBox/IconBox';

export default function WhyUsSectionItem({ title, content, icon }) {
  return (
    <div className="why-items mt-4">
      <div className="why-item">
        <IconBox icon={icon} textColor="white" bgColor="#3270FC" iconSize="p-4" />
        <div className="why-item-desc">
          <h3 className="fourth-heading">{title}</h3>
          {content}
        </div>
      </div>
    </div>
  );
}
