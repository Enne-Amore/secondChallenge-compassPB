import styles from './Subscribe.module.css'

const SubscribeForm = () => {
  return (
    <section className={styles.formContainer}>
        <div className={styles.containText}>
            <h2 className={styles.formTitle}>Subscribe to Updates</h2>
            <p className={styles.formSubtitle}>Stay informed with our latest updates</p>
        </div>
      
        <div className={styles.inputGroup}>
          
            <label className={styles.inputLabel}>Email</label>
            <input type="{styles.email" placeholder="Enter your email" className={styles.inputField}/>
            <p className={styles.inputHelperText}>We promise not to spam</p>
          
          
            <label className={styles.inputLabel}>Name</label>
            <input type="text" placeholder="Enter your name" className={styles.inputField} />
          
            <button className={styles.subscribeButton}>Subscribe</button>
        </div>
     
    </section>
  );
};

export default SubscribeForm;