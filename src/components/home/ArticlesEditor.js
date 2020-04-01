import React from 'react';
import styled from 'styled-components';

import {ArticlesRow} from '../articles/ArticlesRow';
import {BannerTitle, SectionTitleStyle} from '../../utils/CommonItems';
import {history} from '../../../helpers';
// import {widthLimits, sizeCutoff} from "../../utils/constants";
import {MoreButtonPlain} from "../../utils/Buttons";


export class ArticlesTrending extends React.Component {
  shouldComponentUpdate (nextProps, nextState) {
      return (this.props.articles !== nextProps.articles)
  }

  render () {
    let sectionTitle
    let body
    let {articles} = this.props
    // let {broadArticles} = this.props.relevantData

    // console.log({articles})
    if (articles) {
      if (articles.length > 0) {
        sectionTitle =
        <ClickWrapper onClick={() => history.push(`/trending`)}>
          <SectionTitleStyle>
            <MoreButtonPlain text={'other trending topics'}/>
          </SectionTitleStyle>
        </ClickWrapper>

        body = articles.map((item, i) => {
            return <ArticlesRow key={i} articlesPerRow={item}/>
        })
      }
    }

    return (
      <div>
        <BannerTitle text={`TOP PICKS BY THE EDITORS`}/>
        {body}
        {sectionTitle}
      </div>
    )
  }
}

const ClickWrapper = styled.div `
  cursor: pointer;
`
