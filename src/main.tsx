import { createRoot } from "react-dom/client";
import App from "./app/App";

import "./app/styles/globals.scss";
import "./shared/config/i18n";

createRoot(document.getElementById("root")!).render(<App />);
