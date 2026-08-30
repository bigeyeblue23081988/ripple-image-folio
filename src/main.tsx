import { createRoot } from "react-dom/client";
import "@fontsource/open-sauce-one/400.css";
import "@fontsource/open-sauce-one/700.css";
import App from "./App.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(<App />);
