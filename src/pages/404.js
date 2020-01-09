import React from "react"

import Layout from "../components/layout/layout"

const NotFoundPage = () => (
  <Layout>
    <div>
      <h1>Page not found</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      <a href="/">Back to Home</a>
    </div>
  </Layout>
)

export default NotFoundPage