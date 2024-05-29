import React from 'react';

// Step 1: Define the Heading component
function Heading() {
  // Step 2 & 3: Add a return statement with JSX
  return <h1>This is an h1 heading</h1>;
}

function App() {
  return (
    <div>
      {/* Render the Heading component inside App */}
      <Heading />
    </div>
  );
}

export default App;
