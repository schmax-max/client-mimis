import React from "react"
import styled from "styled-components"
import { color, sizeCutoff, widthLimits } from "./constants"

export const SmallDivider = props => <DividerStyle height={"2rem"} />

export const DividerWithLine = props => (
  <div>
    <BigDivider />
    <BlueLine />
    <BigDivider />
  </div>
)

export const BigDivider = props => <DividerStyle height={"5rem"} />

const DividerStyle = styled.div`
  width: 100%;
  height: ${props => props.height};
  @media (max-width: ${sizeCutoff.lowerPhone}) {
    height: ${props => props.height / 2};
  }
`

export const CategoryTitle = props => (
  <CategoryTitleStyle>
    {props.categoryTitleText.replace(/_/g, " ")}
  </CategoryTitleStyle>
)

const CategoryTitleStyle = styled.div`
    padding-top: 2rem;
    font-family: Noto Sans;
    text-align: center;
    /* border-bottom: 4px solid ${color.sectionColor}; */
    font-size: 250%;
    color: ${color.sectionColor};
    a:link, a:visited, a:active {
        color: ${color.sectionColor} !important;
    };
    a:hover {
        text-decoration: none !important;
        cursor: pointer;
    };
    @media (max-width: ${sizeCutoff.lowerPhone}) {
        font-size: 150%;
    }
`

export const BannerTitle = ({ text }) => (
  <BannerTitleDiv>{text.replace(/_/g, " ")}</BannerTitleDiv>
)

export const BannerTitleDiv = styled.div`
  padding-top: 0.4rem;
  padding-bottom: 0.4rem;
  font-family: Noto Sans;
  text-align: center;
  font-size: 140%;
  background: ${color.backgroundColor};
  color: ${color.sectionColor};
  @media (max-width: ${sizeCutoff.lowerPhone}) {
    font-size: 160%;
  }
`

export const BlueLine = styled.div`
  padding-top: 0.4rem;
  padding-bottom: 0.4rem;
  background: ${color.sectionColor};
  width: 100%;
`

export const NarrowWrapper = styled.div`
  margin-left: 6%;
  margin-right: 6%;
  height: 100%;
  @media (max-width: ${sizeCutoff.lowerTablet}) {
    margin-left: 1%;
    margin-right: 1%;
  }
  @media (max-width: ${sizeCutoff.lowerPhone}) {
    margin-left: 1%;
    margin-right: 1%;
  }
`

export const NarrowTextWrap = styled.div`
  width: 60%;
  align-self: center;
  @media (max-width: ${sizeCutoff.lowerTablet}) {
    width: 80%;
  }
  @media (max-width: ${sizeCutoff.lowerPhone}) {
    width: 100%;
  }
`

export const Backdrop = styled.div`
  position: fixed;
  width: 100%;
  height: 150%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.3);
  z-index: 500;
`

export const SectionTitleStyle = styled.div`
  border-bottom: 4px solid ${color.sectionColor};
  font-size: 120%;
  height: 30px;
  overflow: hidden;
  width: 100%;
  display: flex;
  justify-content: space-between;
  font-family: Noto Sans;
  color: #036;
  a:link,
  a:visited,
  a:active {
    color: #036 !important;
  }
  a:hover {
    text-decoration: none !important;
    cursor: pointer;
  }
`

export const SectionTitleStyleEmpty = styled.div`
    margin-top: 2rem;
    font-size: 150%;
    height: 40px
    width: 100%;
    font-family: Noto Sans;
    color: ${color.sectionColor};
    a:link, a:visited, a:active {
        color: ${color.sectionColor} !important;
    }
    a:hover {
        text-decoration: none !important;
        cursor: pointer;
    }
`

export const ArticleCardWrap = styled.div`
  max-width: ${widthLimits.maxCardDesktop};
  min-width: ${widthLimits.maxCardDesktop};
  @media (max-width: ${sizeCutoff.lowerTablet}) {
    max-width: ${widthLimits.maxCardTablet};
    min-width: ${widthLimits.minCardTablet};
  }
  @media (max-width: ${sizeCutoff.lowerPhone}) {
    max-width: ${widthLimits.maxCardPhone};
    min-width: ${widthLimits.maxCardPhone};
  }
`
