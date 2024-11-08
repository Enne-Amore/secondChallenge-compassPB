import styles from "./Subscribe.module.css";
import { Button } from "../button";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import toast from "react-hot-toast";

interface Erro {
    emailErro: boolean;
    passowdErro: boolean;
    lastNameErro: boolean;
    firstNameErro: boolean;
    jobErro: boolean;
}

const validateNome = (nome: string): boolean => {
    const regex = /^[A-Za-zÀ-ÖØ-öø-ÿ\s]{2,}$/;
    return regex.test(nome);
};

const validateJob = (nome: string): boolean => {
    const regex = /^[A-Za-zÀ-ÖØ-öø-ÿ\s]{5,}$/;
    return regex.test(nome);
};

const validateEmail = (email: string): boolean => {
    const emailRegex = /^[\w-\\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return emailRegex.test(email);
};
const validatePassword = (password: string): boolean => {
    const passwordRegex =
        /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+[\]{};':"\\|,.<>/?`~\\-])[A-Za-z\d!@#$%^&*()_+[\]{};':"\\|,.<>/?`~\\-]{8,}$/;
    return passwordRegex.test(password);
};

export const Subscribe = () => {
    const [firstName, setFirstName] = useState<string>("");
    const [lastName, setLastName] = useState<string>("");
    const [job, setJob] = useState<string>("");
    const [email, setemail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [erros, setErros] = useState<Erro>({
        emailErro: false,
        passowdErro: false,
        lastNameErro: false,
        firstNameErro: false,
        jobErro: false,
    });

    const navigate = useNavigate();

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
        setemail("");
        setLastName("");
        setFirstName("");
        setJob("");
        erros.emailErro = false;
        erros.passowdErro = false;
        erros.lastNameErro = false;
        erros.firstNameErro = false;
        erros.jobErro = false;
    };

    const handleSignIn = () => {
        if (!validateNome(firstName)) {
            toast.error("First name invalid!");
            setErros({ ...erros, firstNameErro: true });   
        } else if (!validateNome(lastName)) {
            toast.error("Last name invalid!");
            setErros({ ...erros, lastNameErro: true });
        }else if (!validateEmail(email)) {
            toast.error("E-mail invalid!");
            setErros({ ...erros, emailErro: true });
        }else if (!validateJob(job)) {
            toast.error("Job invalid!");
            setErros({ ...erros, jobErro: true });
        }  else if (!validatePassword(password)) {
            toast.error("Passwod invalid!");
            setErros({ ...erros, passowdErro: true })
        } else {
            toast.success("cadastro realizado com sucesso!");
            clear();
            saveData();
            setTimeout(() => {
                navigate("/login");
            }, 2000);
        }
    };

    return (
        <div className={styles.divContainer}>
            <div className={styles.divForm}>
                <div className={styles.divText}>
                    <h1 className={styles.h1}>Sing up Information</h1>
                    <p className={styles.p}>
                        Already have an account?{" "}
                        <Link to="/login" className={styles.a}>
                            {" "}
                            Login
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
                                erros.firstNameErro ? "bg-red-300" : ""
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
                                erros.lastNameErro ? "bg-red-300" : ""
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
                                erros.emailErro ? "bg-red-300" : ""
                            }`}
                            value={email}
                            onChange={(e) => setemail(e.target.value)}
                        />
                    </div>
                    <div className="w-full">
                        <label className={styles.divLabel}>Job position</label>
                        <input
                            type="text"
                            placeholder="Enter your job position (example:Project Manager)"
                            className={`${styles.divInput} ${
                                erros.jobErro ? "bg-red-300" : ""
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
                                erros.passowdErro ? "bg-red-300" : ""
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
