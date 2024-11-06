import React from 'react'
import styles from "./Footer.module.css"
import IconsSocials from './IconsSocials'

const Footer = () => {
  return (
    <footer className={styles.footer}>
        <div className={styles.container}>
            <IconsSocials/>
            <ul className={styles.ul}>
                <li className={styles.li}>@ 2024 Project Manager. All rights reserved.</li>
                <li className={styles.li}><a href="https://policies.google.com/privacy?hl=en-US" target="_blank">Privacy policy</a></li>
                <li className={styles.li}><a href="https://policies.google.com/terms?hl=en-US" target="_blank">Terms of Service</a></li>
            </ul>
        </div>
    </footer>
  )
}

export default Footer
