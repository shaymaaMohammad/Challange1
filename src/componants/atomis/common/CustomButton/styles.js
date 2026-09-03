import styled from 'styled-components';

const StyledButton = styled.button`
  background: #111;
  border: 1px solid #00ffcc;
  color: #00ffcc;
  padding: 10px 20px;
  border-radius: 6px;
  cursor: pointer;
  font-weight: bold;
  font-family: monospace;
  transition: all 0.2s;

  &:hover {
    background: #00ffcc;
    color: #111;
    box-shadow: 0 0 10px #00ffcc;
  }


  &.btn-reset { 
    border-color: #ff007f; 
    color: #ff007f; 
    
    &:hover {
       background: #ff007f; 
       color: white;
       box-shadow: 0 0 10px #ff007f;
    }
  }
`;

export default StyledButton;    
