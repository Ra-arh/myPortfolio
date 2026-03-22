import React from 'react';

const SocialIcon = ({ Icon, href, title, size = 20, className = '' }) => {
  // if href starts with tel: or mailto: we don't open in new tab
  const isExternal = href.startsWith('http');
  
  return (
    <a 
      href={href} 
      title={title}
      className={`social-icon-wrapper ${className}`}
      target={isExternal ? "_blank" : "_self"}
      rel={isExternal ? "noreferrer" : ""}
    >
      <Icon size={size} />
    </a>
  );
};

export default SocialIcon;
