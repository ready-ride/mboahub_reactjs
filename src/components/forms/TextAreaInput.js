import React from 'react'

function TextAreaInput({name, label, data, handleChange}) {
  return (
    <div className="form-group">
        <label htmlFor={name}>{label}</label>
        <textarea onChange={handleChange} value={data || ''} className="bg-gray border form-control mt-2" id={name} name={name} rows="9"></textarea>
    </div>
  )
}

export default TextAreaInput;