import React from 'react'
import './TextAreaInput.scss'

function TextAreaInput({ name, label, data, handleChange, rows, cols }) {
  return (
    <div className='form-group'>
      <label htmlFor={name}>{label}</label>
      <textarea
        onChange={handleChange}
        value={data || ''}
        className='bg-gray border form-control mt-2'
        id={name}
        name={name}
        rows={rows || '9'}
        cols={cols}
      />
    </div>
  )
}

export default TextAreaInput
