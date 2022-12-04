import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";
import { AuthProvider } from "./helpers/auth";
import App from "./App";
import "./index.css";

const root = createRoot(document.getElementById("root"));
root.render(
  <AuthProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </AuthProvider>
);
