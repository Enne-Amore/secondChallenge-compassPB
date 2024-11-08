import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import { Subscribe } from "../components/subscribe";

export const SubscribePage = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <Subscribe />
            <Footer />
        </div>
    );
};
