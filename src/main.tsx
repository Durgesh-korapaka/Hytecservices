import { StrictMode } from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "@fontsource-variable/plus-jakarta-sans";
import "@fontsource/noto-sans-telugu/telugu-500.css";
import "@fontsource/noto-sans-telugu/telugu-700.css";
import "./index.css";
import App from "./App";
import { installLeadTracking } from "./lib/leadTracking";

const container = document.getElementById("root")!;
const app = (
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);

// Hydrate only when the prerendered markup is for this exact route. The dev
// server (empty shell) or a host's SPA fallback get a fresh client render.
const here = window.location.pathname.replace(/\/+$/, "") || "/";
if (container.firstElementChild && container.dataset.route === here) hydrateRoot(container, app);
else createRoot(container).render(app);

installLeadTracking();
