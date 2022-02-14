import React, { createContext, useState } from 'react';

interface IContext {
  name: string;
  setName(value: string): void,
  email: string;
  setEmail(value: string): void;
  password: string;
  setPassword(value: string): void;
}

export const UserContextData = createContext({} as IContext);

const UserContext = ({ children }: { children: React.ReactNode }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const user = {
    name,
    setName,
    email,
    setEmail,
    password,
    setPassword
  }

  return <UserContextData.Provider
    value={user}
  >
    {children}
  </UserContextData.Provider>;
};

export default UserContext;
