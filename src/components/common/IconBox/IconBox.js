import React from 'react'

function IconBox({ icon, text_color, bg_color, icon_size }) {
  return (
    <div style={{ color: `${text_color}`, background: `${bg_color}` }} className={`rounded ${icon_size}`}>
      {icon}
    </div>
  )
}

export default IconBox
