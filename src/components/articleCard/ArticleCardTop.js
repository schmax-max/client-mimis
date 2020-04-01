import React from "react"
import styled from "styled-components"
import { MdMoreVert, MdClose } from "react-icons/md"

import { color } from "../../utils/constants"
import FeedbackAreaContainer from "./feedbackArea/_containerFeedbackArea"

export class ArticleCardTop extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showFeedback: false,
    }
    this.toggleMore = this.toggleMore.bind(this)
  }

  toggleMore() {
    this.setState(prevState => {
      return { showFeedback: !prevState.showFeedback }
    })
  }

  getFeedbackProps = () => {
    let {
      articleUrl,
      sectionLabel,
      indexColumn,
      indexRow,
      ageInDays,
      primaryChannelText,
      cardItem,
    } = this.props

    // console.log({ cardItem })
    // console.log({ props: this.props })

    let feedbackProps = {
      sectionLabel,
      articleUrl,
      primaryChannelText,
      indexColumn,
      indexRow,
      ageInDays,
      articleTitle: cardItem.title,
      articleAnalysis: cardItem.analysis,
      articleUrlParser: cardItem.url_parser,
    }

    // console.log({cardItem})

    return feedbackProps
  }

  render() {
    const { image, content_minutes } = this.props
    let feedbackView
    if (this.state.showFeedback === true) {
      feedbackView = (
        <FeedbackAreaContainer feedbackProps={this.getFeedbackProps()} />
      )
    }

    let menuButton
    if (this.state.showFeedback === false) {
      menuButton = (
        <MdMoreVert style={menuStyle} onClick={() => this.toggleMore()} />
      )
    } else {
      menuButton = (
        <MdClose style={menuStyle} onClick={() => this.toggleMore()} />
      )
    }

    return (
      <ThumbnailDiv>
        <ThumbnailImg
          alt=""
          src={image}
          onClick={() => this.props.handleClickOnArticleCard()}
        />

        <TriangleDiv onClick={() => this.props.handleClickOnArticleCard()}>
          <TriangleText>
            {content_minutes}
            {" mins"}
          </TriangleText>
        </TriangleDiv>
      </ThumbnailDiv>
    )
  }
}

{
  /* <CircleDiv>{menuButton}</CircleDiv> */
}

// {feedbackView}

const menuStyle = {
  color: "white",
  width: "60%",
  height: "60%",
}

const CircleDiv = styled.div`
  padding: 10;
  margin: 20;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 1rem;
  bottom: 0.5rem;
  background: ${color.dashColor};
  border-radius: 50%;
  width: 40px;
  height: 40px;
  cursor: pointer;
  /* display: none; */
`

const TriangleDiv = styled.div`
  z-index: 80;
  position: absolute;
  text-align: right;
  bottom: 0px;
  right: 0px;
  justify-content: flex-end;
  display: flex;
  border-left: 150px solid transparent;
  border-bottom: 30px solid ${color.primaryColor};
  border-right: 150px solid ${color.primaryColor};
  border-top: 30px solid transparent;
  cursor: pointer;
`

const TriangleText = styled.div`
  position: absolute;
  /* display: inline-block; */
  text-align: right;
  font-family: Noto Sans;
  left: 2.6rem;
  right: 0rem;

  top: -0.2rem;
  bottom: 0px;
  width: 5rem;
  height: 100%;
  color: ${color.white};
`

const ThumbnailDiv = styled.div`
  position: relative;
  height: 100%;
  overflow: hidden;
  left: 0px;
  border: 0px !important;
`

const ThumbnailImg = styled.img`
  position: absolute;
  z-index: 50;
  -ms-transform: translate(-50%, -25%) !important;
  -webkit-transform: translate(-50%, -25%) !important;
  -moz-transform: translate(-50%, -25%) !important;
  left: 50%;
  top: 25%;
  width: 100%;
  height: 100%;
  object-fit: cover;
  cursor: pointer;
`
