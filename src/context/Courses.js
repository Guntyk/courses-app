import { createContext, useContext, useState } from "react";
import { useCourses } from "../hooks/useCourses";

const CoursesContext = createContext(null);

export const CoursesProvider = ({ children }) => {
  const coursesData = useCourses()
  
  return (
    <CoursesContext.Provider value={coursesData}>
      {children}
    </CoursesContext.Provider>
  );
};

export const useCoursesContext = () => {
  return useContext(CoursesContext);
};
