import React from "react";
import  HeadWrapper  from "./styles";
import Circle from "../../atomis/circle"; 

const Head = ({ type = "left", isScared = false, eyeTransform = { x: 0, y: 0 } }) => {
    return (
        <HeadWrapper className={isScared ? "scared-face" : ""} eyeTransform={eyeTransform}>
            <Circle size={80} color="black">
                {type === "left" && (
                    <>
                        <div className="eye-left" ></div>
                        <div className="eye-right" ></div>
                        <div className="mouth-surprised"></div>
                    </>
                )}
                {type === "right" && (
                    <>
                        <div className="eye-single" ></div>
                        <div className="mouth-sad"></div>
                    </>
                )}
            </Circle>
        </HeadWrapper>
    );
};
export default Head;
