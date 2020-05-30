import React from "react";

function GenerateCircles(props) {
    const { circles } = props;
    return (
        circles.map((circle, i) => <div
            style={{
                top: circle.clientY,
                left: circle.clientX,
                backgroundImage: `radial-gradient(hsla(${100 + (30 * (i + 1))},100%,60%,.7), hsla(${120 + (30 * (i + 1))},100%,60%,.7))`
            }}
            className="circle"
            key={i}>
            <div className="circle__number">{i + 1}</div>
            <div
                style={{
                    borderColor: `hsla(${100 + (30 * (i + 1))},100%,60%,.7)`,
                    borderLeft: "10px solid transparent"
                }}
                className="circle__border"></div>
        </div>)
    );
}
export default GenerateCircles;