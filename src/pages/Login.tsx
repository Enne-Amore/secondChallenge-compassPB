import styles from "../components/Login.module.css";
export const Login = () => {
    return (
        <div className={styles.divContainer}>
            <div className={styles.divForm}>
                <form>
                    <div className={styles.divText}>
                        <h1 className={styles.h1}>Login Information</h1>
                        <p className="text-15px text-black-51">
                            Enter your credentials
                        </p>
                        <p>
                            New here? Let's take you to <a>sing up.</a>
                        </p>
                    </div>
                    <div>
                        <div>
                            <label>Email</label>
                            <input type="text" placeholder="Enter your email" />
                        </div>
                        <div>
                            <label>Password</label>
                            <input
                                type="text"
                                placeholder="Enter your password"
                            />
                        </div>
                        <button />
                        <small>or sing in with...</small>
                        <div>
                            <button>facebook</button>
                            <button>gmail</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};
