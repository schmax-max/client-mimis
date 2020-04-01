import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { SectionTitleStyle } from "../../utils/CommonItems"
import { MoreButtonPlain } from "../../utils/Buttons"
// import {color} from "../../../utils/constants";

export class BoxSectionTitle extends React.Component {
  render() {
    let sectionText = ``
    const { sectionLabel, category } = this.props
    if (sectionLabel) {
      sectionText = `# ${sectionLabel.replace(/_/g, " ")}`
    }
    let link = "/" + category + "/" + sectionLabel
    if (category === "home") {
      link = "/" + sectionLabel
    }

    return (
      <SectionTitleStyle>
        <Link to={link} style={{ width: "100%" }}>
          <TitleInputDiv>
            {sectionText}
            <MoreButtonPlain text={"more"} />
          </TitleInputDiv>
        </Link>
      </SectionTitleStyle>
    )
  }
}

//

const TitleInputDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`
