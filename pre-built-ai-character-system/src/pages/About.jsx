import React from 'react';
import Header from './Header';
import Footer from './Footer';
import styled from 'styled-components';

const AboutContainer = styled.div`
  padding: 40px 20px;
  background: #f8f9fa;
  font-family: 'Poppins', sans-serif;
`;

const AboutHeader = styled.h1`
  text-align: center;
  font-size: 48px;
  font-weight: 600;
  color: #5b32c7;
  margin-bottom: 30px;
`;

const AboutContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Paragraph = styled.p`
  font-size: 18px;
  line-height: 1.6;
  color: #333;
  margin-bottom: 20px;
  text-align: justify;
  width: 80%;
`;

const AboutImage = styled.img`
  width: 100%;
  max-width: 600px;
  margin-bottom: 30px;
  border-radius: 8px;
`;

const About = () => {
  return (
    <>
      <Header />
      <AboutContainer>
        <AboutHeader>About AI Character System</AboutHeader>
        <AboutContent>
          <AboutImage src="/image.png" alt="AI Character" />
          <Paragraph>
            The AI Character System is designed to provide users with a seamless and engaging
            chat experience. By leveraging advanced AI technologies and integrating them into a
            user-friendly platform, our system allows users to interact with a pre-built AI character
            in real-time. Whether you're looking for entertainment, learning, or support, the system
            is equipped to meet your needs.
          </Paragraph>
          <Paragraph>
            With a modern, intuitive interface built using React, and secure backend infrastructure
            powered by Firebase, the AI Character System ensures that every interaction is safe,
            private, and smooth. The platform is designed to adapt to the evolving needs of users,
            making it scalable and ready for future integrations.
          </Paragraph>
        </AboutContent>
      </AboutContainer>
      <Footer />
    </>
  );
};

export default About;
