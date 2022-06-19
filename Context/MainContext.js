import React, { useState, createContext } from "react";

export const MainContext = createContext();

function ContextProvider({ children }) {
  const [history, setHistory] = useState(["banana"]);
  const values = { history, setHistory };
  return <MainContext.Provider value={values}>{children}</MainContext.Provider>;
}

export default ContextProvider;
