import React from 'react'
import { Link } from "gatsby"
import styles from './header.module.scss'

const Header = () => (
    <header className={styles.header}>
        <Link to="/">Home</Link>
    </header>
)

export default Header;