import React from 'react';
import styled from 'styled-components';

import {SmallDivider} from '../../utils/CommonItems';
// import {BoxReco} from './reco/BoxReco';
import {ArticlesRow} from './ArticlesRow';
// import {ArticlesMoreButton} from './ArticlesMoreButton';

export class ArticlesAllocation extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showMoreButton: false
    }
  }
  
  shouldComponentUpdate(nextProps, nextState){
    return (nextProps.articles !== this.props.articles)
  }


  render () {
    let {articles} = this.props
    if (articles && articles.length === 0) {
      return (
        <NoArticleText>
          Apologies, Mimis couldn't find you any articles on this topic
        </NoArticleText>
      )
    } else {
      articles = batchArticlesIntoRows (articles)
      return (
        <>
          {articles
            .filter(articlesPerRow => articlesPerRow.length > 0)
            .map((articlesPerRow, index) => {
              return (
                <ArticlesRow
                  key={index}
                  articlesPerRow={articlesPerRow}
                  {...this.props}
                />
              )
          })}
          <SmallDivider/>
        </>
      )
    }
  }
}

// {/* <ArticlesMoreButton {...this.props}/>
// <BoxReco
//   submitArticleRecommendation={this.props.submitArticleRecommendation}
//   category={this.props.category}
//   allocation={this.props.allocation}
//   /> */}





function batchArticlesIntoRows (articles) {
  let batchedArticles = []
  const articlesPerBatch = 3
  for (let i = 0; i < articles.length; i+= articlesPerBatch) {
      let thisBatch = []
      for (let j = 0; j < articlesPerBatch; j++) {
        if (articles[i+j]) thisBatch.push(articles[i+j])
      }
      batchedArticles.push(thisBatch)
  }
  return batchedArticles
}


// ArticlesAllocation.propTypes = {
//   relevantCounts: PropTypes.array.isRequired
// };

const NoArticleText = styled.div`
  position: relative;
  font-size: 120%;
  padding-top: 2rem;
  color: #036;
`
