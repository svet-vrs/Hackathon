// src/DemoInterface.js
import React, { useState } from 'react';

function DemoInterface() {
  const [step, setStep] = useState(1);

  const nextStep = () => {
    setStep(step + 1);
  };

  return (
    <div className="demo-interface">
      <h1>Kundenberater Interface</h1>
      {step === 1 && (
        <div>
          <p>Kunde: „Mein Name ist Max Mustermann. Wie kann ich Ihnen weiterhelfen?“</p>
          <button onClick={nextStep}>Weiter</button>
        </div>
      )}
      {step === 2 && (
        <div>
          <p>Kunde: „Ich soll einen Pflegeantrag stellen.“</p>
          <p>Pflegeantrag öffnen?</p>
          <button onClick={nextStep}>Ja</button>
        </div>
      )}
      {step === 3 && (
        <div>
          <p>„Haben Sie schon einen Pflegegrad?“</p>
          <button onClick={nextStep}>Nein</button>
        </div>
      )}
      {step === 4 && (
        <div>
          <p>„Sind Ihre Adresse und Daten korrekt?“</p>
          <button onClick={nextStep}>Ja</button>
        </div>
      )}
      {/* Add more steps as needed */}
    </div>
  );
}

export default DemoInterface;
