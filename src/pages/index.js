import React from 'react'
import Layout from '../components/layout/layout'
import Footer from '../components/footer/footer'
import Sidebar from '../components/sidebar/sidebar'
import Main from '../components/main/main'
import SEO from '../components/seo'
import '../styles/global.scss'
import { relative } from 'path';

const IndexPage = () => {
    const wrapper = {
        position: "relative",
        minHeight: "100vh",
    }

    const layoutWrapper = {
        display: "flex",
    }


    return (
        <div style={wrapper}>
            <SEO></SEO>
            <Layout>
                <div style={layoutWrapper}>
                    <Sidebar />
                    <Main />
                </div>
            </Layout>
            <Footer />
        </div>
    )
}

export default IndexPage
