import { createContext } from "react";

export const NewsContext = createContext();

export const NewsContextProvider = ({ children }) => {
  return <NewsContext.Provider value={{}}>{children}</NewsContext.Provider>;
};
