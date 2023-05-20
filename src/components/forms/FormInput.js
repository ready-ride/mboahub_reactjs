import React from 'react';
import './FormInput.css';

function FormInput({name, type, placeholder, label, data, handleChange, icon}) {
  return (
    <div className="form-group my-3">
        {label && <label htmlFor={name} className="text-small text-dark-blue mb-2">{label} &nbsp;</label>}
        <div className='input-container'>
           {
             icon &&
             <div className='input-icon text-blue'>
              {icon}
             </div>
           }
           <input type={type} value={data||''} onChange={ handleChange } id={name} name={name} placeholder={placeholder} />
        </div>
    </div>
  )
}

export default FormInput;
