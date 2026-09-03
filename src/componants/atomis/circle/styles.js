import styled from 'styled-components';

const StyledCircle = styled.div`
    width: ${props => props.size}px;
    height: ${props => props.size}px;
    background-color: transparent;
    border: 3px solid ${props => props.color};
    border-radius: var(--radius);
    position: relative; 
    display: block;
    box-sizing: border-box;
`;

export default StyledCircle;
