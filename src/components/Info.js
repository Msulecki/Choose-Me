import React from 'react';

function Info(props) {
    const { playerChoosed, winner, circlesCount } = props
    return (
        < div className="app__count" > {playerChoosed ? `Player ${winner} won.` : circlesCount}</div >
    );
}
export default Info;