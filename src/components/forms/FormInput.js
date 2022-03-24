import React from 'react'

function FormInput({name, type, placeholder, label, data, handleChange}) {
  return (
    <div className="form-group">
        <label htmlFor={name}>{label} &nbsp;</label>
        <input type={type} value={data} onChange={ handleChange } className="form-control mt-2 mb-4" id={name} name={name} placeholder={placeholder} />
    </div>
  )
}

export default FormInput