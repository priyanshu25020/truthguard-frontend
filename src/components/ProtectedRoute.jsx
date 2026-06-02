import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  // 🔥 Yahan humne dono (localStorage aur sessionStorage) allow kar diye hain
  const token = localStorage.getItem('token') || sessionStorage.getItem('token');
  
  if (!token) {
    return <Navigate to="/auth" />;
  }
  return children;
};

export default ProtectedRoute;