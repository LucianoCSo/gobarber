import React from 'react';
// import Toast from './Toast';
import { ToastMessage } from '../../hooks/Toasts';
import { Container } from './styles';
import swal from 'sweetalert2';

interface ToastContaoinerProps {
  messages: ToastMessage[];
}

const toastMessage = (message: ToastMessage) => {
  if (message.type === 'info') {
    swal.fire({
      toast: true,
      icon: message.type,
      title: message.title,
      text: message.description,
      background: 'rgba(255, 251, 251, 0.712)',
      timer: 3000,
    });
  } else if (message.type === 'success') {
    swal.fire({
      toast: true,
      icon: message.type,
      title: message.title,
      text: message.description,
      background: 'rgba(255, 251, 251, 0.712)',
      timer: 3000,
    });
  } else {
    swal.fire({
      toast: true,
      icon: message.type,
      title: message.title,
      text: message.description,
      background: 'rgba(255, 251, 251, 0.712)',
      timer: 3000,
    });
  }
};

const ToastContainer: React.FC<ToastContaoinerProps> = ({ messages }) => {
  return (
    <Container>
      {messages.map((message) =>
        // <Toast key={message.id} message={message} style={message} />
        toastMessage(message)
      )}
    </Container>
  );
};
export default ToastContainer;
