import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../services/authService";
import { useUser, useClerk } from "@clerk/clerk-react"; // Hook do Clerk
import toast from "react-hot-toast";
import styles from "./Subscribe.module.css";
import { Button } from "../button";


const validateNome = (nome: string) => /^[A-Za-zÀ-ÖØ-öø-ÿ\s]{2,}$/.test(nome);
const validateJob = (nome: string) => /^[A-Za-zÀ-ÖØ-öø-ÿ\s]{5,}$/.test(nome);
const validateEmail = (email: string) => /^[\w-\\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
const validatePassword = (password: string) =>
    /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+[\]{};':"\\|,.<>/?`~\\-])[A-Za-z\d!@#$%^&*()_+[\]{};':"\\|,.<>/?`~\\-]{8,}$/.test(password);

export const Subscribe = () => {
    const { user, openSignIn, isAuthenticated } = useClerk();
    const navigate = useNavigate();

    const [firstName, setFirstName] = useState(user?.firstName || "");
    const [lastName, setLastName] = useState(user?.lastName || "");
    const [email, setEmail] = useState(user?.emailAddresses[0]?.emailAddress || "");
    const [job, setJob] = useState("");
    const [password, setPassword] = useState("");
    const [isValidated, setIsValidated] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const [erros, setErros] = useState({
        firstNameErro: false,
        lastNameErro: false,
        emailErro: false,
        jobErro: false,
        passwordErro: false,
    });

    useEffect(() => {
        if (isAuthenticated) {
            navigate("/kanban");
        }
    }, [isAuthenticated, navigate]);

    const saveData = async () => {
        const url = "http://localhost:4000/users";
        try {
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    firstName,
                    lastName,
                    user: "@" + firstName + lastName,
                    date: new Date(),
                    email,
                    password,
                    position: job,
                    socialMedia: "",
                }),
            });
            return response.json();
        } catch (error) {
            console.log("Error", error);
        }
    };

    const clear = () => {
        setFirstName("");
        setLastName("");
        setEmail("");
        setJob("");
        setPassword("");
        setErros({
            firstNameErro: false,
            lastNameErro: false,
            emailErro: false,
            jobErro: false,
            passwordErro: false,
        });
    };

    const handleSignIn = async () => {
        const isFirstNameValid = validateNome(firstName);
        const isLastNameValid = validateNome(lastName);
        const isEmailValid = validateEmail(email);
        const isJobValid = validateJob(job);
        const isPasswordValid = validatePassword(password);

        setIsValidated(true);
        setErros({
            firstNameErro: !isFirstNameValid,
            lastNameErro: !isLastNameValid,
            emailErro: !isEmailValid,
            jobErro: !isJobValid,
            passwordErro: !isPasswordValid,
        });

        if (isFirstNameValid && isLastNameValid && isEmailValid && isJobValid && isPasswordValid) {
            setIsLoading(true);
            await saveData();
            clear();
            toast.success("Account created successfully!");
            setIsLoading(false);
            setTimeout(() => navigate("/login"), 2000);
        }
    };

    const handleOAuthLogin = (provider: string) => {
        openSignIn({
            strategy: provider === "google" ? "oauth_google" : "oauth_facebook",
            redirectUrl: "/kanban",
        });
    };

  return (
    <div className={styles.divContainer}>
      <div className={styles.divForm}>
        <div className={styles.divText}>
          <h1 className={styles.h1}>Sign Up Information</h1>
          <p className={styles.p}>
            Already have an account?{" "}
            <Link to="/login" className={styles.a}>
              Log in
            </Link>
          </p>
        </div>

                <div className={styles.divName}>
                    <div className="md:w-1/2 md:mr-1">
                        <label className={styles.labelName}>First name</label>
                        <input
                            type="text"
                            placeholder="Enter your first name"
                            className={`${styles.inputName} ${
                                isValidated
                                    ? erros.firstNameErro
                                        ? "bg-red-300"
                                        : "bg-green-200"
                                    : ""
                            }`}
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                        />
                        {isValidated && erros.firstNameErro && (
                            <p className="text-red-500">First name must contain only letters and at least 2 characters.</p>
                        )}
                    </div>
                    <div className="md:w-1/2 md:ml-1">
                        <label className={styles.labelName}>Last name</label>
                        <input
                            type="text"
                            placeholder="Enter your last name"
                            className={`${styles.inputName} ${
                                isValidated
                                    ? erros.lastNameErro
                                        ? "bg-red-300"
                                        : "bg-green-200"
                                    : ""
                            }`}
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                        />
                        {isValidated && erros.lastNameErro && (
                            <p className="text-red-500">Last name must contain only letters and at least 2 characters.</p>
                        )}
                    </div>
                </div>

                <div className={styles.divContainerInput}>
                    <div className="w-full">
                        <label className={styles.divLabel}>Email</label>
                        <input
                            type="text"
                            placeholder="Enter your email"
                            className={`${styles.divInput} ${
                                isValidated
                                    ? erros.emailErro
                                        ? "bg-red-300"
                                        : "bg-green-200"
                                    : ""
                            }`}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        {isValidated && erros.emailErro && (
                            <p className="text-red-500">Please enter a valid email address.</p>
                        )}
                    </div>
                    <div className="w-full">
                        <label className={styles.divLabel}>Job position</label>
                        <input
                            type="text"
                            placeholder="Enter your job position"
                            className={`${styles.divInput} ${
                                isValidated
                                    ? erros.jobErro
                                        ? "bg-red-300"
                                        : "bg-green-200"
                                    : ""
                            }`}
                            value={job}
                            onChange={(e) => setJob(e.target.value)}
                        />
                        {isValidated && erros.jobErro && (
                            <p className="text-red-500">Job position must be at least 5 characters.</p>
                        )}
                    </div>
                    <div className="w-full">
                        <label className={styles.divLabel}>Password</label>
                        <input
                            type="password"
                            placeholder="Enter your password"
                            className={`${styles.divInput} ${
                                isValidated
                                    ? erros.passwordErro
                                        ? "bg-red-300"
                                        : "bg-green-200"
                                    : ""
                            }`}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        {isValidated && erros.passwordErro && (
                            <p className="text-red-500">Password must be at least 8 characters, with an uppercase letter, a number, and a special character.</p>
                        )}
                    </div>
                </div>

                <Button
                    type="button"
                    full
                    color="blue"
                    className={styles.btnSingIn}
                    onClick={handleSignIn}
                    disabled={isLoading}
                >
                    {isLoading ? "Creating account..." : "Create an account"}
                </Button>

                <div className={styles.divBtn}>
                    <div
                        className={styles.btnFace}
                        onClick={() => handleOAuthLogin("facebook")}
                    >
                        <img
                            src="src/assets/facebook-logo.png"
                            alt="Facebook login"
                            className={styles.iconOAuth}
                        />
                    </div>

                    <div
                        className={styles.btnGmail}
                        onClick={() => handleOAuthLogin("google")}
                    >
                        <img
                            src="src/assets/google-icon.png"
                            alt="Google login"
                            className={styles.iconOAuth}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};
