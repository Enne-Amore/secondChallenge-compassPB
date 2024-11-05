import styles from './Feature.module.css'

const Feature = () => {
  return (
    <section className={styles.mainContainer}>
      <div className={styles.container}>
        <h2 className={styles.title}>Featured Tools</h2>
        <p className={styles.text}>Tools to enhance your project management</p>
        <button className={styles.ftButton}>View All</button>
      </div>
      <div>
        <ul>
          <li>
            
          </li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>

    </section>
  )
}

export default Feature