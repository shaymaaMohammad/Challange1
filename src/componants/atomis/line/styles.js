import styled from "styled-components";

const StyledLine = styled.div`
  width: ${props => props.width || "5px"};
  height: ${props => props.height || "100px"};
  background-color: ${props => props.color || "black"};
  border-radius: 10px;
  
`;

export default StyledLine;
