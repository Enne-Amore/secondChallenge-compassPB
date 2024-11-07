import { Button } from "../button/Button";
import styles from "./Login.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

interface Erro {
    emailErro: boolean;
    passowdErro: boolean;
}

const validarEmail = (email: string): boolean => {
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return emailRegex.test(email);
};
const validatePassword = (password: string): boolean => {
    const passwordRegex =
        /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+[\]{};':"\\|,.<>/?`~\-])[A-Za-z\d!@#$%^&*()_+[\]{};':"\\|,.<>/?`~\-]{8,}$/;
    return passwordRegex.test(password);
};

export const Login = () => {
    const [email, setemail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [erros, setErros] = useState<Erro>({
        emailErro: false,
        passowdErro: false,
    });

    const navegate = useNavigate();

    const clear = () => {
        setPassword("");
        setemail("");
        erros.emailErro = false;
        erros.passowdErro = false;
    };

    const handleLogin = () => {
        if (!validarEmail(email)) {
            toast.error("E-mail invalid!");
            setErros({ ...erros, emailErro: true });
        } else if (!validatePassword(password)) {
            toast.error("Passwod invalid!");
            setErros({ ...erros, passowdErro: true });
        } else if (!validarEmail(email) && !validatePassword(password)) {
            toast.error("Password and E-mail invalid!");
        } else {
            toast.success("login successful !");
            clear();
            setTimeout(() => {
                navegate("/signin");
            }, 2000);
        }
    };
    console.log(erros);
    return (
        <div className={styles.divContainer}>
            <form className={styles.divForm}>
                <div className={styles.divText}>
                    <h1 className={styles.h1}>Login Information</h1>
                    <p className={styles.p}>Enter your credentials</p>
                    <p className={styles.p}>
                        New here? Let's take you to
                        <a className={styles.a}> sing up.</a>
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
                                erros.passowdErro
                                    ? "border-spacing-2 border-red-400"
                                    : ""
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
                            or sing in with...
                        </small>
                    </div>

                    <div className={styles.divBtn}>
                        <button className={styles.btnFace}>
                            <img src="src/assets/facebook-logo.png" />
                        </button>
                        <button className={styles.btnGmail}>
                            <img src="src/assets/google-icon.png" />
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};
