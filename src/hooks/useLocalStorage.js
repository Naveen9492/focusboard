import { useState, useEffect } from "react";

const useLocalStorage = (key, initialValue) => {
  const [value, setValue] = useState(() => {
    try {
      const savedValue = localStorage.getItem(key);

      if (savedValue !== null) {
        const parsedValue = JSON.parse(savedValue);

        if (Array.isArray(parsedValue)) {
          return parsedValue;
        }
      }

      return initialValue;
    } catch (error) {
      console.error("Error reading localStorage:", error);
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error("Error saving localStorage:", error);
    }
  }, [key, value]);

  return [value, setValue];
};

export default useLocalStorage;
