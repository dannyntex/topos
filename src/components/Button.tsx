import React from 'react';


export interface ButtonProps {
  text: string;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
  isDisabled?: boolean;
  className?: string;
}
const Button: React.FC<ButtonProps> = (props) => {
  const {
    text,
    type = 'submit',
    onClick = () => { },
    isDisabled = false,
    className = '',
  } = props;
  return (
    <button className={className} type={type} disabled={isDisabled} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
