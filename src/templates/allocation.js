import React from "react"
// import PropTypes from 'prop-types'
import SEO from "../components/seo"
import Layout from "../components/layout/Layout"
import { BarPrimary, BarSecondary } from "../components/bar/Bar"
import Articles from "../components/articles/_containerArticles"

const allocation = ({ pageContext }) => {
  const {
    category_names,
    category_name,
    allocation_names,
    allocation_name,
  } = pageContext
  return (
    <Layout>
      <SEO title={allocation_name.replace("_", " ")} />
      <BarPrimary category_names={category_names} />
      <BarSecondary
        category_name={category_name}
        allocation_names={allocation_names}
      />
      <Articles category={category_name} allocation={allocation_name} />
    </Layout>
  )
}

export default allocation
