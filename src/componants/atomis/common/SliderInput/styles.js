import styled from 'styled-components';

const SliderContainer = styled.div`
display: flex;
  flex-direction: column;

  label { 
    font-size: 11px; 
    color: #aaa; 
    margin-bottom: 5px; 
    text-align: center;
    white-space: nowrap; 
  }
  
  input[type="range"] { 
    accent-color: #00ffcc; 
    cursor: pointer; 
    width: 100%;
    box-sizing: border-box;
  }
`;
export default SliderContainer;
