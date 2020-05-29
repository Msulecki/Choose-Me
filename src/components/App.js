import React from 'react';
import Circles from './Circles';
import Desktop from './Desktop';
import '../styles/App.scss';

function App() {
  console.log('app render');
  return (
    <div className="app">
      {("ontouchstart" in document.documentElement) ? <Circles /> : <Desktop />}
    </div>
  );
}

export default App;
