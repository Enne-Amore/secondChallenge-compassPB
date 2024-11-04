export const Login = () => {
    return (
        <div>
            <div>
                <img src="project-manager-02/src/assets/login-illustration.png" />
            </div>
            <form>
                <div>
                    <h1>Login Information</h1>
                    <p>Enter your credentials</p>
                    <p>
                        New here? Let's take you to <a>sing up.</a>
                    </p>
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
                </div>
            </form>
        </div>
    );
};
