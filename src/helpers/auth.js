import { createContext, useContext, useState } from "react";
import { useCourses } from "../hooks/useCourses";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const coursesData = useCourses()

  const logIn = (user) => {
    setUser(user);
  };
  const logOut = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, logIn, logOut, coursesData }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
