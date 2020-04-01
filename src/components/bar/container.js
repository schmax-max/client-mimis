import React from 'react';
import {connect} from 'react-redux';
import Bar from './Bar';
import * as actionTypes from '../../store/actionTypes';

const BarContainer = (props) => {
  return (
    <>
      <Bar {...props}/>
    </>
  );
}

const mapStateToProps = state => {
  return {
    relevantData: state.articles.relevantData,
    showPrimaryMenu: state.visibility.showPrimaryMenu,
    showSecondaryMenu: state.visibility.showSecondaryMenu,
  };
};


const mapDispatchToProps = dispatch => {
  return {

  }
};

export default connect(mapStateToProps, mapDispatchToProps)(BarContainer);
