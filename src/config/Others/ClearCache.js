import { useState, useEffect } from 'react';

export default function ClearCache() {
  const [cacheCleared, setCacheCleared] = useState(false);

  useEffect(() => {
    const lastClearDate = localStorage.getItem('lastClearDate');
    const currentDate = new Date();

    if (!cacheCleared) {
      if (!lastClearDate || isThreeDaysAgo(new Date(lastClearDate), currentDate)) {
        clearCache();
        localStorage.clear();
        localStorage.setItem('lastClearDate', currentDate.toISOString());
        setCacheCleared(true);

        window.location.reload();
      }
    }
  }, [cacheCleared]);

  const clearCache = () => {
    if ('caches' in window) {
      caches.keys().then(function(cacheNames) {
        cacheNames.forEach(function(cacheName) {
          caches.delete(cacheName);
        });
      });
    }
  };

  const isThreeDaysAgo = (lastDate, currentDate) => {
    const threeDaysInMillis = 3 * 24 * 60 * 60 * 1000; // 3 días en milisegundos
    return currentDate - lastDate >= threeDaysInMillis;
  };

  return null;
}

