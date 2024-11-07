import Header from "../components/header/Header";
import { Login } from "../components/login";

export const LoginPage = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />

            <Login />
        </div>
    );
};
