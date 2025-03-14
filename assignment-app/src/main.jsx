import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import DataProvider from "./context/DataProvider.jsx";
import ErrorBoundary from "./components/ErrorBoundary.jsx"

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ErrorBoundary>
      <DataProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </DataProvider>
    </ErrorBoundary>
  </StrictMode>
);
