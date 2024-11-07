import Header from "../components/header/Header";
import { SignIn } from "../components/signin";

export const SigninPage = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <SignIn />
        </div>
    );
};
