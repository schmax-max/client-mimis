import React from 'react';
import styled from 'styled-components';

export class FeedbackRatingOption extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      opacity: 1
    }
    this.changeVisibility = this.changeVisibility.bind(this)
    this.clickAction = this.clickAction.bind(this)

  }

  componentDidUpdate (prevProps) {
    this.changeVisibility(prevProps)
  }

  changeVisibility (prevProps) {
    if (prevProps.articleRating !== this.props.articleRating) {
      if (
        this.props.articleRating === this.props.feedbackOptionText
      ) {
        this.setState({opacity: 1})
      } else {
        this.setState({opacity: 0.2})
      }
    }




  }

  clickAction () {
    this.props.changeRating(this.props.feedbackOptionText)
  }

  // onClick={this.props.changeRating(this.props.feedbackOptionText)

  render () {
    return (
      <RatingOption opacity={this.state.opacity} onClick={this.clickAction}>
        <RatingOptionIcon fontSize={this.props.fontSize}>
          {this.props.feedbackOptionIcon}
        </RatingOptionIcon>
        <RatingOptionText>
          {this.props.feedbackOptionText}
        </RatingOptionText>
      </RatingOption>
    )
  }
}



const RatingOption = styled.div`
  opacity: ${props => props.opacity};
  cursor: pointer;
  width: 100%;
  height: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const RatingOptionIcon = styled.div`
    /* width: 25px; */
    font-size: ${props => props.fontSize}px;
    justify-content: center;
    text-align: center;
`


const RatingOptionText = styled.text`
    justify-content: center;
    text-align: center;
    bottom: 0;
    font-size: 80%;

`
