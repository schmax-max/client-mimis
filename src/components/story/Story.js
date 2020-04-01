import React from "react"
import Box from "./box/Box"
import Text from "./text/Text"
import Profile from "./profile/Profile"
import Newsletter from "./newsletter/Newsletter"
import { infoBox } from "./infoBox"
import { infoText } from "./infoText"
import "./story.css"

export const Intro = () => (
  <>
    <Box props={infoBox["opening"]} />
    <div className="smallDivider" />
    <NewsletterBox />
    <Box props={infoBox["vision"]} />
    <Seperator />
    <Box props={infoBox["editor"]} />
    <Seperator />
    <Box props={infoBox["people"]} />
    <div className="smallDivider" />
    <NewsletterBox />
  </>
)

export const Algorithm = () => (
  <>
    <Title title={"THE GLOBAL EDITOR"} />
    <Text text={infoText["algorithm"]} />
    <NewsletterBox />
  </>
)

export const Team = () => (
  <>
    <Title title={"EDITORIAL BOARD"} />
    <Text text={infoText["team"]} />
    <Profile />
    <NewsletterBox />
  </>
)

export const Vision = props => (
  <>
    <Title title={"OUR VISION"} />
    <Text text={infoText["vision"]} />
    <NewsletterBox />
  </>
)

export const Legal = props => (
  <>
    <Title title={"LEGAL MATTERS"} />
    <Text text={infoText["legal"]} />
    <NewsletterBox />
  </>
)

const Title = ({ title }) => (
  <>
    <div className="title">{title}</div>
  </>
)

const NewsletterBox = () => (
  <>
    <Title title={"STAY IN TOUCH"} />
    <div className="smallDivider" />
    <Newsletter />
    <div className="bigDivider" />
  </>
)

const Seperator = () => (
  <>
    <div className="smallDivider" />
    <div className="blueLine" />
    <div className="smallDivider" />
  </>
)
