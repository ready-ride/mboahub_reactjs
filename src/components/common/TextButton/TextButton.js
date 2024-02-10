import React from 'react'
import './TextButton.css'

function TextButton({ text, btnclass, icon }) {
  return (
    <button className={`bg-primary btn rounded text-white py-3 px-4 my-2 text-small ${btnclass}`}>
      <strong>
        {icon} {text}
      </strong>
    </button>
  )
}

export default TextButton
