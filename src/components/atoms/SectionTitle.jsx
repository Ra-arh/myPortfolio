import React from 'react';

const SectionTitle = ({ children, className = '' }) => {
  return (
    <h2 className={`section-title ${className}`}>
      {children}
    </h2>
  );
};

export default SectionTitle;
