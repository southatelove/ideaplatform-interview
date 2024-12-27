import "src/app/styles/index.scss";

import { createRoot } from "react-dom/client";
import { StoreProvider } from "./app/providers/StoreProvider";
import App from "./app/App";

createRoot(document.getElementById("root")!).render(
  <StoreProvider>
    <App />
  </StoreProvider>
);
