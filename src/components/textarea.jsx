import React from 'react';

export function Textarea({ text, name, placeholder, value, onChange, required, className }) {
  return (
    <div className='form_control'>
      <label htmlFor={name}>{text}:</label>
      <textarea id={name} name={name} placeholder={placeholder} value={value} onChange={onChange} required={required} className={className} />
    </div>
  );
}
