//Controller.js
import React from 'react';

function Controller({ addMessage }) {
  const handleSayHello = () => {
    addMessage('Kunde: Hallo, ich möchte einen Pflegeantrag stellen.');
  };

  const handleReply = () => {
    addMessage('Berater: Natürlich, lassen Sie uns beginnen.');
  };

  return (
    <div className="controller">
      <h2>Control Panel (Hidden from Audience)</h2>
      <button onClick={handleSayHello}>Simulate Kunde: Hallo</button>
      <button onClick={handleReply}>Simulate Berater: Natürlich</button>
    </div>
  );
}

export default Controller;
