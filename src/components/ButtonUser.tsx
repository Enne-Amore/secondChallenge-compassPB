import { useClerk, useUser } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";

const ButtonUser = () => {
    const { user, isSignedIn } = useUser();
    const { signOut } = useClerk();

    const navigate = useNavigate();

    const handleClick = () => {
        if (isSignedIn) {
            signOut();
        } else {
            navigate("/login");
        }
    };

    return (
        <button
            onClick={handleClick}
            className={`  display: "flex",
        alignItems: "center",
        padding: "10px",
        backgroundColor: "#007BFF",
        color: "white",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer`}
        >
            {isSignedIn && user?.imageUrl ? (
                <img
                    src={user.imageUrl}
                    alt="Foto do usuário"
                    style={{
                        width: "30px",
                        height: "30px",
                        borderRadius: "50%",
                        marginRight: "10px",
                    }}
                />
            ) : null}
            {isSignedIn ? "Minha Conta" : "Login"}
        </button>
    );
};

export default ButtonUser;
