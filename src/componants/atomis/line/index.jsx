import React from "react";
import StyledLine from "./styles";

const Line = ({ height, width, color, ...props }) => {
    return (
        
        <StyledLine width={width} height={height} color={color} {...props} />
    );
};

export default Line;
