import StyledCircle from "./styles";

const Circle = (props) => {
    return (
        <StyledCircle size={props.size} color={props.color}>
            {props.children}
        </StyledCircle>
    );
};

export default Circle;
