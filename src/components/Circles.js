import React, { useState, useEffect } from "react";
import "../styles/Circles.scss";

function Circles(props) {
    const [circles, setCircles] = useState([]);
    const [playerChoosed, setPlayerChoosed] = useState(false);
    const [winnerCircle, setWinnerCircle] = useState(0);
    const [winnerId, setWinnerId] = useState(0);

    const handleCirclePosition = e => {
        const touchesCount = e.targetTouches.length;
        const positions = [];
        for (let i = 0; i < touchesCount; i++) {
            positions.push(e.targetTouches[i])
        }
        setCircles(positions);
    }

    const winnerNode = playerChoosed && <div
        style={{
            top: winnerCircle.clientY,
            left: winnerCircle.clientX,
            backgroundImage: `radial-gradient(hsla(${100 + (30 * (winnerId + 1))},100%,60%,.7), hsla(${110 + (30 * (winnerId + 1))},100%,60%,.7))`
        }
        }
        className="circle winner" >
        <div className="circle__number">{winnerId + 1}</div>
        <div
            style={{
                borderColor: `hsla(${100 + (30 * (winnerId + 1))},100%,60%,.7)`
            }}
            className="circle__border winner">
        </div>
    </div >

    useEffect(() => {
        if (circles.length > 1) {
            const countdown = setTimeout(() => {
                setPlayerChoosed(true);
            }, 3000);
            return () => clearTimeout(countdown);
        } else if (circles.length === 0) {
            const countdown = setTimeout(() => {
                setPlayerChoosed(false);
                setWinnerCircle(0);
            }, 2000);
            return () => clearTimeout(countdown);
        }
    }, [circles.length]);

    useEffect(() => {
        if (playerChoosed && !winnerCircle) {
            const winner = Math.floor(Math.random() * circles.length);
            setWinnerId(winner);
            setWinnerCircle(circles[winner]);
        }
    }, [circles, playerChoosed, winnerCircle])
    return (
        <div className="circles-field"
            onTouchStart={handleCirclePosition}
            onTouchEnd={handleCirclePosition}
            onTouchMove={handleCirclePosition}>
            {!playerChoosed && circles.map((circle, i) => <div
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
            </div>)}
            {winnerNode}
            < div className="app__count" > {playerChoosed ? `Player ${winnerId + 1} won.` : circles.length}</div >
        </div>
    );
}
export default Circles;