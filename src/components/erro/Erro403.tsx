import { Link } from "react-router-dom";

const Erro403 = () => {
    return (
        <div>
            <div className="flex flex-col justify-start items-center tablet:flex-row  tablet:justify-center desktop:flex-row 
            desktop:items-center desktop:w-845 desktop:h-439 lg:relative desktopi:gap-[38px]">
                <div>
                    <img
                        src="src/assets/blocking-illustration.png"
                        className=" desktop:w-455 desktop:h-439"
                    ></img>
                </div>
                    <div className="flex flex-col text-center justify-center items-center tablet:text-start 
                                    tablet:justify-start tablet:items-start  desktop:text-start ">
                        <h1 className="text-86 text-black tablet:ml-11 desktopi:ml-0 ">403</h1>
                        <p className="text-18 text-black text-center px-16 tablet:text-24 tablet:text-start 
                                      desktop:text-24 desktop:text-left desktopi:px-0 desktopi:max-w-[440px]">
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
    );
};

export default Erro403;