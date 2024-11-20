import { createContext, useState } from "react";

const Context = createContext<any>("");

export const ContextProvider = ({ children }: any) => {
  const [isClose, setIsClose] = useState(false);

  return (
    <Context.Provider value={{ isClose, setIsClose }}>
      {children}
    </Context.Provider>
  );
};

export default Context;
