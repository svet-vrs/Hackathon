import React, { useState } from 'react';

function DemoInterface() {
  const [step, setStep] = useState(1);  // Steuert den Fortschritt des Gesprächs
  const [formData, setFormData] = useState({
    name: 'Max Mustermann',
    birthdate: '15. Mai 1980',
    address: 'Musterstraße 123',
    careGrade: 'Noch kein Pflegegrad',
    authorizedPerson: 'Sohn Matthias',
    careType: 'Pflegegeld',
    supportedBy: 'Sohn Matthias',
    bankDetails: 'Bankverbindung ist korrekt'
  });

  const nextStep = () => {
    setStep(step + 1);
  };

  const updateForm = (field, value) => {
    setFormData(prevState => ({
      ...prevState,
      [field]: value
    }));
    nextStep();
  };

  return (
    <div>
      <h1>Kundenberater Interface</h1>
      {/* Schritt 1: Gesprächsstart */}
      {step === 1 && (
        <div>
          <p>Kunde: „Mein Name ist {formData.name}. Wie kann ich Ihnen weiterhelfen?“</p>
          <button onClick={nextStep}>Weiter</button>
        </div>
      )}
      {/* Schritt 2: Pflegeantrag Popup */}
      {step === 2 && (
        <div>
          <p>Kunde: „Ich soll einen Pflegeantrag stellen.“</p>
          <p>Pflegeantrag öffnen?</p>
          <button onClick={nextStep}>Ja</button>
        </div>
      )}
      {/* Schritt 3: Pflegegrad Frage */}
      {step === 3 && (
        <div>
          <p>Kunde: „Haben Sie schon einen Pflegegrad?“</p>
          <button onClick={() => updateForm('careGrade', 'Nein')}>Nein</button>
        </div>
      )}
      {/* Schritt 4: Datenbestätigung */}
      {step === 4 && (
        <div>
          <p>Versicherungsdaten: „Sind Ihre Adresse und Daten korrekt?“</p>
          <button onClick={nextStep}>Ja</button>
        </div>
      )}
      {/* Schritt 5: Bevollmächtigter Frage */}
      {step === 5 && (
        <div>
          <p>„Haben Sie einen Bevollmächtigten oder Betreuer?“</p>
          <button onClick={() => updateForm('authorizedPerson', 'Sohn Matthias')}>Ja, Matthias</button>
        </div>
      )}
      {/* Schritt 6: Pflegegeld/Pflegesachleistung Auswahl */}
      {step === 6 && (
        <div>
          <p>„Pflegegeld oder Pflegesachleistungen?“</p>
          <button onClick={() => updateForm('careType', 'Pflegegeld')}>Pflegegeld</button>
          <button onClick={() => updateForm('careType', 'Pflegesachleistung')}>Pflegesachleistung</button>
        </div>
      )}
      {/* Schritt 7: Unterstützung bei der Pflege */}
      {step === 7 && (
        <div>
          <p>„Wird Sie jemand bei der Pflege unterstützen?“</p>
          <button onClick={() => updateForm('supportedBy', 'Sohn Matthias')}>Ja, Matthias</button>
        </div>
      )}
      {/* Schritt 8: Abschluss */}
      {step === 8 && (
        <div>
          <h2>Antrag abgeschlossen</h2>
          <p>Pflegeleistung: {formData.careType}</p>
          <p>Bevollmächtigter: {formData.authorizedPerson}</p>
          <p>Unterstützung: {formData.supportedBy}</p>
          <p>Bankverbindung: {formData.bankDetails}</p>
        </div>
      )}
    </div>
  );
}

export default DemoInterface;
