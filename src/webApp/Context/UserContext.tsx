// src/context/UserContext.tsx
import React, { createContext, useContext, useState, ReactNode } from 'react';

type User = {
  userId: string;
  preferred_username: string;
  email: string;
  signedIn_withAmplify: boolean;
  signedIn_withGoogle: boolean;
  signedIn_withApple: boolean;
  profileImage: string;
};

type UserContextType = {
  user: User;
  setUser: (user: User) => void;
};

// Default user state
const defaultUser: User = {
  userId: "",
  preferred_username: "",
  email: "",
  signedIn_withAmplify: false,
  signedIn_withGoogle: false,
  signedIn_withApple: false,
  profileImage: ""
};

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User>(defaultUser);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = (): UserContextType => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUserContext must be used within a UserProvider");
  }
  return context;
};
