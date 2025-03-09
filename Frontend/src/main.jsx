import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
 // Correct import for the CSS

createRoot(document.getElementById("root")).render(
  <>
   {/* <StrictMode> */}
  <ToastContainer/>
    <BrowserRouter>
      <App />
    </BrowserRouter>
   {/* </StrictMode> */}
  </>
);