import React from 'react';
import Navbar from '../Navbar/Navbar';
import DivContainer from './Layout.styles';

interface LayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }: LayoutProps) => {
  return (
    <React.Fragment>
      <Navbar />
      <DivContainer>
        {children}
      </DivContainer>
    </React.Fragment>
  );
}

export default Layout;