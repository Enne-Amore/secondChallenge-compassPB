// App.js
import { HomePage } from "./pages/HomePage";
import { Routes, Route, Navigate } from "react-router-dom";
import { LoginPage } from "./pages/LoginPage";
import { SubscribePage } from "./pages/SubscribePage";
import { Kanban } from "./pages/Kanban";
import Settings from "./pages/Settings";

import "./index.css";
import { Toaster } from "react-hot-toast";
import { useUser } from "@clerk/clerk-react";
import NotFound from "./components/NotFound";
import ProtectedRoute from "./components/ProtectedRoute";
import Forbidden from "./components/Forbidden";

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
                
                {/* Rotas protegidas */}
                <Route
                    path="/kanban"
                    element={
                        <ProtectedRoute>
                            <Kanban />
                        </ProtectedRoute>
                    }
                />
                
                <Route
                    path="/setting"
                    element={
                        <ProtectedRoute>
                            <Settings />
                        </ProtectedRoute>
                    }
                />

                <Route path="*" element={<NotFound />} />
                <Route path="/403" element={<Forbidden />} />
            </Routes>
        </>
    );
}
