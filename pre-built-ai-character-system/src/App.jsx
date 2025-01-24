import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes'; // Import the routes file
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <Router>
      <Routes />
    </Router>
  );
};

export default App;
