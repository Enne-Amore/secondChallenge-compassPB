import { HomePage } from "./pages/HomePage";
import { Toaster } from "react-hot-toast";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import { Routes, Route } from "react-router-dom";
import { LoginPage } from "./pages/LoginPage";
import { SigninPage } from "./pages/SigninPage";
import { Kanban } from "./pages/Kanban";

export default function App() {
    return (
        <BrowserRouter>
            <Toaster />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/signin" element={<SigninPage />} />
                <Route path="/kanban" element={<Kanban />} />
            </Routes>
        </BrowserRouter>
    );
}
