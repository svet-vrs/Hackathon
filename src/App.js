import React, { useState } from 'react';
import ChatTranscription from './ChatTranscription';
import PdfViewer from './PdfViewer';
import PopUp from './PopUp';
import { insertCustomerDataIntoPdf } from './pdfUtils';
import dialogues from './dialogues';
import './style.css';

function App() {
  const [messages, setMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const [currentMessage, setCurrentMessage] = useState('');
  const [showPdf, setShowPdf] = useState(false);
  const [pdfUrl, setPdfUrl] = useState(null);
  const [currentStep, setCurrentStep] = useState(0);
  const [showPflegeantragPopup, setShowPflegeantragPopup] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // Added loading state

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

  // Simulate data collection and show a loading screen before showing the PDF
  const simulateLoadingAndShowPdf = () => {
    setIsLoading(true); // Start loading
    setTimeout(() => {
      insertCustomerDataIntoPdf(setPdfUrl, setShowPdf); // Insert customer data and show PDF
      setIsLoading(false); // End loading after "data collection"
    }, 2000); // Simulate a 2-second loading time
  };

  // When the user clicks "Ja" on the popup, the PDF will be shown after loading
  const handleOpenPflegeantrag = () => {
    setShowPflegeantragPopup(false);
    simulateLoadingAndShowPdf(); // Simulate loading and then open PDF
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>KIBA - KI Beratungs Assistent</h1> {/* Updated Title */}
      </header>
      <div className="main-content">
        <ChatTranscription messages={messages} isTyping={isTyping} currentMessage={currentMessage} />
        
        {/* Show loading screen when the PDF is being prepared */}
        {isLoading && (
          <div className="loading-screen">
            <p>Wir sammeln Ihre Daten und füllen den Antrag aus...</p>
            <div className="spinner"></div>
          </div>
        )}

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
