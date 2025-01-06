'use client';
import { BackgroundGradientAnimation } from '@/components/ui/AnimatedBackground';
import Navbar from '@/components/ui/Navbar';
import { useAuth } from '@/hooks/useAuth';
import { ReactNode } from 'react';

const Layout = ({ children }: { children: ReactNode }) => {
  useAuth();
  return (
    <BackgroundGradientAnimation>
      <Navbar />
      {children}
    </BackgroundGradientAnimation>
  );
};

export default Layout;
