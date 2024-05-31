"use client";

import { useEffect, useState } from 'react';

export function useIsMobile() {
  const [isMobileScreen, setIsMobileScreen] = useState(false);

  const handleResize = () => {
    setIsMobileScreen(window.innerWidth <= 1000);
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsMobileScreen(window.innerWidth <= 1000);

      const handleResize = () => {
        setIsMobileScreen(window.innerWidth <= 1000);
      };

      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, []);

  return isMobileScreen;
}

export function useIsMobileNew() {
  const isWindowDefined = typeof window !== 'undefined';

  const [isMobileScreen, setIsMobileScreen] = useState(isWindowDefined && window.innerWidth <= 800);
  

  const handleResize = () => {
    setIsMobileScreen(window.innerWidth <= 800);
    setIsMobileScreen(isWindowDefined && window.innerWidth <= 800);

  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return isMobileScreen;
}
