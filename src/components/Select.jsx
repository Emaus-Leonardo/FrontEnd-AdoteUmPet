import React from 'react';

export function Select({ text, name, options, value, onChange, required, className }) {
  return (
    <div className='form_control'>
      <label htmlFor={name}>{text}:</label>
      <select name={name} id={name} value={value} onChange={onChange} required={required} className={className}>
        <option>Selecione uma opção</option>
        {options.map((option, index) => (
          <option key={index}>{option}</option>
        ))}
      </select>
    </div>
  );
}
