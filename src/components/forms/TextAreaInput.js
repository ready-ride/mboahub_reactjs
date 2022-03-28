import React from 'react'

function TextAreaInput({name, label}) {
  return (
    <div className="form-group">
        <label for={name}>{label}</label>
        <textarea className="form-control mt-2" id={name} rows="9"></textarea>
    </div>
  )
}

export default TextAreaInput;