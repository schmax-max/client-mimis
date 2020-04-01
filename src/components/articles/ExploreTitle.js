import React from 'react';
import styled from 'styled-components';
import {Link} from 'gatsby'

import {SectionTitleStyle} from '../../utils/CommonItems';
import {MoreButtonPlain} from "../../utils/Buttons";



export const ExploreTitle = (props) => {
  return (
    <Link to={`/${props.label}`}>
      <SectionTitleStyle>
        {props.label && props.label.replace(/_/g, " ")}
        <MoreButtonPlain text={'more'}/>
      </SectionTitleStyle>
    </Link>
  )

}

const TitleWrapper = styled.div `
    cursor: pointer;
    width: 100%;
`
