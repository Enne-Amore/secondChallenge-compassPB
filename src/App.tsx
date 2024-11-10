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

import Erro404Page from "./pages/Erro404Page";
import Erro403Page from "./pages/Erro403Page";
import ProtectedRoute from "./components/ProtectedRoute";

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

                <Route path="*" element={<Erro404Page />} />
                <Route path="/erro403" element={<Erro403Page />} />
            </Routes>
        </>
    );
}
