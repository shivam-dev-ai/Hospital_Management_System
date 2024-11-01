import { createContext, useState, StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';

export const context = createContext({ isAuthenticated: false });

const AppWrapper = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState({});

  return (
    <context.Provider value={{ isAuthenticated, setIsAuthenticated, user, setUser }}>
      <App />
    </context.Provider>
  );
};

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppWrapper />
  </StrictMode>
);