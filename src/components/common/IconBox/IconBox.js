/* eslint-disable react/prop-types */
import React from 'react';

function IconBox({
  icon, textColor, bgColor, iconSize,
}) {
  return (
    <div style={{ color: `${textColor}`, background: `${bgColor}` }} className={`rounded ${iconSize}`}>
      {icon}
    </div>
  );
}

export default IconBox;
