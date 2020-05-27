import React, { useState, useEffect } from 'react';

function Circles(props) {
    const { circles } = props;
    const [playerChoosed, setPlayerChoosed] = useState(false);
    const [winnerId, setWinnerId] = useState(0);
    useEffect(() => {
        if (circles.length > 1) {
            const countdown = setTimeout(() => {
                setWinnerId(Math.floor(Math.random() * circles.length))
                setPlayerChoosed(true);
            }, 3000)
            return () => clearTimeout(countdown);
        } else {
            setPlayerChoosed(false);
        }
    }, [circles.length]);
    return (
        <>
            {circles.map((circle, i) => <div
                style={{
                    top: circle.clientY,
                    left: circle.clientX,
                    backgroundImage: `radial-gradient(hsla(${100 + (30 * (i + 1))},100%,60%,.7), hsla(${120 + (30 * (i + 1))},100%,60%,.7))`
                }}
                className="app__circle"
                key={i}>
                {i + 1}
                <div
                    style={{
                        borderColor: `hsla(${100 + (30 * (i + 1))},100%,60%,.7)`,
                        borderLeft: '10px solid transparent'
                    }}
                    className="app__circle-border"></div>
            </div>)}
            < div className="app__count" > {playerChoosed ? `Player ${winnerId + 1} won.` : circles.length}</div >
        </>
    );
}
export default Circles;