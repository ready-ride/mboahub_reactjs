import React from 'react';

function IconBox({icon, text_color, bg_color}) {
  return (
    <div style={{color: `${text_color}`, background: `${bg_color}`}} className="rounded p-1 m-2">
        {icon}
    </div>
  )
}

export default IconBox;