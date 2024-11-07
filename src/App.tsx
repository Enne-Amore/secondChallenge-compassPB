import { HomePage } from "./pages/HomePage";

import "./index.css";
import { Routes, Route } from "react-router-dom";
import { LoginPage } from "./pages/LoginPage";
import { SigninPage } from "./pages/SigninPage";


export default function App() {
    return (
    <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/subscribe" element={<SigninPage />} />
    </Routes>
    );
}
