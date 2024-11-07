import styles from './Main.module.css'

const Main = () => {
  return (
        <div className={styles.mainSection}>
            <div className={styles.container}>
                <h1 className={styles.title}>Welcome to <span className='text-blue-55'>Project Manager</span></h1>
                <p className={styles.textMain}>Get your projects and ideas in order, 
                    all in one place! Sign up now and discover a smarter way to 
                    manage your work with efficiency and teamwork</p>
                    <button className={styles.getButton}>Get Started</button>
            </div>
            <div className={styles.containerCard}>
                <div className={styles.card}>
                    <p className={styles.text}>2000+</p>
                    <p className={styles.text}>Satisfied clients</p>
                </div>
                <div className={styles.card}>
                    <p className={styles.text}>400+</p>
                    <p className={styles.text}>Managed projects</p>
                </div>
                <div className={styles.card}>
                    <p className={styles.text}>500+</p>
                    <p className={styles.text}>Kanban boards</p>
                </div>
            </div>
            <div className={styles.imgcenter}></div>
        </div>
    
  )
}

export default Main