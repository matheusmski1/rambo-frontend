import React from 'react';
import './Input.css'

export default function Input({label, fieldValue, handleChange}) {
    return(
      <div className="input">
          <input type="text" id="email" value={fieldValue} onChange={handleChange} required />
          <span className="barra"></span>
          <label>{label}</label>
      </div>
    );
}