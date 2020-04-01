import React from 'react';
import styled from 'styled-components';
// import {MdMoreVert} from 'react-icons/md';
import {color} from "../../utils/constants";
// import {inputStyleLight} from "../../utils/InputStyles";

export class ArticlesMoreButton extends React.Component {
  render () {
    let more

    if (this.props.showLoadingSpinner === false) {
      more =
      <MoreDiv onClick={() => { return this.props.showMoreArticles() } }>
        load more articles
      </MoreDiv>
    }

    return (
      <WrapperDiv>
        {more}
      </WrapperDiv>
    )
  }
}



const WrapperDiv = styled.div`
    display: flex;
    flex: 1;
    justify-content: center !important;
    justify-content: center;
    flex-direction: column;
    text-align: center !important;
    background: ${color.bottomCard};
    color: ${color.fontCardColor};
    height: 50px;
    width: 100%;
    cursor: pointer;

`

const MoreDiv = styled.text`
    font-size: 120%;
    font-family: Noto Sans;
`
