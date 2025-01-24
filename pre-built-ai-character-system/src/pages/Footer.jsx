import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #2c3e50;
  color: #ecf0f1;
  padding: 40px 80px;
  font-family: 'Poppins', sans-serif;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  border-top: 1px solid #34495e;

  @media (max-width: 768px) {
    padding: 30px 40px;
    flex-direction: column;
    text-align: center;
  }
`;

const FooterLogo = styled.div`
  font-size: 24px;
  font-weight: 600;
  color: #ecf0f1;
  text-transform: uppercase;
  letter-spacing: 1px;

  @media (max-width: 768px) {
    margin-bottom: 20px;
  }
`;

const FooterNav = styled.nav`
  display: flex;
  gap: 40px;
  align-items: center;

  @media (max-width: 768px) {
    gap: 30px;
  }
`;

const FooterNavLink = styled.a`
  color: #ecf0f1;
  font-size: 16px;
  font-weight: 400;
  text-decoration: none;
  transition: color 0.3s;

  &:hover {
    color: #fe6602;
  }

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const FooterCopyright = styled.div`
  font-size: 14px;
  font-weight: 400;
  color: #bdc3c7;
  margin-top: 20px;
  text-align: center;
  width: 100%;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterLogo>AI Character System</FooterLogo>
      <FooterNav>
        <FooterNavLink href="#privacy-policy">Privacy Policy</FooterNavLink>
        <FooterNavLink href="#terms-of-use">Terms of Use</FooterNavLink>
        <FooterNavLink href="#contact">Contact</FooterNavLink>
      </FooterNav>
      <FooterCopyright>© 2025 AI Character System. All Rights Reserved.</FooterCopyright>
    </FooterContainer>
  );
};

export default Footer;
