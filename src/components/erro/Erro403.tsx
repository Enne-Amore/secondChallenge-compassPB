import { Link } from "react-router-dom";

const Erro403 = () => {
    return (
        <div>
            <div className="  flex flex-col justify-start items-center md:flex-row  md:justify-center lg:flex-row lg:items-center lg:justify-end lg:w-845 lg:h-439 lg:relative lg:left-96">
                <div>
                    <img
                        src="src/assets/blocking-illustration.png"
                        className="w-202.91 h-189 md:w-323.13 md:h-367 lg:w-455 lg:h-439"
                    ></img>
                </div>
                <div>
                    <div className="flex flex-col text-center justify-center items-center md:text-start md:justify-start md:items-start   ">
                        <h1 className="text-86 text-black md:ml-11">403</h1>
                        <p className="text-18 text-black text-center px-16 md:text-24 md:text-start ">
                            Nothing to see here... yet! To see this content, you
                            need to{" "}
                            <Link
                                to="/login"
                                className="text-blue-46 underline font-bold"
                            >
                                log in.
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Erro403;