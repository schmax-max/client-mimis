import React from 'react';
import styled from 'styled-components';
// onClick={() => props.clickOnFeedbackRating(props.feedbackOptionText)}
import {color} from "../../../utils/constants";
import moment from 'moment';

import {FeedbackRatingBoxes, FeedbackRatingReceivedBox, FeedbackShareBoxes, FeedbackFlagBoxes, FeedbackFlagReceivedBox} from './FeedbackBoxes';
import {inputStyleLight} from "../../../utils/InputStyles";

export class FeedbackArea extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      articleRating: '',
      articleFlag: '',
      submittedFeedback: false,
      visibleSubmitButton: false,
      showFlags: false,
    }
    this.changeView = this.changeView.bind(this)
    this.changeRating = this.changeRating.bind(this)
    this.changeFlag = this.changeFlag.bind(this)
    this.submitFeedback = this.submitFeedback.bind(this)
  }

  changeView () {
    this.setState((prevProps) => {
      return {
        showFlags: !prevProps.showFlags,
        visibleSubmitButton: false
      }
    })
  }

  changeRating (articleRating) {
    this.setState({
      articleRating,
      visibleSubmitButton: true
    })
  }

  changeFlag (articleFlag) {
    this.setState({
      articleFlag,
      visibleSubmitButton: true
    })
  }


  submitFeedback (articleFeedback) {

    const {category, allocation} = this.props
    const {
      articleUrl,
      articleTitle,
      articleAnalysis,
      articleUrlParser,
      sectionLabel,
      indexColumn,
      indexRow,
      ageInDays,
      primaryChannelText
    } = this.props.feedbackProps
    // console.log({sectionLabel})
    const screenWidth = window.innerWidth
    const screenHeight = window.innerHeight
    const formatUsed = 'YYYY-MM-DD HH:mm:ss'
    const utcDate = moment.utc().format()
    const stillUtc = moment.utc(utcDate).toDate()
    const currentTime = moment(stillUtc).local().format(formatUsed)

    // let allocation = this.props.sectionLabel

    let articleContext = {
      category,
      allocation,
      sectionLabel,
      primaryChannelText,
      indexColumn,
      indexRow,
      ageInDays,
      screenWidth,
      screenHeight,
      currentTime,
    }

    // console.log({articleContext})

    const {articleRating, articleFlag} = this.state

    const data = {
        articleUrl,
        articleTitle,
        articleRating,
        articleFlag,
        articleContext,
        articleAnalysis,
        articleUrlParser,
    }
    this.props.submitArticleFeedback (data)
    this.setState({
      submittedFeedback: true,
      visibleSubmitButton: false
    })
  }

  render () {
    const {articleUrl} = this.props.feedbackProps

    let rating
    if (this.state.submittedFeedback === false) {
      rating = <FeedbackRatingBoxes changeRating={this.changeRating} articleRating={this.state.articleRating}/>
    } else {
      rating = <FeedbackRatingReceivedBox/>
    }

    let flag
    if (this.state.submittedFeedback === false) {
      flag = <FeedbackFlagBoxes changeFlag={this.changeFlag} articleFlag={this.state.articleFlag}/>
    } else {
      flag = <FeedbackFlagReceivedBox/>
    }

    let top
    let bottomText
    let buttonText
    if (this.state.showFlags === false) {
      top =
      <TopWrap>
        <ActionTitle>
          rate this article
        </ActionTitle>
        {rating}
        <TinyDivider/>
        <ActionTitle>
          flag this article
        </ActionTitle>
        {flag}
      </TopWrap>

      bottomText = 'share this article'
      buttonText = 'submit feedback'

    } else {
      top =
      <TopWrap>
        <ActionTitle>
          share this article
        </ActionTitle>

        <FeedbackShareBoxes articleUrl={articleUrl}/>
      </TopWrap>

      bottomText = 'back'
      buttonText = 'share article'
    }

    let submitButton
    let viewButton
    if (this.state.visibleSubmitButton) {
      submitButton =
      <FeedbackButtonWrap>
        <FeedbackButtonSubmit onClick={() => this.submitFeedback()} style={inputStyleLight}>
          {buttonText}
        </FeedbackButtonSubmit>
      </FeedbackButtonWrap>
    } else {
      viewButton =
      <ToggleViewButton onClick={() => this.changeView()}>
        {bottomText}
      </ToggleViewButton>
    }

    return (
      <Wrapper>
        {top}
        <BottomWrap>
          {submitButton}
          {viewButton}
        </BottomWrap>
      </Wrapper>
    )
  }
}


// <ActionTitle>
//   recommendation source
// </ActionTitle>
// <FeedbackSourceBox primaryChannelText={primaryChannelText}/>

const TinyDivider = styled.div`
  height: 1rem;
`

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  opacity: 0.9;
  z-index: 90;
  /* background: green; */
  background: ${color.dashColor};
  color: ${color.white};
`

const TopWrap = styled.div`
  position: relative;
  z-index: 90;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const BottomWrap = styled.div`
  position: absolute;
  align-self: flex-end;
  display: flex;
  flex-direction: column;
  align-items: center;
  bottom: 0;
  margin-bottom: 0rem;
  width: 100%;
`



const ActionTitle = styled.div `
  padding-top: 1rem;
  width: 100%;
  font-size: 120%;
  font-family: Noto Sans Bold;
  font-weight: bold;
  font-decoration: underline;
  text-align: center;
`

const FeedbackButtonWrap = styled.div `
  margin-top: 2rem;
  width: 60%;
  height: 50px;

`
const FeedbackButtonSubmit = styled.button `
  position: relative;
  opacity: 1;
`

const ToggleViewButton = styled.div `
  width: 100%;
  height: 2.4rem;
  text-align: center;
  font-size: 80%;
  font-style: italic;
  cursor: pointer;

`
