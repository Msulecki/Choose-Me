import React, { useState } from 'react';
import Circles from './Circles';
import '../styles/App.scss';
import Desktop from './Desktop';

function App() {

  const [circlePosition, setCirclePosition] = useState([]);

  const handleCirclePosition = e => {
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
      onTouchStart={handleCirclePosition}
      onTouchEnd={handleCirclePosition}
      onTouchMove={handleCirclePosition}
    >
      {("ontouchstart" in document.documentElement) ? <Circles
        circles={circlePosition}
      /> : <Desktop />}
    </div>
  );
}

export default App;
