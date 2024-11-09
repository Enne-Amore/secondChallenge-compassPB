import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import Erro404 from "../components/erro/Erro404";
const Erro404Page = () => {
    return (
        <div className="min-h-screen flex flex-col justify-between">
            <Header />
            <Erro404 />
            <Footer />
        </div>
    );
};

export default Erro404Page;
