import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

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

const NavLinks = styled.nav`
  display: flex;
  gap: 20px;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled(Link)` // Use Link from react-router-dom
  color: white;
  font-size: 16px;
  font-weight: 500;
  text-decoration: none;
  transition: color 0.3s, transform 0.3s;

  &:hover {
    color: #fe6602;
    transform: translateY(-3px);
  }
`;

const AuthButtons = styled.div`
  display: flex;
  gap: 15px;

  @media (max-width: 768px) {
    display: none;
  }
`;

const Button = styled(Link)` // Use Link for buttons as well
  padding: 10px 20px;
  background-color: #fe6602;
  color: white;
  font-size: 16px;
  font-weight: 500;
  border-radius: 5px;
  text-decoration: none;
  transition: background-color 0.3s, transform 0.3s;

  &:hover {
    background-color: #d34f00;
    transform: translateY(-3px);
  }
`;

const MobileMenu = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
    font-size: 24px;
    cursor: pointer;
    color: white;
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Logo>AI Character System</Logo>
      <NavLinks>
        <NavLink to="/">Home</NavLink> {/* Use Link's "to" prop */}
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </NavLinks>
      <AuthButtons>
        <Button to="/login">Login</Button> {/* Use Link's "to" prop */}
        <Button to="/signup">Sign Up</Button> {/* Use Link's "to" prop */}
      </AuthButtons>
      <MobileMenu>☰</MobileMenu> {/* Placeholder for mobile menu */}
    </HeaderContainer>
  );
};

export default Header;
