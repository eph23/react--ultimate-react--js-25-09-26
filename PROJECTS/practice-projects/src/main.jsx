import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

/* ANCHOR: FAQ ACCORDION */
import "./FAQ/index.css";
import App from "./FAQ/FAQ";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <App />
    </StrictMode>,
);
