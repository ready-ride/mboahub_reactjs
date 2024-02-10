import React from 'react'
import './SmallTextButton.scss'

function SmallTextButton({ text, classes, icon }) {
  return (
    <span className={`small-text-button ${classes}`}>
      {icon}&nbsp;&nbsp;{text}
    </span>
  )
}

export default SmallTextButton
