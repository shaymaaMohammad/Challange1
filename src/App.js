import React, { useState } from 'react';
import ControlPanel from './componants/organisms/ControlPanel'; 
import InteractiveCharacter from './componants/organisms/InteractiveCharacter';
import AppContainer from './assets/styles/AppStyles'; 

function App() {

  /* State for mouse tracking */

  const [mouseTracking, setMouseTracking] = useState(true);
  
  /* States of motion */

  const [motion, setMotion] = useState({
    torso: 10,       
    leftArm: -55,    
    rightArm: 35,    
    leftLeg: -20,    
    rightLeg: 20,    
    head: 5,         
    isAnimating: false, 
    animationType: ""
  });

  return (
    <AppContainer>
      
      {/* Title */}
      <h2 className="main-title">🔥 ARCHITECTURAL INTERACTIVE STUDIO</h2>

      {/* Control Panel */}
      <ControlPanel motion={motion} setMotion={setMotion} />

      {/* Studio Stage */}
      <div className="studio-stage">
        <InteractiveCharacter type="left" motion={motion} mouseTracking={mouseTracking} />
        <InteractiveCharacter type="right" motion={motion} mouseTracking={mouseTracking} />
      </div>

    </AppContainer>
  );
}

export default App;
