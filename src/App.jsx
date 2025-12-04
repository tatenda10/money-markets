import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import PnLSummary from './pages/PnLSummary';
import IncomeSummary from './pages/IncomeSummary';
import CashRecon from './pages/CashRecon';
import Transactions from './pages/Transactions';
import SODRuns from './pages/SODRuns';

const ProtectedRoute = ({ children }) => {
    const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
    if (!isAuthenticated) {
        return <Navigate to="/login" replace />;
    }
    return children;
};

const PublicRoute = ({ children }) => {
    const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
    if (isAuthenticated) {
        return <Navigate to="/" replace />;
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
          <Route index element={<Dashboard />} />
          <Route path="pnl-summary" element={<PnLSummary />} />
          <Route path="income-summary" element={<IncomeSummary />} />
          <Route path="cash-recon" element={<CashRecon />} />
          <Route path="transactions" element={<Transactions />} />
          <Route path="sod-runs" element={<SODRuns />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
