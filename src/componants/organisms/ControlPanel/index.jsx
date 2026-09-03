import React from 'react';
import PanelWrapper from './styles';
import SliderInput from '../../atomis/common/SliderInput'; 
import CustomButton from '../../atomis/common/CustomButton'; 

const ControlPanel = ({ motion, setMotion }) => {
  
  const handleSliderChange = (part, value) => {
    setMotion(prev => ({ ...prev, [part]: parseInt(value), isAnimating: false }));
  };

  const startContinuousAnimation = (type) => {
    setMotion(prev => ({ ...prev, isAnimating: true, animationType: type }));
  };

  const resetAll = () => {
    setMotion({ 
        torso: 10, 
        leftArm: -55,
         rightArm: 35,
          leftLeg: -20, 
          rightLeg: 20, 
          head: 5, 
          isAnimating: false, 
          animationType: "" 
    });
  };

  return (
    <PanelWrapper>
      {/* sliders */}
      <div className="sliders-container">
        <SliderInput label="Torso" min="-45" max="45" 
        value={motion.torso} 
        onChange={(e) => handleSliderChange('torso', e.target.value)} />
        <SliderInput label="Left Arm" min="-180" max="180" 
        value={motion.leftArm} 
        onChange={(e) => handleSliderChange('leftArm', e.target.value)} />
        <SliderInput label="Right Arm" min="-180" max="180" 
        value={motion.rightArm} 
        onChange={(e) => handleSliderChange('rightArm', e.target.value)} />
        <SliderInput label="Left Leg" min="-90" max="90" 
        value={motion.leftLeg} 
        onChange={(e) => handleSliderChange('leftLeg', e.target.value)} />
        <SliderInput label="Right Leg" min="-90" max="90" 
        value={motion.rightLeg} 
        onChange={(e) => handleSliderChange('rightLeg', e.target.value)} />
        <SliderInput label="Head" min="-45" max="45" 
        value={motion.head || 0} 
        onChange={(e) => handleSliderChange('head', e.target.value)} />
      </div>

      {/* preset buttons */}
      <div className="preset-buttons">
        <CustomButton className="btn-run" 
        onClick={() => startContinuousAnimation('run')}>🏃 Keep Running
        </CustomButton>
        <CustomButton className="btn-dance" 
        onClick={() => startContinuousAnimation('dance')}>🕺 Keep Dancing
        </CustomButton>
        <CustomButton className="btn-reset"
         onClick={resetAll}>🔄 Reset & Stop
         </CustomButton>
      </div>
    </PanelWrapper>
  );
};

export default ControlPanel;
