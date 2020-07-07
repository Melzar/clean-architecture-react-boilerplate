import { useState } from 'react';

export const useLocalStorage = <S>(key: string) => {
  const [localStoreValue, setLocalStoreValue] = useState<S>();

  const setValue = (value: S) => {
    window.localStorage.setItem(key, String(value));
    setLocalStoreValue(value);
  };

  return [localStoreValue, setValue];
};
