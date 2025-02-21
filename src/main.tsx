import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { DevTools } from "jotai-devtools";
import "jotai-devtools/styles.css";
import "./index.css";
import { Toaster } from "./components/ui/toaster.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
    <Toaster />
    {import.meta.env.DEV ? <DevTools /> : ""}
  </StrictMode>
);
