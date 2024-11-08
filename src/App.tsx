
import { HomePage } from "./pages/HomePage";
import { Routes, Route } from "react-router-dom";
import { LoginPage } from "./pages/LoginPage";
import { SubscribePage } from "./pages/SubscribePage";
import { Kanban } from "./pages/Kanban";

import "./index.css";
import { Toaster } from "react-hot-toast";


export default function App() {
    return (
        <>
            <Toaster />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/subscribe" element={<SubscribePage />} />
                <Route path="/kanban" element={<Kanban />} />
            </Routes>
        </>
    );

}