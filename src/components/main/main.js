import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import PostLink from '../post-link/post-link'
import styles from './main.module.scss'

const Main = () => {
    const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
        edges {
          node {
            id
            excerpt(pruneLength: 250)
            frontmatter {
              date(formatString: "MMMM DD, YYYY")
              path
              title
              tags
              description
            }
          }
        }
      }
    }
  `)
    const edges = data.allMarkdownRemark.edges;
    const Posts = edges
        .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
        .map(edge => <PostLink key={edge.node.id} post={edge.node} />)

    return (
        <div className={styles.main}>
            {Posts}
        </div>
    )
}

export default Main