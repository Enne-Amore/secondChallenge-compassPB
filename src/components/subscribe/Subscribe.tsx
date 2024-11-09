import styles from "./Subscribe.module.css";
import { Button } from "../button";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useClerk, useUser } from "@clerk/clerk-react"; // Hook do Clerk

const validateNome = (nome: string): boolean =>
    /^[A-Za-zÀ-ÖØ-öø-ÿ\s]{2,}$/.test(nome);
const validateJob = (nome: string): boolean =>
    /^[A-Za-zÀ-ÖØ-öø-ÿ\s]{5,}$/.test(nome);
const validateEmail = (email: string): boolean =>
    /^[\w-\\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
const validatePassword = (password: string): boolean =>
    /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+[\]{};':"\\|,.<>/?`~\\-])[A-Za-z\d!@#$%^&*()_+[\]{};':"\\|,.<>/?`~\\-]{8,}$/.test(
        password
    );

export const Subscribe = () => {
    const { user } = useUser();
    const [firstName, setFirstName] = useState<string>("");
    const [lastName, setLastName] = useState<string>("");
    const [job, setJob] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [erros, setErros] = useState({
        emailErro: false,
        passowdErro: false,
        lastNameErro: false,
        firstNameErro: false,
        jobErro: false,
    });
    const [isValidated, setIsValidated] = useState<boolean>(false);
    const userName = `${user?.firstName || ""} ${user?.lastName || ""}`;
    const userPhoto = user?.imageUrl;
    const { openSignIn, isAuthenticated } = useClerk(); // Hook do Clerk para verificar a autenticação
    const navigate = useNavigate();

    useEffect(() => {
        if (user) {
            console.log(user);
            // Função para salvar os dados do usuário
            const saveUserToJSONServer = async () => {
                try {
                    const response = await fetch(
                        "http://localhost:4000/users",
                        {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json",
                            },
                            body: JSON.stringify({
                                name: userName,
                                photo: userPhoto,
                            }),
                        }
                    );
                    console.log(response);
                    if (response.ok) {
                        console.log(
                            "Usuário salvo no JSON Server com sucesso!"
                        );
                    } else {
                        console.error(
                            "Erro ao salvar o usuário:",
                            response.statusText
                        );
                    }
                } catch (error) {
                    console.error("Erro ao salvar o usuário:", error);
                }
            };

            saveUserToJSONServer();
        }
    }, [user, userName, userPhoto]);

    const saveData = async () => {
        const url = "http://localhost:4000/posts";
        try {
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    firstName: firstName,
                    lastName: lastName,
                    user: "@" + firstName + lastName,
                    date: new Date(),
                    "e-mail": email,
                    password: password,
                    position: job,
                    socialMedia: "",
                }),
            }).then((response) => response.json());
        } catch (error) {
            console.log("Error", error);
        }
    };

    const clear = () => {
        setPassword("");
        setEmail("");
        setLastName("");
        setFirstName("");
        setJob("");
        setErros({
            emailErro: false,
            passowdErro: false,
            lastNameErro: false,
            firstNameErro: false,
            jobErro: false,
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
            passowdErro: !isPasswordValid,
        });

        if (
            isFirstNameValid &&
            isLastNameValid &&
            isEmailValid &&
            isJobValid &&
            isPasswordValid
        ) {
            await saveData();
            clear();
            toast.success("Account created successfully!");
            setTimeout(() => navigate("/login"), 2000);
        }
    };

    const handleOAuthLogin = (provider: string) => {
        openSignIn({
            strategy: provider === "google" ? "oauth_google" : "oauth_facebook",
            redirectUrl: "/kanban", // Redireciona para a página de Kanban após login
        });
    };

    // Verifica se o usuário está autenticado, e redireciona para o Kanban
    if (isAuthenticated) {
        navigate("/kanban");
    }

    return (
        <div className={styles.divContainer}>
            <div className={styles.divForm}>
                <div className={styles.divText}>
                    <h1 className={styles.h1}>Sign Up Information</h1>
                    <p className={styles.p}>
                        Already have an account?{" "}
                        <Link to="/login" className={styles.a}>
                            Sign in
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
                    </div>
                    <div className="w-full">
                        <label className={styles.divLabel}>Password</label>
                        <input
                            type="password"
                            placeholder="Enter your password"
                            className={`${styles.divInput} ${
                                isValidated
                                    ? erros.passowdErro
                                        ? "bg-red-300"
                                        : "bg-green-200"
                                    : ""
                            }`}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                </div>

                <Button
                    type="button"
                    full
                    color="blue"
                    className={styles.btnSingIn}
                    onClick={handleSignIn}
                >
                    Create an account
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
