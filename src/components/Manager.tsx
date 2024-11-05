
import styles from './Manager.module.css'

const Manager = () => {
  return (
    
    <section className={styles.manager}> 
    <div className={styles.container}>
      <h2 className={styles.title}>The manager</h2>
      <p className={styles.text}>
      Project Manager is a tool designed to make organizing and tracking your daily 
      tasks easier than ever. With a clean, intuitive interface and powerful features, 
      you can plan, prioritize, and keep tabs on your projects - whether you’re 
      working solo or a with a team
      </p>
      <button className={styles.learButton}>Learn More</button>
    </div>
      <div className={styles.containList}>
        <div>
          <img src="../assets/track-tasks-illustration.png" alt="Imagem 1" className="w-full h-48 object-cover rounded" />
          <h2>Manage Projects</h2>
          <p>20+ projects</p>
        </div>
      
    </div>
    </section>
  )
}

export default Manager