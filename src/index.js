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
      <Auth>
        <App />
      </Auth>
    </Provider>
  </BrowserRouter>
);
