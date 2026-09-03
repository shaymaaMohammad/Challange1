import React, { useRef } from 'react';
import Character from '../Character';
import { useMouseTracker } from '../../../hooks/useMouseTracker';
import CharacterPod  from './styles';

export default function InteractiveCharacter({ type, motion, mouseTracking }) {
  const charRef = useRef(null);
  const { eyeTransform, isScared } = useMouseTracker(charRef, mouseTracking, motion.isAnimating);

  const isLeft = type === 'left';
  const torsoRot = isScared ? (eyeTransform.x > 0 ? -8 : 8) : (isLeft ? motion.torso : -motion.torso);
  const leftArmRot = isScared ? -140 : (isLeft ? motion.leftArm : motion.rightArm);
  const rightArmRot = isScared ? 140 : (isLeft ? motion.rightArm : motion.leftArm);

  return (
    <CharacterPod ref={charRef} isScared={isScared}>
      <Character 
        type={type} 
        torsoRotate={torsoRot} 
        leftArmRotate={leftArmRot} 
        rightArmRotate={rightArmRot} 
        leftLegRotate={isLeft ? motion.leftLeg : motion.rightLeg} 
        rightLegRotate={isLeft ? motion.rightLeg : motion.leftLeg}
        headRotate={isLeft ? motion.head : -motion.head} 
        eyeTransform={eyeTransform} 
        isAnimating={motion.isAnimating}
        animationType={motion.animationType}
        isScared={isScared} 
      />
    </CharacterPod>
  );
}
