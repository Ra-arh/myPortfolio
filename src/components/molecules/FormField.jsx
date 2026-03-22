import React from 'react';

const FormField = ({ isTextarea = false, name, value, onChange, placeholder, required = false, rows = 5 }) => {
  return (
    <div className="input-box">
      {isTextarea ? (
        <textarea 
          name={name} 
          value={value} 
          onChange={onChange} 
          required={required} 
          placeholder={placeholder} 
          rows={rows}
        ></textarea>
      ) : (
        <input 
          type={name === 'email' ? 'email' : 'text'} 
          name={name} 
          value={value} 
          onChange={onChange} 
          required={required} 
          placeholder={placeholder}
        />
      )}
    </div>
  );
};

export default FormField;
