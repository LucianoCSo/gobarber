import React from 'react';
import { Container } from './stylles';

interface ToolyipProps {
  title: string;
  className?: string;
}
const Tooltip: React.FC<ToolyipProps> = ({ title, className, children }) => {
  return (
    <Container className={className}>
      {children}
      <span>{title}</span>
    </Container>
  );
};

export default Tooltip;
