import React from 'react';
import StyledButton from './styles';

const CustomButton = ({ onClick, className, children }) => {
  return (
    <StyledButton className={className} onClick={onClick}>
      {children}
    </StyledButton>
  );
};

export default CustomButton;
