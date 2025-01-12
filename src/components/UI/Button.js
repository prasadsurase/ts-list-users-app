import React from "react";
import classes from './Button.module.css';

const Button = props => {
  return (
    <button 
      className={`${props.className} ${classes.button}`} 
      type={props.buttonType || 'button'}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;