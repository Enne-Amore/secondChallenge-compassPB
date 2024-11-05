import project from '../assets/project-manager-illustration.png'
import tasks from '../assets/track-tasks-illustration.png'
import collaborate from '../assets/collaborate-illustration.png'
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
        <div className={styles.card}>
          <div className={styles.containImg}>
            <img src={project} alt="Imagem 1" className={styles.img}/>
            <div className={styles.containtext}>
              <h2>Manage Projects</h2>
              <p className={styles.textcard}>20+ projects</p>
            </div>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.containImg}>
            <img src={tasks} alt="Imagem 1" className={styles.img}/>
            <div className={styles.containtext}>
              <h2>Track Tasks</h2>
              <p className={styles.textcard}>50+ tasks</p>
            </div>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.containImg}>
            <img src={collaborate} alt="Imagem 1" className={styles.img}/>
            <div className={styles.containtext}>
              <h2>Manage Projects</h2>
              <p className={styles.textcard}>20+ projects</p>
            </div>
          </div>
        </div>
        
      
    </div>
    </section>
  )
}

export default Manager