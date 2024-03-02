import React, { createContext } from "react";
import useFunction from "../function/useFunction.js";
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const allContexts = useFunction();
  return <AuthContext.Provider value={allContexts}>{children}</AuthContext.Provider>;
};
export default AuthProvider;
