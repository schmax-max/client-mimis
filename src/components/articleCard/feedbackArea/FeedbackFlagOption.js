import React from 'react';
import styled from 'styled-components';

export class FeedbackFlagOption extends React.Component {
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
    if (prevProps.articleFlag !== this.props.articleFlag) {
      if (
        this.props.articleFlag === this.props.feedbackOptionText
      ) {
        this.setState({opacity: 1})
      } else {
        this.setState({opacity: 0.2})
      }
    }
  }

  clickAction () {
    this.props.changeFlag(this.props.feedbackOptionText)
  }

  // onClick={this.props.changeFlag(this.props.feedbackOptionText)

  render () {
    return (
      <FlagOption opacity={this.state.opacity} onClick={this.clickAction}>

        <FlagOptionText>
          {this.props.feedbackOptionText}
        </FlagOptionText>
      </FlagOption>
    )
  }
}

// <FlagOptionIcon fontSize={this.props.fontSize}>
//   {this.props.feedbackOptionIcon}
// </FlagOptionIcon>


const FlagOption = styled.div`
  opacity: ${props => props.opacity};
  cursor: pointer;
  width: 100%;
  height: 25px;
  display: flex;
  flex-direction: row;
  justify-content: center;
`

// const FlagOptionIcon = styled.div`
//     /* width: 25px; */
//     font-size: ${props => props.fontSize}px;
//     justify-content: center;
//     text-align: center;
// `


const FlagOptionText = styled.text`
    justify-content: center;
    text-align: center;
    bottom: 0;
    font-size: 80%;

`
