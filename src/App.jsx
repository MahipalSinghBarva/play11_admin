import "./App.css";
import { BrowserRouter } from "react-router-dom";
import AppLayout from "./routes/AppLayout";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <BrowserRouter>
      <AppLayout />
      <ToastContainer position="top-center" theme="dark" />
    </BrowserRouter>
  );
}

export default App;
