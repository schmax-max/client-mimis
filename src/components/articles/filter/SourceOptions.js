import React from 'react'
import styled from 'styled-components'
import {Field} from 'formik'
import {color} from "../../../utils/constants"
import {sourceFieldStyle} from "../../../utils/InputStyles";

export const SourceOptions = (props) => (
  <Wrapper>
    <SourceFilterDiv>
      <SourceLabelDiv>publisher:</SourceLabelDiv>
      <Field name="publisher" type="text" placeholder="..." style={sourceFieldStyle}/>
    </SourceFilterDiv>
    <SourceFilterDiv>
      <SourceLabelDiv>author:</SourceLabelDiv>
      <Field name="author" type="text" placeholder="..." style={sourceFieldStyle}/>
    </SourceFilterDiv>
  </Wrapper>
)

const Wrapper = styled.div`
  align-self: center;
`


const SourceFilterDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 5px;
`



const SourceLabelDiv = styled.div`
  color: ${color.primaryColor};
`
