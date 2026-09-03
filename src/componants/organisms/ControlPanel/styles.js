import styled from 'styled-components';

/* panel-wrapper */
const PanelWrapper = styled.div`
  background: #222;
  border: 2px solid #00ffcc;
  border-radius: 12px;
  padding: 15px 20px;
  width: 100%;
  max-width: 920px; 
  display: flex;
  flex-direction: column;
  gap: 20px;
  font-family: sans-serif;
  box-sizing: border-box;

  /* sliders container  */
  
  .sliders-container {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 15px;
    width: 100%;

    /************************************************************************************** */ 
    /* responsive sliders */
   
    @media (max-width: 850px) {
      grid-template-columns: repeat(3, 1fr); 
    }
    @media (max-width: 550px) {
      grid-template-columns: repeat(2, 1fr); 
    }
  }

  
  /* preset-buttons container */
  .preset-buttons {
    display: flex;
    justify-content: center;
    gap: 15px;
    flex-wrap: wrap; 
    width: 100%;
  }
`;

export default PanelWrapper;
