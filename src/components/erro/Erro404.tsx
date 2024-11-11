import { Link } from "react-router-dom";

const Erro404 = () => {
    return (
        <div>
            <div className="  flex flex-col justify-start items-center md:flex-row desktopi:justify-center desktopi:gap-[61px]">
                <div>
                    <img
                        src="src/assets/error-illustration.png"
                        className="w-202.91 h-189 md:w-334.59 md:h-439 lg:w-455 lg:h-439"
                    ></img>
                </div>
                <div>
                    <div className="flex flex-col justify-center items-center desktopi:max-w-[440px] desktopi:items-start ">
                        <h1 className="text-86 text-black desktopi:px-0 ">404</h1>
                        <p className="text-18 text-black text-center px-16 desktopi:text-24 desktopi:px-0 desktopi:text-start">
                            Oops! Nothing to see here, just a lot Kanban task.
                        </p>
                    </div>
                    <div className=" pt-7  flex justify-center items-center md:justify-end md:h-full md:mr-20">
                        <Link to="/" className="text-blue-46 underline font-bold">
                            Go back to home
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Erro404;