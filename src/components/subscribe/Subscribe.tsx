import styles from "./Subscribe.module.css";
import { Button } from "../button";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useClerk, useUser } from "@clerk/clerk-react";
import { registerUser } from "../services/authService";

// Validações de regex
const validateNome = (nome: string): boolean => /^[A-Za-zÀ-ÖØ-öø-ÿ\s]{2,}$/.test(nome);
const validateJob = (job: string): boolean => /^[A-Za-zÀ-ÖØ-öø-ÿ\s]{5,}$/.test(job);
const validateEmail = (email: string): boolean => /^[\w-\\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
const validatePassword = (password: string): boolean =>
  /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+[\]{};':"\\|,.<>/?`~\\-])[A-Za-z\d!@#$%^&*()_+[\]{};':"\\|,.<>/?`~\\-]{8,}$/.test(password);

export const Subscribe = () => {
  const { isAuthenticated } = useClerk();
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [job, setJob] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errors, setErrors] = useState({
    emailError: false,
    passwordError: false,
    lastNameError: false,
    firstNameError: false,
    jobError: false,
  });
  const [isValidated, setIsValidated] = useState<boolean>(false);
  const navigate = useNavigate();

  // Lida com a validação dos campos
  const handleValidation = () => {
    const isFirstNameValid = validateNome(firstName);
    const isLastNameValid = validateNome(lastName);
    const isEmailValid = validateEmail(email);
    const isJobValid = validateJob(job);
    const isPasswordValid = validatePassword(password);

    setErrors({
      firstNameError: !isFirstNameValid,
      lastNameError: !isLastNameValid,
      emailError: !isEmailValid,
      jobError: !isJobValid,
      passwordError: !isPasswordValid,
    });

    return isFirstNameValid && isLastNameValid && isEmailValid && isJobValid && isPasswordValid;
  };

  const handleSignUp = async () => {
    if (handleValidation()) {
      const userData = {
        firstName,
        lastName,
        user: `@${firstName}${lastName}`,
        createdDate: new Date().toISOString(),
        email,
        password,
        job,
        socialMedia: { twitter: "", instagram: "", linkedin: "" },
        profilePicture: "https://assets.dryicons.com/uploads/icon/svg/5609/00c2616e-3746-48be-ac80-a4b8add412b5.svg",
      };

      try {
        await registerUser(userData);
        toast.success("Account created successfully!");
        setTimeout(() => navigate("/login"), 2000); // Redireciona para login após sucesso
        clearInputs();
      } catch (error) {
        console.error("Error registering user:", error);
        toast.error("Failed to create account. Please try again.");
      }
    } else {
      setIsValidated(true);
    }
  };

  const clearInputs = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setJob("");
    setPassword("");
    setErrors({
      emailError: false,
      passwordError: false,
      lastNameError: false,
      firstNameError: false,
      jobError: false,
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
                isValidated ? (errors.firstNameError ? "bg-red-300" : "bg-green-200") : ""
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
                isValidated ? (errors.lastNameError ? "bg-red-300" : "bg-green-200") : ""
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
                isValidated ? (errors.emailError ? "bg-red-300" : "bg-green-200") : ""
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
                isValidated ? (errors.jobError ? "bg-red-300" : "bg-green-200") : ""
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
                isValidated ? (errors.passwordError ? "bg-red-300" : "bg-green-200") : ""
              }`}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>

        <Button type="button" full color="blue" className={styles.btnSingIn} onClick={handleSignUp}>
          Create an account
        </Button>
      </div>
    </div>
  );
};
