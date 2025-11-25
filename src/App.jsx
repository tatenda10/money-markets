import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Login from './pages/Login';
import ProtectedRoute from './components/ProtectedRoute';
import SODRuns from './pages/SODRuns';
import Settings from './pages/Settings';
import Configurations from './pages/Configurations';

// Component to redirect authenticated users away from login
const PublicRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
  
  if (isAuthenticated) {
    return <Navigate to="/sod-runs" replace />;
  }
  
  return children;
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={
          <PublicRoute>
            <Login />
          </PublicRoute>
        } />
        <Route path="/" element={
          <ProtectedRoute>
            <Layout />
          </ProtectedRoute>
        }>
          <Route index element={<Navigate to="/sod-runs" replace />} />
          <Route path="sod-runs" element={<SODRuns />} />
          <Route path="runs" element={<Navigate to="/sod-runs" replace />} />
          <Route path="settings" element={<Settings />} />
          <Route path="configurations" element={<Configurations />} />
          <Route path="*" element={<Navigate to="/sod-runs" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
