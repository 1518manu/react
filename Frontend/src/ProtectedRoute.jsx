// ProtectedRoute.jsx
import React from 'react';
import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem('authToken'); // Check if the auth token exists

  return isAuthenticated ? children : <Navigate to="/" replace />; // Redirect to home if not authenticated
};

// Adding PropTypes for validation
ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired, // Validate that children is a node
};

export default ProtectedRoute;
