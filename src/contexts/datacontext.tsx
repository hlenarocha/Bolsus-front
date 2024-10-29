import React from "react";
import { Item } from "../types/Item";

interface DataContextType {
  list: Item[];
  setList: React.Dispatch<React.SetStateAction<Item[]>>;
}

export const dataContext = React.createContext<DataContextType | undefined>(undefined);

export const dataProvider: React.FC<{children: React.ReactNode}> = ({children}) => {
  const [list, setList] = React.useState<Item[]>([]);
  return (
    <dataContext.Provider value={{ list, setList }}>
      {children}
    </dataContext.Provider>
  );
}