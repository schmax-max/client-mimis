import React from "react"

import { ArticlesCategory } from "./ArticlesCategory"
import { ArticlesAllocation } from "./ArticlesAllocation"
import { ArticlesHome } from "./ArticlesHome"
import FilterContainer from "./filter/_containerFilter"

export class Articles extends React.Component {
  componentDidMount() {
    this.props.fetchArticlesIfNeeded({
      category: this.props.category,
      allocation: this.props.allocation,
      allocations: this.props.allocations,
    })
  }

  shouldComponentUpdate(nextProps, nextState) {
    const cond1 = nextProps.showLoadingSpinner !== this.props.showLoadingSpinner
    const cond2 = nextProps.receivedData !== this.props.receivedData
    return cond1 || cond2
  }

  componentDidUpdate() {
    this.props.fetchArticlesIfNeeded({
      category: this.props.category,
      allocation: this.props.allocation,
      allocations: this.props.allocations,
    })
  }

  render() {
    if (this.props.category) {
      // console.log({j: this.props.receivedData})
      let articles = this.props.receivedData[this.props.category] || {}
      if (this.props.category === "home") {
        console.log("considered home")

        return <ArticlesCategory articles={articles} {...this.props} />
      } else if (this.props.allocation) {
        articles = articles[this.props.allocation] || []
        return <ArticlesAllocation articles={articles} {...this.props} />
      } else {
        return <ArticlesCategory articles={articles} {...this.props} />
      }
    } else {
    }
  }
}

// return <ArticlesHome articles={articles} />
// console.log({ articles })
