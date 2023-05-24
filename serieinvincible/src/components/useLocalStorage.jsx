import { useState, useEffect } from 'react';

const useLocalStorage = (key, defaultValue) => {
  const [value, setValue] = useState(() => {
    const storedValue = localStorage.getItem(key);
    return storedValue !== null ? JSON.parse(storedValue) : defaultValue;
  });

  useEffect(() => {
    if (value !== '') {
      localStorage.setItem(key, JSON.stringify(value));
    }
  }, [key, value]);

  const clearLocalStorage = () => {
    localStorage.clear();
  };

  return [value, setValue, clearLocalStorage];
};

export default useLocalStorage;