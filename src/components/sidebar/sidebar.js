import React from "react"
import styles from "./sidebar.module.scss"

export default () => (
    <div className={styles.sidebar}>
        <div className={styles.sidebar__avatar}>
            <img src="https://avatars0.githubusercontent.com/u/17697287?s=460&v=4" alt=""/>
        </div>
        <div className={styles.sidebar__title}>Jinn Wang</div>
        <div className={styles.sidebar__desc}>Hi, I'm Jinn. I work as a Front End developer at <a href="https://www.pnimedia.com/" target="_blank" rel="noopener noreferrer" className={styles.link}>PNI Media</a> in Vancouver. I’m passionate about building the view for users to interact with, the client-side. Also I share many side projects on <a href="https://github.com/jinnrw" className={styles.link} target="_blank" rel="noopener noreferrer">GitHub</a>.</div>
    </div>
)
