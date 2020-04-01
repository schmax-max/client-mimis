import React from "react"
import { CardDeck } from "reactstrap"
import styled from "styled-components"

import { sizeCutoff } from "../../utils/constants"

import { ArticleCard } from "../articleCard/_ArticleCard"
import { ArticleCardWrap, SmallDivider } from "../../utils/CommonItems"
// SectionTitleStyleEmpty

import { BoxSectionTitle } from "./BoxSectionTitle"

export class ArticlesRow extends React.Component {
  render() {
    let articleSectionTitle
    const { sectionLabel, articlesPerRow } = this.props

    if (sectionLabel) {
      articleSectionTitle = (
        <>
          <BoxSectionTitle {...this.props} />
          <SmallDivider />
        </>
      )
    }

    return (
      <>
        <ArticleDivider />
        {articleSectionTitle}
        <CardPack>
          {articlesPerRow.slice(0, 3).map((article, index) => (
            <ArticleCardWrap key={index}>
              <ArticleCard
                key={index}
                info={article.body.core}
                indexColumn={index}
                {...this.props}
                // storePreviousView={this.props.storePreviousView}
              />
            </ArticleCardWrap>
          ))}
        </CardPack>
        <ArticleDivider />
      </>
    )
  }
}

const ArticleDivider = styled.div`
  width: 100%;
  height: 2rem;
  @media (max-width: ${sizeCutoff.lowerPhone}) {
    display: none;
  }
`

{
  /* <SmallDivider/>
<SmallDivider/> */
}

// ArticlesRow.propTypes = {
//   articlesPerRow: PropTypes.array.isRequired
// };

// {this.props.articleBatch.map((cardItem) =>
//     <ArticleCard key={cardItem.url} cardItem={cardItem}/>
// )}

const CardPack = styled(CardDeck)`
  display: flex;
  flex-flow: row !important;
  margin: 0 !important;
  justify-content: space-between;
  @media (max-width: ${sizeCutoff.lowerPhone}) {
    overflow: hidden;
    margin-top: 0.1rem;
    margin-bottom: 0.1rem;
    flex-flow: column !important;
  }
`
