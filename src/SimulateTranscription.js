// SimulateTranscription.js
import React from 'react';

const SimulateTranscription = ({ simulateTranscription }) => {
  return (
    <div className="simulation-controls">
      <button onClick={simulateTranscription}>Simulate Next Dialogue</button>
    </div>
  );
};

export default SimulateTranscription;
