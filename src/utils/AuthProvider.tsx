import { ComponentProps, createContext, useEffect, useState } from 'react';

const AuthContext = createContext({});

const AuthProvider = ({ children }: ComponentProps<any>) => {
  const [auth, setAuth] = useState(() => {
    // Try to retrieve data from localStorage on component mount
    const storedData = localStorage.getItem('vendymaUser');
    return storedData ? JSON.parse(storedData) : null;
  });

  useEffect(() => {
    // Save data to localStorage whenever it changes
    localStorage.setItem('myContextData', JSON.stringify(auth));
  }, [auth]);
  return <AuthContext.Provider value={{ auth, setAuth }}>{children}</AuthContext.Provider>;
};

export { AuthContext, AuthProvider };
