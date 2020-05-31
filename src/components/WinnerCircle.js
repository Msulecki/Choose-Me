import React from "react";

function WinnerCircle(props) {

    const { winnerCircle, winnerId } = props;

    return (
        <div
            style={{
                top: winnerCircle.clientY,
                left: winnerCircle.clientX,
                backgroundImage: `radial-gradient(hsla(${100 + (30 * (winnerId + 1))},100%,60%,.7), hsla(${110 + (30 * (winnerId + 1))},100%,60%,.7))`
            }}
            className="circle winner" >
            <div className="circle__number">{winnerId + 1}</div>
            <div
                style={{
                    borderColor: `hsla(${100 + (30 * (winnerId + 1))},100%,60%,.7)`
                }}
                className="circle__border winner">
            </div>
        </div >
    );
}
export default WinnerCircle;