import styles from ".//SingIn.module.css";
import { Button } from "../../components/Button";
export const SignIn = () => {
    return (
        <div className={styles.divContainer}>
            <div className={styles.divImg}></div>
            <div className={styles.divForm}>
                <div className={styles.divText}>
                    <h1 className={styles.h1}>Sing up Information</h1>
                    <p className={styles.p}>
                        Already have an account?{" "}
                        <a className={styles.a}>Log in</a>
                    </p>
                </div>
                <div className={styles.divName}>
                    <div>
                        <label className={styles.labelName}>First name</label>
                        <input
                            type="text"
                            placeholder="Enter your first name"
                            className={styles.inputName}
                        />
                    </div>
                    <div>
                        <label className={styles.labelName}>Last name</label>
                        <input
                            type="text"
                            placeholder="Enter your last name"
                            className={styles.inputName}
                        />
                    </div>
                </div>

                <div className={styles.divContainerInput}>
                    <div>
                        <div>
                            <label className={styles.divLabel}>Email</label>
                            <input
                                type="text"
                                placeholder="Enter your email"
                                className={styles.divInput}
                            />
                        </div>
                        <div>
                            <label className={styles.divLabel}>
                                Job position
                            </label>
                            <input
                                type="text"
                                placeholder="Enter your job position (example:Project Manager)"
                                className={styles.divInput}
                            />
                        </div>
                        <div>
                            <label className={styles.divLabel}>Password</label>
                            <input
                                type="password"
                                placeholder="Enter your password"
                                className={styles.divInput}
                            />
                        </div>
                    </div>
                </div>
                <Button
                    color="blue"
                    className={styles.btnSingIn}
                    onClick={() => {}}
                >
                    Create an account
                </Button>

                <div className={styles.divSmall}>
                    <small className={styles.small}>or sing in with...</small>
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
        </div>
    );
};
