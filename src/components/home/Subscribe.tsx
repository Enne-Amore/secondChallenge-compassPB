import { useState } from 'react';
import styles from './Subscribe.module.css';
import Modal from './Modal';

// Email validation function
const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Name validation function
const validateName = (name: string): boolean => {
  const nameRegex = /^[a-zA-Z]+(?: [a-zA-Z]+)*$/; // Allows letters and spaces, no numbers.
  return name.length >= 2 && nameRegex.test(name);
};

const SubscribeForm = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');

  // Function to open the modal
  const openModal = () => {
    // Email and name validation
    if (!validateEmail(email)) {
      setErrorMessage('Please enter a valid email.');
      return;
    }

    if (!validateName(name)) {
      setErrorMessage('The name must be at least 2 characters long and cannot contain numbers.');
      return;
    }

    setErrorMessage(''); // Clears the error message if everything is correct.
    setIsModalOpen(true); // Open the modal
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section className={styles.formContainer}>
      <div className={styles.containText}>
        <h2 className={styles.formTitle}>Subscribe to Updates</h2>
        <p className={styles.formSubtitle}>Stay informed with our latest updates</p>
      </div>

      <div className={styles.inputGroup}>
        <label className={styles.inputLabel}>Email</label>
        <input 
          type="email" 
          placeholder="Enter your email" 
          className={styles.inputField} 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
        />
        <p className={styles.inputHelperText}>We promise not to spam</p>

        <label className={styles.inputLabel}>Name</label>
        <input 
          type="text" 
          placeholder="Enter your name" 
          className={styles.inputField} 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
        />

        {errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>} {/* Displays the error message */}

        <button 
          className={styles.subscribeButton} 
          onClick={openModal}>
          Subscribe
        </button>
      </div>

      {/* Modal */}
      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </section>
  );
};

export default SubscribeForm;
