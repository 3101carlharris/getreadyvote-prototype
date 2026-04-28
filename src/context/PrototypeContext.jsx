import { createContext, useContext, useState } from 'react';

const PrototypeContext = createContext(null);

export function PrototypeProvider({ children }) {
  const [answers, setAnswers] = useState({
    citizen: null,
    incarceration: null,
    name: '',
    dob: '',
    address: '',
    documents: [],
    registrationMethod: null,
    registrationPath: null,
  });

  function setAnswer(key, value) {
    setAnswers(prev => ({ ...prev, [key]: value }));
  }

  return (
    <PrototypeContext.Provider value={{ answers, setAnswer }}>
      {children}
    </PrototypeContext.Provider>
  );
}

export function usePrototype() {
  return useContext(PrototypeContext);
}
