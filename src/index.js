import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";
import { CoursesProvider } from "./context/Courses";
import App from "./App";
import "./index.css";

const root = createRoot(document.getElementById("root"));
root.render(
  <CoursesProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </CoursesProvider>
);
