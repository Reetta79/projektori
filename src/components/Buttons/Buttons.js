import React from 'react';

import './Buttons.css';

const classNames = classnames => classnames.join(" ");

const Button = ({ className = "", primary, secondary, ...props}) => {
  return (
    <button 
      type="button" 
      className={classNames([
          "button",
          className,
          primary ? "button--primary" : "",
          secondary ? "button--secondary" : ""
      ])}
      {...props} />    
  );
}

export default Button;