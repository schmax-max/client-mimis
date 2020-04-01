import React from "react"

import Layout from "../components/layout/Layout"
import SEO from "../components/seo"
import Home from "../components/seo"
import Articles from "../components/articles/_containerArticles"

const IndexPage = () => (
  <Layout>
    <SEO />
    <Articles category={"home"} />
  </Layout>
)

export default IndexPage
