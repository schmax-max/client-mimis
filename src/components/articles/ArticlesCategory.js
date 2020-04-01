import React from 'react';
import {ArticlesRow} from './ArticlesRow';
import {ArticlesLoader} from './ArticlesLoader';

export class ArticlesCategory extends React.Component {
  // shouldComponentUpdate(nextProps, nextState){
  //   return (nextProps.articles !== this.props.articles)
  // }

  render () {
    
    // console.log({j: this.props.articles})
    return (
      <>
        {Object.keys(this.props.articles).map((sectionLabel, index) => {
          const articlesPerRow = this.props.articles[sectionLabel];
          if (articlesPerRow.length > 0) {
            return <ArticlesRow key={index} sectionLabel={sectionLabel} articlesPerRow={articlesPerRow} {...this.props}/>
          } else {
            return <div/>
          }
        })}
      </>
    )

  }
}




