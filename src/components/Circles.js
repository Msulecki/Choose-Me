import React, { useState, useEffect } from 'react';

function Circles(props) {
    const { circles } = props;
    const [playerChoosed, setPlayerChoosed] = useState(false);
    const [winnerCircle, setWinnerCircle] = useState(0);
    const [winnerId, setWinnerId] = useState(0);

    const winnerNode = playerChoosed && <div
        style={{
            top: winnerCircle.clientY,
            left: winnerCircle.clientX,
            backgroundImage: `radial-gradient(hsla(${100 + (30 * (winnerId + 1))},100%,60%,.7), hsla(${110 + (30 * (winnerId + 1))},100%,60%,.7))`
        }
        }
        className="app__circle winner" >
        <div className="app__circle-number">{winnerId + 1}</div>
        <div
            style={{
                borderColor: `hsla(${100 + (30 * (winnerId + 1))},100%,60%,.7)`
            }}
            className="app__circle-border winner">
        </div>
    </div >

    useEffect(() => {
        if (circles.length > 1) {
            const countdown = setTimeout(() => setPlayerChoosed(true), 3000);
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
        <>
            {!playerChoosed && circles.map((circle, i) => <div
                style={{
                    top: circle.clientY,
                    left: circle.clientX,
                    backgroundImage: `radial-gradient(hsla(${100 + (30 * (i + 1))},100%,60%,.7), hsla(${120 + (30 * (i + 1))},100%,60%,.7))`
                }}
                className="app__circle"
                key={i}>
                <div className="app__circle-number">{i + 1}</div>
                <div
                    style={{
                        borderColor: `hsla(${100 + (30 * (i + 1))},100%,60%,.7)`,
                        borderLeft: '10px solid transparent'
                    }}
                    className="app__circle-border"></div>
            </div>)}
            {winnerNode}
            < div className="app__count" > {playerChoosed ? `Player ${winnerId + 1} won.` : circles.length}</div >
        </>
    );
}
export default Circles;