import React from "react"
import { graphql } from "gatsby"
import Helmet from "react-helmet"
import Layout from '../components/layout/layout'
import Header from '../components/header/header'
import styles from './blogTemplate.module.scss';

const Template = ({
  data, // this prop will be injected by the GraphQL query below.
}) => {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark

  return (
    <React.Fragment>
      <Helmet>
        <title>{frontmatter.title}</title>
      </Helmet>
      <Header />
      <Layout>
        <div className={styles.postContainer}>
          <div className={styles.post}>
            <h1 className={styles.title}>{frontmatter.title}</h1>
            <div
              className={styles.content}
              dangerouslySetInnerHTML={{ __html: html }}
            />
            <div className={styles.meta}>
              <div className={styles.date}>{frontmatter.date}</div>
              <div className={styles.tags}>
                {frontmatter.tags.map((tag) => (
                  <div className={styles.tag}>{tag}</div>
                ))}
              </div>
              <div className={styles.author}>Published By Jinn Wang</div>
            </div>
          </div>
        </div>
      </Layout>
    </React.Fragment>
  )
}

export default Template
export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        tags
      }
    }
  }
`