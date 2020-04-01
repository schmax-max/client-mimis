import * as actionTypes from '../../store/actionTypes';

import React from 'react';
import {connect} from 'react-redux';
import {fetchArticlesIfNeeded} from '../../store/apis/fetchArticles';

import {Articles} from './Articles';
import {ArticlesLoader} from './ArticlesLoader';

class ArticlesContainer extends React.Component {
  render () {
    if (this.props.showLoadingSpinner === true) {
      return (
        <ArticlesLoader showLoadingSpinner={this.props.showLoadingSpinner}/>
      )
    } else {
      return (
        <Articles {...this.props}/>
      );
    }
  }
}


const mapStateToProps = state => {
  return {
    showLoadingSpinner: state.visibility.showLoadingSpinner,
    receivedData: state.articles.receivedData,
  };
};


const mapDispatchToProps = dispatch => {
  return {
    showMoreArticles: () => dispatch({type: actionTypes.SHOW_MORE_ARTICLES}),
    fetchArticlesIfNeeded: (input) => dispatch(fetchArticlesIfNeeded(input)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ArticlesContainer);
