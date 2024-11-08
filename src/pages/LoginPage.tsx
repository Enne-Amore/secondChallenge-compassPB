import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import { Login } from "../components/login/Login";

export const LoginPage = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <Login />
            <Footer />
        </div>
    );
};
