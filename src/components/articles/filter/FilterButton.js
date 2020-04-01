import React from 'react'
import styled from 'styled-components'
// import {Field} from 'formik'
import {color} from "../../../utils/constants"
import {FaFilter} from 'react-icons/fa'

export const FilterButton = (props) => (
  <Wrapper type="submit">
    <FaFilter size={18}/>
    apply filter
  </Wrapper>
)


const Wrapper = styled.button `
  display: flex;
  flex-direction: row;
  align-items: center;
  align-self: center;
  justify-content: space-between;
  border: none;
  border-radius: 10px;
  height: 50px;
  width: 140px;
  padding-right: 20px;
  padding-left: 20px;
  margin-top: 20px;
  margin-bottom: 20px;
  background: ${color.primaryColor};
  color: ${color.white};
`
