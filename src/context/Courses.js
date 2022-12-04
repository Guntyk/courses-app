import { createContext, useContext, useState } from "react";
import { useCourses } from "../hooks/useCourses";

const CoursesContext = createContext(null);

export const CoursesProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const coursesData = useCourses()

  const logIn = (user) => {
    setUser(user);
  };
  const logOut = () => {
    setUser(null);
  };

  return (
    <CoursesContext.Provider value={{ user, logIn, logOut, coursesData }}>
      {children}
    </CoursesContext.Provider>
  );
};

export const useCoursesContext = () => {
  return useContext(CoursesContext);
};
