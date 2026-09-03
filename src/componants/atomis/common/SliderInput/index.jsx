import React from 'react';
import SliderContainer from './styles';
const SliderInput = ({ label, min, max, value, onChange }) => {
  return (
    <SliderContainer>
      <label>{label}: {value}°</label>
      <input 
        type="range" 
        min={min} 
        max={max} 
        value={value} 
        onChange={onChange} 
      />
    </SliderContainer>
  );
};

export default SliderInput;
