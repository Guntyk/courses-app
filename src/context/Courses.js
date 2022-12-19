import { createContext, useContext } from "react";
import { useCourses } from "../hooks/useCourses";
import { useAuthors } from "../hooks/useAuthors";

const CoursesContext = createContext(null);

export const CoursesProvider = ({ children }) => {
  const coursesData = useCourses();
  const authorsData = useAuthors();

  return (
    <CoursesContext.Provider value={{coursesData}}>
      {children}
    </CoursesContext.Provider>
  );
};

export const useCoursesContext = () => {
  return useContext(CoursesContext);
};
