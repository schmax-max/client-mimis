import React from "react"
// import PropTypes from 'prop-types'
import SEO from "../components/seo"
import Layout from "../components/layout/Layout"
import { BarPrimary } from "../components/bar/Bar"
import Articles from "../components/articles/_containerArticles"

const category = ({ pageContext }) => {
  const { category_names, category_name, allocation_names } = pageContext
  // console.log({
  //   // category_names,
  //   // allocation_names,
  //   // pageContext
  // })
  return (
    <Layout>
      <SEO title={category_name.replace("_", " ")} />
      <BarPrimary category_names={category_names} />
      <Articles category={category_name} allocations={allocation_names} />
    </Layout>
  )
}

export default category
