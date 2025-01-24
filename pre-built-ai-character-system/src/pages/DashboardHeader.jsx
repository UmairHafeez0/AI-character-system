import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const DashboardHeaderContainer = styled.header`
  background: linear-gradient(135deg, #5b32c7, #fe6602);
  color: white;
  padding: 15px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: 'Poppins', sans-serif;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;

const Logo = styled.div`
  font-size: 28px;
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

const NavLink = styled(Link)`
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

const MobileMenu = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
    font-size: 24px;
    cursor: pointer;
    color: white;
  }
`;

const DashboardHeader = () => {
  return (
    <DashboardHeaderContainer>
      <Logo>AI Character Dashboard</Logo>
      <NavLinks>
        <NavLink to="/dashboard">Dashboard</NavLink>
        <NavLink to="/profile">Profile</NavLink>
        <NavLink to="/settings">Settings</NavLink>
        <NavLink to="/logout">Logout</NavLink>
      </NavLinks>
      <MobileMenu>☰</MobileMenu> {/* Placeholder for mobile menu */}
    </DashboardHeaderContainer>
  );
};

export default DashboardHeader;
