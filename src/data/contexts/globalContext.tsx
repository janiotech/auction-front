"use client";

import { createContext, useEffect, useState } from "react";

interface INITIAL_STATE {
  credits: number;
  setCredits: (text: number) => void;
}

export const AppContext = createContext({} as INITIAL_STATE);

export const AppStorage = ({ children }: any) => {
  const [credits, setCredits] = useState(0);

  return (
    <AppContext.Provider
      value={{
        credits,
        setCredits,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
