import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

/* ANCHOR: FAQ ACCORDION */
/* import "./FAQ/index.css";
import App from "./FAQ/FAQ"; */

/* ANCHOR: PROFILE CARD */
import "./Profile-card-v1/index.css";
import App from "./Profile-card-v1/profile-card";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <App />
    </StrictMode>,
);
