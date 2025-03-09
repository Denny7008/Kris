
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UserRoutes from "./Routes/UserRoutes";
import AdminRoutes from "./Routes/AdminRoutes";
import NotFound from "./Components/NotFound";
import Login from "./Components/Login";




function App() {
  return (
    <>
      <ToastContainer position="bottom-right" />
      <Routes>
      <Route path="/" element={<Login />} />
        <Route path="/user/*" element={<UserRoutes />} /> 
        <Route path="/admin/*" element={<AdminRoutes />} /> 
        <Route path="*" element={<NotFound />} /> 
      </Routes>
    </>
  );
}

export default App;