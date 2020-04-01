import React from 'react';
import styled from 'styled-components';
import moment from 'moment';
import {Input} from 'reactstrap';

// import {color} from "../../../utils/constants";

// import {history} from '../../../../helpers';
import {inputStyleLight, inputStyleDark} from "../../../utils/InputStyles";


export class BoxRecoInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recoInput: ''
    }

    this.handleInputArea = this.handleInputArea.bind(this)
    this.handleInputSubmit = this.handleInputSubmit.bind(this)
  }

  // shouldComponentUpdate (prevProps, prevState) {
  //   return (
  //     this.props.searchInput !== prevProps.searchInput
  //     || this.state.recoInput !== prevState.recoInput
  //   )
  // }

  handleInputArea (e) {
    let recoInput = e.target.value
    this.setState({ recoInput })
    if (e.charCode === 13) {
      this.handleInputSubmit()
    }
  }

  handleInputSubmit () {
    const articleUrl = this.state.recoInput
    const {category, allocation} = this.props
    const currentTime = moment().toISOString()
    // console.log({currentTime})
    const articleContext = {
      category,
      allocation,
      currentTime
    }

    // console.log({articleContext})
    this.props.submitArticleRecommendation (articleUrl, articleContext)
  }

  render () {
    return (
      <InputArea>
        <InputAreaDiv>
          <Input
            style={inputStyleLight}
            onKeyPress={this.handleInputArea}
            onChange={this.handleInputArea}
            value={this.state.recoInput}
            type="reco"
            name="reco"
            id="reco"
            placeholder="post a url"
          />
        </InputAreaDiv>
        <BoxRecoArea>
          <BoxRecoButton onClick={() => this.handleInputSubmit()} style={inputStyleDark}>
            submit
          </BoxRecoButton>
        </BoxRecoArea>
      </InputArea>
    )
  }
}
const BoxRecoArea = styled.div`
  width: 30%;
  height: 100%;
  text-align: center;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
  display: flex;
  flex-direction: row;
`

const BoxRecoButton = styled.button`
  height: 100%;
  width: 100%;
  background: yellow;
  vertical-align: middle;
`


const InputArea = styled.div`
  display: flex;
  flex-direction: row;
  align-self: center;
  height: 40px;
  width: 60%;
  text-align: center;
`



const InputAreaDiv = styled.div`
  width: 100%;
`
