import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Инициализация Telegram WebApp
declare global {
  interface Window {
    Telegram?: {
      WebApp: {
        ready: () => void;
        expand: () => void;
        themeParams: Record<string, string>;
        initDataUnsafe: { user?: { id?: number; username?: string; first_name?: string; last_name?: string } };
      };
    };
  }
}

if (window.Telegram?.WebApp) {
  window.Telegram.WebApp.ready();
  window.Telegram.WebApp.expand();
}

createRoot(document.getElementById("root")!).render(<App />);
