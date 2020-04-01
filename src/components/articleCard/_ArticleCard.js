import React from "react"
import styled from "styled-components"
import moment from "moment"

// import {Card} from 'reactstrap';
import { color, sizeCutoff } from "../../utils/constants"
import { ArticleCardTop } from "./ArticleCardTop"
import { ArticleCardBottom } from "./ArticleCardBottom"

export class ArticleCard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      publicationDateText: "",
      ageInDays: 0,
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    const c1 = this.props.info.content_url !== nextProps.info.content_url
    const c2 = this.state.publicationDateText !== nextState.publicationDateText

    return c1 || c2
  }

  componentDidMount() {
    this.basicFunction()
  }

  componentDidUpdate() {
    this.basicFunction()
  }

  basicFunction = () => {
    const readerUrl = getReaderUrl(this.props.info)
    const { publicationDateText, ageInDays } = getPublicationDateText(
      this.props.info
    )

    this.setState({
      publicationDateText,
      ageInDays,
      readerUrl,
    })
  }

  handleClickOnArticleCard = () => {
    window.open(this.state.readerUrl)
  }

  render() {
    const { title, image, publisher, content_minutes } = this.props.info
    return (
      <CardStyle cardWidth={this.props.cardWidth}>
        <TopWrapper>
          <ArticleCardTop
            handleClickOnArticleCard={this.handleClickOnArticleCard}
            ageInDays={this.state.ageInDays}
            image={image}
            content_minutes={content_minutes}
            {...this.props}
          />
        </TopWrapper>
        <BottomWrapper>
          <ArticleCardBottom
            handleClickOnArticleCard={this.handleClickOnArticleCard}
            publicationDateText={this.state.publicationDateText}
            title={title}
            publisher={publisher}
          />
        </BottomWrapper>
      </CardStyle>
    )
  }
}

function getReaderUrl({ content_url, amp_url }) {
  if (window.innerWidth < 768 && amp_url) {
    return amp_url
  } else {
    return content_url
  }
}

function getPublicationDateText({ publication_date }) {
  // console.log({publication_date})
  const ageInDays = moment().diff(moment(publication_date), "days")
  const ageInMonths = moment().diff(moment(publication_date), "months")
  const ageInYears = moment().diff(moment(publication_date), "years")

  let publicationDateText = ""
  if (!publication_date) {
    publicationDateText = ``
  } else if (ageInMonths < 1) {
    if (ageInDays < 0) {
      publicationDateText = ``
    } else if (ageInDays === 0) {
      publicationDateText = `today`
    } else if (ageInDays === 1) {
      publicationDateText = `yesterday`
    } else {
      publicationDateText = `${ageInDays} days ago`
    }
  } else if (ageInYears === 1) {
    publicationDateText = `${ageInYears} year ago`
  } else if (ageInYears > 1) {
    publicationDateText = `${ageInYears} years ago`
  } else if (ageInMonths === 1) {
    publicationDateText = `${ageInMonths} month ago`
  } else {
    publicationDateText = `${ageInMonths} months ago`
  }
  return { publicationDateText, ageInDays }
}

// background: linear-gradient(to bottom, ${color.topCard} 0%, ${color.bottomCard} 100%);
const CardStyle = styled.div`
  height: 400px;
  width: 100%;
  display: flex;
  flex-direction: column;
  color: ${color.fontCardColor};

  border: 0px !important;
  background: ${color.bottomCard};

  transition: 0.2s;
  overflow: hidden;
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.3) 0px 0px 88px -6px;
    transform: scale(1.02);
  }
  > a:link {
    color: ${color.topCard};
    opacity: 0.8;
  }
  > a:visited {
    color: ${color.topCard};
    opacity: 0.4;
  }
  > a:hover {
    text-decoration: none;
    opacity: 1;
  }
  @media (max-width: ${sizeCutoff.lowerPhone}) {
    margin-bottom: 3rem;
  }
`
const TopWrapper = styled.div`
  height: 65%;
  width: 100%;
`

const BottomWrapper = styled.div`
  position: relative;
  height: 35%;
  width: 100%;
`
