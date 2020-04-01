import React from 'react';
import styled from 'styled-components';

import {CategoryTitle, SmallDivider} from '../../../utils/CommonItems';
import {BoxRecoInput} from './BoxRecoInput';

export class BoxReco extends React.Component {
  render () {
    return (
      <BoxRecoDiv>
        <SmallDivider/>
        <CategoryTitle categoryTitleText={'RECOMMEND A LINK'}/>
        <SmallDivider/>
        <BoxRecoInput {...this.props}/>
        <SmallDivider/>
      </BoxRecoDiv>
    )
  }
}

const BoxRecoDiv = styled.div `
  display: flex;
  flex-direction: column;
  width: 100%;
`
