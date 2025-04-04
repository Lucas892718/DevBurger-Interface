import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';

export function PrivateRoute({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('devburger:UserInfo');
    const token = storedUser ? JSON.parse(storedUser) : null;
    if (token) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  }, []);

  if (isAuthenticated === null) {
    return <p>Carregando...</p>;
  }

  return isAuthenticated ? children : <Navigate to="/login" replace />;
}

PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired
};
