import { createContext, useContext, ReactNode, useState } from 'react';

interface MyContextProps {
  children: ReactNode;
}

interface MyContextValue {
  clipboard: boolean;
  updateClipboard: (newData: boolean) => void;
}

const MyContext = createContext<MyContextValue | undefined>(undefined);

export const MyContextProvider: React.FC<MyContextProps> = ({ children }) => {
  const [clipboard, setMyData] = useState(false);

  const updateClipboard = (newData: boolean) => {
    setMyData(newData);
  };

  return (
    <MyContext.Provider value={{ clipboard, updateClipboard }}>
      {children}
    </MyContext.Provider>
  );
};

export const useMyContext = (): MyContextValue => {
  const context = useContext(MyContext);
  if (!context) {
    throw new Error('useMyContext must be used within a MyContextProvider');
  }
  return context;
};
