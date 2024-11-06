import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { Login } from "./pages/Login";
import "./index.css";
import { SignIn } from "./pages/SingIn/SignIn";
import { Kanban } from "./pages/Kanban";

export default function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage />} />

                    <Route path="/login" element={<Login />} />

                    <Route path="/signIn" element={<SignIn />} />

                    <Route path="/kanban" element={<Kanban />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}
