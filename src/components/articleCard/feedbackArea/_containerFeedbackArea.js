import React from 'react';
import {connect} from 'react-redux';

import {submitArticleFeedback, submitArticleRecommendation} from '../../../store/apis/submitFeedback';
import {FeedbackArea} from './FeedbackArea';

class FeedbackAreaContainer extends React.Component {
  render () {
    return (
      <FeedbackArea
        {...this.props}
      />
    );
  }
}


const mapStateToProps = state => {
  return {
  };
};


const mapDispatchToProps = dispatch => {
  return {
    submitArticleFeedback: (data) => dispatch(submitArticleFeedback(data)),
    submitArticleRecommendation: (articleUrl, articleContext) => dispatch(submitArticleRecommendation(articleUrl, articleContext)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(FeedbackAreaContainer);
