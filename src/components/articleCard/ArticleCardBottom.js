import React from "react"
import styled from "styled-components"

import { color } from "../../utils/constants"

export class ArticleCardBottom extends React.Component {
  render() {
    return (
      <Wrapper onClick={() => this.props.handleClickOnArticleCard()}>
        <BottomDiv>
          <TitleText> {this.props.title} </TitleText>
          <MiddleDiv>
            <PublisherDiv>{this.props.publisher}</PublisherDiv>
            <DateDiv>{this.props.publicationDateText}</DateDiv>
          </MiddleDiv>
        </BottomDiv>
        <BottomGradient />
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  cursor: pointer;
  top: 0;
  height: 100%;
  width: 100%;
`

const BottomDiv = styled.div`
  height: 100%;
  margin-left: 1rem;
  margin-right: 2rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
`

const TitleText = styled.div`
  color: ${color.fontCardColor};

  margin-top: 0.5rem;
  margin-bottom: 1rem;
  font-family: Cormorant Bold;
  font-weight: bold;
  font-size: 120%;
`

const MiddleDiv = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  /* max-height: 20px; */
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  font-family: Cormorant Bold;
  font-weight: bold;
  font-style: italic;
  font-size: 100%;
`

const DateDiv = styled.div`
  color: ${color.fontCardColor};
  float: right;
  text-align: right;
`

// const TagsDiv = styled.div`
//     display: flex;
//     margin-bottom: 1rem;
//     flex-wrap: wrap;
//     font-weight: 700;
// `
//
// const TagsText = styled.div`
//     color: ${color.fontCardColor};
//     margin-right: 0.8rem;
//
// `

const PublisherDiv = styled.div`
  display: flex;
  float: left;
`

// const ExcerptText = styled.div`
//   color: ${color.fontCardColor};
//   margin-top: 0.5rem
//   margin-bottom: 0.5rem
//   font-weight: 500;
//   font-style: italic;
// `

const BottomGradient = styled.div`
  background: -moz-linear-gradient(top,  ${color.transparent} 0%, ${color.bottomCard} 80%); /* FF3.6+ */
  background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,${color.transparent}), color-stop(80%,${color.bottomCard})); /* Chrome,Safari4+ */
  background: -webkit-linear-gradient(top, ${color.transparent} 0%, ${color.bottomCard} 80%); /* Chrome10+,Safari5.1+ */
  background: -o-linear-gradient(top,  ${color.transparent} 0%, ${color.bottomCard} 80%); /* Opera 11.10+ */
  background: -ms-linear-gradient(top,  ${color.transparent} 0%, ${color.bottomCard} 80%); /* IE10+ */
  background: linear-gradient(to bottom, ${color.transparent} 0%, ${color.bottomCard} 80%)); /* W3C */
  left: 0;
  position: absolute;
  z-index: 100;
  bottom: 0;
  height: 10%;
  width: 100%;
`
