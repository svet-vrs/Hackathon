import React, { useState, useEffect } from 'react';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css'; // Import default styles for the PDF viewer
import ChatTranscription from './ChatTranscription';
import './style.css';

// Predefined dialogues between "Kundenberater Mustermann" and "Kunde Müller"
const dialogues = [
  { role: 'Kundenberater', name: 'Mustermann', phrase: 'Wie kann ich Ihnen weiterhelfen?', action: null },
  { role: 'Kunde', name: 'Müller', phrase: 'Ich soll einen Pflegeantrag stellen.', action: 'showPflegeantragPopup' },
  { role: 'Kundenberater', name: 'Mustermann', phrase: 'Haben Sie bereits einen Pflegegrad?', action: null },
  { role: 'Kunde', name: 'Müller', phrase: 'Nein, den habe ich noch nicht.', action: 'tickErstantrag' },
  { role: 'Kundenberater', name: 'Mustermann', phrase: 'Ihre Versicherungsdaten sind noch korrekt, oder?', action: null },
  { role: 'Kunde', name: 'Müller', phrase: 'Ja, genau, da hat sich nichts geändert.', action: null },
  { role: 'Kundenberater', name: 'Mustermann', phrase: 'Haben Sie einen Bevollmächtigten oder Betreuer?', action: null },
  { role: 'Kunde', name: 'Müller', phrase: 'Ja, mein Sohn Matthias. Der sollte im System hinterlegt sein.', action: 'fillBevollmächtigter' },
  { role: 'Kundenberater', name: 'Mustermann', phrase: 'Ab Pflegegrad 2 haben Sie Anspruch auf Pflegegeld oder Pflegesachleistungen. Benötigen Sie die Hilfe eines Pflegedienstes?', action: null },
  { role: 'Kunde', name: 'Müller', phrase: 'Nein, ich bekomme alles noch selbstständig hin.', action: 'tickPflegegeld' },
  { role: 'Kundenberater', name: 'Mustermann', phrase: 'Ist Ihre Bankverbindung noch aktuell?', action: null },
  { role: 'Kunde', name: 'Müller', phrase: 'Ja, die Bankverbindung hat sich nicht geändert.', action: null },
  { role: 'Kundenberater', name: 'Mustermann', phrase: 'Der Antrag ist vollständig und wird an den Medizinischen Dienst übergeben.', action: 'submitAntrag' },
];

function App() {
  const [messages, setMessages] = useState([]);
  const [currentStep, setCurrentStep] = useState(0);
  const [showPflegeantragPopup, setShowPflegeantragPopup] = useState(false);
  const [isTyping, setIsTyping] = useState(false); // Track if the typing effect is in progress
  const [currentMessage, setCurrentMessage] = useState(""); // To display word by word
  const [showPdf, setShowPdf] = useState(false); // State to show or hide the PDF viewer

  // Add message to the chat window
  const addMessage = (newMessage) => {
    setMessages((prevMessages) => [...prevMessages, newMessage]);
    setIsTyping(false); // Stop typing effect after message is fully added
  };

  // Display the message word by word
  const displayMessageWordByWord = (message) => {
    const words = message.split(" ");
    let displayedMessage = "";
    let index = 0;

    const typingInterval = setInterval(() => {
      if (index < words.length) {
        displayedMessage += words[index] + " ";
        setCurrentMessage(displayedMessage.trim());
        index++;
      } else {
        clearInterval(typingInterval);
        addMessage(displayedMessage.trim()); // Add full message to the chat
      }
    }, 300); // Delay between each word
  };

  // Handle actions triggered by specific dialogues
  const handleAction = (action) => {
    switch (action) {
      case 'showPflegeantragPopup':
        setTimeout(() => {
          setShowPflegeantragPopup(true);
        }, 1000); // Delay popup by 1 second
        break;
      case 'tickErstantrag':
        // Logic to tick Erstantrag checkbox in PDF
        console.log('Erstantrag ticked');
        break;
      case 'fillBevollmächtigter':
        // Logic to fill Bevollmächtigter field in PDF
        console.log('Bevollmächtigter filled');
        break;
      case 'tickPflegegeld':
        // Logic to tick Pflegegeld checkbox
        console.log('Pflegegeld ticked');
        break;
      case 'submitAntrag':
        // Logic to submit Antrag form
        console.log('Antrag submitted');
        break;
      default:
        break;
    }
  };

  // Process Whisper transcription and trigger actions
  const processTranscription = (transcription) => {
    const step = dialogues[currentStep];
    if (transcription.includes(step.phrase)) {
      setIsTyping(true); // Start typing effect when message is being processed
      displayMessageWordByWord(`${step.role} ${step.name}: ${step.phrase}`);
      if (step.action) handleAction(step.action);
      setCurrentStep((prevStep) => prevStep + 1);
    }
  };

  // Function to simulate transcription (for testing)
  const simulateTranscription = () => {
    if (currentStep < dialogues.length) {
      const step = dialogues[currentStep];
      processTranscription(step.phrase);
    }
  };

  // When the user clicks "Ja" on the popup, the PDF will be shown
  const handleOpenPflegeantrag = () => {
    setShowPflegeantragPopup(false);
    setShowPdf(true); // Show the PDF in the viewer
  };

  useEffect(() => {
    // Placeholder for starting the microphone capture
  }, []);

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>KIBA - KI Beratungsanwendung</h1>
      </header>
      <div className="main-content">
        {/* Chat and PDF container */}
        <div className="content-container">
          {/* Chat Transcription Window */}
          <ChatTranscription messages={messages} isTyping={isTyping} currentMessage={currentMessage} />

          {/* PDF Viewer */}
          {showPdf && (
            <div className="pdf-viewer">
              <Worker workerUrl={`https://unpkg.com/pdfjs-dist@3.0.279/build/pdf.worker.min.js`}>
                <Viewer fileUrl="/pflege-antrag-leistungen.pdf" />
              </Worker>
            </div>
          )}
        </div>

        {/* Popup for opening Pflegeantrag */}
        {showPflegeantragPopup && (
          <div className="pflegeantrag-popup">
            <p>Pflegeantrag öffnen?</p>
            <button onClick={handleOpenPflegeantrag}>Ja</button>
          </div>
        )}

        {/* Simulation controls for testing */}
        <div className="simulation-controls">
          <button onClick={simulateTranscription}>Simulate Next Dialogue</button>
        </div>
      </div>
    </div>
  );
}

export default App;
