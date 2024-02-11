import React from 'react'
import './SmallTextButton.scss'

function SmallTextButton({ text, classes, icon, handleClick }) {
  return (
    <button onClick={handleClick} className={`small-text-button ${classes}`}>
      {icon}&nbsp;&nbsp;{text}
    </button>
  )
}

export default SmallTextButton
