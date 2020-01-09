import React from 'react';
import styles from './post.module.scss';
import data from '../../data'

const Post = (props) => {
    const post = data.posts[0];

    const postMeta = () => (
        <div className={styles.post__meta}>
            <div className={styles.post__date}>{post.date}</div>
            <div className={styles.post__tags}>
                <div>{post.tags[0]}</div>
                <div>{post.tags[1]}</div>
            </div>
        </div>
    )

    return (
        <div className={styles.post}>
            <h1 className={styles.post__title}>{post.title}</h1>
            <div className={styles.post__content}
                dangerouslySetInnerHTML={{ __html: post.html }}>
            </div>
            {postMeta}
        </div>
    )
}

export default Post;