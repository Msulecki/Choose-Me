import React, { useState, useEffect } from "react";
import GenerateCircles from "./GenerateCircles";
import WinnerCircle from "./WinnerCircle";
import Info from "./Info";
import "../styles/Circles.scss";

function Circles() {

    const [circles, setCircles] = useState([]);
    const [playerChoosed, setPlayerChoosed] = useState(false);
    const [winnerCircle, setWinnerCircle] = useState(0);
    const [winnerId, setWinnerId] = useState(0);

    const handleCirclesUpdate = e => {
        const touchesCount = e.targetTouches.length;
        const positions = [];
        for (let i = 0; i < touchesCount; i++) {
            positions.push(e.targetTouches[i]);
        }
        setCircles(positions);
    }

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
    }, [circles, playerChoosed, winnerCircle]);

    return (
        <div className="circles-field"
            onTouchStart={handleCirclesUpdate}
            onTouchEnd={handleCirclesUpdate}
            onTouchMove={handleCirclesUpdate}>
            {
                !playerChoosed
                    ? <GenerateCircles circles={circles} />
                    : <WinnerCircle winnerCircle={winnerCircle} winnerId={winnerId} />
            }
            <Info playerChoosed={playerChoosed} winner={winnerId + 1} circlesCount={circles.length} />
        </div>
    );
}
export default Circles;