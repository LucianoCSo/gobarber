import React from 'react';
import { AuthProvider } from './Auth';
import { ToastProvider } from './Toasts';

const AppProvider: React.FC = ({ children }) => (
  <AuthProvider>
    <ToastProvider>{children}</ToastProvider>
  </AuthProvider>
);

export default AppProvider;
