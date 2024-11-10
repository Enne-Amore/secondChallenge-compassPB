import { Link } from "react-router-dom";

const Erro403 = () => {
    return (
        <div>
            <div className="flex flex-col justify-start items-center tablet:flex-row  tablet:justify-center desktop:flex-row 
            desktop:items-center desktop:w-845 desktop:h-439 lg:relative ">
                <div>
                    <img
                        src="src/assets/blocking-illustration.png"
                        className=" desktop:w-455 desktop:h-439"
                    ></img>
                </div>
                <div>
                    <div className="flex flex-col text-center justify-center items-center tablet:text-start tablet:justify-start tablet:items-start   ">
                        <h1 className="text-86 text-black tablet:ml-11 desktop:ml-0">403</h1>
                        <p className="text-18 text-black text-center px-16 tablet:text-24 tablet:text-start desktop:w-[440px] desktop:text-24 desktop:text-left desktop:px-0">
                            Nothing to see here... yet! To see this content, you
                            need to{" "}
                            <Link
                                to="/login"
                                className="text-blue-46 underline"
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