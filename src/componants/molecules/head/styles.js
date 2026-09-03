import styled from 'styled-components';

 const HeadWrapper = styled.div`
    position: relative;
    width: 80px;
    height: 80px;
 /* main-circle */
    .main-circle { 
        width: 100%;
         height: 100%; 
         border: 3px solid black; 
         border-radius: var(--radius); 
         position: relative; 
         box-sizing: border-box; 
        }
        /************************* */
        /* eyes and mouth */
    .eye-left, .eye-right, .eye-single { 
        width: 8px;
         height: 8px;
          background-color: black; 
          border-radius: var(--radius);
           position: absolute; 
           transition: transform 0.05s ease-out;
         }
    .eye-left {
         top: 24px; 
         left: 24px;
       transform: translate(${props => props.eyeTransform?.x || 0}px, 
        ${props => props.eyeTransform?.y || 0}px);
        }
    .eye-right {
         top: 24px;
          left: 44px;
        transform: translate(${props => props.eyeTransform?.x || 0}px,
             ${props => props.eyeTransform?.y || 0}px);
        }
    .mouth-surprised { 
        width: 12px; 
        height: 12px; 
        background-color: black; 
        border-radius: var(--radius); 
        position: absolute; 
        top: 45px;
         left: 34px; 
         transition: all 0.1s ease-out;
         }

    &.scared-face {
        .eye-left, .eye-right {
             width: 14px;
              height: 14px; 
              top: 20px; 
            }
        .mouth-surprised {
             width: 20px; 
             height: 20px; 
             top: 40px; 
             left: 30px;
             }
    }
    /* sad face */
    .eye-single {
         top: 28px; 
         right: 15px;
        transform: translate(${props => props.eyeTransform?.x || 0}px,
             ${props => props.eyeTransform?.y || 0}px);
         }
    .mouth-sad { 
        width: 10px;
         height: 6px; 
         border-top: 2px solid black;
          border-radius: 50% 50% 0 0; 
          position: absolute; 
          top: 42px;
           right: 12px; 
           transform: rotate(15deg);
            }
`;
export default HeadWrapper;