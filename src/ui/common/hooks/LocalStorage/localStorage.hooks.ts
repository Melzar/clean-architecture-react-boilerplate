import { useState } from 'react';

export const useLocalStorage = (key: string, initialValue: string) => {
  const [localStoreValue, setLocalStoreValue] = useState(initialValue);

  const setValue = (value: string) => {
    window.localStorage.setItem(key, value);
    setLocalStoreValue(value);
  };

  return [localStoreValue, setValue];
};
