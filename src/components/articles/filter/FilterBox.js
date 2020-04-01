import React from 'react'
import {Formik, Form} from 'formik'
import styled from 'styled-components'
import {sizeCutoff} from "../../../utils/constants";

import {
  // sizeCutoff,
  color} from "../../../utils/constants"
import {BlueBox} from "../../../utils/BasicBoxes"
import {TimeOptions} from "./TimeOptions"
import {SourceOptions} from "./SourceOptions"
import {FilterButton} from "./FilterButton"

// style={{width: "90%"}}
export const FilterBox = (props) => (

  <BlueBox>
    <Formik
      initialValues={{ minReadingTime: "3", maxReadingTime: "90" }}
      onSubmit={(values) => { return props.submitFilter(values)}}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
      }) => (
        <Form style={formStyle}>
          <GroupingDivTime>
            <GroupLabelDiv>Filter by reading time</GroupLabelDiv>
            <TimeOptions/>
          </GroupingDivTime>
          <GroupingDivSource>
            <GroupLabelDiv>Filter by source</GroupLabelDiv>
            <SourceOptions/>
          </GroupingDivSource>
          <FilterButton/>
        </Form>
      )}
    </Formik>
  </BlueBox>
);


// <Wrapper>
// </Wrapper>

// const Wrapper = styled.div`
//   @media (max-width: ${sizeCutoff.lowerPhone}) {
//     display: none;
//   }
// `

const formStyle = {
  display: 'flex',
  flexDirection: 'row',
  color: color.primaryColor,
  justifyContent: 'space-around',
  alignSelf: 'center',
  height: '100%',
  width: '80%',
  flexWrap: 'wrap',
}



const GroupingDivTime = styled.div`
  display: flex;
  align-self: center;
  flex-direction: column;
`

const GroupingDivSource = styled.div`
  display: flex;
  align-self: center;
  flex-direction: column;
  @media (max-width: ${sizeCutoff.lowerPhone}) {
      display: none;
  }
`

const GroupLabelDiv = styled.div`
  display: flex;
  font-family: Noto Sans Bold;
  font-weight: bold;
  flex: flex-grow;
  flex-direction: column;
  padding-top: 10px;
  padding-bottom: 10px;
`
