import React from 'react'
import {css} from '@emotion/core'
import {RingLoader} from 'react-spinners'
import {color} from "../../utils/constants";
import "./articles.css";

const override = css`
    display: block;
    margin: 0 auto;
    margin-top: 10rem;
`;

export class ArticlesLoader extends React.Component {
  shouldComponentUpdate(nextProps, nextState){
    return (nextProps.showLoadingSpinner !== this.props.showLoadingSpinner)
  }
  render () {
    return (
      <div className="loader">
        <RingLoader
          css={override}
          sizeUnit={"px"}
          size={150}
          color={color.sectionColor}
          loading={this.props.showLoadingSpinner}
        />
      </div>
    )
  }
}
