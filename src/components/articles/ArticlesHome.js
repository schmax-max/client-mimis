import React from "react"
import styled from "styled-components"

import { ArticleCard } from "../articleCard/_ArticleCard"
import { ArticleCardWrap, SmallDivider } from "../../utils/CommonItems"
import { ExploreTitle } from "./ExploreTitle"

export const ArticlesHome = props => {
  // console.log({h: props})
  return (
    <Wrapper>
      {Object.keys(props.articles).map((label, index) => {
        const articles = props.articles[label]
        if (articles && articles.length > 0) {
          // console.log({ article })
          return (
            <ExploreSegment
              key={index}
              info={articles[0].body.core}
              label={label}
              type={props.type}
            />
          )
        } else {
          return <div />
        }
      })}
    </Wrapper>
  )
}

const ExploreSegment = props => (
  <ArticleCardWrap>
    <ExploreTitle {...props} />
    <SmallDivider />
    <ArticleCard info={props.info} cardWidth={"100%"} />
    <SmallDivider />
  </ArticleCardWrap>
)

const Wrapper = styled.div`
  width: 100%;
  justify-content: space-between;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`
