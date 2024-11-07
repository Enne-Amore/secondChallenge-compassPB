import Header from "../components/header/Header";
import { SignIn } from "../components/signin/SignIn";


export const SigninPage = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <SignIn />
        </div>
    );
};
