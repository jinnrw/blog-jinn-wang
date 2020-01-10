import React from 'react'
import styles from './footer.module.scss'

const Footer = () => (
    <footer className={styles.footer}>
        <div className={styles.copyright}>© 2020 Jinn Wang</div>
        <div className={styles.links}>
            <a href="https://jinnwang-site.web.app" target="_blank" rel="noopener noreferrer">jinnwang</a>
            <a href="https://github.com/jinnrw" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/jinnwang" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="mailto:jinn.r.w@gmail.com" target="_blank" rel="noopener noreferrer" aria-label="email to jinn.r.w@gmail.com">Email</a>
        </div>
    </footer>
)

export default Footer;