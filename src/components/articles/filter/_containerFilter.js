import React from 'react';
import {connect} from 'react-redux';
import {FilterBox} from './FilterBox';
import * as actionTypes from '../../../store/actionTypes';

class FilterContainer extends React.Component {
  render () {
    return (
      <FilterBox {...this.props}/>
    );
  }
}


const mapStateToProps = state => {
  return {
  };
};


const mapDispatchToProps = dispatch => {
  return {
    submitFilter: (values) => dispatch({type: actionTypes.SUBMIT_FILTER, values}),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterContainer);
