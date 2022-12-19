import { CoursesProvider } from "./context/Courses";
import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { Auth } from "./hoc/Auth";
import App from "./App";
import "./index.css";

const root = createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <CoursesProvider>
        <Auth>
          <App />
        </Auth>
      </CoursesProvider>
    </Provider>
  </BrowserRouter>
);
