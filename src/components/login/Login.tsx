import { Button } from "../button/Button";
import styles from "./Login.module.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useClerk } from "@clerk/clerk-react";

interface Erro {
    emailErro: boolean;
    passowdErro: boolean;
}

const validateEmail = (email: string): boolean => {
    const emailRegex = /^[\w-\\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return emailRegex.test(email);
};

const validatePassword = (password: string): boolean => {
    const passwordRegex =
        /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+[\]{};':"\\|,.<>/?`~\\-])[A-Za-z\d!@#$%^&*()_+[\]{};':"\\|,.<>/?`~\\-]{8,}$/;
    return passwordRegex.test(password);
};

export const Login = () => {
    const [email, setemail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const [erros, setErros] = useState<Erro>({
        emailErro: false,
        passowdErro: false,
    });

    const { openSignIn } = useClerk(); // Usando openSignIn para autenticação social
    const navigate = useNavigate();

    const clear = () => {
        setPassword("");
        setemail("");
        setErros({
            emailErro: false,
            passowdErro: false,
        });
    };

    const handleLogin = () => {
        if (!validateEmail(email) && !validatePassword(password)) {
            toast.error("Password and E-mail invalid!");
            setErros({ ...erros, emailErro: true });
        } else if (!validatePassword(password)) {
            toast.error("Password invalid!");
            setErros({ ...erros, passowdErro: true });
        } else if (!validateEmail(email)) {
            toast.error("E-mail invalid!");
        } else {
            toast.success("Login successful!");
            clear();
            setTimeout(() => {
                navigate("/kanban");
            }, 2000);
        }
    };

    const handleOAuthLogin = () => {
        openSignIn({
            redirectUrl: "/kanban", // Redireciona após o login
            options: {
                allowedSignInMethods: ["oauth_google", "oauth_facebook"],
            },
        });
    };

    return (
        <div className={styles.divContainer}>
            <form className={styles.divForm}>
                <div className={styles.divText}>
                    <h1 className={styles.h1}>Login Information</h1>
                    <p className={styles.p}>Enter your credentials</p>
                    <p className={styles.p}>
                        New here? Let's take you to
                        <Link to="/subscribe" className={styles.a}>
                            {" "}
                            sign up.
                        </Link>
                    </p>
                </div>

                <div className={styles.divContainerInput}>
                    <div>
                        <label className={styles.divLabel}>Email</label>
                        <input
                            type="email"
                            value={email}
                            placeholder="Enter your email"
                            className={`${styles.divInput} ${
                                erros.emailErro ? "bg-red-300" : ""
                            }`}
                            onChange={(e) => setemail(e.target.value)}
                        />
                    </div>

                    <div>
                        <label className={styles.divLabel}>Password</label>
                        <input
                            type="password"
                            value={password}
                            placeholder="Enter your password"
                            className={`${styles.divInput} ${
                                erros.passowdErro ? "border-red-400" : ""
                            }`}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    <Button
                        type="button"
                        color="blue"
                        className={styles.btnLogin}
                        onClick={handleLogin}
                    >
                        Login
                    </Button>

                    <div className={styles.divSmall}>
                        <small className={styles.small}>
                            or sign in with...
                        </small>
                    </div>

                    <div className={styles.divBtn}>
                        <div
                            className={styles.btnFace}
                            onClick={() => handleOAuthLogin()}
                        >
                            <img
                                src="src/assets/facebook-logo.png"
                                alt="Facebook login"
                            />
                        </div>

                        <div
                            className={styles.btnGmail}
                            onClick={() => handleOAuthLogin()}
                        >
                            <img
                                src="src/assets/google-icon.png"
                                alt="Google login"
                            />
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};
