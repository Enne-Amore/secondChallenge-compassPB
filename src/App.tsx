import { HomePage } from "./pages/HomePage";
import { Routes, Route } from "react-router-dom";
import { LoginPage } from "./pages/LoginPage";
import { SigninPage } from "./pages/SigninPage";
import { Kanban } from "./pages/Kanban";
import "./index.css";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/subscribe" element={<SigninPage />} />
      <Route path="/kanban" element={<Kanban />} />
    </Routes>
  );
}
