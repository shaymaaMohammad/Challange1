import React from "react";
import CharacterWrapper from "./styles";
import Head from "../../molecules/head"; 
import Line from "../../atomis/line"; 

const Character = ({ 
    type = "left",        
    torsoRotate = 0,      
    leftArmRotate = 0,  
    rightArmRotate = 0,  
    leftLegRotate = 0,  
    headRotate = 0,
    rightLegRotate = 0,
    isAnimating = false, 
    animationType = "",
    isScared = false
}) => {
    return (
        <CharacterWrapper
            torsoRotate={torsoRotate}
            leftArmRotate={leftArmRotate}
            rightArmRotate={rightArmRotate}
            leftLegRotate={leftLegRotate}
            rightLegRotate={rightLegRotate}
            headRotate={headRotate}
            className={isAnimating ? `animating-${animationType}` : ""}
        >
            <div className="character-head">
                <Head type={type} isScared={isScared}/>
            </div>

            <div className="main-torso-spine">
                <Line className="arm-left" height="90px" width="5px" color="black" />
                <Line className="arm-right" height="90px" width="5px" color="black" />
                <Line className="leg-left" height="110px" width="5px" color="black" />
                <Line className="leg-right" height="110px" width="5px" color="black" />
            </div>
        </CharacterWrapper>
    );
};

export default Character;
