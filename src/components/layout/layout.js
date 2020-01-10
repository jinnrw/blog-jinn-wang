import React from "react"
import Footer from '../footer/footer'
import styles from "./layout.module.scss"

export default ({ children }) => {

    return (
        <div className={styles.app}>
            <div className={styles.appContent}>
                {children}
            </div>
            <Footer />
        </div>
    )
}
