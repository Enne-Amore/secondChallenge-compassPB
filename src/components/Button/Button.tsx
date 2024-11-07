import { ReactNode } from "react";

interface ButtonProps {
    full?: boolean;
    color: "blue" | "white" | "green";
    children: ReactNode;
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
    className?: string;
}

const bgColor = {
    blue: "bg-blue-750",
    white: "bg-white",
    green: "bg-green-22",
};

const textColor = {
    blue: "text-white",
    white: "text-blue-850",
    green: "text-white",
};

export const Button = ({
    full,
    color,
    children,
    onClick,
    className,
}: ButtonProps) => {
    const classNameList = [
        "borde-none rounded-lg flex justify-center items-center p-3",
        bgColor[color],
        textColor[color],
    ];

    if (full) {
        classNameList.push("w-full");
    }
    if (className) {
        classNameList.push(className);
    }

    return (
        <button onClick={onClick} className={classNameList.join(" ")}>
            {children}
        </button>
    );
};
