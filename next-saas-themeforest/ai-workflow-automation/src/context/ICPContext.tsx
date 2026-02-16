'use client';

import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';

export type ICPType = 'pe' | 'wealth' | 'banking';

interface ICPContextType {
  icp: ICPType;
  setIcp: (icp: ICPType) => void;
}

const ICPContext = createContext<ICPContextType | undefined>(undefined);

export const ICPProvider = ({ children }: { children: ReactNode }) => {
  const [icp, setIcpState] = useState<ICPType>('pe');

  // Hydrate from localStorage
  useEffect(() => {
    try {
      const stored = localStorage.getItem('selected-icp') as ICPType | null;
      if (stored && ['pe', 'wealth', 'banking'].includes(stored)) {
        setIcpState(stored);
      }
    } catch {
      // Silently handle
    }
  }, []);

  const setIcp = (value: ICPType) => {
    setIcpState(value);
    try {
      localStorage.setItem('selected-icp', value);
    } catch {
      // Silently handle
    }
  };

  return <ICPContext.Provider value={{ icp, setIcp }}>{children}</ICPContext.Provider>;
};

export const useICP = () => {
  const context = useContext(ICPContext);
  if (!context) {
    throw new Error('useICP must be used within ICPProvider');
  }
  return context;
};
