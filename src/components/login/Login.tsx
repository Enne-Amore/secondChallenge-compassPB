import { Button } from "../button/Button";
import styles from "./Login.module.css";
import { useState } from "react";

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

    const handleLogin = () => {
        if (!validarEmail(email)) {
            alert("emai invalido");
        } else if (!validatePassword(password)) {
            alert("senha invalida");
        } else {
            alert("login realizado");
        }
    };

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
                            className={styles.divInput}
                            onChange={(e) => setemail(e.target.value)}
                        />
                    </div>

                    <div>
                        <label className={styles.divLabel}>Password</label>
                        <input
                            type="password"
                            value={password}
                            placeholder="Enter your password"
                            className={styles.divInput}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    <Button
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
