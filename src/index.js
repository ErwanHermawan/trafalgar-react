import { StrictMode } from "react";
import ReactDOM from "react-dom/client";

// styles
import "core/style/app.scss";

import App from "./presentation/container/app";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
