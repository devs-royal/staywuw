import { useState, useCallback } from 'react';

export function useNotification() {
  const [notification, setNotification] = useState(null);

  const showNotification = useCallback((type, title, message, duration = 5000) => {
    setNotification({ type, title, message, duration, visible: true });
  }, []);

  const hideNotification = useCallback(() => {
    setNotification((prev) => prev && { ...prev, visible: false });
  }, []);

  return { notification, showNotification, hideNotification };
}
