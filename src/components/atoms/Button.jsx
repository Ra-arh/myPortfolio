import React from 'react';

const Button = ({ children, className = '', variant = 'primary', ...props }) => {
  return (
    <button className={`btn btn-${variant} ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
