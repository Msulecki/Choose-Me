import React, { useState, useEffect } from 'react';
import Circles from './Circles';
import '../styles/App.scss';

function App() {

  const [touchStartTime, setTouchStartTime] = useState(0);
  const [circlePosition, setCirclePosition] = useState([]);

  const handleTouchStart = e => {
    setTouchStartTime(new Date().getTime());
    const touchesCount = e.targetTouches.length;
    const positions = [];
    for (let i = 0; i < touchesCount; i++) {
      positions.push(e.targetTouches[i])
    }
    setCirclePosition(positions);
  }

  return (
    <div
      className="app"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchStart}
      onTouchMove={handleTouchStart}
    >
      <Circles
        circles={circlePosition}
      />
    </div>
  );
}

export default App;
