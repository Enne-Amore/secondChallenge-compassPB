import engine from '../../assets/Icon-enginer.png'
import clock from '../../assets/Icon-clock.png'
import ballon from '../../assets/Icon-ballon.png'
import table from '../../assets/Icon-table.png'

import styles from './Feature.module.css'

const Feature = () => {
  return (
    <section className={styles.mainContainer}>
      <div className={styles.container}>
        <h2 className={styles.title}>Featured Tools</h2>
        <p className={styles.text}>Tools to enhance your project management</p>
        <button className={styles.ftButton}>View All</button>
      </div>
      <div className={styles.containerItens}>
  <div className={styles.list}>
    <div className={styles.itemList}>
      <div className={styles.containImg}>
        <img src={engine} alt="" className={styles.img} />
      </div>
      <div>
        <h3 className={styles.titleItem}>Task Scheduler</h3>
        <p className={styles.textItem}>Plan and schedule tasks</p>
      </div>
    </div>
    <div className={styles.itemList}>
      <div className={styles.containImg}>
        <img src={clock} alt="" className={styles.img} />
      </div>
      <div>
      <h3 className={styles.titleItem}>Deadline Tracker</h3>
      <p className={styles.textItem}>Keep track of project deadlines</p>
      </div>
    </div>
    <div className={styles.itemList}>
      <div className={styles.containImg}>
        <img src={table} alt="" className={styles.img} />
      </div>
      <div>
        <h3 className={styles.titleItem}>Progress Report</h3>
        <p className={styles.textItem}>Track project progress</p>
      </div>
    </div>
    <div className={styles.itemList}>
      <div className={styles.containImg}>
        <img src={ballon} alt="" className={styles.img} />
      </div>
      <div>
        <div>
          <h3 className={styles.titleItem}>Communication Hub</h3>
          <p className={styles.textItem}>Centralized team communication</p>
        </div>
      </div>
    </div>
    
  </div>
</div>

    </section>
  )
}

export default Feature