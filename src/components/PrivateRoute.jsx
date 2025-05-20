import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export const HostRoute = () => {
  const { currentUser, loading } = useAuth();
  
  if (loading) {
    return <div>Loading...</div>;
  }
  
  // If no user or user is not a host, redirect to home
  if (!currentUser || currentUser.role !== 'host') {
    return <Navigate to="/" replace />;
  }
  
  return <Outlet />;
};