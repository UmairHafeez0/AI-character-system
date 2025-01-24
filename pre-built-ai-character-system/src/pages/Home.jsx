import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import { Container, Row, Col, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

// Styled-components for better visuals
const StyledContainer = styled(Container)`
  margin-top: 50px;
  margin-bottom: 50px;
`;

const Title = styled.h1`
  font-size: 56px;
  color: #5b32c7;
  margin-bottom: 20px;
  font-weight: 700;
  letter-spacing: 1px;

  @media (max-width: 768px) {
    font-size: 42px;
  }
`;

const SubTitle = styled.h2`
  font-size: 36px;
  color: #fe6602;
  margin-bottom: 20px;
  font-weight: 600;

  @media (max-width: 768px) {
    font-size: 28px;
  }
`;

const Text = styled.p`
  font-size: 18px;
  color: #333;
  line-height: 1.8;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const Section = styled.section`
  margin-bottom: 60px;

  &:last-of-type {
    margin-bottom: 0;
  }
`;

const StyledButton = styled(Button)`
  padding: 12px 24px;
  font-size: 16px;
  font-weight: 500;
  border-radius: 30px;
  text-transform: uppercase;
  transition: background-color 0.3s;

  &.btn-primary {
    background-color: #5b32c7;
    border-color: #5b32c7;

    &:hover {
      background-color: #4a28a3;
      border-color: #4a28a3;
    }
  }

  &.btn-secondary {
    background-color: #fe6602;
    border-color: #fe6602;

    &:hover {
      background-color: #d34f00;
      border-color: #d34f00;
    }
  }
`;

const StyledImage = styled.img`
  width: 100%;
  max-width: 500px;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    margin-top: 20px;
  }
`;

const Home = () => {
  return (
    <>
      <Header />
      <StyledContainer>
        <Section>
          <Row className="align-items-center">
            <Col md={6}>
              <Title>Welcome to the Pre-Built AI Character System</Title>
              <Text>
                Our platform allows you to log in and interact with an AI character, providing a
                seamless chat experience. The system is built using React for the frontend and
                Firebase for the backend, ensuring a scalable, secure, and user-friendly platform.
              </Text>
              <StyledButton as={Link} to="/login" variant="primary" className="mr-2">
                Login
              </StyledButton>
              <StyledButton as={Link} to="/signup" variant="secondary">
                Sign Up
              </StyledButton>
            </Col>
            <Col md={6} className="text-center">
              <StyledImage src="/image.png" alt="AI Character" />
            </Col>
          </Row>
        </Section>

        <Section>
          <SubTitle>What We Offer</SubTitle>
          <Text>
            Our AI Character System allows users to interact with an advanced AI character through a
            smooth and engaging chat interface. The system supports user authentication, real-time
            data synchronization, and session management via Firebase.
          </Text>
        </Section>

        <Section>
          <SubTitle>Key Features</SubTitle>
          <Text>
            <ul>
              <li>Secure user authentication using Firebase.</li>
              <li>Real-time interaction with an AI character.</li>
              <li>Chat history stored and accessible via user profile.</li>
              <li>Customizable user settings for a personalized experience.</li>
            </ul>
          </Text>
        </Section>

        <Section>
          <SubTitle>Get Started</SubTitle>
          <Text>
            To start chatting with our AI character, simply log in or sign up. Once logged in, you'll
            be able to access your personalized dashboard, where you can begin interacting with the AI
            and explore all the features we offer.
          </Text>
        </Section>
      </StyledContainer>
      <Footer />
    </>
  );
};

export default Home;
