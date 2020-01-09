import React from "react"
import { Link } from "gatsby"
import styles from './post-link.module.scss'


const PostLink = ({ post }) => {
    const { frontmatter } = post;

    return (
        <div className={styles.postLink}>
            <h2 className={styles.title}>
                <Link to={frontmatter.path}>{frontmatter.title}</Link>
            </h2>
            <div className={styles.desc}>
                <div className={styles.date}>{frontmatter.date}</div>
                {frontmatter.tags.map((tag) => (
                    <div className={styles.tag}>
                        <span>{tag}</span>
                    </div>
                ))}
            </div>
            <div className={styles.abstract}>{frontmatter.description}</div>
        </div >
    )
}

export default PostLink