import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import DashboardHeader from './DashboardHeader';
import Footer from './Footer'
import 'bootstrap/dist/css/bootstrap.min.css';

import { useNavigate } from 'react-router-dom';
const Title = styled.h1`
  font-size: 36px;
  color: #5b32c7;
  margin-bottom: 20px;
  font-weight: 600;
`;

const SubTitle = styled.h2`
  font-size: 24px;
  color: #fe6602;
  margin-bottom: 15px;
  font-weight: 500;
`;

const Text = styled.p`
  font-size: 16px;
  color: #333;
  line-height: 1.5;
`;

const Section = styled.div`
  margin-bottom: 30px;
`;

const StyledCard = styled(Card)`
  border: none;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;
  &:hover {
    transform: translateY(-5px);
  }
`;

const Dashboard = () => {
  const navigate = useNavigate(); 
  const handleStartChat = () => {
    navigate('/chat'); // Redirect to the ChatInterface page
  };
  return (
    <>
      <DashboardHeader />
      <Container className="mt-5">
        <Section>
          <Title>Welcome to Your Dashboard</Title>
          <Text>Here, you can manage your profile, access chat history, and interact with the AI character seamlessly.</Text>
        </Section>

        <Row>
          <Col md={4} className="mb-4">
            <StyledCard>
              <Card.Body>
                <SubTitle>Quick Start</SubTitle>
                <Text>Start chatting with the AI character now.</Text>
                <Button variant="primary" className="w-100" onClick={handleStartChat}>
        Start Chat
      </Button>
              </Card.Body>
            </StyledCard>
          </Col>
          <Col md={4} className="mb-4">
            <StyledCard>
              <Card.Body>
                <SubTitle>Recent Interactions</SubTitle>
                <Text>View a summary of your recent chats.</Text>
                <Button variant="secondary" className="w-100">View History</Button>
              </Card.Body>
            </StyledCard>
          </Col>
          <Col md={4} className="mb-4">
            <StyledCard>
              <Card.Body>
                <SubTitle>Profile Settings</SubTitle>
                <Text>Manage your profile details and preferences.</Text>
                <Button variant="outline-secondary" className="w-100">Manage Profile</Button>
              </Card.Body>
            </StyledCard>
          </Col>
        </Row>

        <Section>
          <SubTitle>System Overview</SubTitle>
          <Text>
            The AI Character System is powered by Firebase for backend services, providing secure
            user authentication and real-time data management. Interact with an advanced AI engine
            through an intuitive chat interface.
          </Text>
        </Section>

        <Row>
          <Col md={6} className="mb-4">
            <StyledCard>
              <Card.Body>
                <SubTitle>System Architecture</SubTitle>
                <Text>
                  Frontend: React.js<br />
                  Backend: Firebase<br />
                  AI Engine: Integrated external API
                </Text>
              </Card.Body>
            </StyledCard>
          </Col>
          <Col md={6} className="mb-4">
            <StyledCard>
              <Card.Body>
                <SubTitle>Technology Stack</SubTitle>
                <Text>
                  React.js<br />
                  Firebase Authentication & Firestore<br />
                  External AI API for AI responses
                </Text>
              </Card.Body>
            </StyledCard>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default Dashboard;
