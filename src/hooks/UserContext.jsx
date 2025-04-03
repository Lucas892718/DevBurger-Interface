import React, { createContext, useContext, useState, useEffect } from 'react';

const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState({});

  const putUserData = (userInfo) => {
    setUserInfo(userInfo);

    localStorage.setItem('devburger:UserInfo', JSON.stringify(userInfo));
  };

  const logout = () => {
    setUserInfo({});

    localStorage.removeItem('devburger:UserInfo');
  };

  useEffect(() => {
    const UserLocalStorageExists = localStorage.getItem('devburger:UserInfo');

    if (UserLocalStorageExists) {
      {
        setUserInfo(JSON.parse(UserLocalStorageExists));
      }
    }
  }, []);
  return (
    <UserContext.Provider value={{ userInfo, putUserData, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};
