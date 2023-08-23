import React from 'react';

export function Inputs({ type, text, name, placeholder, number, value, onChange, required, disabled, maskPrice, display, className}) {
  return (
    <div className='form_control' style={{ display: name === 'codigo' ? 'none' : 'block' }}>
      <label htmlFor={name}>{text}:</label>
      <input
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        disabled={disabled}
        display={display}
        onInput={maskPrice} // Chame a função maskPrice aqui
        className={className}
        {...(number && { step: 'any' })}
      />
    </div>
  );
}
