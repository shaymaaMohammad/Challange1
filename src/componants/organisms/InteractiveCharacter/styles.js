import styled from "styled-components";
 const CharacterPod = styled.div`
  background-color: #fff;
  padding: 25px;
  border-radius: 15px;
  transition: all 0.2s ease-out;
  box-shadow: ${props => props.isScared ? '0 0 25px #ff007f' : '0 10px 25px rgba(0,0,0,0.5)'};
`;

export default CharacterPod;
