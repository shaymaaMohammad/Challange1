import { useState, useEffect } from 'react';

export function useMouseTracker(charRef, mouseTracking, isAnimating) {
  const [eyeTransform, setEyeTransform] = useState({ x: 0, y: 0 });
  const [isScared, setIsScared] = useState(false);

  useEffect(() => {
    if (!mouseTracking || isAnimating) return;

    const handleMouseMove = (event) => {
      if (!charRef.current) return;

      const rect = charRef.current.getBoundingClientRect();
      const charX = rect.left + rect.width / 2;
      const charY = rect.top + 60;

      const deltaX = event.clientX - charX;
      const deltaY = event.clientY - charY;
      const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

      const maxDistance = 4;
      const angle = Math.atan2(deltaY, deltaX);
      const moveX = Math.cos(angle) * Math.min(distance / 50, maxDistance);
      const moveY = Math.sin(angle) * Math.min(distance / 50, maxDistance);

      setEyeTransform({ x: moveX, y: moveY });
      setIsScared(distance < 120);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [charRef, mouseTracking, isAnimating]);

  return { eyeTransform, isScared };
}
