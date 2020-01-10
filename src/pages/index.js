import React from 'react'
import Layout from '../components/layout/layout'
import Sidebar from '../components/sidebar/sidebar'
import Main from '../components/main/main'
import SEO from '../components/seo'
import '../styles/global.scss'

const IndexPage = () => {

    return (
        <React.Fragment>
            <SEO></SEO>
            <Layout>
                <Sidebar />
                <Main />
            </Layout>
        </React.Fragment>
    )
}

export default IndexPage
