import React from 'react';
import Toast from './Toast';
import { ToastMessage } from '../../hooks/Toasts';
import { Container } from './styles';

interface ToastContaoinerProps {
  messages: ToastMessage[];
}

const ToastContainer: React.FC<ToastContaoinerProps> = ({ messages }) => {
  return (
    <Container>
      {messages.map((message) => (
        <Toast key={message.id} message={message} style={message} />
      ))}
    </Container>
  );
};
export default ToastContainer;
