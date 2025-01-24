import React from 'react';
import { Route, Routes } from 'react-router-dom'; // Updated import to Routes
import Login from './pages/Login'; // Import Login page
import SignUp from './pages/Signup'; // Import SignUp page
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import Contact from './pages/Contact'
import About from './pages/About'
import ChatInterface from './pages/ChatInterface'
const RoutesComponent = () => {
  return (
    <Routes> {/* Updated to Routes instead of Switch */}
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
      <Route path="/signup" element={<SignUp />} /> {/* Updated path */}
      <Route path="/chat" element={<ChatInterface />} />
    </Routes>
  );
};

export default RoutesComponent;
