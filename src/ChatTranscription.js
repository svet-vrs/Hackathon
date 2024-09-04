import React from 'react';

function ChatTranscription({ messages, isTyping, currentMessage }) {
  return (
    <div className="chat-box">
      <h2>Chat Transkription</h2>
      <div className="messages">
        {messages.map((msg, index) => (
          <div key={index} className={msg.startsWith('Kundenberater') ? 'advisor-message' : 'customer-message'}>
            {msg}
          </div>
        ))}
        {isTyping && (
          <div className={currentMessage.startsWith('Kundenberater') ? 'advisor-message' : 'customer-message'}>
            {currentMessage}
          </div>
        )}
      </div>
    </div>
  );
}

export default ChatTranscription;
