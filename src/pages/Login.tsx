import styles from "../components/Login.module.css";
export const Login = () => {
    return (
        <div className="abolute flex items-center justify-center">
            <div className={styles.divContainer}></div>
            <div className={styles.divForm}>
                <form>
                    <div className={styles.divText}>
                        <h1 className={styles.h1}>Login Information</h1>
                        <p className={styles.p}>Enter your credentials</p>
                        <p className={styles.p}>
                            New here? Let's take you to{" "}
                            <a className={styles.a}>sing up.</a>
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
                        <button className={styles.btnLogin}>login</button>
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
        </div>
    );
};
