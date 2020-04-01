import React from 'react';
import styled from 'styled-components';

import {ArticlesRow} from '../articles/ArticlesRow';
import {NarrowWrapper, CategoryTitle, SectionTitleStyle} from '../../utils/CommonItems';
import {history} from '../../../helpers';
// import {widthLimits, sizeCutoff} from "../../utils/constants";
import {MoreButtonPlain} from "../../utils/Buttons";
import {ExploreTitle} from '../articles/ExploreTitle';

export class ArticlesSearch extends React.Component {
  shouldComponentUpdate (nextProps, nextState) {
    const cond1 = (this.props.searchInput !== nextProps.searchInput)
    const cond2 = (this.props.articles !== nextProps.articles)
    // const cond3 = (this.props.selectionMode !== nextProps.selectionMode)

    return (cond1 || cond2)
  }


  render () {
    let {articles} = this.props
    let sectionTitle
    let body
    // console.log({articles})

    if (articles) {
      if (articles.length > 0) {
        sectionTitle = <ExploreTitle label={this.props.searchInput} type={'search'}/>
        // articles = articles.slice(0, 3)
        body = <ArticlesRow articlesPerRow={articles}/>
      }
    }

    return (
      <div>
        {sectionTitle}
        {body}
      </div>
    )
  }
}

// clickFunction () {
//   history.push(`/search?${this.props.searchInput}`)
// }

// <ClickWrapper onClick={() => this.clickFunction()}>
//   <SectionTitleStyle>
//     <MoreButtonPlain text={'more'}/>
//   </SectionTitleStyle>
// </ClickWrapper>
//
// const ClickWrapper = styled.div `
//   cursor: pointer;
// `
