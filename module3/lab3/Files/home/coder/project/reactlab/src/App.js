import React, { useRef } from 'react';

function App() {
  const bird1 = useRef(new Audio('path/to/caspian-tern-1.mp3'));
  const bird2 = useRef(new Audio('path/to/caspian-tern-2.mp3')); // Un-comment this line

  const toggle1 = () => {
    if (bird1.current.paused) {
      bird1.current.play();
    } else {
      bird1.current.pause();
    }
  };

  const toggle2 = () => {
    if (bird2.current.paused) {
      bird2.current.play();
    } else {
      bird2.current.pause();
    }
  };

  return (
    <div className="App">
      <h1>Bird Sounds</h1>
      <button onClick={toggle1}>Caspian Tern 1</button>
      <button onClick={toggle2}>Caspian Tern 2</button> {/* Update this line */}
    </div>
  );
}

export default App;
