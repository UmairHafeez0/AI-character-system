import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import DashboardHeader from './DashboardHeader';
import Footer from './Footer'

// Styled components
const HeaderContainer = styled.header`
  background: linear-gradient(135deg, #5b32c7, #fe6602);
  color: white;
  padding: 20px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: 'Poppins', sans-serif;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;

const Logo = styled.div`
  font-size: 32px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 2px;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;

const FooterContainer = styled.footer`
  background-color: #f9f9f9;
  color: #5b32c7;
  padding: 20px;
  text-align: center;
  font-family: 'Poppins', sans-serif;
  box-shadow: 0 -4px 10px rgba(0, 0, 0, 0.1);
  position: relative;
  bottom: 0;
  width: 100%;
`;

const ChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  background-color: #fff;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  width: 100%; /* Full width */
  max-width: 1200px; /* Adjusted max-width to fill more space */
  margin: 20px auto;
  border-radius: 8px;
  flex-grow: 1; /* Allow this container to take up available space */
`;

const ChatHeader = styled.div`
  font-size: 24px;
  font-weight: 600;
  color: #5b32c7;
  margin-bottom: 20px;
`;

const MessageBox = styled.div`
  width: 100%;
  min-height: 300px; /* Ensures the box has a minimum size */
  height: auto;
  overflow-y: auto;
  margin-bottom: 20px;
  padding: 10px;
  background-color: #f9f9f9;
  border-radius: 8px;
  border: 1px solid #d0d5dd;
`;

const MessageInput = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border-radius: 8px;
  border: 1px solid #d0d5dd;
  margin-bottom: 20px;
  outline: none;

  &:focus {
    border-color: #fe6602;
  }
`;

const SendButton = styled.button`
  padding: 10px 20px;
  background-color: #fe6602;
  color: white;
  font-size: 16px;
  font-weight: 500;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #d34f00;
  }
`;

// Animation for robot pop-in
const popIn = keyframes`
  0% { opacity: 0; transform: scale(0.8); }
  100% { opacity: 1; transform: scale(1); }
`;

const RobotContainer = styled.div`
  display: flex;
  align-items: center;
  animation: ${popIn} 0.6s ease-out;
`;

const RobotIcon = styled.div`
  width: 50px;
  height: 50px;
  background-color: #5b32c7;
  border-radius: 50%;
  margin-right: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-weight: bold;
  font-size: 20px;
`;

const SpeechBubble = styled.div`
  background-color: #d0d5dd;
  padding: 10px;
  border-radius: 10px;
  max-width: 250px;
  font-size: 16px;
  font-weight: 500;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: -10px;
    border: 10px solid transparent;
    border-right-color: #d0d5dd;
    border-left: none;
    margin-top: -5px;
  }
`;

const StartButton = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #fe6602;
  color: white;
  font-size: 16px;
  font-weight: 500;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #d34f00;
  }
`;

// ChatInterface Component
const ChatInterface = () => {
  const [messages, setMessages] = useState([]);
  const [userMessage, setUserMessage] = useState('');
  const [showRobot, setShowRobot] = useState(true);

  const sendMessage = async () => {
    if (userMessage.trim()) {
      // Add user message to the chat
      const newMessages = [...messages, { sender: 'user', text: userMessage }];
      setMessages(newMessages);
      setUserMessage('');

      // Simulate AI response (Replace with actual API call in production)
      const aiMessage = await getAIResponse(userMessage);
      setMessages([...newMessages, { sender: 'ai', text: aiMessage }]);
    }
  };

  const getAIResponse = async (message) => {
    // Placeholder for AI API call. Replace with real API logic.
    return new Promise((resolve) => {
      setTimeout(() => resolve(`AI Response to: ${message}`), 1000);
    });
  };

  const handleStartChat = () => {
    setShowRobot(false); // Hide robot after greeting
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <DashboardHeader />

      <ChatContainer>
        <ChatHeader>Chat with AI Character</ChatHeader>

        {showRobot && (
          <RobotContainer>
            <RobotIcon>🤖</RobotIcon>
            <SpeechBubble>
              Hi, let's get started! How can I assist you today?
            </SpeechBubble>
          </RobotContainer>
        )}

        <MessageBox>
          {messages.map((message, index) => (
            <div
              key={index}
              style={{
                textAlign: message.sender === 'user' ? 'right' : 'left',
                marginBottom: '10px',
              }}
            >
              <span
                style={{
                  display: 'inline-block',
                  backgroundColor: message.sender === 'user' ? '#fe6602' : '#d0d5dd',
                  color: message.sender === 'user' ? 'white' : 'black',
                  padding: '10px',
                  borderRadius: '8px',
                  maxWidth: '60%',
                }}
              >
                {message.text}
              </span>
            </div>
          ))}
        </MessageBox>

        {!showRobot && (
          <>
            <MessageInput
              value={userMessage}
              onChange={(e) => setUserMessage(e.target.value)}
              placeholder="Type your message..."
            />
            <SendButton onClick={sendMessage}>Send</SendButton>
          </>
        )}

        {showRobot && (
          <StartButton onClick={handleStartChat}>
            Start Chat
          </StartButton>
        )}
      </ChatContainer>
    <Footer />
    </div>
   
  );
};

export default ChatInterface;
