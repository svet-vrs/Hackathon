import React from 'react';

const ChatTranscription = ({ messages, isTyping, currentMessage }) => {
  return (
    <div className="chat-box">
      <div className="messages">
        {messages.map((msg, index) => (
          <div key={index} className={msg.includes('Kundenberater') ? 'advisor-message' : 'customer-message'}>
            {msg}
          </div>
        ))}
        {isTyping && <div>{currentMessage}</div>}
      </div>
    </div>
  );
};

export default ChatTranscription;
