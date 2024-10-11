import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WorkshopInfo from './components/WorkshopInfo';
import Login from './components/Login';
import Register from './components/Register';
import ForgotPassword from './components/ForgotPassword'; 
import AuthProvider from './context/AuthContext';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<WorkshopInfo />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} /> 
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;



