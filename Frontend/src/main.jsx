import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';  // Correct named imports
import 'react-toastify/dist/ReactToastify.css'; // Correct import for the CSS

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ToastContainer /> 
      <App />
    </BrowserRouter>
  </StrictMode>
);
