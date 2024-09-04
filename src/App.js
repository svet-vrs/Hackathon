// App.js
import React, { useState, useEffect } from 'react';
import ChatTranscription from './ChatTranscription';
import PdfViewer from './PdfViewer';
import PopUp from './PopUp';
import { insertCustomerDataIntoPdf } from './pdfUtils';
import { dialogues } from './dialogues';  // Import the dialogues from the separate file
import './style.css';

function App() {
  const [messages, setMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const [currentMessage, setCurrentMessage] = useState('');
  const [showPdf, setShowPdf] = useState(false);
  const [pdfUrl, setPdfUrl] = useState(null);
  const [currentStep, setCurrentStep] = useState(0);
  const [showPflegeantragPopup, setShowPflegeantragPopup] = useState(false);

  // Add message to the chat window
  const addMessage = (newMessage) => {
    setMessages((prevMessages) => [...prevMessages, newMessage]);
    setIsTyping(false); // Stop typing effect after message is fully added
  };

  // Display the message word by word
  const displayMessageWordByWord = (message) => {
    const words = message.split(' ');
    let displayedMessage = '';
    let index = 0;

    const typingInterval = setInterval(() => {
      if (index < words.length) {
        displayedMessage += words[index] + ' ';
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
    if (action === 'showPopup') {
      setTimeout(() => {
        setShowPflegeantragPopup(true);
      }, 1000); // Delay the popup by 1 second
    } else if (action === 'tickErstantrag') {
      console.log('Ticking Erstantrag...');
      // Logic to tick Erstantrag checkbox in PDF
    } else if (action === 'fillBevollmächtigter') {
      console.log('Filling Bevollmächtigter field...');
      // Logic to fill the Bevollmächtigter field in PDF
    } else if (action === 'tickPflegegeld') {
      console.log('Ticking Pflegegeld...');
      // Logic to tick Pflegegeld checkbox
    } else if (action === 'submitAntrag') {
      console.log('Submitting Antrag...');
      // Logic to submit Antrag form
    }
  };

  // Process the dialogue step and simulate typing effect
  const processDialogueStep = () => {
    const step = dialogues[currentStep];
    if (step) {
      setIsTyping(true); // Start typing effect
      displayMessageWordByWord(`${step.role} ${step.name}: ${step.phrase}`);
      if (step.action) {
        handleAction(step.action);
      }
      setCurrentStep((prevStep) => prevStep + 1);
    }
  };

  // When the user clicks "Ja" on the popup, the PDF will be filled with data and shown
  const handleOpenPflegeantrag = () => {
    setShowPflegeantragPopup(false);
    insertCustomerDataIntoPdf(setPdfUrl, setShowPdf); // Insert customer data and show PDF
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>KIBA - KI Beratungsanwendung</h1>
      </header>
      <div className="main-content">
        <ChatTranscription messages={messages} isTyping={isTyping} currentMessage={currentMessage} />
        
        {showPdf && <PdfViewer pdfUrl={pdfUrl} />}

        {/* Popup for opening Pflegeantrag */}
        {showPflegeantragPopup && <PopUp handleOpenPflegeantrag={handleOpenPflegeantrag} />}

        {/* Simulate Next Step */}
        <div className="simulation-controls">
          <button onClick={processDialogueStep}>Simulate Next Dialogue</button>
        </div>
      </div>
    </div>
  );
}

export default App;
