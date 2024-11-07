import { Link } from "react-router-dom";
import { Button } from "../button/Button";
import styles from "./Login.module.css";

export const Login = () => {
    return (
        <div className={styles.divContainer}>
            <form className={styles.divForm}>
                <div className={styles.divText}>
                    <h1 className={styles.h1}>Login Information</h1>
                    <p className={styles.p}>Enter your credentials</p>
                    <p className={styles.p}>
                        New here? Let's take you to
                        <Link to='/subscribe' className={styles.a}> sing up.</Link>
                    </p>
                </div>
                <div className={styles.divContainerInput}>
                    <div>
                        <label className={styles.divLabel}>Email</label>
                        <input
                            type="text"
                            placeholder="Enter your email"
                            className={styles.divInput}
                        />
                    </div>
                    <div>
                        <label className={styles.divLabel}>Password</label>
                        <input
                            type="text"
                            placeholder="Enter your password"
                            className={styles.divInput}
                        />
                    </div>
                    <Button
                        color="blue"
                        className={styles.btnLogin}
                        onClick={() => {}}
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
