import { createRoot } from "react-dom/client";
import App from "./App";
import { GameErrorBoundary } from "./components/ErrorBoundary";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <GameErrorBoundary>
    <App />
  </GameErrorBoundary>
);
