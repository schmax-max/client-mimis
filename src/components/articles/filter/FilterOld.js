  import React from 'react'
import {Formik, Field, Form} from 'formik'
import styled from 'styled-components'
import {FaFilter} from 'react-icons/fa'


import {sizeCutoff, color} from "../../../utils/constants"


const Filter = (props) => (
  <EntireBar>
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
        /* and other goodies */
      }) => (
        <Form style={formStyle}>
          <TextFilterDiv>

            <Field name="publisher" type="text" placeholder="publisher" style={textFieldStyle}/>
          </TextFilterDiv>
          <TextFilterDiv>

            <Field name="author" type="text" placeholder="author" style={textFieldStyle}/>
          </TextFilterDiv>
          <OptionFilterDiv>
            <LabelDiv>min</LabelDiv>
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
          </OptionFilterDiv>
          <OptionFilterDiv>
            <LabelDiv>max</LabelDiv>
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
          </OptionFilterDiv>
          <button type="submit" style={buttonStyle}>
            <FaFilter/>
            apply filter
          </button>
        </Form>
      )}
    </Formik>
  </EntireBar>
);

export default Filter;

const buttonStyle = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
  maxWidth: '120px',
  color: color.primaryColor
}

const textFieldStyle = {
  width: '100%',
  minWidth: '80px',
  color: color.primaryColor,
  ':focus': {
    outline: 'none !important'
  }
}

const optionsFieldStyle = {
  color: color.primaryColor,
}


const EntireBar = styled.div`
  align-items: center;
  height: 40px;
  justify-content: space-between;
  background: ${color.primaryColor};
  @media (max-width: ${sizeCutoff.lowerPhone}) {
    display: none;
  }

`


const formStyle = {
  display: 'flex',
  justifyContent: 'space-around',
  width: '98%',
  paddingTop: '6px',
  alignItems: 'center'
}

// const NonButtonDiv = styled.div`
//     display: flex;
//     flex-direction: row;
//     width: 100%;
//     /* justify-content: flex-end; */
// `


const TextFilterDiv = styled.div`
  display: flex;
  flex: flex-grow;
  flex-direction: row;
  padding-right: 0.6rem;
`

const OptionFilterDiv = styled.div`
  display: flex;
  flex-direction: row;
  padding-right: 0.6rem;

`


const LabelDiv = styled.div`
  padding-right: 0.6rem;
  width: auto;
  color: ${color.fontHeaderColor};
`

// const FieldDiv = styled.div`
//     color: ${color.fontHeaderColor};
// `

// onSubmit={(values, { setSubmitting }) => {
//   setTimeout(() => {
//     alert(JSON.stringify(values, null, 2));
//     setSubmitting(false);
//   }, 400);
// }}

// <LabelDiv>publisher:</LabelDiv>
// <LabelDiv>author:</LabelDiv>
