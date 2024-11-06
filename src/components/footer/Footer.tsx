import React from 'react'
import styles from "./Footer.module.css"
import IconsSocials from './IconsSocials'

const Footer = () => {
  return (
    <footer className={styles.footer}>
        <div className={styles.container}>
            <IconsSocials/>
        </div>
    </footer>
  )
}

export default Footer
