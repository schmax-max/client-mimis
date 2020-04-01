import React from 'react'
import styled from 'styled-components'
import {Field} from 'formik'
import {color} from "../../../utils/constants"

import {optionsFieldStyle} from "../../../utils/InputStyles";

export const TimeOptions = (props) => (
  <div>
    <TimeOptionDiv>
      <TimeLabelDiv>from:</TimeLabelDiv>
      <Field name="minReadingTime" component="select" style={optionsFieldStyle}>
        <option value="3">3 min</option>
        <option value="6">6 min</option>
        <option value="9">9 min</option>
        <option value="12">12 min</option>
        <option value="15">15 min</option>
        <option value="25">25 min</option>
        <option value="40">40 min</option>
        <option value="60">60 min</option>
      </Field>
    </TimeOptionDiv>
    <TimeOptionDiv>
      <TimeLabelDiv>to:</TimeLabelDiv>
      <Field name="maxReadingTime" component="select" style={optionsFieldStyle}>
        <option value="90">90 min</option>
        <option value="60">60 min</option>
        <option value="40">40 min</option>
        <option value="25">25 min</option>
        <option value="15">15 min</option>
        <option value="12">12 min</option>
        <option value="9">9 min</option>
        <option value="6">6 min</option>
      </Field>
    </TimeOptionDiv>
  </div>
)

const TimeOptionDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 5px;

`


const TimeLabelDiv = styled.div`
  color: ${color.primaryColor};
`


// recencyTexts: [
//   'last 3 days',
//   'last week',
//   'last month',
//   'last 3 months',
//   'last 6 months',
//   'last year',
//   'any time',
// ],
// recencyValues: [
//   3,
//   7,
//   30,
//   90,
//   180,
//   365,
//   100000,
// ],
