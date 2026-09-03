import styled from 'styled-components';
 const CharacterWrapper = styled.div`
    position: relative;
    width: 180px;
    height: 380px;
    display: flex;
    flex-direction: column;
    align-items: center;

    .character-head {
        position: relative;
        z-index: 10;
        margin-bottom: 2px; 
        transform: rotate(${props => props.headRotate || 0}deg);
        transform-origin: bottom center;
        transition: transform 0.2s ease-out;
    }

    .main-torso-spine {
        position: relative;
        width: 8px;
        height: 140px;
        background-color: black;
        border-radius: 10px;
        z-index: 5;
        transform: rotate(${props => props.torsoRotate}deg);
        transform-origin: top center;
        transition: transform 0.2s ease-out;
    }

    .arm-left, .arm-right, .leg-left, .leg-right {
        position: absolute;
        transform-origin: top center;
        transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    }

   
    .arm-left { 
        top: 0; 
        left: 1.5px; 
        transform: rotate(${props => props.leftArmRotate}deg); 
    }
    .arm-right {
         top: 0; 
         left: 1.5px; 
         transform: rotate(${props => props.rightArmRotate}deg);
         }
    .leg-left {
         top: 140px; 
         left: 1.5px; 
         transform: rotate(${props => props.leftLegRotate}deg); 
        }
    .leg-right { 
        top: 140px; 
        left: 1.5px; 
        transform: rotate(${props => props.rightLegRotate}deg);
     }
/******************************************************************************************** */

    /* Keyframes animations rules  */
    &.animating-dance .character-head {
         animation: danceHead 0.5s infinite alternate ease-in-out; 
        }
    &.animating-dance .arm-left {
         animation: danceArms 0.5s infinite alternate ease-in-out; 
        }
    &.animating-dance .arm-right { 
        animation: danceArms 0.5s infinite alternate-reverse ease-in-out;
     }
    &.animating-dance .leg-left { 
        animation: danceLegs 0.5s infinite alternate ease-in-out; 
    }
    &.animating-dance .leg-right {
         animation: danceLegs 0.5s infinite alternate-reverse ease-in-out;
         }
    &.animating-dance .main-torso-spine {
         animation: danceBody 0.5s infinite alternate ease-in-out;
         }

    &.animating-run .character-head { 
        animation: runHead 0.35s infinite alternate ease-in-out;
     }
    &.animating-run .arm-left {
         animation: runLimb 0.35s infinite alternate ease-in-out; 
        }
    &.animating-run .arm-right { 
        animation: runLimbReverse 0.35s infinite alternate ease-in-out; 
    }
    &.animating-run .leg-left { 
        animation: runLimbReverse 0.35s infinite alternate ease-in-out;
     }
    &.animating-run .leg-right {
         animation: runLimb 0.35s infinite alternate ease-in-out; 
        }
    &.animating-run .main-torso-spine { 
        animation: runBody 0.35s infinite alternate ease-in-out; 
    }
/**************************************************************************************** */
    @keyframes danceHead { 
        0% { transform: rotate(-15deg); } 
        100% { transform: rotate(15deg); }
     }
    @keyframes danceArms {
         0% { transform: rotate(-85deg); } 
         100% { transform: rotate(60deg); }
         }
    @keyframes danceLegs {
         0% { transform: rotate(-30deg); } 
         100% { transform: rotate(30deg); } 
        }
    @keyframes danceBody {
         0% { transform: rotate(-12deg); } 
         100% { transform: rotate(12deg); } 
        }
    @keyframes runHead {
         0% { transform: rotate(-5deg) translateY(0); } 
         100% { transform: rotate(8deg) translateY(-4px); } 
        }
    @keyframes runLimb {
         0% { transform: rotate(-60deg); } 
         100% { transform: rotate(45deg); } 
        }
    @keyframes runLimbReverse { 
        0% { transform: rotate(45deg); } 
        100% { transform: rotate(-60deg); } 
    }
    @keyframes runBody { 
        0% { transform: translateY(0) rotate(8deg); } 
        100% { transform: translateY(-6px) rotate(14deg); } 
        }
`;
export default CharacterWrapper;
