import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import Erro403 from "../components/erro/Erro403";
const Erro403Page = () => {
    return (
        <div className="min-h-screen flex flex-col justify-between">
            <Header />
            <Erro403 />
            <Footer />
        </div>
    );
};

export default Erro403Page;