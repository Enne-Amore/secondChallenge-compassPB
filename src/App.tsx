import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { Toaster } from "react-hot-toast";
import "./index.css";
import { Kanban } from "./pages/Kanban";
import { LoginPage } from "./pages/LoginPage";
import { SigninPage } from "./pages/SigninPage";

export default function App() {
    return (
        <>
            <BrowserRouter>
                <Toaster />
                <Routes>
                    <Route path="/" element={<HomePage />} />

                    <Route path="/login" element={<LoginPage />} />

                    <Route path="/signin" element={<SigninPage />} />

                    <Route path="/kanban" element={<Kanban />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}
