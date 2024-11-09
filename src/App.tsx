import { HomePage } from "./pages/HomePage";
import { Routes, Route, Navigate } from "react-router-dom";
import { LoginPage } from "./pages/LoginPage";
import { SubscribePage } from "./pages/SubscribePage";
import { Kanban } from "./pages/Kanban";
import Settings from "./pages/Settings";

import "./index.css";
import { Toaster } from "react-hot-toast";
import { useUser } from "@clerk/clerk-react";

export default function App() {
    const { isSignedIn } = useUser();

    return (
        <>
            <Toaster />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route
                    path="/login"
                    element={
                        isSignedIn ? (
                            <Navigate to="/kanban" replace />
                        ) : (
                            <LoginPage />
                        )
                    }
                />
                <Route
                    path="/subscribe"
                    element={
                        isSignedIn ? (
                            <Navigate to="/kanban" replace />
                        ) : (
                            <SubscribePage />
                        )
                    }
                />
                <Route path="/kanban" element={<Kanban />} />
                <Route path="/setting" element={<Settings />} />
            </Routes>
        </>
    );
}
