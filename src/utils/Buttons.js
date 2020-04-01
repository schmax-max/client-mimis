import React from 'react';
import styled from 'styled-components';
import {FiChevronsRight} from 'react-icons/fi';
import {MdOpenInNew} from 'react-icons/md';

export const RoundButton = props => (
    <CircleDiv outerColor={props.outerColor} totalSize={props.totalSize}>
        <ButtonDiv innerColor={props.innerColor}>
            {props.icon}
        </ButtonDiv>
    </CircleDiv>
)

const CircleDiv = styled.div`
    background: ${props => props.outerColor};
    border-radius: 50%;
    width: ${props => props.totalSize};
    height: ${props => props.totalSize};
`

const ButtonDiv = styled.text`
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${props => props.innerColor};
`



export class SectionButton extends React.Component {
  shouldComponentUpdate(nextProps, nextState){
    return (nextProps.bogusPropToPreventUpdate !== this.props.bogusPropToPreventUpdate)
  }

  render () {
    return (
      <div>
          <FiChevronsRight/>
      </div>
    )
  }
}

export const MoreButtonNumber = (props) => (
  <MoreDiv>
      <MoreText/>
          {Math.max(0, props.sectionCount - 3)} more
      <MoreText/>
      <SectionButton/>
  </MoreDiv>
)

export const MoreButtonPlain = (props) => (
  <MoreDiv>
      <MoreText/>
          {props.text}
      <MoreText/>
      <SectionButton/>
  </MoreDiv>
)

export const LinkButton = (props) => (
  <LinkDiv onClick={() => window.open(props.link)}>
    <MdOpenInNew/>
  </LinkDiv>
)


const MoreText = styled.div`
    margin-right: 0.2rem;
`

const MoreDiv = styled.div`
    text-align: right;
    display: flex;
    justify-content: space-between;
    font-size: 70%;
    margin-top: 0.5rem;
    float: right;
`

const LinkDiv = styled.div`
    
`
