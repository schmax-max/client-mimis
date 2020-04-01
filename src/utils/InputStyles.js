// import React from "react"
// import styled from 'styled-components';
import {color} from "./constants";



export const inputStyleLight = {
  'boxShadow:': 'none',
  'WebkitBoxShadow': 'none',
  'border': 'none',
  'outline': 'none',
  'background': color.white,
  'textAlign': "center",
  'borderRadius': "20px",
  'height': "40px",
  'width': '100%',
  'color': color.primaryColor,
  '::placeholder': {
    color: color.primaryColor,
  }
}

export const inputStyleDark = {
  'boxShadow': 'none',
  'WebkitBoxShadow': 'none',
  'border': 'none',
  'outline': 'none',
  'background': color.primaryColor,
  'textAlign': "center",
  'verticalAlign': "middle",
  'borderRadius': "20px",
  'height': "40px",
  'width': '100%',
  'color': color.white,
  '::placeholder': {
    color: color.primaryColor,
  }
}

export const sourceFieldStyle = {
  'boxShadow': 'none',
  'WebkitBoxShadow': 'none',
  'border': 'none',
  'outline': color.primaryColor,
  color: color.primaryColor,
  right: '0px',
  marginLeft: '30px',
  textAlign: 'center',
  borderRadius: '20px',
  height: '30px',
  width: '200px',
  ':focus': {
    outline: 'none !important'
  }
}

export const optionsFieldStyle = {
  'boxShadow': 'none',
  'WebkitBoxShadow': 'none',
  'border': 'none',
  'outline': color.primaryColor,
  color: color.primaryColor,
  width: '80px',
  height: '30px',
  right: '0px',
  textAlign: 'center',
  borderRadius: '20px',
}
