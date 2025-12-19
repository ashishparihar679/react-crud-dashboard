import { createContext, useState } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(
    localStorage.getItem("login") === "true"
  );

  const login = () => {
    localStorage.setItem("login", "true");
    setIsAuth(true);
  };

  const logout = () => {
    localStorage.removeItem("login");
    setIsAuth(false);
  };

  return (
    <AuthContext.Provider value={{ isAuth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
