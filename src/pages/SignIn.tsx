export const SignIn = () => {
    return (
        <div>
            <div>
                <h1>Sing up Information</h1>
                <p>
                    Already have an account? <a>Log in</a>
                </p>
            </div>
            <div>
                <div>
                    <label>First name</label>
                    <input type="text" placeholder="Enter your first name" />
                </div>
                <div>
                    <label>Last name</label>
                    <input type="text" placeholder="Enter your last name" />
                </div>
            </div>
            <div>
                <div>
                    <div>
                        <label>Email</label>
                        <input type="text" placeholder="Enter your email" />
                    </div>
                    <div>
                        <label>Job position</label>
                        <input
                            type="text"
                            placeholder="Enter your job position (example:Project Manager)"
                        />
                    </div>
                    <div>
                        <label>Password</label>
                        <input
                            type="password"
                            placeholder="Enter your password"
                        />
                    </div>
                </div>
            </div>
            <button />
            <small>or sing in with...</small>
            <div>
                <button>facebook</button>
                <button>gmail</button>
            </div>
        </div>
    );
};
